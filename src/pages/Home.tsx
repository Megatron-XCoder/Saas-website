import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ProductOverview from '../components/ProductOverview';
import SocialProof from '../components/SocialProof';
import CallToAction from '../components/CallToAction';

// Animation variants
const fadeInUp = {
  initial: { 
    opacity: 0, 
    y: 30,
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.3
    }
  }
};

// Updated background animation for the gradient with dark mode support
const backgroundVariants = {
  animate: {
    background: [
      'linear-gradient(45deg, var(--bg-gradient-from), var(--bg-gradient-to))',
      'linear-gradient(45deg, var(--bg-gradient-to), var(--bg-gradient-from))',
    ],
    transition: {
      duration: 8,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
};

const Home = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="relative min-h-screen overflow-hidden bg-white dark:bg-gray-900"
        initial="initial"
        animate="animate"
        exit={{ opacity: 0 }}
        variants={staggerContainer}
      >
        {/* CSS variables for gradient colors */}
        <style jsx global>{`
          :root {
            --bg-gradient-from: #f3f4f6;
            --bg-gradient-to: #ffffff;
          }
          .dark {
            --bg-gradient-from: #111827;
            --bg-gradient-to: #1f2937;
          }
        `}</style>

        {/* Animated background */}
        <motion.div
          className="fixed inset-0 -z-10 opacity-50"
          animate="animate"
          variants={backgroundVariants}
        />
        
        {/* Floating shapes in background */}
        <motion.div
          className="fixed inset-0 -z-5 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="absolute w-64 h-64 rounded-full bg-blue-200/20 dark:bg-blue-500/10 -top-20 -left-20 backdrop-blur-3xl"
            animate={{
              y: [0, 50, 0],
              x: [0, 30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute w-96 h-96 rounded-full bg-purple-200/20 dark:bg-purple-500/10 bottom-0 right-0 backdrop-blur-3xl"
            animate={{
              y: [0, -50, 0],
              x: [0, -30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>

        {/* Main content */}
        <div className="relative z-10">
          <motion.div variants={fadeInUp}>
            <Hero />
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative z-20"
          >
            <ProductOverview />
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative z-20"
          >
            <Features />
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative z-20"
          >
            <SocialProof />
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative z-20"
          >
            <CallToAction />
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Home;