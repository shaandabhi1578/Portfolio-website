import React from 'react';
import { Code2, ArrowUp, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-glass)',
        padding: '50px 0 30px 0',
        background: 'var(--bg-secondary)',
        position: 'relative'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
            marginBottom: '30px'
          }}
        >
          {/* Logo & Info */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: 'var(--gradient-hero)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff'
              }}
            >
              <Code2 size={20} />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                Shaan<span className="gradient-text">.Dabhi</span>
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{PERSONAL_INFO.title}</div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', fontSize: '0.88rem' }}>
            <a href="#hero" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>About</a>
            <a href="#projects" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Projects</a>
            <a href="#terminal" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Terminal</a>
            <a href="#skills" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Skills</a>
            <a href="#contact" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Contact</a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="btn btn-secondary btn-icon"
            title="Back to Top"
            style={{ width: '38px', height: '38px' }}
          >
            <ArrowUp size={16} />
          </button>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid var(--border-glass)', paddingTop: '24px', textAlign: 'center' }}>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
            <span>© {new Date().getFullYear()} Shaan Dabhi. Designed & Engineered with</span>
            <Heart size={13} color="var(--accent-pink)" fill="var(--accent-pink)" />
            <span>using React, Vite & Vanilla CSS.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
