import React from 'react';
import { motion } from 'framer-motion';
import { Play, BarChart2, Zap } from 'lucide-react';

const ProductOverview = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-16 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
            How Product IT Works
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our platform streamlines your business operations through intelligent automation
            and data-driven insights.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-3xl blur-3xl opacity-20 dark:opacity-40" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                alt="Product Overview"
                className="w-full h-auto"
              />
              
              {/* Play button overlay */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Play className="w-8 h-8 text-blue-600 ml-1" />
                </div>
              </motion.button>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                  <BarChart2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Data-Driven Insights</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Make informed decisions with real-time analytics and comprehensive reporting tools.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Automated Workflows</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Streamline operations with intelligent automation and customizable processes.
                  </p>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium flex items-center justify-center gap-2 group hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
            >
              Watch Demo
              <Play className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductOverview;