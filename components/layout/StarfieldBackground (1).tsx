'use client';

import React, { useState, useEffect, useMemo } from 'react';

interface Star {
  id: number;
  size: number;
  left: string;
  top: string;
  duration: string;
  delay: string;
  brightness: string;
}

interface GradientCircle {
  id: number;
  size: number;
  left: string;
  top: string;
  color: string;
  opacity: number;
  animationDuration: string;
  animationDelay: string;
}

const StarfieldBackground: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [gradients, setGradients] = useState<GradientCircle[]>([]);
  const starCount = 150;
  const gradientColors = useMemo(() => [
    { color: 'bg-primary', opacity: 0.15 }, // Tailwind class for primary color
    { color: 'bg-secondary', opacity: 0.15 }, // Tailwind class for secondary color
    { color: 'bg-purple-500', opacity: 0.15 } // Example additional color
  ], []);

  useEffect(() => {
    // Generate Stars
    const generatedStars: Star[] = [];
    for (let i = 0; i < starCount; i++) {
      const size = Math.random() * 2 + 1; // Slightly smaller stars
      generatedStars.push({
        id: i,
        size: size,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: `${Math.random() * 3 + 4}s`, // Adjusted duration
        delay: `${Math.random() * 5}s`,
        brightness: `${Math.random() * 0.4 + 0.2}`, // Dimmer stars
      });
    }
    setStars(generatedStars);

    // Generate Gradient Circles
    const generatedGradients: GradientCircle[] = [];
    gradientColors.forEach((colorInfo, index) => {
      const size = Math.random() * 400 + 300; // Adjusted size range
      generatedGradients.push({
        id: index,
        size: size,
        left: `${Math.random() * 80}%`, // Keep within bounds
        top: `${Math.random() * 80 - 10}%`, // Adjust vertical position
        color: colorInfo.color,
        opacity: colorInfo.opacity,
        animationDuration: `${8 + index * 2}s`,
        animationDelay: `${index * 1.5}s`,
      });
    });
    setGradients(generatedGradients);

  }, [gradientColors]); // Re-run if gradientColors changes (though it's memoized)

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star absolute bg-white rounded-full opacity-0 animate-twinkle"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: star.left,
            top: star.top,
            // CSS variables for animation properties defined in tailwind.config.js
            '--duration': star.duration,
            '--delay': star.delay,
            '--brightness': star.brightness,
          } as React.CSSProperties} // Type assertion needed for CSS variables
        />
      ))}

      {/* Gradient Circles */}
      {gradients.map((circle) => (
        <div
          key={circle.id}
          className={`gradient-circle absolute rounded-full filter blur-3xl ${circle.color} animate-float`}
          style={{
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            left: circle.left,
            top: circle.top,
            opacity: circle.opacity,
            animationDuration: circle.animationDuration,
            animationDelay: circle.animationDelay,
          }}
        />
      ))}
    </div>
  );
};

export default StarfieldBackground;