
import React, { useEffect, useState } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import Navbar from '../components/Navbar';
import ParticleBackground from '../components/ParticleBackground';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import EducationSection from '../components/EducationSection';
import ProjectsSection from '../components/ProjectsSection';
import CertificationsSection from '../components/CertificationsSection';
import BlogSection from '../components/BlogSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

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
        <EducationSection />
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
