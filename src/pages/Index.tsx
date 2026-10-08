import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Preloader from '@/components/Preloader';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  // Default to dark - index.html inline script already adds 'dark' class
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Always default to dark theme on initial load as requested
    setIsDark(true);
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');

    // Initialize AOS
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });

    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setIsDark(prev => {
      const newValue = !prev;
      if (newValue) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return newValue;
    });
  };

  return (
    <>
      <Preloader isLoading={isLoading} />

      <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Header isDark={isDark} toggleTheme={toggleTheme} />

        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Certifications />
          <Education />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;