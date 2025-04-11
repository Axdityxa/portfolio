export default function Contact() {
  return (
    <section id="contact" className="mb-20 backdrop-blur-sm bg-black/30 p-6 rounded-lg">
      <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
      <p className="mb-6">Feel free to reach out if you're looking for a developer, have a question, or just want to connect.</p>
      
      <div className="flex flex-col space-y-4">
        <a href="mailto:youremail@example.com" className="flex items-center space-x-2 hover:text-blue-400">
          <span>Email: youremail@example.com</span>
        </a>
        <a href="https://linkedin.com/in/yourusername" className="flex items-center space-x-2 hover:text-blue-400">
          <span>LinkedIn: linkedin.com/in/yourusername</span>
        </a>
        <a href="https://github.com/yourusername" className="flex items-center space-x-2 hover:text-blue-400">
          <span>GitHub: github.com/yourusername</span>
        </a>
      </div>
    </section>
  );
} 