"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });
    
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }
      
      // Success
      setSubmitStatus({
        type: 'success',
        message: 'Your message has been sent! I will get back to you soon.'
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative min-h-screen flex flex-col items-center justify-center py-20">
      <h2 className="text-5xl md:text-5xl font-bold mb-10 text-white floating-text drop-shadow-xl">
        Get in Touch
      </h2>
      
      <div className="w-full max-w-xl mx-auto px-8 py-8 bg-gray-700/70 dark:bg-black/50 rounded-2xl shadow-lg">
        {submitStatus.type && (
          <div className={`p-4 mb-4 rounded-xl ${
            submitStatus.type === 'success' ? 'bg-green-900/70 text-green-100' : 'bg-red-900/70 text-red-100'
          }`}>
            {submitStatus.message}
          </div>
        )}
        
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
              className="w-full py-2 px-4 bg-gray-800/80 text-white rounded-xl focus:outline-none border-1 dark:border-gray-700 border-gray-500"
              placeholder="Your name"
              required
              disabled={isSubmitting}
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
              className="w-full py-2 px-4 bg-gray-800/80 text-white rounded-xl focus:outline-none border-1 dark:border-gray-700 border-gray-500"
              placeholder="your@email.com"
              required
              disabled={isSubmitting}
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
              className="w-full py-2 px-4 bg-gray-800/80 text-white rounded-xl focus:outline-none resize-none border-1 dark:border-gray-700 border-gray-500"
              placeholder="Your message..."
              required
              disabled={isSubmitting}
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2 bg-[#38b2ed] hover:bg-[#2ca8e5] text-white font-medium rounded-xl transition-colors duration-300 ${
              isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
} 