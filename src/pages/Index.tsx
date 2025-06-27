
import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Terminal from '../components/Terminal';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Certified from '../components/Certified';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll-based section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-cyber-dark text-neon-blue overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 cyber-grid opacity-20 pointer-events-none"></div>
      
      {/* Animated Background Elements - Adjusted for mobile */}
      <div className="fixed top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-neon-pink/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-neon-blue/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="fixed top-1/2 left-1/2 w-24 h-24 sm:w-48 sm:h-48 bg-neon-green/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Navigation */}
      <Navigation activeSection={activeSection} onSectionChange={handleSectionChange} />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Home Section - Terminal */}
        <section id="home" className="pt-16 sm:pt-20">
          <Terminal />
        </section>

        {/* Projects Section */}
        <Projects />

        {/* Experience Section */}
        <Experience />

        {/* Contact Section */}
        <Contact />

        {/* Certified Section */}
        <Certified />
      </main>

      {/* Footer */}
      <footer className="bg-cyber-darker/80 border-t border-neon-blue/30 py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
            <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
            <span className="text-neon-blue font-mono text-xs sm:text-sm">
              © 2077 LUCAS_MARUJO_DEV - TODOS OS DIREITOS RESERVADOS
            </span>
            <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
          </div>
          <div className="text-neon-pink font-mono text-xs">
            DESENVOLVIDO COM ❤️ React + Typescript + TailwindCSS
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
