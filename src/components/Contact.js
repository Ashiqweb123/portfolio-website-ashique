import { motion } from 'framer-motion';
import { EmailIcon, PhoneIcon, WhatsAppIcon } from './Icons';
import ContactFormSimple from './ContactFormSimple';

const Contact = () => {
  const contactMethods = [
    {
      icon: EmailIcon,
      title: 'Email Address',
      description: 'Send me an email anytime!',
      value: 'rabiulazim430@gmail.com',
      link: 'mailto:rabiulazim430@gmail.com',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30',
      textColor: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: PhoneIcon,
      title: 'Phone Number',
      description: 'Call me during business hours.',
      value: '+8801558915672',
      link: 'tel:+8801558915672',
      bgColor: 'bg-green-100 dark:bg-green-900/30',
      textColor: 'text-green-600 dark:text-green-400'
    },
    {
      icon: WhatsAppIcon,
      title: 'WhatsApp',
      description: 'Message me for quick queries.',
      value: '+880 1869614405',
      link: 'https://wa.me/8801869614405',
      bgColor: 'bg-emerald-100 dark:bg-emerald-900/30',
      textColor: 'text-emerald-600 dark:text-emerald-400'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-surface-dark/50" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Contact Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out to me for any inquiries, collaborations, or just to say hello!
          </p>
        </motion.div>
        
        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <motion.a 
                key={index}
                href={method.link}
                target={method.link.startsWith('https') ? '_blank' : '_self'}
                rel={method.link.startsWith('https') ? 'noopener noreferrer' : ''}
                className="p-6 rounded-xl bg-background-light dark:bg-background-dark border border-gray-100 dark:border-gray-800 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 group flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className={`w-14 h-14 rounded-full ${method.bgColor} ${method.textColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-7 h-7" />
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{method.title}</h3>
                <p className="text-slate-600 dark:text-gray-400 mb-3 text-sm">{method.description}</p>
                <span className="text-primary font-medium group-hover:underline text-sm">{method.value}</span>
              </motion.a>
            );
          })}
        </div>

        {/* Contact Form */}
        <ContactFormSimple />
      </div>
    </section>
  );
};

export default Contact;