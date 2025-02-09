import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart2, Shield, Zap, Users, Cloud, 
  Settings, Database, Lock
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Features = () => {
  const features = [
    {
      icon: <BarChart2 className="w-8 h-8" />,
      title: "Advanced Analytics",
      description: "Real-time insights and customizable dashboards to track your business metrics.",
      details: [
        "Custom report generation",
        "Data visualization tools",
        "Predictive analytics",
        "Export capabilities"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-grade security measures to protect your sensitive business data.",
      details: [
        "End-to-end encryption",
        "Two-factor authentication",
        "Regular security audits",
        "Compliance certifications"
      ],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Workflow Automation",
      description: "Streamline your processes with intelligent automation tools.",
      details: [
        "Custom workflow builder",
        "Task automation",
        "Integration capabilities",
        "Performance monitoring"
      ],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
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
          <motion.div
            variants={itemVariants}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Features that Power Your Business
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Discover how our comprehensive suite of tools can transform your operations
              and drive unprecedented growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <motion.div variants={containerVariants} className="space-y-32">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/30 w-fit mb-6">
                    <div className="text-blue-600 dark:text-blue-400">
                      {feature.icon}
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                    {feature.description}
                  </p>
                  <ul className="space-y-4 mb-8">
                    {feature.details.map((detail, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.2 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                        <span className="text-gray-600 dark:text-gray-300">{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <Link to="/pricing">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                    >
                      Get Started
                    </motion.button>
                  </Link>
                </div>
                
                <motion.div
                  className={`relative ${index % 2 === 1 ? 'md:col-start-1' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-3xl blur-3xl opacity-20 dark:opacity-40" />
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-auto"
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <motion.div
            variants={containerVariants}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">
              Seamless Integrations
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Connect with your favorite tools and services to create a unified workflow.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { icon: <Cloud className="w-6 h-6" />, label: "Cloud Storage" },
              { icon: <Settings className="w-6 h-6" />, label: "API Access" },
              { icon: <Database className="w-6 h-6" />, label: "Database" },
              { icon: <Lock className="w-6 h-6" />, label: "Security" }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-600 dark:text-blue-400">
                    {item.icon}
                  </div>
                </div>
                <h3 className="font-semibold">{item.label}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Features;