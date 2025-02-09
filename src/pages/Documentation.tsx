import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Book, FileText, Video, ChevronRight } from 'lucide-react';

const Documentation = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const docs = [
    {
      category: 'Getting Started',
      items: [
        {
          title: 'Quick Start Guide',
          description: 'Learn the basics and get up and running in minutes',
          type: 'guide',
          icon: <FileText className="w-5 h-5" />
        },
        {
          title: 'Product Overview',
          description: 'Understanding the core features and capabilities',
          type: 'video',
          icon: <Video className="w-5 h-5" />,
          videoId: 'dQw4w9WgXcQ' // Example YouTube video ID
        }
      ]
    },
    {
      category: 'Core Concepts',
      items: [
        {
          title: 'Authentication',
          description: 'Learn about user authentication and security',
          type: 'guide',
          icon: <FileText className="w-5 h-5" />
        },
        {
          title: 'Data Management',
          description: 'Best practices for managing your data',
          type: 'video',
          icon: <Video className="w-5 h-5" />,
          videoId: 'dQw4w9WgXcQ'
        }
      ]
    }
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
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const filteredDocs = docs.map(category => ({
    ...category,
    items: category.items.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.items.length > 0);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen py-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Documentation</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about using Product IT effectively
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-12">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border dark:border-gray-700 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 transition-shadow"
            />
          </div>
        </motion.div>

        <motion.div variants={containerVariants} className="grid md:grid-cols-2 gap-8">
          {filteredDocs.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <Book className="w-6 h-6 text-blue-500" />
                {category.category}
              </h2>
              
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    whileHover={{ scale: 1.02 }}
                    className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  >
                    {item.type === 'video' ? (
                      <div className="aspect-video mb-4">
                        <iframe
                          width="100%"
                          height="100%"
                          src={`https://www.youtube.com/embed/${item.videoId}`}
                          title={item.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    ) : null}
                    
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                          {item.description}
                        </p>
                        <button className="text-blue-500 hover:text-blue-600 text-sm font-medium flex items-center gap-1 group">
                          Learn more
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Documentation;