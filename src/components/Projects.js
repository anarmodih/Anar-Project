import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { EyeIcon, CodeBracketIcon, UserGroupIcon, CalendarIcon } from '@heroicons/react/24/outline';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: 'Global E-commerce Platform Transformation',
      category: 'digital-transformation',
      client: 'Fortune 500 Retail Company',
      duration: '18 months',
      teamSize: '45 members',
      budget: '$2.5M',
      description: 'Led the complete digital transformation of a legacy e-commerce platform serving 500K+ users across 15 countries.',
      achievements: [
        'Reduced page load time by 60%',
        'Increased conversion rate by 35%',
        'Achieved 99.9% uptime',
        'Delivered 2 weeks ahead of schedule'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'MongoDB', 'Redis'],
      challenges: 'Legacy system integration, multi-timezone coordination, zero-downtime migration',
      outcome: 'Successfully migrated 2M+ products and 100K+ customers with zero data loss',
      image: '/api/placeholder/600/400',
      status: 'Completed'
    },
    {
      title: 'Healthcare SaaS Implementation',
      category: 'saas',
      client: 'Regional Healthcare Network',
      duration: '12 months',
      teamSize: '28 members',
      budget: '$1.8M',
      description: 'Managed end-to-end implementation of a comprehensive healthcare management SaaS solution for 50+ clinics.',
      achievements: [
        'Streamlined patient management for 200K+ patients',
        'Reduced administrative costs by 40%',
        'Improved patient satisfaction by 25%',
        'Achieved HIPAA compliance certification'
      ],
      technologies: ['Angular', 'Java', 'PostgreSQL', 'Docker', 'Kubernetes'],
      challenges: 'HIPAA compliance, data migration, staff training across multiple locations',
      outcome: 'Improved operational efficiency and patient care quality across the entire network',
      image: '/api/placeholder/600/400',
      status: 'Completed'
    },
    {
      title: 'Mobile Banking App Development',
      category: 'mobile',
      client: 'Regional Bank',
      duration: '10 months',
      teamSize: '20 members',
      budget: '$1.2M',
      description: 'Orchestrated the development of a secure mobile banking application with advanced features and biometric authentication.',
      achievements: [
        'Deployed to 100K+ active users',
        'Achieved 4.8/5 app store rating',
        'Reduced branch visits by 50%',
        'Passed security audits with zero critical issues'
      ],
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'AWS', 'Firebase'],
      challenges: 'Banking regulations compliance, security requirements, cross-platform compatibility',
      outcome: 'Enhanced customer experience and reduced operational costs for the bank',
      image: '/api/placeholder/600/400',
      status: 'Completed'
    },
    {
      title: 'Enterprise CMS Migration',
      category: 'cms',
      client: 'Media & Publishing Company',
      duration: '8 months',
      teamSize: '15 members',
      budget: '$800K',
      description: 'Led the migration of a legacy content management system to a modern, scalable solution handling 1M+ articles.',
      achievements: [
        'Migrated 1M+ articles with 100% data integrity',
        'Improved content publishing speed by 70%',
        'Reduced server costs by 45%',
        'Enhanced SEO performance by 50%'
      ],
      technologies: ['WordPress', 'PHP', 'MySQL', 'Elasticsearch', 'CDN'],
      challenges: 'Large-scale data migration, minimal downtime requirement, SEO preservation',
      outcome: 'Modernized content management workflow and improved website performance',
      image: '/api/placeholder/600/400',
      status: 'Completed'
    },
    {
      title: 'AI-Powered Analytics Dashboard',
      category: 'analytics',
      client: 'Tech Startup',
      duration: '6 months',
      teamSize: '12 members',
      budget: '$600K',
      description: 'Managed development of an AI-powered analytics dashboard providing real-time insights for business decision making.',
      achievements: [
        'Processed 10M+ data points daily',
        'Reduced report generation time by 80%',
        'Increased data accuracy by 95%',
        'Enabled real-time decision making'
      ],
      technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL', 'Redis'],
      challenges: 'Complex data integration, real-time processing, machine learning model optimization',
      outcome: 'Empowered data-driven decision making and improved business intelligence',
      image: '/api/placeholder/600/400',
      status: 'In Progress'
    },
    {
      title: 'Supply Chain Management System',
      category: 'enterprise',
      client: 'Manufacturing Company',
      duration: '14 months',
      teamSize: '35 members',
      budget: '$2.1M',
      description: 'Orchestrated implementation of an integrated supply chain management system across multiple manufacturing facilities.',
      achievements: [
        'Connected 25+ manufacturing facilities',
        'Reduced inventory costs by 30%',
        'Improved delivery accuracy by 40%',
        'Streamlined vendor management processes'
      ],
      technologies: ['Java', 'Spring Boot', 'Oracle', 'Kafka', 'Microservices'],
      challenges: 'Legacy system integration, multi-facility coordination, complex business logic',
      outcome: 'Optimized supply chain operations and reduced operational costs significantly',
      image: '/api/placeholder/600/400',
      status: 'Completed'
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'digital-transformation', label: 'Digital Transformation' },
    { key: 'saas', label: 'SaaS' },
    { key: 'mobile', label: 'Mobile' },
    { key: 'cms', label: 'CMS' },
    { key: 'analytics', label: 'Analytics' },
    { key: 'enterprise', label: 'Enterprise' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
    <section id="projects" className="section-padding bg-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-secondary-500/5 rounded-full blur-3xl"></div>
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
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Showcasing successful project deliveries that drove business transformation and innovation
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card group hover:scale-105"
                layout
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-primary-400 font-medium">{project.client}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-500/20 text-green-300' 
                      : 'bg-blue-500/20 text-blue-300'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Project Stats */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center text-gray-400">
                    <CalendarIcon className="w-4 h-4 mr-2" />
                    <span className="text-sm">{project.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <UserGroupIcon className="w-4 h-4 mr-2" />
                    <span className="text-sm">{project.teamSize}</span>
                  </div>
                  <div className="text-gray-400 text-sm">
                    Budget: <span className="text-primary-400 font-medium">{project.budget}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                {/* Key Achievements */}
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary-400 rounded-full mr-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-white/10 text-gray-300 rounded text-xs hover:bg-white/20 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Challenges & Outcome */}
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">Challenges:</h4>
                    <p className="text-gray-400 text-sm">{project.challenges}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">Outcome:</h4>
                    <p className="text-gray-400 text-sm">{project.outcome}</p>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>

          {/* Project Summary */}
          <motion.div variants={itemVariants} className="mt-20">
            <div className="card bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border-primary-500/30">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Project Portfolio Summary</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">100+</div>
                  <div className="text-gray-400 text-sm">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">$10M+</div>
                  <div className="text-gray-400 text-sm">Total Project Value</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">98%</div>
                  <div className="text-gray-400 text-sm">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">15+</div>
                  <div className="text-gray-400 text-sm">Industries Served</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <p className="text-gray-400 mb-6">
              Ready to discuss your next project?
            </p>
            <button
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Let's Start Your Project
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;