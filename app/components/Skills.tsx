"use client";

import { useState } from 'react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('frontend');

  return (
    <section id="skills" className="relative py-20 min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-5xl md:text-6xl font-bold mb-3 text-white text-center floating-text drop-shadow-xl">
        Skills
      </h2>
      <p className="text-xl text-center mb-16 text-white dark:text-gray-300">
        My Technical Level
      </p>
      
      <div className="container mx-auto px-4">
        <div className="bg-blue-900/40 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-blue-400/20">
          {/* Skills tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <button 
              onClick={() => setActiveTab('frontend')} 
              className={`px-6 py-3 rounded-full text-white font-medium transition-all ${
                activeTab === 'frontend' 
                  ? 'bg-[#38b2ed] shadow-lg' 
                  : 'bg-gray-600/30 hover:bg-gray-600/50'
              }`}
            >
              Frontend
            </button>
            <button 
              onClick={() => setActiveTab('backend')} 
              className={`px-6 py-3 rounded-full text-white font-medium transition-all ${
                activeTab === 'backend' 
                  ? 'bg-[#38b2ed] shadow-lg' 
                  : 'bg-gray-600/30 hover:bg-gray-600/50'
              }`}
            >
              Backend
            </button>
            <button 
              onClick={() => setActiveTab('languages')} 
              className={`px-6 py-3 rounded-full text-white font-medium transition-all ${
                activeTab === 'languages' 
                  ? 'bg-[#38b2ed] shadow-lg' 
                  : 'bg-gray-600/30 hover:bg-gray-600/50'
              }`}
            >
              Languages
            </button>
            <button 
              onClick={() => setActiveTab('databases')} 
              className={`px-6 py-3 rounded-full text-white font-medium transition-all ${
                activeTab === 'databases' 
                  ? 'bg-[#38b2ed] shadow-lg' 
                  : 'bg-gray-600/30 hover:bg-gray-600/50'
              }`}
            >
              Databases
            </button>
            <button 
              onClick={() => setActiveTab('tools')} 
              className={`px-6 py-3 rounded-full text-white font-medium transition-all ${
                activeTab === 'tools' 
                  ? 'bg-[#38b2ed] shadow-lg' 
                  : 'bg-gray-600/30 hover:bg-gray-600/50'
              }`}
            >
              Tools
            </button>
          </div>
          
          {/* Frontend skills */}
          <div className={`${activeTab === 'frontend' ? 'block' : 'hidden'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white font-medium">React</span>
                    <span className="text-white/80">90%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2.5">
                    <div className="bg-[#38b2ed] h-2.5 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white font-medium">Next.js</span>
                    <span className="text-white/80">85%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2.5">
                    <div className="bg-[#38b2ed] h-2.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white font-medium">Tailwind CSS</span>
                    <span className="text-white/80">95%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2.5">
                    <div className="bg-[#38b2ed] h-2.5 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white font-medium">HTML/CSS</span>
                    <span className="text-white/80">95%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2.5">
                    <div className="bg-[#38b2ed] h-2.5 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white font-medium">JavaScript</span>
                    <span className="text-white/80">90%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2.5">
                    <div className="bg-[#38b2ed] h-2.5 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white font-medium">Framer Motion</span>
                    <span className="text-white/80">80%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2.5">
                    <div className="bg-[#38b2ed] h-2.5 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Backend skills */}
          <div className={`${activeTab === 'backend' ? 'block' : 'hidden'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white font-medium">Node.js</span>
                    <span className="text-white/80">85%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2.5">
                    <div className="bg-[#38b2ed] h-2.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white font-medium">Express</span>
                    <span className="text-white/80">80%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2.5">
                    <div className="bg-[#38b2ed] h-2.5 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white font-medium">RESTful APIs</span>
                    <span className="text-white/80">90%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2.5">
                    <div className="bg-[#38b2ed] h-2.5 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white font-medium">GraphQL</span>
                    <span className="text-white/80">75%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2.5">
                    <div className="bg-[#38b2ed] h-2.5 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white font-medium">NextAuth.js</span>
                    <span className="text-white/80">80%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2.5">
                    <div className="bg-[#38b2ed] h-2.5 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white font-medium">Serverless</span>
                    <span className="text-white/80">70%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2.5">
                    <div className="bg-[#38b2ed] h-2.5 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Languages */}
          <div className={`${activeTab === 'languages' ? 'block' : 'hidden'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white font-medium">JavaScript</span>
                    <span className="text-white/80">95%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2.5">
                    <div className="bg-[#38b2ed] h-2.5 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white font-medium">TypeScript</span>
                    <span className="text-white/80">90%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2.5">
                    <div className="bg-[#38b2ed] h-2.5 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white font-medium">Python</span>
                    <span className="text-white/80">85%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2.5">
                    <div className="bg-[#38b2ed] h-2.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white font-medium">Go</span>
                    <span className="text-white/80">60%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2.5">
                    <div className="bg-[#38b2ed] h-2.5 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white font-medium">Rust</span>
                    <span className="text-white/80">50%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2.5">
                    <div className="bg-[#38b2ed] h-2.5 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white font-medium">Bash/Shell</span>
                    <span className="text-white/80">75%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2.5">
                    <div className="bg-[#38b2ed] h-2.5 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Databases */}
          <div className={`${activeTab === 'databases' ? 'block' : 'hidden'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white font-medium">MongoDB</span>
                    <span className="text-white/80">90%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2.5">
                    <div className="bg-[#38b2ed] h-2.5 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white font-medium">PostgreSQL</span>
                    <span className="text-white/80">80%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2.5">
                    <div className="bg-[#38b2ed] h-2.5 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white font-medium">Firebase</span>
                    <span className="text-white/80">85%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2.5">
                    <div className="bg-[#38b2ed] h-2.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white font-medium">MySQL</span>
                    <span className="text-white/80">75%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2.5">
                    <div className="bg-[#38b2ed] h-2.5 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white font-medium">Redis</span>
                    <span className="text-white/80">70%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2.5">
                    <div className="bg-[#38b2ed] h-2.5 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white font-medium">Supabase</span>
                    <span className="text-white/80">80%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2.5">
                    <div className="bg-[#38b2ed] h-2.5 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tools */}
          <div className={`${activeTab === 'tools' ? 'block' : 'hidden'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white font-medium">Git/GitHub</span>
                    <span className="text-white/80">95%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2.5">
                    <div className="bg-[#38b2ed] h-2.5 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white font-medium">Docker</span>
                    <span className="text-white/80">80%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2.5">
                    <div className="bg-[#38b2ed] h-2.5 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white font-medium">VS Code</span>
                    <span className="text-white/80">95%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2.5">
                    <div className="bg-[#38b2ed] h-2.5 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white font-medium">Figma</span>
                    <span className="text-white/80">85%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2.5">
                    <div className="bg-[#38b2ed] h-2.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white font-medium">CI/CD</span>
                    <span className="text-white/80">75%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2.5">
                    <div className="bg-[#38b2ed] h-2.5 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white font-medium">Vercel/Netlify</span>
                    <span className="text-white/80">90%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2.5">
                    <div className="bg-[#38b2ed] h-2.5 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 