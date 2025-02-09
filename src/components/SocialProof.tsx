import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const SocialProof = () => {
  const testimonials = [
    {
      name: "Sarah Thompson",
      role: "CEO at TechCorp",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=200&h=200&q=80",
      content: "Product IT has transformed how we operate. The automation features have saved us countless hours, and the analytics provide invaluable insights.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CTO at InnovateLabs",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=200&h=200&q=80",
      content: "The level of customization and flexibility Product IT offers is unmatched. It's been a game-changer for our development team.",
      rating: 5
    }
  ];

  const companies = [
    'Microsoft', 'Google', 'Amazon', 'Apple', 'Meta', 'Netflix'
  ];

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
          className="space-y-16"
        >
          {/* Trusted by companies */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-8">
              Trusted by leading companies worldwide
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {companies.map((company, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-600 to-gray-400 dark:from-gray-300 dark:to-gray-500"
                >
                  {company}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.div variants={containerVariants} className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 dark:group-hover:opacity-30 transition-opacity duration-300" />
                <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { label: 'Active Users', value: '10,000+' },
              { label: 'Countries', value: '50+' },
              { label: 'Data Processed', value: '1B+' },
              { label: 'Uptime', value: '99.99%' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 rounded-2xl bg-blue-50 dark:bg-blue-900/20"
              >
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;