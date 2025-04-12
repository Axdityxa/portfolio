"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    alert("Message sent! (Demo only)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative min-h-screen flex flex-col items-center justify-center py-20">
      <h2 className="text-5xl md:text-6xl font-bold mb-10 text-white floating-text drop-shadow-lg">
        Get in Touch
      </h2>
      
      <div className="w-full max-w-xl mx-auto px-8 py-8 h-110 bg-gray-800/90 rounded-2xl shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-white text-lg font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full py-2 px-4 bg-gray-900/95 text-white rounded-xl focus:outline-none"
              placeholder="Your name"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-white text-lg font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full py-2 px-4 bg-gray-900/95 text-white rounded-xl focus:outline-none"
              placeholder="your@email.com"
              required
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-white text-lg font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full py-2 px-4 bg-gray-900/95 text-white rounded-xl focus:outline-none resize-none"
              placeholder="Your message..."
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full py-2 bg-[#38b2ed] hover:bg-[#2ca8e5] text-white font-medium rounded-xl transition-colors duration-300 mt-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
} 