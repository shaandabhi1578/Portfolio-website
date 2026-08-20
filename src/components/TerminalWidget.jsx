import React, { useState, useRef, useEffect } from 'react';
import { TERMINAL_COMMANDS } from '../data/portfolioData';
import { Terminal as TerminalIcon, Play, RotateCcw, Sparkles } from 'lucide-react';

export default function TerminalWidget() {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { text: 'Shaan Dabhi Cyber Shell v2.4.0 (x86_64-apple-darwin)', type: 'system' },
    { text: 'Type "help" to view available developer console commands.', type: 'info' }
  ]);
  const [matrixMode, setMatrixMode] = useState(false);

  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdStr) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    const newHistory = [...history, { text: `shaandabhi@dev-box:~$ ${cmdStr}`, type: 'user' }];

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    if (trimmed === 'matrix') {
      setMatrixMode(!matrixMode);
      newHistory.push({
        text: matrixMode ? '[MATRIX] Digital rain disabled.' : '[MATRIX] Digital rain protocol initialized! 🟢🟢🟢',
        type: 'matrix'
      });
    } else if (trimmed === 'sudo') {
      newHistory.push({
        text: 'Permission denied: User is already root administrator of this web application 🚀',
        type: 'system'
      });
    } else if (TERMINAL_COMMANDS[trimmed]) {
      newHistory.push({ text: TERMINAL_COMMANDS[trimmed], type: 'output' });
    } else {
      newHistory.push({
        text: `Command not found: "${trimmed}". Type "help" for a list of valid commands.`,
        type: 'error'
      });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand(inputVal);
  };

  return (
    <section id="terminal" style={{ padding: '90px 0', position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Interactive Sandbox</span>
          <h2 className="section-title">
            Developer <span className="gradient-text">Console Sandbox</span>
          </h2>
          <p className="section-subtitle">
            Experience an interactive cyber terminal. Type or click commands below to query portfolio telemetry.
          </p>
        </div>

        {/* Terminal Box */}
        <div
          className="glass-panel"
          style={{
            maxWidth: '850px',
            margin: '0 auto',
            overflow: 'hidden',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4)',
            border: matrixMode ? '1px solid #10b981' : '1px solid var(--border-glow)'
          }}
        >
          {/* Terminal Window Header */}
          <div
            style={{
              padding: '12px 18px',
              background: 'rgba(0, 0, 0, 0.4)',
              borderBottom: '1px solid var(--border-glass)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }} />
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981' }} />
              <span style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginLeft: '8px' }}>
                shaandabhi@dev-box:~ (zsh)
              </span>
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
              {['help', 'skills', 'projects', 'matrix', 'clear'].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => handleCommand(cmd)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-glass)',
                    borderRadius: '4px',
                    color: cmd === 'matrix' && matrixMode ? '#10b981' : 'var(--text-secondary)',
                    padding: '2px 8px',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    cursor: 'pointer'
                  }}
                >
                  {cmd}
                </button>
              ))}
            </div>
          </div>

          {/* Terminal Content Screen */}
          <div
            onClick={() => inputRef.current?.focus()}
            style={{
              padding: '20px',
              height: '320px',
              overflowY: 'auto',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.9rem',
              lineHeight: 1.6,
              background: matrixMode ? '#021207' : 'rgba(5, 7, 14, 0.9)',
              color: matrixMode ? '#10b981' : 'var(--text-primary)'
            }}
          >
            {history.map((item, idx) => (
              <div
                key={idx}
                style={{
                  marginBottom: '8px',
                  whiteSpace: 'pre-wrap',
                  color:
                    item.type === 'user'
                      ? 'var(--accent-cyan)'
                      : item.type === 'error'
                      ? '#f87171'
                      : item.type === 'matrix'
                      ? '#10b981'
                      : 'var(--text-secondary)'
                }}
              >
                {item.text}
              </div>
            ))}

            {/* Current Prompt Input */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
              <span style={{ color: matrixMode ? '#10b981' : 'var(--accent-indigo)', fontWeight: 600 }}>
                shaandabhi@dev-box:~$
              </span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                style={{
                  flex: 1,
                  background: 'none',
                  border: 'none',
                  outline: 'none',
                  color: matrixMode ? '#34d399' : 'var(--text-primary)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.9rem'
                }}
                autoFocus
              />
            </form>
            <div ref={bottomRef} />
          </div>
        </div>
      </div>
    </section>
  );
}
