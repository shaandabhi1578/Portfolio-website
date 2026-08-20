import React from 'react';
import { CERTIFICATIONS } from '../data/portfolioData';
import GlassSurface from './GlassSurface';
import MaskedHeading from './MaskedHeading';
import { Award, CheckCircle, ExternalLink } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" style={{ padding: '90px 0', position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Verified Accomplishments</span>
          <MaskedHeading text="Certifications & Coursework" fontSize="clamp(2rem, 5vw, 3rem)" />
          <p className="section-subtitle">
            Specialized academic certifications completed alongside my B.Tech studies at CHARUSAT DEPSTAR.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
            maxWidth: '900px',
            margin: '0 auto'
          }}
        >
          {CERTIFICATIONS.map((cert, idx) => (
            <GlassSurface key={idx} className="glass-panel" style={{ padding: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div
                  style={{
                    padding: '12px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(113, 0, 20, 0.3)',
                    color: 'var(--warm-sand)',
                    border: '1px solid var(--border-glass)'
                  }}
                >
                  <Award size={24} />
                </div>
                <div style={{ flex: 1 }}>
                  <span className="glass-pill" style={{ color: 'var(--warm-sand)', fontSize: '0.78rem', marginBottom: '8px' }}>
                    {cert.date}
                  </span>
                  <h3 style={{ fontSize: '1.25rem', marginTop: '6px', marginBottom: '6px', color: 'var(--soft-pearl)' }}>
                    {cert.title}
                  </h3>
                  <div style={{ fontSize: '0.9rem', color: 'var(--warm-sand)', fontWeight: 600, marginBottom: '10px' }}>
                    {cert.issuer}
                  </div>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <CheckCircle size={14} color="var(--warm-sand)" />
                    <span>Focus: {cert.skills}</span>
                  </p>
                </div>
              </div>
            </GlassSurface>
          ))}
        </div>
      </div>
    </section>
  );
}
