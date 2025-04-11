export default function About() {
  return (
    <section id="about" className="mb-20 backdrop-blur-sm bg-black/30 p-6 rounded-lg">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          {/* Replace with your image */}
          <div className="bg-gray-300 w-full h-64 rounded-lg"></div>
        </div>
        <div className="md:w-2/3">
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </section>
  );
} 