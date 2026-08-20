import React, { useRef, useState } from 'react';

export default function TiltedCard({
  children,
  imageSrc,
  altText = 'Tilted card image',
  captionText,
  containerHeight = 'auto',
  containerWidth = '100%',
  imageHeight = '100%',
  imageWidth = '100%',
  rotateAmplitude = 14,
  scaleOnHover = 1.05,
  showTooltip = false,
  displayOverlayContent = false,
  overlayContent = null,
  style = {}
}) {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [scale, setScale] = useState(1);
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rX = ((mouseY - height / 2) / (height / 2)) * -rotateAmplitude;
    const rY = ((mouseX - width / 2) / (width / 2)) * rotateAmplitude;

    setRotateX(rX);
    setRotateY(rY);

    const glareX = (mouseX / width) * 100;
    const glareY = (mouseY / height) * 100;
    setGlare({ x: glareX, y: glareY, opacity: 0.35 });
  };

  const handleMouseEnter = () => {
    setScale(scaleOnHover);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setScale(1);
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px',
        width: containerWidth,
        height: containerHeight,
        cursor: 'pointer',
        ...style
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`,
          transition: 'transform 0.15s ease-out',
          borderRadius: 'var(--radius-md)',
          overflow: 'hidden',
          position: 'relative',
          border: '1px solid var(--border-glass)'
        }}
      >
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={altText}
            style={{
              width: imageWidth,
              height: imageHeight,
              objectFit: 'cover',
              display: 'block'
            }}
          />
        ) : (
          children
        )}

        {/* Dynamic Glare Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, ${glare.opacity}) 0%, transparent 70%)`,
            transition: 'opacity 0.2s ease-out'
          }}
        />

        {displayOverlayContent && overlayContent && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: '20px',
              background: 'linear-gradient(to top, rgba(22, 22, 22, 0.9) 0%, transparent 60%)',
              transform: 'translateZ(30px)'
            }}
          >
            {overlayContent}
          </div>
        )}
      </div>
    </div>
  );
}
