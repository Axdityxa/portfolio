export default function Skills() {
  return (
    <section id="skills" className="mb-20 backdrop-blur-sm bg-black/30 p-6 rounded-lg">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-black/50 p-4 rounded-lg text-center">
          <div className="text-4xl mb-2">💻</div>
          <h3 className="font-medium">Frontend</h3>
          <p className="text-sm text-gray-300">HTML, CSS, JavaScript, React</p>
        </div>
        <div className="bg-black/50 p-4 rounded-lg text-center">
          <div className="text-4xl mb-2">⚙️</div>
          <h3 className="font-medium">Backend</h3>
          <p className="text-sm text-gray-300">Node.js, Express, MongoDB</p>
        </div>
        <div className="bg-black/50 p-4 rounded-lg text-center">
          <div className="text-4xl mb-2">🎨</div>
          <h3 className="font-medium">Design</h3>
          <p className="text-sm text-gray-300">Figma, Adobe XD, UI/UX</p>
        </div>
        <div className="bg-black/50 p-4 rounded-lg text-center">
          <div className="text-4xl mb-2">🔧</div>
          <h3 className="font-medium">Tools</h3>
          <p className="text-sm text-gray-300">Git, VS Code, Docker</p>
        </div>
      </div>
    </section>
  );
} 