import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { useTheme } from './hooks/useTheme';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Auth from './pages/Auth';
import Documentation from './pages/Documentation';

function App() {
  const { theme } = useTheme();

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-500 ${
        theme === 'dark' 
          ? 'bg-gray-900 text-white' 
          : 'bg-white text-gray-900'
      }`}>
        <Navbar />
        <AnimatePresence mode="wait">
          <main className="relative">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/features" element={<Features />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/docs" element={<Documentation />} />
            </Routes>
          </main>
        </AnimatePresence>
        <Footer />
        <Toaster 
          position="top-right"
          toastOptions={{
            style: {
              background: theme === 'dark' ? '#1f2937' : '#ffffff',
              color: theme === 'dark' ? '#ffffff' : '#1f2937',
              border: `1px solid ${theme === 'dark' ? '#374151' : '#e5e7eb'}`
            }
          }}
        />
      </div>
    </Router>
  );
}

export default App;