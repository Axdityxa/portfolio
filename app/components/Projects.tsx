"use client";

import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useState } from 'react';

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  const projects = [
    {
      title: "AirCompass",
      description: "Developed a cross-platform air quality app using React Native and TypeScript, featuring real-time monitoring, location-based alerts, and Supabase authentication. Designed a user-friendly UI, integrated RESTful APIs, and implemented secure, low-latency data handling with push notifications.",
      image: "/projects/airc.jpg",
      github: "https://github.com/yourusername/gsoc-project",
      tags: ["React Native", "TypeScript", "Supabase"]
    },
    {
      title: "Ieltpath",
      description: "Developed IELTPath.com, a comprehensive IELTS exam preparation platform using Next.js, TypeScript, Supabase (PostgreSQL), and Clerk for authentication. Integrated Google Speech-to-Text and GPT-4 to enable real-time, AI-powered speaking assessments and personalized feedback.",
      image: "/projects/ielts.png",
      live: "https://ieltpath.com",
      github: "https://github.com/Axdityxa/IELTS_v1",
      tags: ["Next.js", "TypeScript", "Supabase", "Clerk"]
    },
    {
      title: "Multi Model Vision",
      description: "Developed a Streamlit application leveraging the Gemini API to analyze ATS scores, enhancing resume accuracy by 35%. Built an image-scanning tool using PyPDF2 and Google Generative AI with 90% data extraction accuracy. Utilized LangChain for advanced text processing and Dotenv for secure environment management.",
      image: "/projects/multi_model_vision.png",
      live: "https://multi-model-vision.streamlit.app/",
      github: "https://github.com/Axdityxa/Multi_Model_Gemini",
      tags: ["Streamlit", "Gemini API", "PyPDF2", "Google Generative AI", "LangChain", "Dotenv"]
    }
  ];

  return (
    <section id="projects" 
      className="relative py-28 min-h-screen flex flex-col items-center justify-center "
      style={{
        // backgroundImage: "url('/projects/mountains-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* <div className="absolute inset-0 bg-gradient-to-b from-[#050f2c]/70 to-[#0f172a]/90 backdrop-blur-sm"></div> */}
      
      <div className="relative z-10 w-full mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-3 text-white text-center floating-text drop-shadow-xl">
          Projects
        </h2>
        <p className="text-xl text-center text-white">
          My Recent Work
        </p>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* First Project (Top Right) */}
        <div className="mb-32 relative">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-6 md:col-start-7">
              <div className="bg-[#192642]/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-blue-400/10">
                <div className="text-[#38b2ed] font-medium mb-2 text-sm">Featured Project</div>
                <h3 className="text-3xl font-bold mb-4 text-white">{projects[0].title}</h3>
                <div className="text-gray-300 mb-6">
                  {projects[0].description}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[0].tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-[#38b2ed]/20 text-sm text-gray-200 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-5">
                  <a 
                    href={projects[0].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#38b2ed] transition-colors"
                    aria-label="View GitHub Repository"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                  {projects[0].live && (
                    <a 
                      href={projects[0].live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#38b2ed] transition-colors"
                      aria-label="View Live Project"
                    >
                      <FaExternalLinkAlt className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          <div 
            className="absolute top-1/2 left-0 w-1/2 aspect-video transform -translate-y-1/2 rounded-xl overflow-hidden shadow-2xl hidden md:block"
            onMouseEnter={() => setHoveredProject(0)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="relative w-full h-full">
              <Image
                src={projects[0].image}
                alt={projects[0].title}
                fill
                sizes="50vw"
                className={`object-cover transition-all duration-500 ${hoveredProject === 0 ? '' : 'grayscale'}`}
              />
            </div>
          </div>
        </div>
        
        {/* Second Project (Bottom Left) */}
        <div className="mb-32 relative">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-6 md:col-start-1">
              <div className="bg-[#192642]/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-blue-400/10">
                <div className="text-[#38b2ed] font-medium mb-2 text-sm">Featured Project</div>
                <h3 className="text-3xl font-bold mb-4 text-white">{projects[1].title}</h3>
                <div className="text-gray-300 mb-6">
                  {projects[1].description}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[1].tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-[#38b2ed]/20 text-sm text-gray-200 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-5">
                  <a 
                    href={projects[1].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#38b2ed] transition-colors"
                    aria-label="View GitHub Repository"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                  {projects[1].live && (
                    <a 
                      href={projects[1].live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#38b2ed] transition-colors"
                      aria-label="View Live Project"
                    >
                      <FaExternalLinkAlt className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          <div 
            className="absolute top-1/2 right-0 w-1/2 aspect-video transform -translate-y-1/2 rounded-xl overflow-hidden shadow-2xl hidden md:block"
            onMouseEnter={() => setHoveredProject(1)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="relative w-full h-full">
              <Image
                src={projects[1].image}
                alt={projects[1].title}
                fill
                sizes="50vw"
                className={`object-cover transition-all duration-500 ${hoveredProject === 1 ? '' : 'grayscale'}`}
              />
            </div>
          </div>
        </div>
        
        {/* Third Project (Bottom Right) */}
        <div className="relative">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-6 md:col-start-7">
              <div className="bg-[#192642]/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-blue-400/10">
                <div className="text-[#38b2ed] font-medium mb-2 text-sm">Featured Project</div>
                <h3 className="text-3xl font-bold mb-4 text-white">{projects[2].title}</h3>
                <div className="text-gray-300 mb-6">
                  {projects[2].description}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[2].tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-[#38b2ed]/20 text-sm text-gray-200 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-5">
                  <a 
                    href={projects[2].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#38b2ed] transition-colors"
                    aria-label="View GitHub Repository"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                  {projects[2].live && (
                    <a 
                      href={projects[2].live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#38b2ed] transition-colors"
                      aria-label="View Live Project"
                    >
                      <FaExternalLinkAlt className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          <div 
            className="absolute top-1/2 left-0 w-1/2 aspect-video transform -translate-y-1/2 rounded-xl overflow-hidden shadow-2xl hidden md:block"
            onMouseEnter={() => setHoveredProject(2)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="relative w-full h-full">
              <Image
                src={projects[2].image}
                alt={projects[2].title}
                fill
                sizes="50vw"
                className={`object-cover transition-all duration-500 ${hoveredProject === 2 ? '' : 'grayscale'}`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 