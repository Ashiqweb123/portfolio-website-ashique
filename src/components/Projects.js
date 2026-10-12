import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowForwardIcon } from './Icons';
import garmentsImage from "../assets/images/garments order system.png";
import krishiImage from "../assets/images/krishi-app.png";
import heroAppImage from "../assets/images/hero app.png";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: 'Garments Order Tracking System',
      description: 'A full-stack Garments Order Tracking System designed for managing garments products, orders, and users with role-based access.',
      image: garmentsImage,
      technologies: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Firebase'],
      features: [
        'Users can browse products, view details, and place orders',
        'Admins/Managers can manage products and orders',
        'Role-based dashboard access'
      ],
      links: {
        client: 'https://github.com/Ashiqweb123/Garments-product-tracking-client',
        server: 'https://github.com/Ashiqweb123/garments-tracking2-server',
        live: 'https://garments-tracking-system.web.app/'
      }
    },
    {
      title: 'Krishi Link App',
      description: 'A full-stack MERN agriculture marketplace where farmers can post their crops and buyers can send interest requests.',
      image: krishiImage,
      technologies: ['React', 'React Router', 'Context API', 'Tailwind CSS', 'Recharts', 'Node.js', 'MongoDB'],
      features: [
        'Buyers can send interest requests',
        'Pie Chart visualization for analytics',
        'Private routes protection for secure access'
      ],
      links: {
        client: 'https://github.com/Ashiqweb123/krishi-client-site',
        server: 'https://github.com/Ashiqweb123/krishi-server',
        live: 'https://krishiapp-project.netlify.app/'
      }
    },
    {
      title: 'Hero Apps Project',
      description: 'A simple and interactive web application to explore and install your favorite apps. See ratings, reviews, and download details in one place.',
      image: heroAppImage,
      technologies: ['React', 'Tailwind CSS'],
      features: [
        'Browse and search apps with live filtering',
        'View app ratings and user reviews',
        'Download apps directly from the platform'
      ],
      links: {
        client: 'https://github.com/Ashiqweb123/hero-apps-react-project',
        live: 'https://my-top-app.netlify.app/'
      }
    }
  ];

  const getTechColor = (tech) => {
    const colors = {
      'HTML': 'text-orange-600 bg-orange-100 dark:bg-orange-900/30 dark:text-orange-400',
      'CSS': 'text-blue-600 bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400',
      'React': 'text-blue-600 bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400',
      'Tailwind CSS': 'text-cyan-600 bg-cyan-100 dark:bg-cyan-900/30 dark:text-cyan-400',
      'Node.js': 'text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400',
      'MongoDB': 'text-emerald-600 bg-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-400',
      'Firebase': 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30 dark:text-yellow-400',
      'React Router': 'text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-400',
      'Context API': 'text-purple-600 bg-purple-100 dark:bg-purple-900/30 dark:text-purple-400',
      'Recharts': 'text-indigo-600 bg-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-400'
    };
    return colors[tech] || 'text-gray-600 bg-gray-100 dark:bg-gray-900/30 dark:text-gray-400';
  };

  return (
    <section className="py-20 bg-white dark:bg-surface-dark/50" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">My Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Featured Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of full-stack projects demonstrating my expertise in modern web development.
          </p>
        </motion.div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="group bg-background-light dark:bg-background-dark rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image with Overlay */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  src={project.image}
                />
                
                {/* Hover Overlay with Live Link */}
                <AnimatePresence>
                  {hoveredProject === index && (
                    <motion.div
                      className="absolute inset-0 bg-primary/90 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2"
                        initial={{ scale: 0.8, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.8, y: 20 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>View Live</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </motion.a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Technologies */}
                <div className="flex gap-2 mb-4 flex-wrap">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className={`px-3 py-1 text-xs font-medium rounded-full ${getTechColor(tech)}`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 text-xs font-medium rounded-full text-gray-600 bg-gray-100 dark:bg-gray-800 dark:text-gray-400">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                
                {/* Title & Description */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-gray-400 text-sm mb-4 flex-grow">
                  {project.description}
                </p>
                
                {/* Features */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-slate-700 dark:text-gray-300 mb-2">Key Features:</p>
                  <ul className="text-xs text-slate-600 dark:text-gray-400 space-y-1">
                    {project.features.slice(0, 2).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Links */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.links.client && (
                    <a
                      href={project.links.client}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[80px] text-center px-3 py-2 text-xs font-medium bg-slate-100 dark:bg-gray-800 text-slate-700 dark:text-gray-300 rounded-lg hover:bg-primary hover:text-white transition-colors duration-200"
                    >
                      Client
                    </a>
                  )}
                  {project.links.server && (
                    <a
                      href={project.links.server}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[80px] text-center px-3 py-2 text-xs font-medium bg-slate-100 dark:bg-gray-800 text-slate-700 dark:text-gray-300 rounded-lg hover:bg-primary hover:text-white transition-colors duration-200"
                    >
                      Server
                    </a>
                  )}
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[80px] text-center px-3 py-2 text-xs font-medium bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center gap-1"
                  >
                    <span>Live</span>
                    <ArrowForwardIcon className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;