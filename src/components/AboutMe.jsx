import React from 'react';
import { PERSONAL_INFO, ABOUT_DETAILS } from '../data/portfolioData';
import TiltedCard from './TiltedCard';
import MaskedHeading from './MaskedHeading';
import { User, Code2, Zap, Shield, Sparkles, GraduationCap } from 'lucide-react';

export default function AboutMe() {
  const valueIcons = [
    <Code2 key="code" size={20} color="var(--warm-sand)" />,
    <Zap key="zap" size={20} color="var(--crimson-depth)" />,
    <Shield key="shield" size={20} color="var(--warm-sand)" />,
    <Sparkles key="sparkles" size={20} color="var(--soft-pearl)" />
  ];

  return (
    <section id="about" style={{ padding: '90px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Get To Know Me</span>
          <MaskedHeading text="About Shaan Dabhi" fontSize="clamp(2.2rem, 5vw, 3.2rem)" />
          <p className="section-subtitle">
            Computer Engineering student at CHARUSAT DEPSTAR passionate about building modern web software.
          </p>
        </div>

        {/* About Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'center',
            marginBottom: '50px'
          }}
        >
          {/* Shaan's Photo Spotlight with 3D Tilt */}
          <div style={{ textAlign: 'center' }}>
            <TiltedCard
              imageSrc={PERSONAL_INFO.photo}
              altText="Shaan Dabhi"
              containerHeight="460px"
              containerWidth="340px"
              style={{ margin: '0 auto' }}
              displayOverlayContent={true}
              overlayContent={
                <div>
                  <div className="glass-pill" style={{ background: 'rgba(22, 22, 22, 0.85)', color: 'var(--warm-sand)', marginBottom: '6px' }}>
                    <GraduationCap size={14} />
                    <span>CHARUSAT DEPSTAR (2nd Year CE)</span>
                  </div>
                  <div style={{ fontSize: '1.1rem', color: 'var(--soft-pearl)', fontWeight: 700 }}>
                    Shaan Dabhi
                  </div>
                </div>
              }
            />
          </div>

          {/* Right Column: Story & Principles */}
          <div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '14px', color: 'var(--soft-pearl)' }}>
              {ABOUT_DETAILS.headline}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '28px' }}>
              {ABOUT_DETAILS.story}
            </p>

            {/* Core Values Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
              {ABOUT_DETAILS.values.map((v, idx) => (
                <div
                  key={idx}
                  className="glass-panel"
                  data-tooltip={`Core Focus #${idx + 1}`}
                  style={{
                    padding: '18px',
                    borderRadius: 'var(--radius-sm)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <div style={{ padding: '8px', borderRadius: 'var(--radius-sm)', background: 'var(--bg-glass)' }}>
                      {valueIcons[idx]}
                    </div>
                    <h4 style={{ fontSize: '0.98rem', color: 'var(--soft-pearl)' }}>{v.title}</h4>
                  </div>
                  <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fun Facts & Quick Specs Grid */}
        <div
          className="glass-panel"
          style={{
            padding: '30px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
            textAlign: 'center'
          }}
        >
          {ABOUT_DETAILS.funFacts.map((fact, idx) => (
            <div key={idx} data-tooltip={`${fact.label}: ${fact.value}`}>
              <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--warm-sand)', fontWeight: 700, marginBottom: '4px' }}>
                {fact.label}
              </div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--soft-pearl)' }}>
                {fact.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
