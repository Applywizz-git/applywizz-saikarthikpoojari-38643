import React, { useState } from 'react';

interface TiltProps {
  children: React.ReactNode;
  className?: string;
  tiltMaxAngleX?: number;
  tiltMaxAngleY?: number;
  perspective?: number;
}

export const Tilt: React.FC<TiltProps> = ({
  children,
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`editorial-tilt w-full h-full ${className} ${isHovered ? 'is-hot' : ''}`}
    >
      {children}
    </div>
  );
};
