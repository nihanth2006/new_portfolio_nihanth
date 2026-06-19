import React from 'react';

const AboutSection = () => {
  const skills = {
    'Languages': ['Java', 'SQL','C'],
    'Web Development': ['HTML', 'CSS', 'JavaScript', 'React.js', 'TypeScript', 'JSP', 'Servlets'],
    'Frameworks': ['Node.js', 'Express.js', 'Spring Boot', 'Hibernate', 'Django'],
    'Databases': ['MySQL', 'PostgreSQL', 'MongoDB', 'Data Warehousing'],
    'Backend': ['REST APIs', 'Java EE', 'Microservices'],
    'Cloud/DevOps': ['AWS', 'Google Cloud', 'CI/CD Pipelines', 'GitHub Actions'],
    'Core CS': ['Data Structures', 'OOP', 'System Design', 'Design Patterns'],
    'Tools': ['Git', 'GitHub', 'Postman', 'IntelliJ', 'VS Code', 'Eclipse'],
    'Soft Skills': ['Mentoring', 'Communication', 'Public Speaking', 'Task Management','LeaderShip']
  };

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          About Me
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="glass-card p-8 neon-glow">
              <p className="text-lg text-slate-200 leading-relaxed mb-6">
                I'm <span className="text-cyan-400 font-semibold">B.Nihanth</span>, a passionate B.Tech Computer Science Engineering student from 
                <span className="text-purple-400 font-semibold"> KL University</span> with a strong foundation in both backend and frontend development.
              </p>
              <p className="text-lg text-slate-200 leading-relaxed mb-6">
                My expertise spans across multiple technologies, from building robust server-side applications with Spring Boot to creating 
                dynamic user interfaces with React. I'm particularly passionate about cloud computing and DevOps practices.
              </p>
              <p className="text-lg text-slate-200 leading-relaxed">
                I believe in writing clean, maintainable code and am always eager to learn new technologies and tackle challenging problems 
                that make a real impact.
              </p>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-neon-purple mb-4">Leadership Impact</h3>
              <div className="space-y-3 text-slate-200">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-neon-cyan rounded-full"></div>
                  <span>Co-Founder & Mentor at Be One Community Student Club</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-neon-pink rounded-full"></div>
                  <span>Mentored 3000+ students through 50+ workshops</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-neon-purple rounded-full"></div>
                  <span>Expertise in Web Development & Leadership Training</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-neon-cyan mb-6">Technical Stack</h3>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category} className="space-y-2">
                    <h4 className="text-sm font-semibold text-neon-purple uppercase tracking-wide">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs bg-slate-900/50 border border-slate-600 rounded-full text-slate-100 hover:text-white hover:bg-cyan-500/10 hover:border-neon-cyan transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
