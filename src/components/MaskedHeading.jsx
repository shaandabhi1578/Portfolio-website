import React from 'react';

export default function MaskedHeading({
  text = 'Designed in the details',
  src = 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
  fillScale = 1.25,
  align = 'center',
  weight = 800,
  tracking = -0.03,
  lineHeight = 1.06,
  fontSize = 'clamp(2.5rem, 6.5vw, 4.8rem)',
  style = {}
}) {
  return (
    <div
      style={{
        width: '100%',
        textAlign: align,
        overflow: 'hidden',
        padding: '20px 0',
        ...style
      }}
    >
      <h2
        style={{
          fontFamily: 'Syne, sans-serif',
          fontWeight: weight,
          letterSpacing: `${tracking}em`,
          lineHeight: lineHeight,
          fontSize: fontSize,
          backgroundImage: `url(${src})`,
          backgroundSize: `${fillScale * 100}% auto`,
          backgroundPosition: 'center',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          textShadow: '0 10px 30px rgba(113, 0, 20, 0.4)',
          transition: 'all 0.4s ease',
          display: 'inline-block'
        }}
        className="masked-heading-text"
      >
        {text}
      </h2>
    </div>
  );
}
