import React, { useState, useRef } from "react";
import { Mail, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_h06bufm";
const TEMPLATE_ID = "template_3ftquw9";
const PUBLIC_KEY = "_Nzs5g0cjGjdpPDch";

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formRef.current) return;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        alert("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send message. Please try again later.");
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          Get In Touch
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold text-black mb-6">
              Send a Message
            </h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-black mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/95 border border-gray-200 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-black mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/95 border border-gray-200 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-black mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/95 border border-gray-200 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-neon-cyan text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-neon-purple disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
            <div className="mt-10 text-center text-sm text-black italic">
              💬 Feel free to reach out - even if it's just to say hello! I'm
              always open to conversations, collaborations and new ideas. ✨
            </div>
          </div>

          <div className="space-y-8">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-black mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-lg flex items-center justify-center text-white shadow-lg">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-black text-sm">Email</p>
                    <a
                      href="mailto:nihanth1006@gmail.com"
                      className="text-neon-cyan hover:text-neon-purple transition-colors duration-300"
                    >
                      nihanth1006@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-neon-cyan to-neon-pink rounded-lg flex items-center justify-center text-white shadow-lg">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-black text-sm">Phone</p>
                    <a
                      href="tel:+917794085626"
                      className="text-neon-cyan hover:text-neon-purple transition-colors duration-300"
                    >
                      +91 7794085626
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-black mb-6">Resume</h3>
              <p className="text-black mb-6">
                Download my complete resume to learn more about my experience,
                skills, and achievements.
              </p>
              <a
                href="/certificates/B.Nihanth_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <button className="w-full bg-neon-cyan text-white px-6 py-3 rounded-lg font-medium hover:bg-neon-purple transition-all duration-300">
                  Download Resume
                </button>
              </a>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-black mb-6">
                Let's Connect
              </h3>
              <p className="text-black mb-6">
                I'm always open to discussing new opportunities, interesting
                projects, or just having a chat about technology.
              </p>
              <div className="text-neon-cyan">
                <p className="text-sm">Available for:</p>
                <ul className="text-sm mt-2 space-y-1">
                  <li>• Full-time opportunities</li>
                  <li>• Freelance projects</li>
                  <li>• Technical consultations</li>
                  <li>• Mentoring sessions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
