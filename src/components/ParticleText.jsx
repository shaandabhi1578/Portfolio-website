import React, { useEffect, useRef } from 'react';

export default function ParticleText({
  text = 'Shaan Dabhi',
  particleSize = 2,
  density = 4,
  color = '#F2F1ED',
  highlightColor = '#B38F6F',
  scatter = 150,
  gatherDuration = 1200,
  pointerRepel = 35,
  repelRadius = 100,
  fontSize = 'clamp(2.5rem, 7vw, 4.5rem)',
  fontWeight = 800,
  fontFamily = 'Syne, sans-serif',
  glow = false,
  style = {}
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight || 300);

    const offscreen = document.createElement('canvas');
    const offCtx = offscreen.getContext('2d');
    offscreen.width = width;
    offscreen.height = height;

    // Render Text to Offscreen Canvas to sample pixel coordinates
    offCtx.fillStyle = '#ffffff';
    offCtx.font = `${fontWeight} 52px ${fontFamily}`;
    offCtx.textAlign = 'center';
    offCtx.textBaseline = 'middle';
    offCtx.fillText(text, width / 2, height / 2);

    const imgData = offCtx.getImageData(0, 0, width, height);
    const particles = [];
    const step = Math.max(2, Math.floor(6 - density));

    for (let y = 0; y < height; y += step) {
      for (let x = 0; x < width; x += step) {
        const index = (y * width + x) * 4;
        const alpha = imgData.data[index + 3];
        if (alpha > 128) {
          const originX = x;
          const originY = y;
          particles.push({
            x: originX + (Math.random() - 0.5) * scatter,
            y: originY + (Math.random() - 0.5) * scatter,
            originX,
            originY,
            vx: 0,
            vy: 0,
            color: Math.random() > 0.3 ? color : highlightColor
          });
        }
      }
    }

    let mouse = { x: -9999, y: -9999 };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    let isIntersecting = true;
    const observer = new IntersectionObserver(([entry]) => {
      isIntersecting = entry.isIntersecting;
    }, { threshold: 0 });
    observer.observe(canvas);

    let startTime = performance.now();
    let lastFrame = 0;

    const animate = (now) => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isIntersecting) return;
      if (now - lastFrame < 16) return;
      lastFrame = now;

      ctx.clearRect(0, 0, width, height);

      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / gatherDuration);
      const ease = 1 - Math.pow(1 - progress, 3); // easeOutCubic

      particles.forEach((p) => {
        // Gather towards origin
        const targetX = p.originX;
        const targetY = p.originY;

        // Current base position
        let currentX = p.x + (targetX - p.x) * (0.05 * ease + 0.05);
        let currentY = p.y + (targetY - p.y) * (0.05 * ease + 0.05);

        // Repel from mouse
        const dx = mouse.x - currentX;
        const dy = mouse.y - currentY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < repelRadius && dist > 0) {
          const force = (repelRadius - dist) / repelRadius;
          const angle = Math.atan2(dy, dx);
          currentX -= Math.cos(angle) * force * pointerRepel;
          currentY -= Math.sin(angle) * force * pointerRepel;
        }

        p.x = currentX;
        p.y = currentY;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, particleSize, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      observer.disconnect();
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [text, density, color, highlightColor, scatter, gatherDuration]);

  return (
    <div style={{ width: '100%', height: '180px', position: 'relative', overflow: 'hidden', ...style }}>
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
    </div>
  );
}
