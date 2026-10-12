import React from 'react';

const Education = () => {
  return (
    <section className="py-20 bg-background-light dark:bg-background-dark" id="education">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Academic Background</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Educational Qualification</h2>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 group shadow-sm hover:shadow-md">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 text-center md:text-left">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-background-light dark:bg-background-dark shadow-sm flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 border border-gray-100 dark:border-gray-700">
                <span className="material-symbols-outlined text-3xl md:text-4xl text-primary">school</span>
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  BSc. in Computer Science Engineering
                </h3>
                <p className="text-lg text-primary font-medium">East Delta University</p>
              </div>
              
              <div className="flex-shrink-0">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-700 text-slate-600 dark:text-gray-300 text-sm font-medium whitespace-nowrap">
                  <span className="material-symbols-outlined text-lg text-primary">calendar_month</span>
                  Session: 2014-15
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;