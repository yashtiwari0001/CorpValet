import React from 'react';

const AnimatedGif = ({ src, alt, width, height, style, className }) => (
  <img
    src={src}
    alt={alt}
    className={className}
    style={{ width: width || 'auto', height: height || 'auto', ...style }}
  />
);

export default AnimatedGif;
