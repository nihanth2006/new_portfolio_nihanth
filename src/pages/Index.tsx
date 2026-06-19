
import React, { useEffect, useState } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import Navbar from '../components/Navbar';
import ParticleBackground from '../components/ParticleBackground';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ExperienceSection from '../components/ExperienceSection';
import EducationSection from '../components/EducationSection';
import ProjectsSection from '../components/ProjectsSection';
import CertificationsSection from '../components/CertificationsSection';
import BlogSection from '../components/BlogSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const timelineSlides = [
    <ExperienceSection key="experience" />,
    <EducationSection key="education" />,
  ];

  useEffect(() => {
    if (!isLoading) {
      // Enhanced scroll-triggered animations
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px' // Reduced further for even earlier trigger
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.classList.add('animate-slide-up');
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
            
            // Add staggered animation for child elements
            const children = element.querySelectorAll('.stagger-item');
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('animate-fade-in');
              }, index * 50); // Reduced from 80ms to 50ms
            });
          }
        });
      }, observerOptions);

      // Observe all sections with enhanced animations, but skip the hero section
      const sections = document.querySelectorAll('section:not(#hero)');
      sections.forEach((section) => {
        const sectionElement = section as HTMLElement;
        sectionElement.style.opacity = '0';
        sectionElement.style.transform = 'translateY(20px)'; // Reduced from 30px
        sectionElement.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'; // Reduced from 0.6s
        observer.observe(section);
      });

      // Handle hero section separately - just animate stagger items
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const staggerItems = heroSection.querySelectorAll('.stagger-item');
        staggerItems.forEach((item, index) => {
          const itemElement = item as HTMLElement;
          itemElement.style.opacity = '0';
          itemElement.style.transform = 'translateY(15px)'; // Reduced from 20px
          itemElement.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'; // Reduced from 0.5s
          
          setTimeout(() => {
            itemElement.style.opacity = '1';
            itemElement.style.transform = 'translateY(0)';
          }, index * 100 + 200); // Reduced delays: 150ms->100ms, 300ms->200ms
        });
      }

      // Observe cards and other elements for staggered animations
      const cards = document.querySelectorAll('.glass-card, .animate-card');
      cards.forEach((card, index) => {
        setTimeout(() => {
          const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const cardElement = entry.target as HTMLElement;
                cardElement.style.opacity = '1';
                cardElement.style.transform = 'translateY(0) scale(1)';
              }
            });
          }, { threshold: 0.1 });
          
          const cardElement = card as HTMLElement;
          cardElement.style.opacity = '0';
          cardElement.style.transform = 'translateY(15px) scale(0.98)'; // Reduced from 20px and scale
          cardElement.style.transition = `all 0.3s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.05}s`; // Reduced from 0.5s and 0.08s
          cardObserver.observe(card);
        }, 50); // Reduced from 80ms
      });

      return () => observer.disconnect();
    }
  }, [isLoading]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const goToPreviousSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? timelineSlides.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setActiveSlide((prev) => (prev === timelineSlides.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (diff > 50) {
      goToNextSlide();
    } else if (diff < -50) {
      goToPreviousSlide();
    }

    setTouchStartX(null);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <section className="py-6 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Career Timeline</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={goToPreviousSlide}
                  className="rounded-full border border-slate-700 bg-slate-900/60 p-2 text-slate-100 transition hover:border-cyan-400"
                  aria-label="Previous slide"
                >
                  ←
                </button>
                <button
                  onClick={goToNextSlide}
                  className="rounded-full border border-slate-700 bg-slate-900/60 p-2 text-slate-100 transition hover:border-cyan-400"
                  aria-label="Next slide"
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
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {timelineSlides.map((slide, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    {slide}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 flex justify-center gap-2">
              {timelineSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    activeSlide === index ? 'w-8 bg-cyan-400' : 'w-2.5 bg-slate-600 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
        <ProjectsSection />
        <CertificationsSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
