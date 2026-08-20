import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Layout, Server, Cpu, CheckCircle2 } from 'lucide-react';

export default function SkillsTimeline() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Layout':
        return <Layout size={20} color="var(--accent-cyan)" />;
      case 'Server':
        return <Server size={20} color="var(--accent-indigo)" />;
      case 'Cpu':
        return <Cpu size={20} color="var(--accent-purple)" />;
      default:
        return <CheckCircle2 size={20} color="var(--accent-cyan)" />;
    }
  };

  return (
    <section id="skills" style={{ padding: '90px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Technical Competencies</span>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Proficiency Breakdown</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of production-grade tools, frameworks, and architecture patterns I use daily.
          </p>
        </div>

        {/* Skills Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px'
          }}
        >
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '28px'
              }}
            >
              {/* Category Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '24px',
                  paddingBottom: '14px',
                  borderBottom: '1px solid var(--border-glass)'
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--bg-glass)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid var(--border-glass)'
                  }}
                >
                  {getIcon(cat.icon)}
                </div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>{cat.name}</h3>
              </div>

              {/* Skill Bars */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '0.9rem' }}>
                      <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{skill.name}</span>
                      <span style={{ color: 'var(--text-secondary)', fontSize: '0.82rem' }}>
                        {skill.exp} • {skill.level}%
                      </span>
                    </div>
                    {/* Progress Bar Container */}
                    <div
                      style={{
                        width: '100%',
                        height: '8px',
                        borderRadius: 'var(--radius-full)',
                        background: 'rgba(255, 255, 255, 0.05)',
                        overflow: 'hidden',
                        position: 'relative'
                      }}
                    >
                      <div
                        style={{
                          width: `${skill.level}%`,
                          height: '100%',
                          borderRadius: 'var(--radius-full)',
                          background: 'var(--gradient-hero)',
                          transition: 'width 1s ease-in-out',
                          boxShadow: '0 0 10px rgba(99, 102, 241, 0.5)'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
