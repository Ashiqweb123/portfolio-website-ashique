import React from 'react';
import { motion } from 'framer-motion';

// Simple fade in animation wrapper
export const FadeIn = ({ children, delay = 0, direction = 'up', className = "" }) => {
  const directions = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { y: 0, x: 30 },
    right: { y: 0, x: -30 }
  };

  return (
    <motion.div
      className={className}
      initial={{ 
        opacity: 0, 
        ...directions[direction]
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        x: 0 
      }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
};

// Simple scale animation for cards
export const ScaleOnHover = ({ children, className = "" }) => {
  return (
    <motion.div
      className={className}
      whileHover={{ 
        scale: 1.02,
        y: -5
      }}
      transition={{ 
        duration: 0.2,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
};

// Simple button hover animation
export const ButtonHover = ({ children, className = "" }) => {
  return (
    <motion.button
      className={className}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ 
        duration: 0.2,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.button>
  );
};

// Simple stagger animation for lists
export const StaggerContainer = ({ children, className = "" }) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, className = "" }) => {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.5,
            ease: "easeOut"
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

// Simple progress bar animation
export const ProgressBar = ({ percentage, color = "bg-primary", className = "" }) => {
  return (
    <div className={`w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden ${className}`}>
      <motion.div 
        className={`${color} h-2 rounded-full`}
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        viewport={{ once: true }}
        transition={{ 
          duration: 1.2, 
          ease: "easeOut",
          delay: 0.2
        }}
      />
    </div>
  );
};