"use client";

import {  useState } from 'react';
import { Award, Calendar, Building, GraduationCap, Briefcase } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

// Define proper interfaces for our data
interface ExperienceItem {
  title: string;
  company: string;
  date: string;
  description: string[];
  icon: LucideIcon;
}

export default function Experience() {
  const [activeTab, setActiveTab] = useState('work');
  
  // Experience data
  const workExperience: ExperienceItem[] = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      date: "2022 - Present",
      description: [
        "Led the development of responsive web applications using React and Next.js",
        "Collaborated with UX/UI designers to implement modern user interfaces",
        "Improved application performance by 40% through code optimization",
        "Mentored junior developers and conducted code reviews"
      ],
      icon: Building
    },
    {
      title: "Frontend Developer",
      company: "Digital Innovations",
      date: "2020 - 2022",
      description: [
        "Developed interactive web applications using React and JavaScript",
        "Implemented responsive designs with Tailwind CSS",
        "Built RESTful API integrations and state management solutions",
        "Participated in agile development processes"
      ],
      icon: Building
    },
    {
      title: "Web Development Intern",
      company: "Creative Studios",
      date: "2019 - 2020",
      description: [
        "Assisted in building and maintaining client websites",
        "Learned modern frontend frameworks and best practices",
        "Created UI components and implemented responsive designs",
        "Collaborated with senior developers on various projects"
      ],
      icon: Building
    }
  ];

  const educationExperience: ExperienceItem[] = [
    {
      title: "Master of Computer Science",
      company: "Tech University",
      date: "2018 - 2020",
      description: [
        "Specialized in Web Development and Software Engineering",
        "Graduated with honors - 3.9 GPA",
        "Completed thesis on modern JavaScript frameworks",
        "Participated in coding competitions and hackathons"
      ],
      icon: GraduationCap
    },
    {
      title: "Bachelor of Computer Science",
      company: "State University",
      date: "2014 - 2018",
      description: [
        "Major in Computer Science with minor in Digital Design",
        "Coursework included: Data Structures, Algorithms, Web Development",
        "Dean's List recognition for academic excellence",
        "Developed multiple student projects including a campus event platform"
      ],
      icon: GraduationCap
    },
    {
      title: "Web Development Certification",
      company: "Online Learning Platform",
      date: "2017",
      description: [
        "Comprehensive course on modern web development",
        "Covered HTML, CSS, JavaScript, React, and Node.js",
        "Built portfolio projects as part of the curriculum",
        "Received top scores on all assessments"
      ],
      icon: Award
    }
  ];

  const renderExperienceItems = (items: ExperienceItem[]) => {
    return (
      <div className="relative">
        {/* Timeline vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-400/50"></div>
        
        <div className="space-y-8">
          {items.map((item, index) => (
            <div key={index} className="relative pl-12">
              {/* Timeline dot */}
              <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-[#38b2ed] flex items-center justify-center shadow-lg">
                <item.icon size={18} className="text-white" />
              </div>
              
              <div className="bg-gray-200/10 backdrop-blur-sm p-6 rounded-xl border border-gray-400/10 shadow-md">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <div className="flex items-center text-blue-300 text-sm mt-1 md:mt-0">
                    <Calendar size={14} className="mr-1" />
                    <span>{item.date}</span>
                  </div>
                </div>
                
                <div className="mb-3 text-blue-100">
                  <span className="font-medium">{item.company}</span>
                </div>
                
                <ul className="list-disc list-inside space-y-1">
                  {item.description.map((desc, i) => (
                    <li key={i} className="text-gray-200 text-sm">{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="experience" className="relative py-20 min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-5xl md:text-6xl font-bold mb-3 text-white text-center floating-text drop-shadow-xl">
        Experience
      </h2>
      <p className="text-xl text-center mb-16 text-white dark:text-gray-300">
        My Professional Journey
      </p>
      
      <div className="container mx-auto px-4">
        <div className="bg-blue-900/40 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-blue-400/20">
          {/* Experience tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <button 
              onClick={() => setActiveTab('work')} 
              className={`px-6 py-3 rounded-full text-white font-medium transition-all ${
                activeTab === 'work' 
                  ? 'bg-[#38b2ed] shadow-lg' 
                  : 'bg-gray-600/30 hover:bg-gray-600/50'
              }`}
            >
              <div className="flex items-center">
                <Briefcase size={18} className="mr-2" />
                Work
              </div>
            </button>
            <button 
              onClick={() => setActiveTab('education')} 
              className={`px-6 py-3 rounded-full text-white font-medium transition-all ${
                activeTab === 'education' 
                  ? 'bg-[#38b2ed] shadow-lg' 
                  : 'bg-gray-600/30 hover:bg-gray-600/50'
              }`}
            >
              <div className="flex items-center">
                <GraduationCap size={18} className="mr-2" />
                Education
              </div>
            </button>
          </div>
          
          {/* Work experience */}
          <div className={`${activeTab === 'work' ? 'block' : 'hidden'}`}>
            {renderExperienceItems(workExperience)}
          </div>
          
          {/* Education experience */}
          <div className={`${activeTab === 'education' ? 'block' : 'hidden'}`}>
            {renderExperienceItems(educationExperience)}
          </div>
          
          {/* Download CV button */}
          <div className="mt-12 flex justify-center">
            <a 
              href="/resume.pdf" 
              download
              className="inline-flex items-center px-8 py-3 bg-[#38b2ed] hover:bg-[#2ca8e5] text-white font-medium rounded-full transition-colors duration-300 shadow-lg"
            >
              Download CV <Award className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 