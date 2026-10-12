import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const LightEffects = () => {
  const containerRef = useRef(null);
  const lightsRef = useRef([]);

  useEffect(() => {
    // Create floating light particles
    const createLights = () => {
      const container = containerRef.current;
      if (!container) return;

      // Clear existing lights
      lightsRef.current.forEach(light => light.remove());
      lightsRef.current = [];

      // Create multiple light particles
      for (let i = 0; i < 15; i++) {
        const light = document.createElement('div');
        light.className = 'absolute rounded-full pointer-events-none';
        light.style.background = `radial-gradient(circle, rgba(43, 108, 238, ${Math.random() * 0.3 + 0.1}) 0%, transparent 70%)`;
        light.style.width = `${Math.random() * 100 + 50}px`;
        light.style.height = light.style.width;
        light.style.left = `${Math.random() * 100}%`;
        light.style.top = `${Math.random() * 100}%`;
        light.style.filter = 'blur(1px)';
        
        container.appendChild(light);
        lightsRef.current.push(light);

        // Animate each light
        gsap.to(light, {
          x: `${Math.random() * 200 - 100}px`,
          y: `${Math.random() * 200 - 100}px`,
          opacity: Math.random() * 0.5 + 0.2,
          scale: Math.random() * 0.5 + 0.5,
          duration: Math.random() * 10 + 5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      }
    };

    createLights();

    return () => {
      lightsRef.current.forEach(light => light.remove());
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

// Spotlight component for sections
export const Spotlight = ({ children, className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Animated spotlight background */}
      <motion.div
        className="absolute inset-0 opacity-20 dark:opacity-10"
        animate={{
          background: [
            "radial-gradient(circle at 20% 20%, rgba(43, 108, 238, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 80%, rgba(43, 108, 238, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)"
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      {children}
    </div>
  );
};

// Glowing orb component
export const GlowingOrb = ({ size = "w-32 h-32", color = "primary", className = "" }) => {
  return (
    <motion.div
      className={`absolute rounded-full ${size} ${className}`}
      style={{
        background: `radial-gradient(circle, rgba(43, 108, 238, 0.3) 0%, rgba(43, 108, 238, 0.1) 40%, transparent 70%)`,
        filter: 'blur(2px)'
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};

// Light beam component
export const LightBeam = ({ direction = "diagonal", className = "" }) => {
  const beamVariants = {
    diagonal: "linear-gradient(45deg, transparent 0%, rgba(43, 108, 238, 0.1) 50%, transparent 100%)",
    horizontal: "linear-gradient(90deg, transparent 0%, rgba(43, 108, 238, 0.1) 50%, transparent 100%)",
    vertical: "linear-gradient(180deg, transparent 0%, rgba(43, 108, 238, 0.1) 50%, transparent 100%)"
  };

  return (
    <motion.div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        background: beamVariants[direction],
        mixBlendMode: 'screen'
      }}
      animate={{
        opacity: [0, 0.5, 0],
        scale: [0.8, 1.1, 0.8]
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};

// Particle system component
export const ParticleSystem = ({ count = 20, className = "" }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default LightEffects;