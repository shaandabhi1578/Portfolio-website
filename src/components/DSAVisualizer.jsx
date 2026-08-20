import React, { useState, useEffect } from 'react';
import GlassSurface from './GlassSurface';
import MaskedHeading from './MaskedHeading';
import { playClickSound, playKeypressSound, playSuccessChime } from '../utils/soundEffects';
import { Play, RotateCcw, Cpu, BarChart2, CheckCircle2 } from 'lucide-react';

export default function DSAVisualizer() {
  const [array, setArray] = useState([45, 20, 75, 30, 90, 15, 60, 40, 85, 10]);
  const [activeIndices, setActiveIndices] = useState([]);
  const [sortedIndices, setSortedIndices] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [algorithm, setAlgorithm] = useState('bubble');

  const generateRandomArray = () => {
    playClickSound();
    const newArr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 85) + 15);
    setArray(newArr);
    setActiveIndices([]);
    setSortedIndices([]);
  };

  const runSorting = async () => {
    playClickSound();
    setIsSorting(true);
    setSortedIndices([]);

    const arr = [...array];
    const n = arr.length;

    if (algorithm === 'bubble') {
      for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
          setActiveIndices([j, j + 1]);
          playKeypressSound();
          await new Promise((r) => setTimeout(r, 220));

          if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            setArray([...arr]);
          }
        }
        setSortedIndices((prev) => [...prev, n - i - 1]);
      }
      setSortedIndices(Array.from({ length: n }, (_, idx) => idx));
    } else if (algorithm === 'selection') {
      for (let i = 0; i < n; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
          setActiveIndices([i, j]);
          playKeypressSound();
          await new Promise((r) => setTimeout(r, 200));

          if (arr[j] < arr[minIdx]) {
            minIdx = j;
          }
        }
        let temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
        setArray([...arr]);
        setSortedIndices((prev) => [...prev, i]);
      }
    }

    setActiveIndices([]);
    setIsSorting(false);
    playSuccessChime();
  };

  return (
    <section id="dsa-visualizer" style={{ padding: '90px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Computer Science Sandbox</span>
          <MaskedHeading text="DSA Sorting Visualizer" fontSize="clamp(2rem, 5vw, 3rem)" />
          <p className="section-subtitle">
            An interactive Data Structures & Algorithms visualizer built to demonstrate algorithmic efficiency and step-by-step sorting logic.
          </p>
        </div>

        {/* Visualizer Box */}
        <GlassSurface className="glass-panel" style={{ maxWidth: '850px', margin: '0 auto', padding: '32px' }}>
          {/* Controls Bar */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '30px' }}>
            <div style={{ display: 'flex', gap: '10px' }}>
              <select
                value={algorithm}
                onChange={(e) => setAlgorithm(e.target.value)}
                disabled={isSorting}
                style={{
                  background: 'rgba(22, 22, 22, 0.9)',
                  color: 'var(--soft-pearl)',
                  border: '1px solid var(--warm-sand)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '8px 14px',
                  fontSize: '0.88rem',
                  fontFamily: 'var(--font-mono)',
                  cursor: 'pointer',
                  outline: 'none'
                }}
              >
                <option value="bubble">Bubble Sort Algorithm (O(n²))</option>
                <option value="selection">Selection Sort Algorithm (O(n²))</option>
              </select>

              <button onClick={generateRandomArray} disabled={isSorting} className="btn btn-secondary btn-sm">
                <RotateCcw size={15} />
                <span>Shuffle Array</span>
              </button>
            </div>

            <button onClick={runSorting} disabled={isSorting} className="btn btn-primary btn-sm">
              <Play size={15} />
              <span>{isSorting ? 'Sorting in Progress...' : 'Start Sorting'}</span>
            </button>
          </div>

          {/* Array Visualizer Bars */}
          <div
            style={{
              height: '240px',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              gap: '12px',
              padding: '20px',
              background: 'rgba(15, 15, 20, 0.8)',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-glass)',
              marginBottom: '20px'
            }}
          >
            {array.map((val, idx) => {
              const isActive = activeIndices.includes(idx);
              const isSorted = sortedIndices.includes(idx);

              let barBg = 'var(--crimson-depth)';
              if (isSorted) barBg = 'var(--accent-emerald)';
              else if (isActive) barBg = 'var(--warm-sand)';

              return (
                <div
                  key={idx}
                  style={{
                    flex: 1,
                    maxWidth: '45px',
                    height: `${val}%`,
                    background: barBg,
                    borderRadius: '6px 6px 0 0',
                    transition: 'height 0.2s ease, background-color 0.2s ease',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    paddingBottom: '6px',
                    boxShadow: isActive ? '0 0 15px var(--warm-sand)' : 'none'
                  }}
                >
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--soft-pearl)', fontWeight: 700 }}>
                    {val}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Status Indicator */}
          <div style={{ textAlign: 'center', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
            {isSorting ? (
              <span style={{ color: 'var(--warm-sand)', fontWeight: 600 }}>
                ⚡ Swapping & Comparing Array Elements...
              </span>
            ) : sortedIndices.length === array.length ? (
              <span style={{ color: 'var(--accent-emerald)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} /> Array Successfully Sorted!
              </span>
            ) : (
              <span>Click "Start Sorting" to visualize algorithm execution</span>
            )}
          </div>
        </GlassSurface>
      </div>
    </section>
  );
}
