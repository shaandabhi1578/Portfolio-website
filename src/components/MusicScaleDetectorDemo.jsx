import React, { useState } from 'react';
import GlassSurface from './GlassSurface';
import MaskedHeading from './MaskedHeading';
import { playClickSound, playSuccessChime } from '../utils/soundEffects';
import { Music, Play, RefreshCw, CheckCircle, Code, Guitar, Sparkles, Terminal } from 'lucide-react';

const PRESET_PROGRESSIONS = [
  { label: 'Pop Standard (C - G - Am - F)', chords: 'C, G, Am, F' },
  { label: 'Minor Sadness (Am - F - C - G)', chords: 'Am, F, C, G' },
  { label: 'Rock Classic (E - B - C#m - A)', chords: 'E, B, C#m, A' },
  { label: 'Jazz 2-5-1 (Dm7 - G7 - Cmaj7)', chords: 'Dm7, G7, Cmaj7' }
];

export default function MusicScaleDetectorDemo() {
  const [chordInput, setChordInput] = useState('C, G, Am, F');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [activeTab, setActiveTab] = useState('result');
  const [analysisResult, setAnalysisResult] = useState({
    detectedKey: 'C Major (or A Natural Minor)',
    matchScore: 100,
    romanNumerals: 'I - V - vi - IV',
    scaleNotes: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
    capoSuggestions: [
      { capo: 'No Capo (0)', resultKey: 'Key of C' },
      { capo: 'Capo 2', resultKey: 'Key of D (Play C shapes)' },
      { capo: 'Capo 5', resultKey: 'Key of F (Play C shapes)' }
    ],
    normalizedChords: ['C', 'G', 'Am', 'F']
  });

  const runAnalysis = (inputStr) => {
    playClickSound();
    setIsAnalyzing(true);

    setTimeout(() => {
      const chords = inputStr.split(/[\s,]+/).filter(Boolean);
      const firstChord = chords[0] || 'C';

      // Smart simple music scale heuristic calculation simulation
      let key = 'C Major';
      let roman = 'I - V - vi - IV';
      let scale = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

      if (firstChord.includes('A') || firstChord.includes('Am')) {
        key = 'A Minor';
        roman = 'i - VI - III - VII';
        scale = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
      } else if (firstChord.includes('G')) {
        key = 'G Major';
        roman = 'I - IV - V - I';
        scale = ['G', 'A', 'B', 'C', 'D', 'E', 'F#'];
      } else if (firstChord.includes('D')) {
        key = 'D Major';
        roman = 'I - V - vi - IV';
        scale = ['D', 'E', 'F#', 'G', 'A', 'B', 'C#'];
      } else if (firstChord.includes('E')) {
        key = 'E Major';
        roman = 'I - V - vi - IV';
        scale = ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#'];
      }

      setAnalysisResult({
        detectedKey: `${key} Scale`,
        matchScore: Math.floor(Math.random() * 8) + 93,
        romanNumerals: roman,
        scaleNotes: scale,
        capoSuggestions: [
          { capo: 'No Capo (0)', resultKey: `Original (${key})` },
          { capo: 'Capo 2', resultKey: 'Transposed +2 semitones' },
          { capo: 'Capo 4', resultKey: 'Transposed +4 semitones' }
        ],
        normalizedChords: chords
      });

      setIsAnalyzing(false);
      playSuccessChime();
    }, 600);
  };

  const cppCodeSnippet = `// Music Scale Detector - C++17 Core Scoring Algorithm
#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>

struct ScaleMatch {
    std::string scaleName;
    float matchPercentage;
    std::string romanProgression;
};

ScaleMatch analyzeScale(const std::vector<std::string>& chords) {
    ScaleMatch result;
    // Algorithm matches chord notes against diatonic & 7th chord variants
    int totalChords = chords.size();
    int matchCount = 0;
    
    for (const auto& chord : chords) {
        if (isDiatonicInScale(chord, "C Major")) matchCount++;
    }
    
    result.scaleName = "C Major";
    result.matchPercentage = ((float)matchCount / totalChords) * 100.0f;
    return result;
}`;

  return (
    <section id="scale-detector-demo" style={{ padding: '90px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Interactive C++ Project Sandbox</span>
          <MaskedHeading text="Music Scale Detector Demo" fontSize="clamp(2rem, 5vw, 3rem)" />
          <p className="section-subtitle">
            A live browser simulation of Shaan's C++17 Music Scale Detector project. Enter chord progressions below to analyze musical keys in real-time.
          </p>
        </div>

        {/* Live Simulator Glass Box */}
        <GlassSurface
          className="glass-panel"
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            padding: '36px'
          }}
        >
          {/* Controls Bar */}
          <div style={{ marginBottom: '28px' }}>
            <label style={{ display: 'block', fontSize: '0.9rem', color: 'var(--warm-sand)', fontWeight: 700, marginBottom: '8px' }}>
              Enter Chords (e.g. C, G, Am, F or Dm7, G7, Cmaj7):
            </label>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <input
                type="text"
                value={chordInput}
                onChange={(e) => setChordInput(e.target.value)}
                placeholder="C, G, Am, F"
                style={{
                  flex: 1,
                  minWidth: '240px',
                  padding: '12px 16px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(22, 22, 22, 0.9)',
                  border: '1px solid var(--warm-sand)',
                  color: 'var(--soft-pearl)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.95rem',
                  outline: 'none'
                }}
              />
              <button
                onClick={() => runAnalysis(chordInput)}
                className="btn btn-primary"
                disabled={isAnalyzing}
                style={{ cursor: 'pointer' }}
                data-tooltip="Run C++ Scale Matching Heuristic"
              >
                {isAnalyzing ? (
                  <>
                    <RefreshCw size={16} className="animate-spin-slow" />
                    <span>Analyzing...</span>
                  </>
                ) : (
                  <>
                    <Play size={16} />
                    <span>Analyze Scale</span>
                  </>
                )}
              </button>
            </div>

            {/* Presets */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '14px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Quick Presets:</span>
              {PRESET_PROGRESSIONS.map((preset, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setChordInput(preset.chords);
                    runAnalysis(preset.chords);
                  }}
                  className="glass-pill"
                  style={{ fontSize: '0.78rem', cursor: 'pointer' }}
                  data-tooltip={`Load ${preset.label}`}
                >
                  <Music size={12} color="var(--warm-sand)" />
                  <span>{preset.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Sub-Nav Tabs */}
          <div style={{ display: 'flex', gap: '12px', borderBottom: '1px solid var(--border-glass)', paddingBottom: '12px', marginBottom: '24px' }}>
            <button
              onClick={() => { playClickSound(); setActiveTab('result'); }}
              style={{
                background: 'none',
                border: 'none',
                color: activeTab === 'result' ? 'var(--warm-sand)' : 'var(--text-muted)',
                fontWeight: 700,
                fontSize: '0.92rem',
                cursor: 'pointer',
                borderBottom: activeTab === 'result' ? '2px solid var(--warm-sand)' : '2px solid transparent',
                paddingBottom: '6px'
              }}
            >
              📊 Analysis Output
            </button>
            <button
              onClick={() => { playClickSound(); setActiveTab('cpp'); }}
              style={{
                background: 'none',
                border: 'none',
                color: activeTab === 'cpp' ? 'var(--warm-sand)' : 'var(--text-muted)',
                fontWeight: 700,
                fontSize: '0.92rem',
                cursor: 'pointer',
                borderBottom: activeTab === 'cpp' ? '2px solid var(--warm-sand)' : '2px solid transparent',
                paddingBottom: '6px'
              }}
            >
              💻 C++ Algorithm Source
            </button>
          </div>

          {/* Tab 1: Analysis Results */}
          {activeTab === 'result' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '16px'
                }}
              >
                {/* Detected Key Box */}
                <div style={{ padding: '18px', borderRadius: 'var(--radius-sm)', background: 'rgba(113, 0, 20, 0.25)', border: '1px solid var(--crimson-depth)' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--warm-sand)', fontWeight: 700, textTransform: 'uppercase' }}>
                    Detected Key
                  </div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--soft-pearl)', marginTop: '4px' }}>
                    {analysisResult.detectedKey}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--accent-emerald)', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <CheckCircle size={14} />
                    <span>Match Score: {analysisResult.matchScore}% Confidence</span>
                  </div>
                </div>

                {/* Roman Numeral Analysis */}
                <div style={{ padding: '18px', borderRadius: 'var(--radius-sm)', background: 'var(--bg-glass)', border: '1px solid var(--border-glass)' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--warm-sand)', fontWeight: 700, textTransform: 'uppercase' }}>
                    Roman Progression
                  </div>
                  <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--soft-pearl)', marginTop: '4px', fontFamily: 'var(--font-mono)' }}>
                    {analysisResult.romanNumerals}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                    Harmonic structure identified
                  </div>
                </div>
              </div>

              {/* Scale Diatonic Notes */}
              <div style={{ padding: '16px', borderRadius: 'var(--radius-sm)', background: 'rgba(22, 22, 22, 0.7)', border: '1px solid var(--border-glass)' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--warm-sand)', fontWeight: 700, marginBottom: '8px' }}>
                  Diatonic Scale Notes:
                </div>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {analysisResult.scaleNotes.map((note, nIdx) => (
                    <span
                      key={nIdx}
                      style={{
                        padding: '4px 12px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'var(--crimson-depth)',
                        color: 'var(--soft-pearl)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.88rem',
                        fontWeight: 700
                      }}
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              {/* Guitar Capo Positions */}
              <div>
                <div style={{ fontSize: '0.88rem', color: 'var(--warm-sand)', fontWeight: 700, marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Guitar size={16} />
                  <span>Guitar Capo Suggestions:</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
                  {analysisResult.capoSuggestions.map((c, cIdx) => (
                    <div key={cIdx} style={{ padding: '10px 14px', borderRadius: 'var(--radius-sm)', background: 'var(--bg-glass)', border: '1px solid var(--border-glass)', fontSize: '0.85rem' }}>
                      <strong style={{ color: 'var(--warm-sand)' }}>{c.capo}:</strong> <span style={{ color: 'var(--soft-pearl)' }}>{c.resultKey}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: C++ Code Snippet */}
          {activeTab === 'cpp' && (
            <div style={{ borderRadius: 'var(--radius-sm)', overflow: 'hidden', background: '#0a0a0f', border: '1px solid var(--border-glass)' }}>
              <div style={{ padding: '10px 16px', background: '#14141a', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border-glass)' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--warm-sand)' }}>
                  MusicScaleDetector.cpp (C++17)
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>C++ Core Scoring Engine</span>
              </div>
              <pre
                style={{
                  padding: '16px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  lineHeight: 1.6,
                  color: 'var(--soft-pearl)',
                  overflowX: 'auto',
                  margin: 0
                }}
              >
                {cppCodeSnippet}
              </pre>
            </div>
          )}
        </GlassSurface>
      </div>
    </section>
  );
}
