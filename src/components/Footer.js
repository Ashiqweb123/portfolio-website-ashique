import React from 'react';
import { socialLinks } from '../config/socialLinks';
import { GitHubIcon, LinkedInIcon, EmailIcon } from './Icons';

const Footer = () => {
  const socialLinksData = [
    { icon: GitHubIcon, href: socialLinks.github, label: 'GitHub' },
    { icon: LinkedInIcon, href: socialLinks.linkedin, label: 'LinkedIn' },
    { icon: EmailIcon, href: `mailto:${socialLinks.email}`, label: 'Email' }
  ];

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-background-light dark:bg-background-dark py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 dark:text-gray-500 text-sm">
          © 2023 Rabiul Azim. All rights reserved.
        </p>
        
        <div className="flex items-center gap-6">
          {socialLinksData.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <a 
                key={index}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : '_self'}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                aria-label={link.label}
                className="text-slate-400 hover:text-primary transition-colors"
              >
                <IconComponent className="w-5 h-5" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;