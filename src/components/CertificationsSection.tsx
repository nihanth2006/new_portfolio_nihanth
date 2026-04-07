import React from "react";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      icon: "☁️",
      color: "from-orange-500 to-yellow-500",
      description: "Cloud computing fundamentals and AWS services",
      file: "/certificates/AWS CP.pdf",
    },
    {
      title: "Oracle Cloud Infrastructure 2024 Certified",
      issuer: "Oracle",
      icon: "🛡️",
      color: "from-red-600 to-orange-600",
      description: "Core cloud infrastructure and services on OCI",
      file: "/certificates/Oracle Cloud Infrastructure 2024 Generative AI Certified Professional.pdf",
    },
    {
      title: "Oracle APEX Cloud Developer Certified Professional",
      issuer: "Oracle",
      icon: "🧩",
      color: "from-red-500 to-pink-500",
      description: "Building enterprise applications using Oracle APEX platform",
      file: "/certificates/Oracle APEX Cloud Developer Certified Professional.pdf",
    },
    {
      title: "Salesforce Certified AI Associate",
      issuer: "Salesforce",
      icon: "🤖",
      color: "from-purple-500 to-indigo-500",
      description: "AI foundations and Salesforce ecosystem",
      file: "/certificates/Salesforce Certified AI Associate.pdf",
    },
    {
      title: "React & Software Engineering Certified",
      issuer: "HackerRank",
      icon: "⚛️",
      color: "from-blue-500 to-cyan-500",
      description: "Frontend and software engineering skills certification",
      file: "https://www.hackerrank.com/certificates/iframe/200d2a72c0d8",
    },
    {
      title: "Software Engineer Certification",
      issuer: "HackerRank",
      icon: "💻",
      color: "from-green-500 to-emerald-500",
      description: "Problem solving, data structures, and core software engineering skills",
      file: "https://www.hackerrank.com/certificates",
    },
    {
      title: "Networking Essentials",
      issuer: "Cisco Networking Academy",
      icon: "🌐",
      color: "from-blue-600 to-indigo-600",
      description: "Fundamentals of networking, protocols, IP addressing, and network security basics",
      file: "/certificates/Networking Essentials Cisco.pdf",
    },
  ];

  return (
    <section id="certifications" className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="glass-card p-6 hover:neon-glow transition-all duration-500 hover:scale-105 group animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center space-y-4">
                <div
                  className="text-4xl mb-4 animate-float"
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  {cert.icon}
                </div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-gradient transition-all duration-300">
                  {cert.title}
                </h3>

                <p className="text-gray-700 dark:text-black font-medium text-sm">
                  {cert.issuer}
                </p>

                <p className="text-gray-600 dark:text-black text-sm leading-relaxed">
                  {cert.description}
                </p>

                <div
                  className={`w-full h-1 bg-gradient-to-r ${cert.color} rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>

                {/* Buttons */}
                <div className="flex gap-2">
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-3 py-2 border border-indigo-500 text-indigo-600 rounded-lg text-sm font-medium text-center hover:bg-indigo-600 hover:text-white transition"
                  >
                    View
                  </a>

                  <a
                    href="https://www.linkedin.com/in/b-nihanth-117407334/details/certifications/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-3 py-2 border border-green-500 text-green-600 rounded-lg text-sm font-medium text-center hover:bg-green-600 hover:text-white transition"
                  >
                    Verify
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;