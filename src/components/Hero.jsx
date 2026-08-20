import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import TiltedCard from './TiltedCard';
import ParticleText from './ParticleText';
import MaskedHeading from './MaskedHeading';
import GradualBlur from './GradualBlur';
import { ArrowRight, MessageSquare, Terminal, Sparkles, CheckCircle2, GraduationCap, Code, ShieldCheck } from 'lucide-react';

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export default function Hero() {
  return (
    <section id="hero" style={{ paddingTop: '120px', paddingBottom: '70px', position: 'relative' }}>
      {/* Ambient Glow Orbs */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '450px',
          background: 'var(--gradient-glow)',
          pointerEvents: 'none',
          zIndex: -1,
          filter: 'blur(70px)'
        }}
      />

      <div className="container">
        {/* Interactive Particle Text Heading Effect */}
        <div style={{ marginBottom: '10px' }} data-tooltip="Move mouse over particles to scatter text!">
          <ParticleText
            text="Shaan Dabhi"
            color="var(--soft-pearl)"
            highlightColor="var(--warm-sand)"
            particleSize={2.4}
            density={4.5}
            scatter={160}
          />
        </div>

        <div
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '40px',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Text & CTAs */}
          <div>
            {/* Status Pill */}
            <div style={{ marginBottom: '20px', display: 'inline-block' }}>
              <div className="glass-pill" style={{ padding: '6px 18px', border: '1px solid var(--warm-sand)' }} data-tooltip="2nd Year CE Student @ CHARUSAT DEPSTAR">
                <GraduationCap size={16} color="var(--warm-sand)" />
                <span style={{ color: 'var(--soft-pearl)', fontWeight: 700 }}>{PERSONAL_INFO.status}</span>
              </div>
            </div>

            {/* Masked Heading Component */}
            <MaskedHeading
              text="Crafting Modern Web Apps & Code"
              align="left"
              fontSize="clamp(2.2rem, 4.5vw, 3.2rem)"
            />

            {/* Tagline & Bio */}
            <p
              style={{
                fontSize: '1.1rem',
                color: 'var(--text-secondary)',
                marginBottom: '26px',
                lineHeight: 1.6
              }}
            >
              {PERSONAL_INFO.bio}
            </p>

            {/* Tech Badges */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginBottom: '30px'
              }}
            >
              {['C / C++ (DSA)', 'React.js & Vite', 'JavaScript (ES6+)', 'Node.js & Express', 'HTML5 & Modern CSS'].map((tech) => (
                <span key={tech} className="glass-pill" data-tooltip={`Skilled in ${tech}`} style={{ color: 'var(--text-primary)' }}>
                  <CheckCircle2 size={13} color="var(--warm-sand)" />
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                flexWrap: 'wrap',
                marginBottom: '32px'
              }}
            >
              <a href="#projects" className="btn btn-primary" data-tooltip="Explore Shaan's student projects">
                <span>View Projects</span>
                <ArrowRight size={18} />
              </a>

              <a href="#terminal" className="btn btn-secondary" data-tooltip="Launch developer shell">
                <Terminal size={18} color="var(--warm-sand)" />
                <span>Cyber Terminal</span>
              </a>

              <a href="#about" className="btn btn-secondary" data-tooltip="Learn more about Shaan">
                <span>About Me</span>
              </a>
            </div>

            {/* Social Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noreferrer" className="btn btn-secondary btn-icon" data-tooltip="Shaan's GitHub Profile">
                <GithubIcon size={18} />
              </a>
              <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noreferrer" className="btn btn-secondary btn-icon" data-tooltip="Shaan's LinkedIn Profile">
                <LinkedinIcon size={18} />
              </a>
              <a href={PERSONAL_INFO.socials.twitter} target="_blank" rel="noreferrer" className="btn btn-secondary btn-icon" data-tooltip="Follow Shaan on Twitter/X">
                <TwitterIcon size={18} />
              </a>
            </div>
          </div>

          {/* Right Column: 3D Tilted Photo Card */}
          <div className="hero-photo-column" style={{ textAlign: 'center', position: 'relative' }}>
            <TiltedCard
              imageSrc={PERSONAL_INFO.photo}
              altText="Shaan Dabhi Photo"
              containerHeight="430px"
              containerWidth="320px"
              style={{ margin: '0 auto' }}
              displayOverlayContent={true}
              overlayContent={
                <div>
                  <div className="glass-pill" style={{ background: 'rgba(22, 22, 22, 0.85)', color: 'var(--warm-sand)', marginBottom: '6px' }}>
                    <ShieldCheck size={14} />
                    <span>CHARUSAT DEPSTAR</span>
                  </div>
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--soft-pearl)', fontWeight: 800 }}>Shaan Dabhi</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--warm-sand)', fontWeight: 600 }}>
                    2nd Year CE Student
                  </p>
                </div>
              }
            />
          </div>
        </div>

        {/* Stats Grid Bar */}
        <div
          className="glass-panel"
          style={{
            marginTop: '50px',
            padding: '24px 32px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '24px',
            textAlign: 'center'
          }}
        >
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div key={idx} data-tooltip={`${stat.label}: ${stat.value}`}>
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2.2rem',
                  fontWeight: 800,
                  color: 'var(--soft-pearl)'
                }}
                className="gradient-text"
              >
                {stat.value}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--warm-sand)', fontWeight: 600, marginTop: '4px' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gradual Blur Transition Overlay at bottom */}
      <GradualBlur position="bottom" height="5rem" />
    </section>
  );
}
