export default function Skills() {
  return (
    <section id="skills" className="mb-20 backdrop-blur-sm bg-white/80 dark:bg-black/50 p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white/50 dark:bg-gray-800/70 p-4 rounded-lg text-center shadow-md">
          <div className="text-4xl mb-2">💻</div>
          <h3 className="font-medium text-gray-800 dark:text-white">Frontend</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">HTML, CSS, JavaScript, React</p>
        </div>
        <div className="bg-white/50 dark:bg-gray-800/70 p-4 rounded-lg text-center shadow-md">
          <div className="text-4xl mb-2">⚙️</div>
          <h3 className="font-medium text-gray-800 dark:text-white">Backend</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Node.js, Express, MongoDB</p>
        </div>
        <div className="bg-white/50 dark:bg-gray-800/70 p-4 rounded-lg text-center shadow-md">
          <div className="text-4xl mb-2">🎨</div>
          <h3 className="font-medium text-gray-800 dark:text-white">Design</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Figma, Adobe XD, UI/UX</p>
        </div>
        <div className="bg-white/50 dark:bg-gray-800/70 p-4 rounded-lg text-center shadow-md">
          <div className="text-4xl mb-2">🔧</div>
          <h3 className="font-medium text-gray-800 dark:text-white">Tools</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Git, VS Code, Docker</p>
        </div>
      </div>
    </section>
  );
} 