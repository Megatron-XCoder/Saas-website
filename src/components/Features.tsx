import React from 'react';
import { motion } from 'framer-motion';
import { Code, DollarSign, Users, Headphones, CreditCard, Monitor } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Tailored Software Solutions",
      description: "Custom solutions designed to meet your specific business needs"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Scalable Pricing Plans",
      description: "Flexible pricing options that grow with your business"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "User Friendly Resources",
      description: "Simple, intuitive, and easy-to-use interfaces for all users"
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Expert Support Channels",
      description: "24/7 dedicated support team to assist you"
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Seamless Payment Solutions",
      description: "Secure and efficient payment processing"
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Effortless Online Backups",
      description: "Automated cloud backup solutions for your data"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            Unlock the Potential of Your Business
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover how our comprehensive suite of tools can transform your operations
            and drive unprecedented growth.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 dark:group-hover:opacity-30 transition-opacity duration-300" />
              <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-700">
                <div className="mb-4 p-3 rounded-xl bg-blue-50 dark:bg-blue-900/30 w-fit">
                  <div className="text-blue-600 dark:text-blue-400">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Features;