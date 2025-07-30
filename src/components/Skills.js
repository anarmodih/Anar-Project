import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Project Management',
      icon: '📊',
      skills: [
        { name: 'Agile/Scrum', level: 95 },
        { name: 'Kanban', level: 90 },
        { name: 'Waterfall', level: 85 },
        { name: 'Risk Management', level: 92 },
        { name: 'Budget Control', level: 88 }
      ]
    },
    {
      title: 'Leadership & Soft Skills',
      icon: '🎯',
      skills: [
        { name: 'Team Leadership', level: 95 },
        { name: 'Stakeholder Management', level: 93 },
        { name: 'Communication', level: 96 },
        { name: 'Problem Solving', level: 94 },
        { name: 'Mentoring', level: 90 }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: '🛠️',
      skills: [
        { name: 'Jira', level: 95 },
        { name: 'Monday.com', level: 88 },
        { name: 'ClickUp', level: 85 },
        { name: 'Zoho Projects', level: 82 },
        { name: 'Trello', level: 90 }
      ]
    },
    {
      title: 'Technical Knowledge',
      icon: '💻',
      skills: [
        { name: 'SaaS Architecture', level: 85 },
        { name: 'E-commerce', level: 88 },
        { name: 'CMS', level: 82 },
        { name: 'PWA', level: 80 },
        { name: 'API Integration', level: 78 }
      ]
    }
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

  const SkillBar = ({ skill, index }) => (
    <motion.div
      variants={itemVariants}
      className="mb-4"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-medium">{skill.name}</span>
        <span className="text-primary-400 font-semibold">{skill.level}%</span>
      </div>
      <div className="w-full bg-slate-700 rounded-full h-2">
        <motion.div
          className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="section-padding bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary-500/5 rounded-full blur-3xl"></div>
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
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A comprehensive skill set built through years of hands-on experience in project management and technology leadership
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="card"
              >
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-3">{category.icon}</span>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar 
                      key={skillIndex} 
                      skill={skill} 
                      index={categoryIndex * 5 + skillIndex} 
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="card bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border-primary-500/30">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Additional Expertise</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  'PMP® Certification',
                  'Digital Transformation',
                  'Process Optimization',
                  'Quality Assurance',
                  'Vendor Management',
                  'Budget Planning',
                  'Resource Allocation',
                  'Change Management',
                  'Requirements Analysis',
                  'Performance Metrics',
                  'Client Relations',
                  'Cross-functional Teams'
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-white/5 rounded-lg p-3 text-center hover:bg-white/10 transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-gray-300 text-sm font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <p className="text-gray-400 mb-6">
              Ready to bring these skills to your next project?
            </p>
            <button
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Start a Conversation
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;