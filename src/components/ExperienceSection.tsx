import React, { useState } from 'react';

const ExperienceSection = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const experiences = [
    {
      role: 'Frontend Developer Intern',
      company: 'Grizo Labs',
      duration: 'April 2026 – June 2026',
      location: 'Remote',
      highlights: [
        'Engineered and deployed 3+ responsive web applications using React.js and Next.js, enhancing user experience and performance.',
        'Built and launched MockStep.com, a placement preparation platform serving 1000+ users with structured learning and interview resources.',
        'Provisioned and hosted frontend applications on AWS (S3/Amplify), achieving 99.9% uptime and scalable delivery.',
        'Reduced page load time by 25–35% via server-side rendering (SSR) and component-level optimizations in Next.js.',
        'Orchestrated 5+ REST API integrations to enable real-time data updates and seamless user interactions.',
        'Designed interactive UI for an AI-based interview module and integrated AI APIs for automated feedback.',
        'Collaborated in Agile sprints, accelerating feature delivery by 20% while maintaining code quality using Git/GitHub workflows.'
      ]
    },
    {
      role: 'Research Committee Executive Lead',
      company: 'Research Club',
      duration: '2025 – Present',
      location: 'KL University',
      highlights: [
        'Directed a team of 10+ members to plan and execute research initiatives, workshops, and technical sessions.',
        'Organized 5+ research events and guided students in paper writing, project development, and publication processes.',
        'Mentored 20+ students in AI and machine learning, increasing research participation by 30%.',
        'Partnered with faculty and industry experts to facilitate knowledge-sharing sessions and technical discussions.',
        'Streamlined research workflows and documentation, improving team productivity and operational efficiency.'
      ]
    }
  ];

  const goToPrevious = () => {
    setActiveCard((prev) => (prev === 0 ? experiences.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveCard((prev) => (prev === experiences.length - 1 ? 0 : prev + 1));
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
    <section id="experience" className="py-24 px-6 bg-transparent">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Experience
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Building impactful products, leading teams, and turning ideas into real-world solutions.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-slate-400">
              {activeCard + 1} / {experiences.length}
            </span>
            <div className="flex gap-2">
              <button
                onClick={goToPrevious}
                className="rounded-full border border-slate-700 bg-slate-900/60 p-2 text-slate-100 transition hover:border-cyan-400"
                aria-label="Previous experience"
              >
                ←
              </button>
              <button
                onClick={goToNext}
                className="rounded-full border border-slate-700 bg-slate-900/60 p-2 text-slate-100 transition hover:border-cyan-400"
                aria-label="Next experience"
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
              {experiences.map((exp, index) => (
                <div key={index} className="w-full flex-shrink-0 px-1">
                  <div className="glass-card p-8 md:p-10 rounded-2xl animate-slide-up">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-100">{exp.role}</h3>
                        <p className="text-lg font-semibold text-cyan-300">{exp.company}</p>
                      </div>
                      <div className="text-sm md:text-right text-slate-400">
                        <p>{exp.duration}</p>
                        <p>{exp.location}</p>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {exp.highlights.map((point, idx) => (
                        <li key={idx} className="flex gap-3 text-slate-300">
                          <span className="mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex-shrink-0"></span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex justify-center gap-2">
            {experiences.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveCard(index)}
                className={`h-2.5 rounded-full transition-all ${
                  activeCard === index ? 'w-8 bg-cyan-400' : 'w-2.5 bg-slate-600 hover:bg-slate-400'
                }`}
                aria-label={`Go to experience ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
