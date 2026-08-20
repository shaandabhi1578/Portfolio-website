import React from 'react';
import { X, ExternalLink, Layers, Cpu, CheckCircle } from 'lucide-react';

const GithubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        background: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)'
      }}
      onClick={onClose}
    >
      <div
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '780px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '32px',
          position: 'relative',
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-glow)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
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
            color: 'var(--text-primary)',
            cursor: 'pointer'
          }}
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '24px' }}>
          <span className="glass-pill" style={{ color: 'var(--accent-cyan)', marginBottom: '12px' }}>
            {project.category}
          </span>
          <h2 style={{ fontSize: '2rem', marginTop: '8px', color: 'var(--text-primary)' }}>
            {project.title}
          </h2>
        </div>

        {/* Project Image Banner */}
        <div
          style={{
            width: '100%',
            height: '240px',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            marginBottom: '24px',
            position: 'relative'
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, transparent 60%)'
            }}
          />
        </div>

        {/* Metrics Bar */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
            flexWrap: 'wrap',
            marginBottom: '24px',
            padding: '16px',
            background: 'var(--bg-glass)',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-glass)'
          }}
        >
          {project.metrics?.map((metric, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
              <CheckCircle size={16} color="var(--accent-emerald)" />
              <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{metric}</span>
            </div>
          ))}
        </div>

        {/* Description */}
        <div style={{ marginBottom: '28px' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: 'var(--text-primary)' }}>Project Overview</h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.98rem' }}>
            {project.fullDesc}
          </p>
        </div>

        {/* System Architecture Flow */}
        {project.architecture && (
          <div style={{ marginBottom: '28px' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)' }}>
              <Cpu size={18} color="var(--accent-indigo)" />
              <span>System Architecture & Pipeline</span>
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {project.architecture.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px',
                    padding: '12px 16px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    borderRadius: 'var(--radius-sm)',
                    borderLeft: '3px solid var(--accent-indigo)'
                  }}
                >
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: 'var(--accent-indigo)',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      flexShrink: 0
                    }}
                  >
                    {idx + 1}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>{item.step}</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack Chips */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '12px', color: 'var(--text-primary)' }}>Technologies Used</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {project.tags.map((tag) => (
              <span key={tag} className="glass-pill" style={{ fontSize: '0.8rem', color: 'var(--text-primary)' }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <a href={project.demoUrl} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ flex: 1 }}>
            <span>Visit Live Demo</span>
            <ExternalLink size={16} />
          </a>
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn btn-secondary">
            <GithubIcon size={16} />
            <span>Source Repository</span>
          </a>
        </div>
      </div>
    </div>
  );
}
