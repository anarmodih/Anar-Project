import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AcademicCapIcon, TrophyIcon, StarIcon } from '@heroicons/react/24/outline';

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications = [
    {
      title: 'Project Management Professional (PMP)®',
      issuer: 'Project Management Institute (PMI)',
      date: '2021',
      credentialId: 'PMI-12345678',
      status: 'Active',
      description: 'Globally recognized certification demonstrating competency in leading and directing projects.',
      icon: '🏆',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Certified ScrumMaster (CSM)',
      issuer: 'Scrum Alliance',
      date: '2020',
      credentialId: 'SA-98765432',
      status: 'Active',
      description: 'Certification in Scrum framework and Agile project management methodologies.',
      icon: '🎯',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Agile Project Management',
      issuer: 'Google (Coursera)',
      date: '2020',
      credentialId: 'GGL-AGI-2020',
      status: 'Completed',
      description: 'Comprehensive course on Agile methodologies and project management best practices.',
      icon: '📚',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'ITIL Foundation v4',
      issuer: 'AXELOS',
      date: '2019',
      credentialId: 'ITIL-FND-2019',
      status: 'Active',
      description: 'IT service management framework certification for delivering IT services.',
      icon: '🔧',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2022',
      credentialId: 'AWS-CP-2022',
      status: 'Active',
      description: 'Foundational understanding of AWS Cloud services and architecture.',
      icon: '☁️',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Digital Marketing Fundamentals',
      issuer: 'Google Digital Garage',
      date: '2021',
      credentialId: 'GDG-DMF-2021',
      status: 'Completed',
      description: 'Comprehensive understanding of digital marketing strategies and tools.',
      icon: '📱',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const achievements = [
    {
      title: 'Excellence in Project Delivery',
      year: '2023',
      description: 'Recognized for outstanding project delivery and client satisfaction',
      icon: <TrophyIcon className="w-8 h-8" />
    },
    {
      title: 'Leadership Excellence Award',
      year: '2022',
      description: 'Awarded for exceptional team leadership and mentoring',
      icon: <StarIcon className="w-8 h-8" />
    },
    {
      title: 'Innovation in Process Improvement',
      year: '2021',
      description: 'Acknowledged for implementing innovative project management processes',
      icon: <AcademicCapIcon className="w-8 h-8" />
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

  return (
    <section id="certifications" className="section-padding bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-500/5 rounded-full blur-2xl"></div>
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
              Certifications & <span className="gradient-text">Achievements</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Continuous learning and professional development to stay at the forefront of project management excellence
            </p>
          </motion.div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card group hover:scale-105"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${cert.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {cert.icon}
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    cert.status === 'Active' 
                      ? 'bg-green-500/20 text-green-300' 
                      : 'bg-blue-500/20 text-blue-300'
                  }`}>
                    {cert.status}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-200">
                  {cert.title}
                </h3>
                <p className="text-primary-400 font-medium mb-2">{cert.issuer}</p>
                <p className="text-gray-400 text-sm mb-4">{cert.description}</p>

                {/* Details */}
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Issued:</span>
                    <span className="text-gray-300">{cert.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Credential ID:</span>
                    <span className="text-gray-300 font-mono text-xs">{cert.credentialId}</span>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>

          {/* Achievements Section */}
          <motion.div variants={itemVariants} className="mb-12">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Professional <span className="gradient-text">Achievements</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card text-center group hover:scale-105"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-primary-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{achievement.title}</h4>
                  <p className="text-secondary-400 font-medium mb-2">{achievement.year}</p>
                  <p className="text-gray-400 text-sm">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Continuous Learning */}
          <motion.div variants={itemVariants}>
            <div className="card bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border-primary-500/30 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Commitment to Excellence</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                I believe in continuous learning and staying updated with the latest industry trends, methodologies, and technologies. 
                My certifications reflect my dedication to professional growth and delivering exceptional results.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">Currently pursuing Advanced Agile Certification</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <span className="text-gray-300">Enrolled in Digital Transformation Course</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;