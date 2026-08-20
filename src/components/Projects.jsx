import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import TiltedCard from './TiltedCard';
import MaskedHeading from './MaskedHeading';
import { ExternalLink, Info, Search, Filter, Sparkles } from 'lucide-react';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'Web App / AI Tools', 'Full-Stack Web', 'Web & AI'];

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" style={{ padding: '90px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Student Projects</span>
          <MaskedHeading text="Crafted with Passion & Code" fontSize="clamp(2rem, 5vw, 3rem)" />
          <p className="section-subtitle">
            A portfolio of practical web applications, student utilities, and interactive web tools built during my CE studies at CHARUSAT DEPSTAR.
          </p>
        </div>

        {/* Filters & Search Control Bar */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            marginBottom: '40px',
            alignItems: 'center'
          }}
        >
          {/* Search Box */}
          <div
            className="glass-panel"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 16px',
              width: '100%',
              maxWidth: '480px'
            }}
          >
            <Search size={18} color="var(--text-muted)" />
            <input
              type="text"
              placeholder="Search projects by name, language, or stack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                background: 'none',
                border: 'none',
                outline: 'none',
                color: 'var(--text-primary)',
                width: '100%',
                fontSize: '0.9rem'
              }}
            />
          </div>

          {/* Category Tabs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              justifyContent: 'center'
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className="glass-pill"
                data-tooltip={`Filter by ${cat}`}
                style={{
                  cursor: 'pointer',
                  borderColor: selectedCategory === cat ? 'var(--warm-sand)' : 'var(--border-glass)',
                  background: selectedCategory === cat ? 'rgba(113, 0, 20, 0.4)' : 'var(--bg-glass)',
                  color: selectedCategory === cat ? 'var(--soft-pearl)' : 'var(--text-secondary)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid with TiltedCard */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '30px'
          }}
        >
          {filteredProjects.map((project) => (
            <TiltedCard
              key={project.id}
              rotateAmplitude={10}
              scaleOnHover={1.03}
              style={{ height: '100%' }}
            >
              <div
                className="glass-panel"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  overflow: 'hidden',
                  position: 'relative'
                }}
              >
                {/* Project Banner Image */}
                <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px'
                    }}
                  >
                    <span className="glass-pill" style={{ background: 'rgba(22, 22, 22, 0.85)', color: 'var(--warm-sand)' }}>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '10px', color: 'var(--soft-pearl)' }}>
                    {project.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '20px', flex: 1 }}>
                    {project.shortDesc}
                  </p>

                  {/* Tech Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: '0.78rem',
                          padding: '3px 10px',
                          borderRadius: 'var(--radius-sm)',
                          background: 'rgba(242, 241, 237, 0.05)',
                          border: '1px solid var(--border-glass)',
                          color: 'var(--warm-sand)'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="btn btn-secondary btn-sm"
                      style={{ flex: 1 }}
                      data-tooltip="View Project Details & Architecture"
                    >
                      <Info size={15} />
                      <span>Details</span>
                    </button>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary btn-sm"
                      data-tooltip="Open Repository"
                    >
                      <ExternalLink size={15} />
                    </a>
                  </div>
                </div>
              </div>
            </TiltedCard>
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}>
            <p style={{ fontSize: '1.1rem' }}>No projects found matching "{searchQuery}".</p>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {activeModalProject && (
        <ProjectModal project={activeModalProject} onClose={() => setActiveModalProject(null)} />
      )}
    </section>
  );
}
