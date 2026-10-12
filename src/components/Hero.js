import React from 'react';
import { motion } from 'framer-motion';
import { socialLinks, personalInfo } from '../config/socialLinks';
import { GitHubIcon, LinkedInIcon, DownloadIcon } from './Icons';
import TypingAnimation from './TypingAnimation';
import heroImg from "../../src/assets/images/heroImage.png";

const Hero = () => {
  const handleDownloadResume = () => {
    // Open resume in new tab
    window.open('https://drive.google.com/file/d/1o2tkY4Bxm7r_aNzZnVU6sDRfp2WPqUEj/view?usp=sharing', '_blank');
  };

  return (
    <section id="hero" className="flex flex-col justify-center relative pt-20">
      {/* Simple background gradient */}
      <div className="absolute top-20 right-0 -z-10 opacity-10 dark:opacity-5 overflow-hidden pointer-events-none">
        <div className="w-[600px] h-[600px] bg-primary rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4"></div>
      </div>
      
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center min-h-[calc(100vh-80px)] py-12 lg:py-0 gap-12 lg:gap-20">
        <div className="flex-1 text-center lg:text-left z-10">
          <motion.div 
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for work
          </motion.div>
          
          <motion.h2 
            className="text-lg md:text-xl font-medium text-slate-500 dark:text-gray-400 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Hi, I am
          </motion.h2>
          
          <motion.h1 
            className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <span className="block">{personalInfo.name}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              <TypingAnimation 
                texts={personalInfo.designations}
                speed={120}
                deleteSpeed={80}
                pauseTime={2000}
              />
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-base sm:text-lg text-slate-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            I craft high-performance, responsive web applications with modern technologies. Specialized in building seamless digital experiences that live on the web.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            <button 
              onClick={handleDownloadResume}
              className="h-12 px-8 rounded-lg bg-primary text-white font-bold text-base shadow-lg hover:shadow-primary/25 hover:bg-blue-600 transition-all duration-300 flex items-center gap-2"
            >
              <DownloadIcon className="w-5 h-5" />
              Download Resume
            </button>
            
            <div className="flex items-center gap-4 px-4">
              <a 
                href={socialLinks.github} 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub" 
                className="h-12 w-12 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-gray-800 text-slate-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary hover:bg-primary/10 dark:hover:bg-primary/10 transition-all duration-300"
              >
                <GitHubIcon className="w-6 h-6" />
              </a>
              <a 
                href={socialLinks.linkedin} 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn" 
                className="h-12 w-12 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-gray-800 text-slate-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary hover:bg-primary/10 dark:hover:bg-primary/10 transition-all duration-300"
              >
                <LinkedInIcon className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="flex-1 w-full relative max-w-lg lg:max-w-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          {/* Simple background glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-purple-500/10 rounded-2xl rotate-3 scale-105 blur-2xl -z-10"></div>
          
          <div className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-800 shadow-2xl">
            <img 
              alt="Portrait of frontend developer Rabiul Azim smiling confidently" 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
              src={heroImg}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;