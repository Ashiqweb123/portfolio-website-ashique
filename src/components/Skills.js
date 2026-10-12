import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const frontendSkills = [
    { name: 'HTML5', percentage: 95 },
    { name: 'CSS3 / SCSS', percentage: 90 },
    { name: 'JavaScript (ES6+)', percentage: 85 },
    { name: 'React.js', percentage: 80 },
    { name: 'Tailwind CSS', percentage: 90 }
  ];

  const backendSkills = [
    { name: 'Node.js', percentage: 60 },
    { name: 'Firebase', percentage: 70 },
    { name: 'MongoDB', percentage: 75 }
  ];

  const tools = [
    'Git & GitHub',
    'VS Code',
    'Figma',
    'Postman',
    'NPM / Yarn',
    'Vercel',
    'Chrome DevTools'
  ];

  const SkillBar = ({ skill, color = "bg-blue-500" }) => (
    <div className="relative">
      <div className="flex justify-between mb-2">
        <span className="font-medium text-slate-700 dark:text-gray-300">{skill.name}</span>
        <span className="text-sm text-slate-500 dark:text-gray-400">{skill.percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
        <motion.div 
          className={`${color} h-2 rounded-full`}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.percentage}%` }}
          viewport={{ once: true }}
          transition={{ 
            duration: 1, 
            ease: "easeOut",
            delay: 0.2
          }}
        />
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-background-light dark:bg-background-dark" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Technical Proficiency</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">My Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities and the technologies I use to build modern digital products.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Frontend Skills */}
          <motion.div 
            className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col h-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">web</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Frontend</h3>
            </div>
            <div className="space-y-6">
              {frontendSkills.map((skill, index) => (
                <div key={index}>
                  <SkillBar skill={skill} color="bg-blue-500" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Backend Skills */}
          <motion.div 
            className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col h-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">database</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Backend Familiarity</h3>
            </div>
            <div className="space-y-6">
              {backendSkills.map((skill, index) => (
                <div key={index}>
                  <SkillBar skill={skill} color="bg-purple-500" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Others */}
          <motion.div 
            className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col h-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">build</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Tools & Others</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.3, 
                    delay: 0.4 + index * 0.05,
                    ease: "easeOut"
                  }}
                >
                  <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span>
                  <span className="text-sm font-medium text-slate-700 dark:text-gray-300">{tool}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;