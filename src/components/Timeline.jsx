import React, { useState } from 'react';
import { TIMELINE } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, Award } from 'lucide-react';

export default function Timeline() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" style={{ padding: '90px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Career Milestones</span>
          <h2 className="section-title">
            Professional <span className="gradient-text">Experience Journey</span>
          </h2>
          <p className="section-subtitle">
            A timeline of high-velocity roles, technical leadership, and impactful software delivery.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          {/* Vertical Connecting Line */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              bottom: '20px',
              left: '24px',
              width: '2px',
              background: 'var(--border-glass)'
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {TIMELINE.map((item, idx) => {
              const isExpanded = expandedIndex === idx;

              return (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    gap: '20px',
                    position: 'relative'
                  }}
                >
                  {/* Timeline Node Icon */}
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: isExpanded ? 'var(--gradient-hero)' : 'var(--bg-secondary)',
                      border: '2px solid var(--border-glow)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isExpanded ? '#ffffff' : 'var(--accent-indigo)',
                      flexShrink: 0,
                      zIndex: 2,
                      boxShadow: isExpanded ? '0 0 15px rgba(99, 102, 241, 0.4)' : 'none',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <Briefcase size={20} />
                  </div>

                  {/* Card Body */}
                  <div
                    className="glass-panel"
                    onClick={() => toggleExpand(idx)}
                    style={{
                      flex: 1,
                      padding: '24px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
                      <span className="glass-pill" style={{ color: 'var(--accent-cyan)', fontSize: '0.8rem' }}>
                        <Calendar size={13} />
                        {item.period}
                      </span>
                      <div style={{ color: 'var(--text-muted)' }}>
                        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </div>
                    </div>

                    <h3 style={{ fontSize: '1.3rem', marginTop: '12px', marginBottom: '4px', color: 'var(--text-primary)' }}>
                      {item.role}
                    </h3>
                    <div style={{ fontSize: '0.92rem', color: 'var(--accent-indigo)', fontWeight: 600, marginBottom: '12px' }}>
                      {item.company} • <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>{item.location}</span>
                    </div>

                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.6 }}>
                      {item.description}
                    </p>

                    {/* Expandable Highlights */}
                    {isExpanded && (
                      <div
                        style={{
                          marginTop: '20px',
                          paddingTop: '16px',
                          borderTop: '1px solid var(--border-glass)'
                        }}
                      >
                        <div style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '10px', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <Award size={15} color="var(--accent-amber)" />
                          <span>Key Achievements:</span>
                        </div>
                        <ul style={{ paddingLeft: '20px', color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          {item.highlights.map((h, hIdx) => (
                            <li key={hIdx}>{h}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
