"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`w-full fixed top-0 left-0 right-0 z-10 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">
            <a href="#" className="flex items-center group">
              <div className="w-8 h-8 mr-3 rounded-full bg-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold">P</span>
              </div>
              <span className="group-hover:text-blue-500 transition-colors duration-300">My Portfolio</span>
            </a>
          </div>
          
          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-10">
            <a href="#about" className="text-gray-700 hover:text-blue-500 transition-colors duration-300 font-medium relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#projects" className="text-gray-700 hover:text-blue-500 transition-colors duration-300 font-medium relative group">
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#skills" className="text-gray-700 hover:text-blue-500 transition-colors duration-300 font-medium relative group">
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-500 transition-colors duration-300 font-medium relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-2 bg-gray-50 rounded-lg p-2">
            <nav className="flex flex-col space-y-3">
              <a 
                href="#about" 
                className="text-gray-700 hover:text-blue-500 hover:bg-gray-100 transition-colors duration-300 font-medium py-2 px-3 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#projects" 
                className="text-gray-700 hover:text-blue-500 hover:bg-gray-100 transition-colors duration-300 font-medium py-2 px-3 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#skills" 
                className="text-gray-700 hover:text-blue-500 hover:bg-gray-100 transition-colors duration-300 font-medium py-2 px-3 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </a>
              <a 
                href="#contact" 
                className="text-gray-700 hover:text-blue-500 hover:bg-gray-100 transition-colors duration-300 font-medium py-2 px-3 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 