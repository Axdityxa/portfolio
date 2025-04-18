export default function Projects() {
  return (
    <section id="projects" className="mb-20 backdrop-blur-sm bg-white/80 dark:bg-black/50 p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Project 1 */}
        <div className="bg-white/50 dark:bg-gray-800/70 p-4 rounded-lg shadow-md">
          <div className="bg-gray-200 dark:bg-gray-700 w-full h-48 rounded-lg mb-4"></div>
          <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Project One</h3>
          <p className="mb-4 text-gray-700 dark:text-gray-300">Short description of project goes here. Explaining what technologies were used and what problem it solves.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">View Live</a>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">GitHub</a>
          </div>
        </div>
        
        {/* Project 2 */}
        <div className="bg-white/50 dark:bg-gray-800/70 p-4 rounded-lg shadow-md">
          <div className="bg-gray-200 dark:bg-gray-700 w-full h-48 rounded-lg mb-4"></div>
          <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Project Two</h3>
          <p className="mb-4 text-gray-700 dark:text-gray-300">Short description of project goes here. Explaining what technologies were used and what problem it solves.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">View Live</a>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
} 