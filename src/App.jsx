import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MoltenMetal from './components/MoltenMetal';
import GradualBlur from './components/GradualBlur';
import IntroSplash from './components/IntroSplash';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import MusicScaleDetectorDemo from './components/MusicScaleDetectorDemo';
import Projects from './components/Projects';
import DSAVisualizer from './components/DSAVisualizer';
import Certifications from './components/Certifications';
import TerminalWidget from './components/TerminalWidget';
import SkillsTimeline from './components/SkillsTimeline';
import Timeline from './components/Timeline';
import ContactSection from './components/ContactSection';
import ResumeModal from './components/ResumeModal';
import Footer from './components/Footer';

export default function App() {
  const [activeTheme, setActiveTheme] = useState('cyber');
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [showIntroKey, setShowIntroKey] = useState(Date.now());

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', activeTheme);
  }, [activeTheme]);

  const handleReplayIntro = () => {
    setShowIntroKey(Date.now());
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: 'var(--bg-primary)' }}>
      {/* Intro Splash Animation Overlay */}
      <IntroSplash key={showIntroKey} />

      {/* Molten Metal Fluid WebGL2 Shader Canvas Background */}
      <MoltenMetal
        color1={activeTheme === 'cyber' ? '#710014' : '#5227FF'}
        color2={activeTheme === 'cyber' ? '#B38F6F' : '#FF9FFC'}
        color3={activeTheme === 'cyber' ? '#F2F1ED' : '#FFFFFF'}
        speed={0.3}
        scale={3.5}
        glow={1.4}
        mouseInteraction={true}
      />

      {/* Navigation Header */}
      <Navbar
        activeTheme={activeTheme}
        onThemeChange={setActiveTheme}
        onOpenResume={() => setResumeModalOpen(true)}
        onReplayIntro={handleReplayIntro}
      />

      {/* Main Content Sections with GradualBlur Transitions */}
      <main style={{ position: 'relative', zIndex: 2 }}>
        <Hero />

        <div style={{ position: 'relative' }}>
          <GradualBlur target="parent" position="top" height="6rem" strength={2} divCount={5} curve="bezier" />
          <AboutMe />
        </div>

        <div style={{ position: 'relative' }}>
          <GradualBlur target="parent" position="top" height="6rem" strength={2} divCount={5} curve="bezier" />
          <MusicScaleDetectorDemo />
        </div>

        <div style={{ position: 'relative' }}>
          <GradualBlur target="parent" position="top" height="6rem" strength={2} divCount={5} curve="bezier" />
          <Projects />
        </div>

        <div style={{ position: 'relative' }}>
          <GradualBlur target="parent" position="top" height="6rem" strength={2} divCount={5} curve="bezier" />
          <DSAVisualizer />
        </div>

        <div style={{ position: 'relative' }}>
          <GradualBlur target="parent" position="top" height="6rem" strength={2} divCount={5} curve="bezier" />
          <Certifications />
        </div>

        <div style={{ position: 'relative' }}>
          <GradualBlur target="parent" position="top" height="6rem" strength={2} divCount={5} curve="bezier" />
          <TerminalWidget />
        </div>

        <div style={{ position: 'relative' }}>
          <GradualBlur target="parent" position="top" height="6rem" strength={2} divCount={5} curve="bezier" />
          <SkillsTimeline />
          <Timeline />
          <ContactSection />
        </div>
      </main>

      {/* Resume Download Preview Modal */}
      <ResumeModal isOpen={resumeModalOpen} onClose={() => setResumeModalOpen(false)} />

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
