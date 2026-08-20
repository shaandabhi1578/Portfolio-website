import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { toggleSoundMute, isSoundMuted, playClickSound } from '../utils/soundEffects';
import { Sun, Moon, FileText, Menu, X, Terminal, Volume2, VolumeX, PlayCircle } from 'lucide-react';

export default function Navbar({ activeTheme, onThemeChange, onOpenResume, onReplayIntro }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [muted, setMuted] = useState(isSoundMuted());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const isNowMuted = toggleSoundMute();
    setMuted(isNowMuted);
    if (!isNowMuted) playClickSound();
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Music C++', href: '#scale-detector-demo' },
    { name: 'Projects', href: '#projects' },
    { name: 'DSA Sandbox', href: '#dsa-visualizer' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Terminal', href: '#terminal' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? '10px 0' : '16px 0',
        transition: 'all 0.3s ease',
        background: scrolled ? 'var(--bg-card)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-glass)' : '1px solid transparent'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo & Avatar */}
        <a
          href="#hero"
          onClick={playClickSound}
          style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}
          data-tooltip="Back to Top"
        >
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '2px solid var(--accent-sand)',
              boxShadow: '0 0 15px rgba(113, 0, 20, 0.5)',
              flexShrink: 0
            }}
          >
            <img src={PERSONAL_INFO.photo} alt={PERSONAL_INFO.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.2rem', color: 'var(--soft-pearl)' }}>
              Shaan<span className="gradient-text">.Dabhi</span>
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '22px' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={playClickSound}
              data-tooltip={`Jump to ${link.name}`}
              style={{
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontSize: '0.88rem',
                fontWeight: 600,
                transition: 'color 0.25s ease'
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--accent-sand)')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Action Tools */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Replay Intro Button */}
          <button
            onClick={() => { playClickSound(); onReplayIntro(); }}
            className="glass-pill"
            data-tooltip="Replay Intro Splash Animation"
            style={{ cursor: 'pointer' }}
          >
            <PlayCircle size={15} color="var(--accent-sand)" />
          </button>

          {/* Sound Synthesizer Toggle */}
          <button
            onClick={handleSoundToggle}
            className="glass-pill"
            data-tooltip={muted ? 'Enable Cyber UI Sounds' : 'Mute UI Sounds'}
            style={{ cursor: 'pointer', background: !muted ? 'rgba(113, 0, 20, 0.3)' : 'var(--bg-glass)' }}
          >
            {muted ? <VolumeX size={15} color="var(--text-muted)" /> : <Volume2 size={15} color="var(--accent-sand)" />}
          </button>

          {/* Theme Palette Switcher */}
          <select
            value={activeTheme}
            onChange={(e) => { playClickSound(); onThemeChange(e.target.value); }}
            data-tooltip="Switch Theme Palette"
            style={{
              background: 'var(--bg-card)',
              color: 'var(--soft-pearl)',
              border: '1px solid var(--border-glass)',
              borderRadius: 'var(--radius-full)',
              padding: '6px 12px',
              fontSize: '0.82rem',
              fontWeight: 600,
              cursor: 'pointer',
              outline: 'none'
            }}
          >
            <option value="cyber">🍷 Crimson Depth</option>
            <option value="pearl">🐚 Soft Pearl</option>
          </select>

          {/* Resume Modal Trigger */}
          <button
            onClick={() => { playClickSound(); onOpenResume(); }}
            className="btn btn-secondary btn-sm"
            data-tooltip="View & Download Shaan's Resume"
            style={{ padding: '7px 14px' }}
          >
            <FileText size={15} />
            <span>Resume</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => { playClickSound(); setMobileMenuOpen(!mobileMenuOpen); }}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: 'var(--soft-pearl)',
              cursor: 'pointer'
            }}
            className="mobile-toggle"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="glass-panel"
          style={{
            margin: '12px 16px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => { playClickSound(); setMobileMenuOpen(false); }}
              style={{
                color: 'var(--soft-pearl)',
                textDecoration: 'none',
                fontSize: '1.05rem',
                fontWeight: 600
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
