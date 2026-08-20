import React, { useState, useEffect } from 'react';
import { playSuccessChime, playClickSound } from '../utils/soundEffects';
import { Sparkles } from 'lucide-react';

export default function IntroSplash({ onComplete }) {
  const [phase, setPhase] = useState('entering'); // 'entering' | 'ready' | 'exiting' | 'hidden'
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Step 1: Start progress counting
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setPhase('ready');
          return 100;
        }
        return prev + 5;
      });
    }, 35);

    return () => clearInterval(interval);
  }, []);

  const triggerExit = () => {
    if (phase === 'exiting' || phase === 'hidden') return;
    playClickSound();
    playSuccessChime();
    setPhase('exiting');
    setTimeout(() => {
      setPhase('hidden');
      if (onComplete) onComplete();
    }, 900);
  };

  // Keyboard 'Enter' & Screen Click Event Listeners
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        triggerExit();
      }
    };

    const handleClick = () => {
      triggerExit();
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('click', handleClick);
    };
  }, [phase]);

  if (phase === 'hidden') return null;

  return (
    <div
      onClick={triggerExit}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#161616',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'transform 0.85s cubic-bezier(0.77, 0, 0.175, 1), opacity 0.85s cubic-bezier(0.77, 0, 0.175, 1)',
        transform: phase === 'exiting' ? 'translateY(-100%)' : 'translateY(0%)',
        opacity: phase === 'exiting' ? 0.95 : 1
      }}
    >
      {/* Ambient Crimson Glow */}
      <div
        style={{
          position: 'absolute',
          width: '650px',
          height: '650px',
          background: 'radial-gradient(circle, rgba(113, 0, 20, 0.45) 0%, rgba(179, 143, 111, 0.1) 50%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          pointerEvents: 'none'
        }}
      />

      {/* Intro Content Wrapper */}
      <div
        style={{
          textAlign: 'center',
          position: 'relative',
          zIndex: 2,
          padding: '0 20px',
          maxWidth: '900px'
        }}
      >
        {/* Subtitle Badge */}
        <div
          style={{
            marginBottom: '20px',
            opacity: 0,
            animation: 'fadeInDown 0.6s ease forwards 0.1s'
          }}
        >
          <span
            className="glass-pill"
            style={{
              padding: '8px 20px',
              border: '1px solid var(--warm-sand)',
              color: 'var(--warm-sand)',
              letterSpacing: '0.15em',
              fontSize: '0.85rem'
            }}
          >
            <Sparkles size={14} />
            <span>CHARUSAT DEPSTAR PORTFOLIO</span>
          </span>
        </div>

        {/* Big Bold Name */}
        <h1
          style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(3.5rem, 10vw, 7.5rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1,
            textTransform: 'uppercase',
            marginBottom: '16px',
            background: 'linear-gradient(135deg, #F2F1ED 0%, #B38F6F 50%, #710014 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            textShadow: '0 0 50px rgba(113, 0, 20, 0.6)',
            opacity: 0,
            transform: 'translateY(40px)',
            animation: 'slideUpTitle 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.2s'
          }}
        >
          SHAAN DABHI
        </h1>

        {/* Student Tagline */}
        <p
          style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
            fontWeight: 600,
            color: 'var(--warm-sand)',
            marginBottom: '40px',
            letterSpacing: '0.05em',
            opacity: 0,
            animation: 'fadeInUp 0.7s ease forwards 0.4s'
          }}
        >
          Computer Engineering Student @ CHARUSAT DEPSTAR
        </p>

        {/* Progress Bar */}
        <div
          style={{
            width: '320px',
            margin: '0 auto',
            opacity: 0,
            animation: 'fadeIn 0.6s ease forwards 0.5s'
          }}
        >
          <div
            style={{
              height: '4px',
              width: '100%',
              background: 'rgba(242, 241, 237, 0.1)',
              borderRadius: '9999px',
              overflow: 'hidden',
              position: 'relative'
            }}
          >
            <div
              style={{
                height: '100%',
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #710014, #B38F6F, #F2F1ED)',
                borderRadius: '9999px',
                transition: 'width 0.1s linear',
                boxShadow: '0 0 12px #B38F6F'
              }}
            />
          </div>
        </div>
      </div>

      {/* Keyframe Styles */}
      <style>{`
        @keyframes slideUpTitle {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
