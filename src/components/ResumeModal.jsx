import React from 'react';
import { X, Download, Mail, Phone, MapPin, Award, ExternalLink, Printer } from 'lucide-react';
import { PERSONAL_INFO, SKILL_CATEGORIES, TIMELINE, PROJECTS, CERTIFICATIONS } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleDownload = () => {
    // Create an invisible download link to download Shaan_Dabhi_Resume.html
    const link = document.createElement('a');
    link.href = '/Shaan_Dabhi_Resume.html';
    link.download = 'Shaan_Dabhi_Resume.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.open('/Shaan_Dabhi_Resume.html', '_blank')?.print();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 250,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        background: 'rgba(0, 0, 0, 0.9)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)'
      }}
      onClick={onClose}
    >
      <div
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '880px',
          maxHeight: '92vh',
          overflowY: 'auto',
          padding: '36px',
          position: 'relative',
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-glow)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          data-tooltip="Close Modal"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'var(--bg-glass)',
            border: '1px solid var(--border-glass)',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--soft-pearl)',
            cursor: 'pointer'
          }}
        >
          <X size={20} />
        </button>

        {/* Modal Top Actions */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2px solid var(--accent-sand)',
                boxShadow: '0 0 20px rgba(158, 0, 28, 0.5)'
              }}
            >
              <img src={PERSONAL_INFO.photo} alt={PERSONAL_INFO.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div>
              <span className="glass-pill" style={{ color: 'var(--accent-sand)' }}>Official Resume Document</span>
              <h2 style={{ fontSize: '1.9rem', marginTop: '4px', color: 'var(--soft-pearl)' }}>{PERSONAL_INFO.name}</h2>
              <p style={{ color: 'var(--accent-sand)', fontSize: '0.92rem', fontWeight: 700 }}>{PERSONAL_INFO.title}</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={handleDownload}
              className="btn btn-primary btn-sm"
              data-tooltip="Download Resume File to your Computer"
            >
              <Download size={16} />
              <span>Download Resume</span>
            </button>
            <button
              onClick={handlePrint}
              className="btn btn-secondary btn-sm"
              data-tooltip="Print or Save as PDF"
            >
              <Printer size={16} />
              <span>Print / PDF</span>
            </button>
          </div>
        </div>

        {/* Resume Sheet Preview Box */}
        <div
          style={{
            padding: '28px',
            background: 'rgba(18, 18, 18, 0.95)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-glass)',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            color: 'var(--soft-pearl)'
          }}
        >
          {/* Contact Bar */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '20px',
              paddingBottom: '16px',
              borderBottom: '1px solid var(--border-glass)',
              fontSize: '0.9rem'
            }}
          >
            <div>📱 <strong>Phone:</strong> {PERSONAL_INFO.phone}</div>
            <div>✉️ <strong>Email:</strong> {PERSONAL_INFO.email}</div>
            <div>🔗 <strong>LinkedIn:</strong> linkedin.com/in/shaan-dabhi</div>
            <div>💻 <strong>GitHub:</strong> github.com/shaandabhi1578</div>
          </div>

          {/* Education */}
          <div>
            <h3 style={{ fontSize: '1.15rem', color: 'var(--accent-sand)', marginBottom: '8px' }}>Education</h3>
            <div style={{ fontWeight: 800, fontSize: '1.05rem' }}>{PERSONAL_INFO.university}</div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>{PERSONAL_INFO.degree} • {PERSONAL_INFO.graduation}</div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 style={{ fontSize: '1.15rem', color: 'var(--accent-sand)', marginBottom: '8px' }}>Professional Summary</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.6 }}>{PERSONAL_INFO.bio}</p>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 style={{ fontSize: '1.15rem', color: 'var(--accent-sand)', marginBottom: '12px' }}>Technical Skills</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', fontSize: '0.9rem' }}>
              <div style={{ background: 'var(--bg-glass)', padding: '12px', borderRadius: 'var(--radius-sm)' }}>
                <strong style={{ color: 'var(--accent-sand)' }}>Programming Languages:</strong> C, C++ (proficient), Java (learning)
              </div>
              <div style={{ background: 'var(--bg-glass)', padding: '12px', borderRadius: 'var(--radius-sm)' }}>
                <strong style={{ color: 'var(--accent-sand)' }}>Web Technologies:</strong> HTML, CSS, JavaScript (learning)
              </div>
              <div style={{ background: 'var(--bg-glass)', padding: '12px', borderRadius: 'var(--radius-sm)' }}>
                <strong style={{ color: 'var(--accent-sand)' }}>Tools & Version Control:</strong> VS Code, Git, GitHub
              </div>
              <div style={{ background: 'var(--bg-glass)', padding: '12px', borderRadius: 'var(--radius-sm)' }}>
                <strong style={{ color: 'var(--accent-sand)' }}>Operating Systems:</strong> Windows, macOS
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h3 style={{ fontSize: '1.15rem', color: 'var(--accent-sand)', marginBottom: '12px' }}>Featured Projects</h3>
            {PROJECTS.map((p, idx) => (
              <div key={idx} style={{ borderLeft: '3px solid var(--accent-crimson)', paddingLeft: '14px', marginBottom: '14px' }}>
                <div style={{ fontWeight: 800, fontSize: '1rem' }}>{p.title} — <span style={{ fontWeight: 600, fontSize: '0.88rem', color: 'var(--accent-sand)' }}>{p.category}</span></div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '4px' }}>{p.fullDesc}</div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 style={{ fontSize: '1.15rem', color: 'var(--accent-sand)', marginBottom: '12px' }}>Certifications</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {CERTIFICATIONS.map((c, idx) => (
                <div key={idx} style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                  • <strong style={{ color: 'var(--soft-pearl)' }}>{c.title}</strong> — {c.issuer} ({c.date})
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
