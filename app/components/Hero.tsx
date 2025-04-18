"use client";

import { useEffect, useState } from "react";
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  // Use a state to track if we're on the client-side
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // This will only run on the client after hydration
    setIsMounted(true);
  }, []);

  return (
    <section id="hero" className="relative flex flex-col items-center justify-center min-h-[80vh] mb-20 overflow-hidden">

      {/* Animated circles - only show when mounted to prevent hydration mismatch */}
      {isMounted && (
        <>
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-300/10 dark:bg-blue-500/10 rounded-full filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-300/10 dark:bg-purple-500/10 rounded-full filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-cyan-300/10 dark:bg-cyan-500/10 rounded-full filter blur-xl animate-pulse animation-delay-4000"></div>
        </>
      )}

      {/* Content with animations */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 transform ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-0 opacity-100'}`}>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-blue-900 dark:from-white dark:to-blue-200">
            Hello, I&apos;m <span className="text-blue-800 dark:text-blue-500 font-extrabold">Aditya Sharma</span>
          </h1>
        </div>

        <div className={`transition-all duration-1000 transform ${isMounted ? 'delay-300' : ''}`}>
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-white dark:text-gray-200">
            {isMounted && (
              <TypeAnimation
                sequence={[
                  "Full Stack Web Developer",
                  2000,
                  "Front-End Developer",
                  2000,
                  "Back-End Developer",
                  2000,
                  "Linux System Admin",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            )}
          </h2>
        </div>

        <div className={`flex flex-col md:flex-row gap-4 justify-center transition-all duration-1000 transform ${isMounted ? 'delay-600' : ''}`}>
          <a
            href="#projects"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-transparent hover:bg-blue-100/20 dark:hover:bg-white/10 border-2 border-gray-300 dark:border-white text-gray-100 dark:text-white rounded-full font-medium transition-all duration-300 backdrop-blur-sm hover:shadow-lg"
          >
            Say Hello :)
          </a>
        </div>

        <div className={`mt-16 transition-all duration-1000 transform ${isMounted ? 'delay-900' : ''}`}>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-white dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-white dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.21c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-white dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-white dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm-1-7c-.66 0-1.2-.54-1.2-1.2 0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2 0 .66-.54 1.2-1.2 1.2zm7 7h-2v-3c0-1.66-2-1.54-2 0v3h-2v-6h2v1.24c.67-1.03 2-1.12 2.83-.37.83.75 1.17 1.95 1.17 3.13v2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator - only show when mounted */}
      {isMounted && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-1000 opacity-100">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-white dark:text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      )}
    </section>
  );
} 