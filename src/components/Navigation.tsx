
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  const [time, setTime] = useState(new Date());
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const navItems = [
    { id: 'home', label: 'TERMINAL', icon: '◉' },
    { id: 'projects', label: 'PROJETOS', icon: '◈' },
    { id: 'experience', label: 'EXPERIÊNCIA', icon: '◇' },
    { id: 'contact', label: 'ENTRE EM CONTATO', icon: '◆' },
  ];

  const handleSectionChange = (section: string) => {
    onSectionChange(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cyber-dark/90 backdrop-blur-md border-b border-neon-blue/30">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 md:w-8 md:h-8 border border-neon-blue rounded rotate-45 flex items-center justify-center">
              <div className="w-2 h-2 md:w-3 md:h-3 bg-neon-blue rounded-full animate-pulse-neon"></div>
            </div>
            <span className="text-lg md:text-xl font-bold text-neon-blue text-glow">LUCAS_DEV.EXE</span>
          </div>

          {/* Desktop Navigation Items */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`relative group flex items-center space-x-2 px-3 py-2 rounded transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-neon-pink bg-neon-pink/10 neon-border'
                    : 'text-neon-blue hover:text-neon-pink hover:bg-neon-pink/5'
                }`}
              >
                <span className="text-base lg:text-lg">{item.icon}</span>
                <span className="font-mono text-xs lg:text-sm tracking-wider">{item.label}</span>
                {activeSection === item.id && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-neon-pink animate-glow"></div>
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-neon-blue hover:text-neon-pink transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop HUD Info */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 text-lg font-mono">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
              <span className="text-neon-green">ONLINE</span>
            </div>
            <div className="text-neon-blue">
              {time.toLocaleTimeString('en-US', { 
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
              })}
            </div>
            <div className="text-neon-orange">
              NC_2077
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-neon-blue/30">
            <div className="flex flex-col space-y-3 mt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSectionChange(item.id)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-neon-pink bg-neon-pink/10 neon-border'
                      : 'text-neon-blue hover:text-neon-pink hover:bg-neon-pink/5'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-mono text-sm tracking-wider">{item.label}</span>
                </button>
              ))}
            </div>
            
            {/* Mobile HUD Info */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-neon-blue/30 text-sm font-mono">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                <span className="text-neon-green">ONLINE</span>
              </div>
              <div className="text-neon-blue">
                {time.toLocaleTimeString('en-US', { 
                  hour12: false,
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </div>
              <div className="text-neon-orange">
                NC_2077
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
