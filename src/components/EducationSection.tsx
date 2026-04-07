
import React from 'react';

const EducationSection = () => {
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

  return (
    <section id="education" className="py-24 px-6 bg-gray-50/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-20">
          <h2 className="font-bold mb-6 text-gradient">
            Educational Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building a strong foundation in computer science and engineering
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-cyan-500"></div>

          {educationData.map((edu, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full border-4 border-white shadow-lg"></div>
              
              <div className="ml-20 glass-card p-8 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-start justify-between flex-wrap gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-3xl">{edu.icon}</span>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{edu.institution}</h3>
                        <p className="text-indigo-600 font-semibold text-lg">{edu.degree}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-gray-600 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {edu.location}
                      </p>
                      {edu.grade && <p className="text-cyan-600 font-semibold text-lg">{edu.grade}</p>}
                      {edu.achievements && edu.achievements.length > 0 && (
                        <div className="mt-4">
                          <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Achievements & Activities:</h4>
                          <ul className="space-y-1">
                            {edu.achievements.map((achievement, idx) => (
                              <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
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
                    <span className="inline-block px-4 py-2 bg-indigo-50 text-indigo-700 border border-indigo-100 rounded-lg text-sm font-medium">
                      {edu.duration}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;