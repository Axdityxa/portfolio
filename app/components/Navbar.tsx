"use client";

import { useState, useEffect } from "react";
import { NavBar } from "./ui/tubelight-navbar";
import { User, Briefcase, Code, Mail, House } from "lucide-react";

export default function Navbar() {
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

  const navItems = [
    { name: 'Home', url: '#home', icon: House },
    { name: 'About', url: '#about', icon: User },
    { name: 'Skills', url: '#skills', icon: Code },
    { name: 'Projects', url: '#projects', icon: Briefcase },
    { name: 'Contact', url: '#contact', icon: Mail }
  ];

  return (
    <header className={`w-full fixed z-50 top-0 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-gray-900/90 shadow-md py-3' : 'bg-transparent py-4'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-3 text-2xl font-medium text-gray-800 dark:text-white font-poppins">
            <a href="#" className="flex items-center group">
              <span className="group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">Aditya Sharma</span>
            </a>
          </div>
          
          <div className="col-span-9 flex justify-end">
            <div className="translate-x-24">
              <NavBar 
                items={navItems} 
                className="!static !transform-none !my-0 !py-0 !mb-0 !mt-0 !sm:pt-0" 
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 