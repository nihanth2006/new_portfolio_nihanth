
import React, { useState } from 'react';

const EducationSection = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const educationData = [
  {
    institution: "Koneru Lakshmaiah Education Foundation (KL University)",
    location: "Vijayawada, Andhra Pradesh, India",
    degree: "Bachelor of Technology – Artificial Intelligence & Autonomous Systems",
    duration: "2023-2027",
    grade: "",
    achievements: [
      "Executive Committee Member – KL Research & Positioning (KL-RE): Contributed to research initiatives and collaborated with team members to support strategic academic projects and events",
      "Project Leadership: Led the development of a full-stack E-commerce platform for homemade foods and handmade crafts using React.js, Spring Boot, and MySQL, improving communication between merchants and customers",
      "Technical Problem Solving: Regularly solve algorithmic programming challenges using Java and C++, strengthening logical thinking and coding efficiency"
    ],
    icon: "🎓"
  },
  {
    institution: "Sri Chaitanya Junior College, Vijayawada",
    location: "Vijayawada, Andhra Pradesh, India",
    degree: "Intermediate - Board of Intermediate Education, Andhra Pradesh",
    duration: "2021 – 2023",
    grade: "",
    achievements: [],
    icon: "🏛️"
  },
  {
    institution: "Kings English Medium School",
    location: "Gollaprolu, Andhra Pradesh, India",
    degree: "Secondary School Certificate (SSC) – Board of Secondary Education, Andhra Pradesh",
    duration: "Completed: 2021",
    grade: "",
    achievements: [],
    icon: "🏫"
  }
];

  const goToPrevious = () => {
    setActiveCard((prev) => (prev === 0 ? educationData.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveCard((prev) => (prev === educationData.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) return;

    const diff = touchStartX - e.changedTouches[0].clientX;

    if (diff > 50) {
      goToNext();
    } else if (diff < -50) {
      goToPrevious();
    }

    setTouchStartX(null);
  };

  return (
    <section id="education" className="py-24 px-6 bg-transparent">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="font-bold mb-6 text-gradient">
            Educational Journey
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Building a strong foundation in computer science and engineering
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-slate-400">
              {activeCard + 1} / {educationData.length}
            </span>
            <div className="flex gap-2">
              <button
                onClick={goToPrevious}
                className="rounded-full border border-slate-700 bg-slate-900/60 p-2 text-slate-100 transition hover:border-cyan-400"
                aria-label="Previous education"
              >
                ←
              </button>
              <button
                onClick={goToNext}
                className="rounded-full border border-slate-700 bg-slate-900/60 p-2 text-slate-100 transition hover:border-cyan-400"
                aria-label="Next education"
              >
                →
              </button>
            </div>
          </div>

          <div
            className="overflow-hidden rounded-2xl"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeCard * 100}%)` }}
            >
              {educationData.map((edu, index) => (
                <div key={index} className="w-full flex-shrink-0 px-1">
                  <div className="glass-card p-8 md:p-10 rounded-2xl animate-slide-up">
                    <div className="flex items-start justify-between flex-wrap gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-3xl">{edu.icon}</span>
                          <div>
                            <h3 className="text-xl font-bold text-slate-100">{edu.institution}</h3>
                            <p className="text-cyan-300 font-semibold text-lg">{edu.degree}</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <p className="text-slate-400 flex items-center gap-2">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            {edu.location}
                          </p>
                          {edu.grade && <p className="text-cyan-300 font-semibold text-lg">{edu.grade}</p>}
                          {edu.achievements && edu.achievements.length > 0 && (
                            <div className="mt-4">
                              <h4 className="text-sm font-semibold text-slate-200 mb-2">Key Achievements & Activities:</h4>
                              <ul className="space-y-1">
                                {edu.achievements.map((achievement, idx) => (
                                  <li key={idx} className="text-sm text-slate-300 flex items-start gap-2">
                                    <span className="text-indigo-500 mt-1">•</span>
                                    <span>{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-4 py-2 bg-slate-900/70 text-cyan-200 border border-slate-700 rounded-lg text-sm font-medium">
                          {edu.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex justify-center gap-2">
            {educationData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveCard(index)}
                className={`h-2.5 rounded-full transition-all ${
                  activeCard === index ? 'w-8 bg-cyan-400' : 'w-2.5 bg-slate-600 hover:bg-slate-400'
                }`}
                aria-label={`Go to education ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;