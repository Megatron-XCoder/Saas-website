import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Moon, Sun, Menu, X, Book } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/features', label: 'Features' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/docs', label: 'Documentation', icon: <Book className="w-4 h-4" /> }
  ];

  return (
    <nav className={`sticky top-0 z-50 ${
      theme === 'dark' ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
    } border-b`}>
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-blue-500">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Product IT
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`relative flex items-center gap-2 ${
                  location.pathname === link.href
                    ? 'text-blue-500'
                    : theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                } hover:text-blue-500 transition-colors`}
              >
                {link.icon && link.icon}
                {link.label}
                {location.pathname === link.href && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 h-0.5 bg-blue-500 bottom-[-4px]"
                  />
                )}
              </Link>
            ))}
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className={`p-2 rounded-full ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
              }`}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>

            <Link to="/auth">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
              >
                Sign In
              </motion.button>
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden pt-4 pb-2"
          >
            <div className="flex flex-col space-y-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-2 ${
                    location.pathname === link.href
                      ? 'text-blue-500'
                      : theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {link.icon && link.icon}
                  {link.label}
                </Link>
              ))}
              <Link
                to="/auth"
                onClick={() => setIsOpen(false)}
                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors inline-block text-center"
              >
                Sign In
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;