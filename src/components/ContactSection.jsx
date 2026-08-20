import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Mail, MapPin, Send, CheckCircle, Copy, Calendar, MessageSquare, Clock } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copyToast, setCopyToast] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    // Fire festive celebratory confetti!
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 6000);
  };

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopyToast(`${label} copied to clipboard!`);
    setTimeout(() => setCopyToast(''), 3000);
  };

  return (
    <section id="contact" style={{ padding: '90px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Let's Connect</span>
          <h2 className="section-title">
            Start a <span className="gradient-text">Conversation</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind, need technical consultation, or want to collaborate? Send me a message below.
          </p>
        </div>

        {/* Contact Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '36px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}
        >
          {/* Left Column: Direct Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="glass-panel" style={{ padding: '24px' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '16px', color: 'var(--text-primary)' }}>Contact Information</h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ padding: '10px', borderRadius: 'var(--radius-sm)', background: 'var(--bg-glass)', color: 'var(--accent-cyan)' }}>
                      <Mail size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Email</div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>{PERSONAL_INFO.email}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(PERSONAL_INFO.email, 'Email')}
                    className="btn btn-secondary btn-sm"
                    style={{ padding: '6px 10px' }}
                    title="Copy Email"
                  >
                    <Copy size={14} />
                  </button>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ padding: '10px', borderRadius: 'var(--radius-sm)', background: 'var(--bg-glass)', color: 'var(--accent-indigo)' }}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Location</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>{PERSONAL_INFO.location}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ padding: '10px', borderRadius: 'var(--radius-sm)', background: 'var(--bg-glass)', color: 'var(--accent-emerald)' }}>
                    <Clock size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Typical Response Time</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>Within 24 Hours</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Meeting Scheduler Banner */}
            <div className="glass-panel" style={{ padding: '24px', background: 'var(--gradient-glow)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <Calendar size={20} color="var(--accent-purple)" />
                <h4 style={{ fontSize: '1.05rem', color: 'var(--text-primary)' }}>Schedule a 15-Min Intro Call</h4>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                Book a direct calendar slot for technical discussions or project scoping.
              </p>
              <button
                onClick={() => copyToClipboard('https://cal.com/shaandabhi', 'Calendar link')}
                className="btn btn-secondary btn-sm"
                style={{ width: '100%' }}
              >
                <span>Copy Calendar Link</span>
                <Copy size={14} />
              </button>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="glass-panel" style={{ padding: '32px' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '20px', color: 'var(--text-primary)' }}>Send a Direct Message</h3>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.2)',
                    color: 'var(--accent-emerald)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px auto'
                  }}
                >
                  <CheckCircle size={32} />
                </div>
                <h4 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '10px' }}>Message Received!</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  Thank you for reaching out. I've received your inquiry and will reply shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Morgan"
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--bg-glass)',
                      border: '1px solid var(--border-glass)',
                      color: 'var(--text-primary)',
                      outline: 'none',
                      fontSize: '0.9rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@company.com"
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--bg-glass)',
                      border: '1px solid var(--border-glass)',
                      color: 'var(--text-primary)',
                      outline: 'none',
                      fontSize: '0.9rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Hiring"
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--bg-glass)',
                      border: '1px solid var(--border-glass)',
                      color: 'var(--text-primary)',
                      outline: 'none',
                      fontSize: '0.9rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your project or inquiry..."
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--bg-glass)',
                      border: '1px solid var(--border-glass)',
                      color: 'var(--text-primary)',
                      outline: 'none',
                      fontSize: '0.9rem',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ marginTop: '8px', cursor: 'pointer' }}>
                  <span>Send Message</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Copy Toast Feedback */}
        {copyToast && (
          <div
            style={{
              position: 'fixed',
              bottom: '24px',
              right: '24px',
              zIndex: 300,
              padding: '12px 20px',
              borderRadius: 'var(--radius-full)',
              background: 'var(--accent-indigo)',
              color: '#ffffff',
              boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
              fontSize: '0.9rem',
              fontWeight: 600
            }}
          >
            {copyToast}
          </div>
        )}
      </div>
    </section>
  );
}
