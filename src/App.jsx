import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StickySection from './components/StickySection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import TabSection from './components/TabSection';
import AIArena from './components/AIArena';
import ContactQRSection from './components/ContactQRSection';
import ToolsMarquee from './components/ToolsMarquee';
import Footer from './components/Footer';
import './index.css';

function App() {
  useEffect(() => {
    // Smooth scroll
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Basic scroll reveal for elements with .reveal class
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => {
      lenis.destroy();
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      {/* Skip to content — keyboard/screen reader accessibility */}
      <a className="skip-link" href="#main-content">Skip to main content</a>

      <div className="grain-overlay" aria-hidden="true" />
      <Navbar />

      <main id="main-content">
        <Hero />
        <StickySection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <TabSection />
        <AIArena />
        <ContactQRSection />
        <ToolsMarquee />
      </main>

      <Footer />
    </div>
  );
}

export default App;
