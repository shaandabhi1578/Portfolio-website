import React from 'react';

export default function GlassSurface({
  children,
  width = 'auto',
  height = 'auto',
  borderRadius = 18,
  displace = 0.5,
  distortionScale = -180,
  redOffset = 0,
  greenOffset = 10,
  blueOffset = 20,
  brightness = 50,
  opacity = 0.93,
  mixBlendMode = 'normal',
  className = '',
  style = {}
}) {
  return (
    <div
      className={`glass-surface ${className}`}
      style={{
        width: width,
        height: height,
        borderRadius: `${borderRadius}px`,
        background: `rgba(31, 26, 26, ${opacity * 0.7})`,
        backdropFilter: 'blur(24px) saturate(180%)',
        WebkitBackdropFilter: 'blur(24px) saturate(180%)',
        border: '1px solid rgba(242, 241, 237, 0.15)',
        boxShadow: `0 8px 32px 0 rgba(113, 0, 20, 0.3), inset 0 0 0 1px rgba(255, 255, 255, 0.1)`,
        mixBlendMode: mixBlendMode,
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        ...style
      }}
    >
      {/* Subtle Specular Refraction Layer */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: 'linear-gradient(135deg, rgba(242, 241, 237, 0.15) 0%, transparent 50%, rgba(113, 0, 20, 0.15) 100%)',
          borderRadius: `${borderRadius}px`
        }}
      />
      <div style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%' }}>
        {children}
      </div>
    </div>
  );
}
