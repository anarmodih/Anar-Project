import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { number: '6+', label: 'Years Experience' },
    { number: '48', label: 'Max Team Size' },
    { number: '100+', label: 'Projects Delivered' },
    { number: '99%', label: 'Success Rate' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="section-padding bg-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Passionate about delivering exceptional results through strategic project management and team leadership
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="card">
                <h3 className="text-2xl font-bold text-white mb-4">Professional Journey</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I am a PMP®-certified Project Manager with over <strong className="text-primary-400">6+ years</strong> in the IT industry and <strong className="text-secondary-400">4+ years</strong> leading Agile and Scrum-based delivery across SaaS, e-commerce, CMS, and mobile/web applications.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Throughout my career, I have successfully managed cross-functional teams of up to <strong className="text-primary-400">48 members</strong>, consistently delivering projects on time and within budget while driving digital transformation initiatives for global clients.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  My expertise lies in bridging the gap between technical teams and business stakeholders, ensuring seamless project execution and exceptional outcomes.
                </p>
              </div>

              <div className="card">
                <h3 className="text-2xl font-bold text-white mb-4">Core Strengths</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'Agile Leadership',
                    'Risk Management',
                    'Stakeholder Management',
                    'Budget Control',
                    'Team Building',
                    'Process Optimization',
                    'Quality Assurance',
                    'Digital Transformation'
                  ].map((strength, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                      <span className="text-gray-300">{strength}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="card text-center group hover:scale-110"
                  >
                    <div className="text-3xl md:text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="card">
                <h3 className="text-xl font-bold text-white mb-4">Current Focus</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-gray-300">Leading Digital Transformation Projects</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <span className="text-gray-300">Implementing Agile Best Practices</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <span className="text-gray-300">Mentoring Project Teams</span>
                  </div>
                </div>
              </div>

              <div className="card bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border-primary-500/30">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-2">Ready for New Challenges</h3>
                  <p className="text-gray-300 mb-4">
                    Looking for opportunities to drive innovation and lead high-performing teams
                  </p>
                  <button
                    onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                    className="btn-primary"
                  >
                    Let's Talk
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;