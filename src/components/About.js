import React from 'react';

const About = () => {
  const features = [
    {
      icon: 'devices',
      title: 'Responsive Design',
      description: 'Creating layouts that adapt flawlessly to any screen size, from mobile phones to large desktop monitors.'
    },
    {
      icon: 'rocket_launch',
      title: 'Performance Optimization',
      description: 'Utilizing best practices to ensure fast load times and smooth interactions for a better user experience.'
    },
    {
      icon: 'code',
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code that is easy for teams to work with.'
    },
    {
      icon: 'api',
      title: 'API Integration',
      description: 'Seamlessly connecting frontend applications with backend services to fetch and display dynamic data.'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-surface-dark/50" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">My Background</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          <div className="flex-1 space-y-6 text-slate-600 dark:text-gray-300 leading-relaxed">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              I'm Rabiul Azim, a passionate Frontend Developer
            </h3>
            <p>
              With a strong foundation in modern web technologies, I specialize in creating intuitive, dynamic, and responsive user interfaces. My journey in web development started with a curiosity for how websites work, which quickly evolved into a career dedicated to crafting exceptional digital experiences.
            </p>
            <p>
              I have extensive experience working with JavaScript, React, Tailwind CSS, and other frontend tools. My approach combines technical expertise with a keen eye for design, ensuring that every project I work on is not only functional but also visually appealing and user-friendly.
            </p>
            <p>
              Beyond coding, I am a problem solver at heart. I enjoy tackling complex challenges and finding efficient solutions. I am constantly learning and adapting to new technologies to stay ahead in the ever-evolving landscape of frontend development.
            </p>
          </div>
          
          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-xl bg-background-light dark:bg-background-dark border border-gray-100 dark:border-gray-800 hover:border-primary/50 dark:hover:border-primary/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined">{feature.icon}</span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h4>
                  <p className="text-sm text-slate-500 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;