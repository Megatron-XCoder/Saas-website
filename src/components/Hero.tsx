import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
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
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 animate-gradient opacity-50" />
      
      {/* Decorative circles */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-blue-400 rounded-full filter blur-3xl opacity-20 animate-float" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-indigo-400 rounded-full filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '-3s' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-16 w-full relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium">
                Transform Your Business Today
              </span>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 animate-gradient">
                  Transform Your Operations
                </span>
                <br />
                <span className="text-gray-900 dark:text-white">
                  Enhance Productivity
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                Streamline your business processes with our innovative software solutions. 
                Experience seamless integration and enhanced efficiency.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Link to="/pricing">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium flex items-center justify-center gap-2 group hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 w-full sm:w-auto"
                >
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center gap-2 group w-full sm:w-auto"
                >
                  Learn More
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-6">
              <div className="flex -space-x-4">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=100&h=100&q=80" className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800" alt="User" />
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=100&h=100&q=80" className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800" alt="User" />
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=100&h=100&q=80" className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800" alt="User" />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Trusted by <span className="font-semibold">10,000+</span> businesses worldwide
              </p>
            </motion.div>
          </div>
          
          <motion.div
            variants={itemVariants}
            className="relative lg:h-[600px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-3xl blur-3xl opacity-20 dark:opacity-40" />
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="relative h-full rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/10"
            >
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                alt="Technology Innovation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              
              {/* Floating feature highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
              >
                <div className="flex items-center justify-between text-white">
                  <div>
                    <h3 className="font-semibold">Smart Analytics</h3>
                    <p className="text-sm opacity-80">Real-time business insights</p>
                  </div>
                  <div className="h-12 w-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;