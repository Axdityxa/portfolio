"use client";

export default function About() {
  return (
    <section id="about" className="relative py-20 min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-5xl md:text-6xl font-bold mb-3 text-white text-center floating-text drop-shadow-xl">
        About Me
      </h2>
      <p className="text-xl text-center mb-16 text-gray-200 dark:text-gray-300">
        My Introduction
      </p>
      
      <div className="container mx-auto px-4">
        <div className="bg-blue-900/40 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-blue-400/20">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            {/* Left side - Image with blob animation */}
            <div className="md:w-1/3 w-full h-80 flex justify-center items-center">
              <div className="blob-container w-full h-full max-w-xs rounded-2xl">
                <div className="blob"></div>
                <img 
                  className="blob-image" 
                  src="images/favicon.png" 
                  alt="Profile" 
                />
              </div>
            </div>
            
            {/* Right side - Content */}
            <div className="md:w-2/3 w-full">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="flex flex-col items-center p-5 rounded-xl bg-gray-200/20 backdrop-blur-sm shadow-lg">
                  <div className="mb-2">
                    <img src="/brain-icon.svg" alt="Experience" className="w-10 h-10" onError={(e) => {
                      e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23F472B6'%3E%3Cpath d='M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-1 15a1 1 0 1 1-1-1 1 1 0 0 1 1 1zm2.71-6.7a5.39 5.39 0 0 1-.84.7 2.53 2.53 0 0 0-.87.82 2 2 0 0 0-.27 1.18h-2a3.88 3.88 0 0 1 .55-2.25 3.56 3.56 0 0 1 1.18-1.11c.27-.18.48-.33.63-.46a1.58 1.58 0 0 0 .37-.41 1 1 0 0 0 .13-.51.92.92 0 0 0-.32-.76 1.52 1.52 0 0 0-1-.28 1.62 1.62 0 0 0-1 .33 1.62 1.62 0 0 0-.5.91l-2-.26a3.81 3.81 0 0 1 .51-1.54 2.8 2.8 0 0 1 1.13-1A4 4 0 0 1 12 6a3.85 3.85 0 0 1 2.51.72 2.33 2.33 0 0 1 .9 1.93 2.61 2.61 0 0 1-.45 1.52z'/%3E%3C/svg%3E";
                    }} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Experience</h3>
                  <p className="text-sm text-center text-gray-200">2y Self Learning</p>
                </div>
                
                <div className="flex flex-col items-center p-5 rounded-xl bg-gray-200/20 backdrop-blur-sm shadow-lg">
                  <div className="mb-2">
                    <img src="/briefcase-icon.svg" alt="Completed" className="w-10 h-10" onError={(e) => {
                      e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23A78BFA'%3E%3Cpath d='M17 9h-1V7c0-2.8-2.2-5-5-5S6 4.2 6 7v2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2zM8 7c0-1.7 1.3-3 3-3s3 1.3 3 3v2H8V7zm6 8H9v2h5v-2z'/%3E%3C/svg%3E";
                    }} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Completed</h3>
                  <p className="text-sm text-center text-gray-200">2 FOSS Softwares</p>
                </div>
                
                <div className="flex flex-col items-center p-5 rounded-xl bg-gray-200/20 backdrop-blur-sm shadow-lg">
                  <div className="mb-2">
                    <img src="/headset-icon.svg" alt="Support" className="w-10 h-10" onError={(e) => {
                      e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2338BDF8'%3E%3Cpath d='M12 2a8 8 0 0 0-8 8v7a3 3 0 0 0 3 3h3v-8H7V10a5 5 0 0 1 10 0v2h-3v8h3a3 3 0 0 0 3-3v-7a8 8 0 0 0-8-8z'/%3E%3C/svg%3E";
                    }} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Support</h3>
                  <p className="text-sm text-center text-gray-200">Online 24*7</p>
                </div>
              </div>
              
              <p className="text-lg leading-relaxed mb-8 text-white/90">
                Fueled by an insatiable curiosity, he&apos;s equally enamored by the cosmos and computers, channeling boundless enthusiasm into both realms.
              </p>
              
              <div className="flex justify-center md:justify-start">
                <a 
                  href="#contact" 
                  className="inline-flex items-center px-8 py-3 bg-[#38b2ed] hover:bg-[#2ca8e5] text-white font-medium rounded-full transition-colors duration-300 shadow-lg"
                >
                  Follow me <span className="ml-2">📄</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 