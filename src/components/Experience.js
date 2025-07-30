import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CalendarIcon, BuildingOfficeIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Senior Project Manager',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      location: 'Remote',
      type: 'Full-time',
      teamSize: '25-48 members',
      achievements: [
        'Led digital transformation initiatives for 3 major clients, resulting in 40% efficiency improvement',
        'Managed cross-functional teams across multiple time zones for global SaaS implementations',
        'Implemented Agile best practices, reducing project delivery time by 30%',
        'Successfully delivered $2M+ worth of projects on time and within budget'
      ],
      technologies: ['Jira', 'Confluence', 'Slack', 'Monday.com', 'Azure DevOps']
    },
    {
      title: 'Agile Project Manager',
      company: 'Digital Innovations Ltd.',
      period: '2020 - 2022',
      location: 'Ahmedabad, India',
      type: 'Full-time',
      teamSize: '15-30 members',
      achievements: [
        'Spearheaded the migration of 5 legacy systems to modern cloud-based solutions',
        'Established PMO processes and standards, improving project success rate to 98%',
        'Mentored junior project managers and scrum masters',
        'Managed e-commerce platform development serving 100K+ users'
      ],
      technologies: ['Scrum', 'Kanban', 'ClickUp', 'Trello', 'GitLab']
    },
    {
      title: 'Scrum Master & Project Coordinator',
      company: 'StartupTech Solutions',
      period: '2019 - 2020',
      location: 'Mumbai, India',
      type: 'Full-time',
      teamSize: '8-15 members',
      achievements: [
        'Facilitated daily standups, sprint planning, and retrospectives for 3 development teams',
        'Improved team velocity by 45% through process optimization',
        'Coordinated mobile app development projects for iOS and Android platforms',
        'Established quality assurance processes reducing bug reports by 60%'
      ],
      technologies: ['Jira', 'Confluence', 'Slack', 'Firebase', 'React Native']
    },
    {
      title: 'Junior Project Manager',
      company: 'WebDev Agency',
      period: '2018 - 2019',
      location: 'Pune, India',
      type: 'Full-time',
      teamSize: '5-12 members',
      achievements: [
        'Managed WordPress and custom CMS development projects',
        'Coordinated with clients to gather requirements and provide regular updates',
        'Assisted in resource planning and budget management',
        'Supported senior PMs in large-scale web application projects'
      ],
      technologies: ['WordPress', 'PHP', 'MySQL', 'Basecamp', 'Asana']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="experience" className="section-padding bg-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 right-16 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-16 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>
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
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A journey of growth, leadership, and successful project deliveries across diverse industries
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full border-4 border-slate-800 z-10"></div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}>
                    <motion.div
                      className="card hover:scale-105"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Header */}
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                        <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-2">
                          <div className="flex items-center">
                            <BuildingOfficeIcon className="w-4 h-4 mr-1" />
                            <span className="text-sm">{exp.company}</span>
                          </div>
                          <div className="flex items-center">
                            <CalendarIcon className="w-4 h-4 mr-1" />
                            <span className="text-sm">{exp.period}</span>
                          </div>
                          <div className="flex items-center">
                            <UserGroupIcon className="w-4 h-4 mr-1" />
                            <span className="text-sm">{exp.teamSize}</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <span className="px-2 py-1 bg-primary-500/20 text-primary-300 rounded text-xs">
                            {exp.type}
                          </span>
                          <span className="px-2 py-1 bg-secondary-500/20 text-secondary-300 rounded text-xs">
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-300 text-sm leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Technologies & Tools</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-xs hover:bg-white/20 transition-colors duration-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Summary Stats */}
          <motion.div variants={itemVariants} className="mt-20">
            <div className="card bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border-primary-500/30">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Career Highlights</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">6+</div>
                  <div className="text-gray-400 text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">100+</div>
                  <div className="text-gray-400 text-sm">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">48</div>
                  <div className="text-gray-400 text-sm">Max Team Size</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">$5M+</div>
                  <div className="text-gray-400 text-sm">Project Value</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;