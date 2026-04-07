import React from "react";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "How I Built Salvii AI – Full System Design",
      description:
        "A deep dive into building a scalable AI-powered web assistant using Generative AI, including system architecture, API design, and performance optimization strategies.",
      date: "March 2025",
      readTime: "8 min read",
      tags: ["AI", "Generative AI", "React", "Spring Boot"],
      link: "https://salviiiai.netlify.app/",
      image: "🤖",
    },
    {
      title: "Autonomous EV Delivery System – Architecture & CAN Protocol",
      description:
        "Exploring the architecture of an AI-powered autonomous delivery system, including microservices design, real-time telemetry, and CAN protocol communication.",
      date: "April 2025",
      readTime: "10 min read",
      tags: ["Microservices", "CAN", "AWS", "React"],
      link: "https://urban-delivery-autonomous-vehicle-3.vercel.app/",
      image: "🚗",
    },
    {
      title: "FindMyItem – Solving Campus Lost & Found Problem",
      description:
        "A case study on building a full-stack lost-and-found platform for campus use, focusing on search optimization, REST APIs, and real-world usability.",
      date: "February 2025",
      readTime: "7 min read",
      tags: ["Full Stack", "Search", "React", "Spring Boot"],
      link: "https://findmyitem-1.onrender.com/",
      image: "📦",
    },
    {
      title: "Reducing API Latency by 25% – Optimization Techniques",
      description:
        "Practical techniques to improve backend performance using caching, efficient API pipelines, and database optimization strategies.",
      date: "January 2025",
      readTime: "6 min read",
      tags: ["Performance", "Backend", "Optimization"],
      link: "",
      image: "⚡",
    },
  ];

  return (
    <section id="blog" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          Latest Blog Posts
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="glass-card p-6 hover:neon-glow transition-all duration-500 hover:scale-105 group animate-slide-up cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div
                    className="text-3xl animate-float"
                    style={{ animationDelay: `${index * 0.3}s` }}
                  >
                    {post.image}
                  </div>
                  <div className="flex-1">
                    {/* ✅ FIXED */}
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-black mb-2">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-gradient transition-all duration-300 line-clamp-2">
                  {post.title}
                </h3>

                {/* ✅ FIXED */}
                <p className="text-gray-700 dark:text-black text-sm leading-relaxed line-clamp-3">
                  {post.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-white/10 border border-white/20 rounded text-gray-700 dark:text-black"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* ✅ FIXED */}
                {post.link ? (
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 font-medium text-sm flex items-center gap-2"
                  >
                    Read More
                    <span>→</span>
                  </a>
                ) : (
                  <button
                    disabled
                    className="text-gray-500 font-medium text-sm cursor-not-allowed flex items-center gap-2"
                  >
                    Coming Soon
                    <span className="text-black">→</span>
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* ✅ FIXED */}
        <div className="text-center mt-12 text-gray-600 dark:text-black text-sm italic">
          More posts coming soon...
        </div>
      </div>
    </section>
  );
};

export default BlogSection;