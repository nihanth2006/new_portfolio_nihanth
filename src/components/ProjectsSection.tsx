import React from "react";
import { Github, Star } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "⭐ FocusGuard — Browser Extension",
      description:
        "A productivity-focused browser extension that uses focus trapping techniques to prevent distractions and keep users engaged.",
      tech: ["JavaScript", "Browser Extension", "Focus Management"],
      highlights: [
        "Implemented focus guard system",
        "Improved productivity by reducing distractions",
        "Published on Microsoft Edge Store",
      ],
      codeUrl: "https://github.com/nihanth2006/FocusGuard.git",
      liveUrl:
        "https://microsoftedge.microsoft.com/addons/detail/focusguard/apfahenjeimfikknijnojbghcogcajch",
      special: true,
    },

    {
      title: "Salvii AI — Scalable AI Web Assistant",
      description:
        "AI-powered web assistant for intelligent content generation.",
      tech: ["Spring Boot", "Generative AI", "React"],
      highlights: [
        "Optimised latency by 25%",
        "Built scalable AI architecture",
      ],
      codeUrl: "https://github.com/nihanth2006/Salvii_ai.git",
      liveUrl: "https://salviiiai.netlify.app/",
    },

    {
      title: "Smart Autonomous EV Delivery System",
      description:
        "Autonomous delivery system with real-time telemetry and optimized routing.",
      tech: ["Java", "Microservices", "React", "MongoDB"],
      highlights: [
        "Improved route efficiency by 30%",
        "Implemented CAN protocol",
      ],
      codeUrl:
        "https://github.com/nihanth2006/urban-delivery-autonomous-vehicle.git",
      liveUrl:
        "https://urban-delivery-autonomous-vehicle-3.vercel.app/",
    },

    {
      title: "Online Certification Management System",
      description:
        "A scalable platform for managing certifications with secure APIs and automation.",
      tech: ["Spring Boot", "React", "MySQL", "CI/CD"],
      highlights: [
        "Reduced workload by 40%",
        "Optimised DB performance by 25%",
        "Implemented CI/CD pipelines",
      ],
      codeUrl: "", // add if you have
      liveUrl: "", // optional
    },

    {
      title: "FindMyItem — Lost Item Recovery Platform",
      description:
        "Full-stack platform to help students recover lost items efficiently.",
      tech: ["Spring Boot", "React", "REST APIs"],
      highlights: [
        "Served 500+ users",
        "Reduced search time by 40%",
      ],
      codeUrl: "https://github.com/nihanth2006/FINDMYITEM.git",
      liveUrl: "https://findmyitem-1.onrender.com/",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-gray-50">
      <div className="container mx-auto max-w-7xl">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Featured Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1
              ${
                project.special
                  ? "bg-blue-100 border-blue-400 shadow-lg"
                  : "bg-white border-gray-200"
              }`}
            >
              <div className="space-y-6">

                {/* Title */}
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-black">
                    {project.title}
                  </h3>

                  {project.special && (
                    <span className="flex items-center gap-1 text-yellow-500 text-sm font-bold">
                      <Star size={16} /> Featured
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-black text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="text-sm text-black">
                      • {h}
                    </li>
                  ))}
                </ul>

                {/* Tech */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white text-black text-xs rounded-lg border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-4">
                  {project.codeUrl && (
                    <a href={project.codeUrl} target="_blank">
                      <button className="bg-black text-white px-4 py-2 rounded-lg text-sm">
                        <Github className="w-4 h-4 inline mr-2" />
                        Code
                      </button>
                    </a>
                  )}

                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank">
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
                        Live
                      </button>
                    </a>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;