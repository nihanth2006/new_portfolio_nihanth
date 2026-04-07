import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const titles = ["Full Stack Developer", "Software Engineer"];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative px-6"
    >
      <div className="text-center z-10">
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gradient stagger-item">
            B.Nihanth
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-black mb-6 stagger-item">
            {titles[currentTitleIndex]}
          </h2>
          <p className="text-lg md:text-xl text-black max-w-2xl mx-auto leading-relaxed stagger-item">
            "Crafting Scalable Software. Engineering Smart Solutions."
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 stagger-item">
          <a
            href="/certificates/B.Nihanth_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <button className="bg-neon-cyan text-white px-8 py-4 rounded-lg font-medium transition-all duration-500 hover:bg-neon-purple hover:scale-110">
              View / Download Resume
            </button>
          </a>

          <button
            onClick={scrollToContact}
            className="px-8 py-4 rounded-lg font-medium border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-white transition-all duration-500 hover:scale-110"
          >
            Contact Me
          </button>
        </div>

        <div className="mt-16 stagger-item">
          <div className="w-24 h-24 mx-auto rounded-full glass-card flex items-center justify-center neon-glow animate-float">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-neon-purple to-neon-cyan"></div>
          </div>
        </div>
      </div>

      {/* Enhanced floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`particle particle-${(i % 3) + 1}`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
