import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Briefcase, Globe, Coffee } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Active Users', value: '10K+' },
    { label: 'Countries', value: '30+' },
    { label: 'Team Members', value: '100+' },
    { label: 'Success Rate', value: '99%' },
  ];

  const values = [
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Customer First",
      description: "We prioritize our customers needs in everything we do."
    },
    {
      icon: <Target className="w-8 h-8 text-blue-500" />,
      title: "Innovation",
      description: "Constantly pushing boundaries to deliver cutting-edge solutions."
    },
    {
      icon: <Award className="w-8 h-8 text-blue-500" />,
      title: "Excellence",
      description: "Committed to delivering the highest quality in all our work."
    },
  ];

  const achievements = [
    {
      year: '2023',
      title: 'Innovation Award',
      description: 'Recognized for breakthrough technology solutions'
    },
    {
      year: '2022',
      title: 'Global Expansion',
      description: 'Successfully launched in 15 new markets'
    },
    {
      year: '2021',
      title: 'Industry Leadership',
      description: 'Named market leader by industry analysts'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800" />
        <div className="max-w-7xl mx-auto px-6 md:px-16 relative">
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Our Story
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              We're on a mission to transform how businesses operate through innovative software solutions.
              Our team of experts is dedicated to helping companies achieve their full potential.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg text-center"
              >
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              These core values guide everything we do and help us deliver exceptional results.
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg"
              >
                <div className="w-16 h-16 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Key milestones that have shaped our growth and success.
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="space-y-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center gap-8"
              >
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 w-24 text-right">
                  {achievement.year}
                </div>
                <div className="w-px h-24 bg-blue-200 dark:bg-blue-800" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Team</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Meet the talented individuals who make our success possible.
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "John Smith",
                role: "CEO & Founder",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
              },
              {
                name: "Sarah Johnson",
                role: "CTO",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
              },
              {
                name: "Michael Chen",
                role: "Head of Product",
                image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;