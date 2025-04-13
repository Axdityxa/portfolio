export default function Footer() {
  return (
    <footer className="w-full max-w-4xl mx-auto py-8 px-4 text-center text-white dark:text-gray-300">
      <div className="mb-12">
        <h3 className="text-xl mb-3 font-poppins text-center font-bold floating-text">GitHub Contributions</h3>
        <div className="flex justify-center">
          <div className="bg-white backdrop-blur-sm p-3 rounded-xl shadow-lg dark:bg-gray-800/30 w-[90%] sm:w-[500px]">
            <img
              src="https://ghchart.rshah.org/Axdityxa"
              alt="Aditya Sharma's GitHub Contributions Chart"
              className="w-full"
            />
          </div>
        </div>
      </div>
      <p>© {new Date().getFullYear()} Aditya Sharma | All rights reserved.</p>
    </footer>
  );
} 