import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import aiChatbot from '../lib/img/ia-chatbot.png';
import pixelFlow from '../lib/img/pixel-flow.png';
import portfolioV1 from '../lib/img/portfolio.png';

interface Project {
  id: string;
  name: string;
  codename: string;
  description: string;
  technologies: string[];
  status: 'COMPLETA' | 'EM_ANDAMENTO' | 'CLASSIFICADA';
  threat_level: 'BAIXA' | 'MÉDIA' | 'ALTA' | 'CRÍTICA';
  demo_link?: string;
  repo_link?: string;
  image: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: '001',
      name: 'Pixel Flow',
      codename: 'AGENCIA_DE_DESENVOLVIMENTO',
      description: 'A Pixel Flow é uma agência de desenvolvimento web que cria soluções digitais incríveis e personalizadas. Nosso repositório contém projetos, modelos e ferramentas para criar sites modernos, responsivos e otimizados, com foco em design e desempenho. Junte-se a nós para transformar suas ideias em experiências online únicas!',
      technologies: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS'],
      status: 'COMPLETA',
      threat_level: 'MÉDIA',
      demo_link: 'https://pixel-flow-agency.vercel.app/',
      repo_link: 'https://github.com/lucasmarujo/pixel-flow',
      image: pixelFlow
    },
    {
      id: '002',
      name: 'AI Web chatbot',
      codename: 'AI WEB CHATBOT WITH GITHUB MODELS API',
      description: 'Um chatbot web que utiliza IA para responder perguntas e fornecer informações. Desenvolvido com principio serverless, e com responsividade para mobile e desktop com foco em UX|UI.',
      technologies: ['React', 'Typescript', 'Node.js', 'Tailwind CSS'],
      status: 'COMPLETA',
      threat_level: 'BAIXA',
      demo_link: 'https://ai-chatbot-web-lemon.vercel.app/',
      repo_link: 'https://github.com/lucasmarujo/ai-chatbot-web',
      image: aiChatbot
    },
    {
      id: '003',
      name: 'Portfolio V1',
      codename: 'PORTFOLIO_V1',
      description: 'Um portfólio de desenvolvedor básico e responsivo no idioma inglês. Utilizando tecnologias recentes que fazem parte do meu dia a dia.',
      technologies: ['React', 'Typescript', 'Node.js', 'Tailwind CSS'],
      status: 'COMPLETA',
      threat_level: 'BAIXA',
      demo_link: 'https://lucasmarujo.github.io/portfolio-final/',
      repo_link: 'https://github.com/lucasmarujo/portfolio-final',
      image: portfolioV1
    }
  ];

  const getThreatColor = (level: Project['threat_level']) => {
    switch (level) {
      case 'BAIXA': return 'text-neon-green';
      case 'MÉDIA': return 'text-neon-yellow';
      case 'ALTA': return 'text-neon-orange';
      case 'CRÍTICA': return 'text-neon-pink';
      default: return 'text-neon-blue';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'COMPLETA': return 'text-neon-green';
      case 'EM_ANDAMENTO': return 'text-neon-orange';
      case 'CLASSIFICADA': return 'text-neon-pink';
      default: return 'text-neon-blue';
    }
  };

  return (
    <section id="projects" className="min-h-screen py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-neon-orange mb-4 text-glow glitch-text" data-text="PROJETOS">
            PROJETOS
          </h2>
          <p className="text-neon-blue font-mono text-sm sm:text-lg">
            BASE_DE_DADOS // PROJETOS_EXECUTADOS.EXE
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-cyber-gray/50 rounded-lg neon-border p-4 sm:p-6 hover:bg-cyber-gray/70 transition-all duration-300 cursor-pointer group backdrop-blur-sm"
              onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
            >
              {/* Imagem do Projeto */}
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-32 sm:h-40 object-cover rounded mb-3 sm:mb-4 pointer-events-none"
              />

              {/* Project Header */}
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="text-neon-blue font-mono text-xs sm:text-sm">
                  ID: {project.id}
                </div>
                <div className={`font-mono text-xs px-2 py-1 rounded ${getStatusColor(project.status)}`}>
                  {project.status}
                </div>
              </div>

              {/* Project Title */}
              <h3 className="text-lg sm:text-xl font-bold text-neon-pink mb-2 group-hover:animate-glow break-words">
                {project.name}
              </h3>
              <div className="text-neon-green font-mono text-xs sm:text-sm mb-3 sm:mb-4 break-words">
                CODINOME: {project.codename}
              </div>

              {/* Threat Level */}
              <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                <span className="text-neon-blue text-xs sm:text-sm">COMPLEXIDADE:</span>
                <span className={`font-bold text-xs sm:text-sm ${getThreatColor(project.threat_level)}`}>
                  {project.threat_level}
                </span>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
                        i < (
                          project.threat_level === 'BAIXA' ? 1 :
                          project.threat_level === 'MÉDIA' ? 2 :
                          project.threat_level === 'ALTA' ? 3 :
                          project.threat_level === 'CRÍTICA' ? 5 : 0
                        )
                          ? getThreatColor(project.threat_level)
                          : 'bg-cyber-gray'
                      } ${i < (
                        project.threat_level === 'BAIXA' ? 1 :
                        project.threat_level === 'MÉDIA' ? 2 :
                        project.threat_level === 'ALTA' ? 3 :
                        project.threat_level === 'CRÍTICA' ? 5 : 0
                      ) ? 'animate-pulse' : ''}`}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-4">
                <div className="text-neon-blue text-xs sm:text-sm mb-2">TECNOLOGIAS:</div>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-neon-blue/10 text-neon-blue px-2 py-1 rounded text-xs font-mono border border-neon-blue/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Expanded Content */}
              <AnimatePresence>
                {selectedProject === project.id && (
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-neon-blue/30 pt-4 mt-4"
                  >
                    <p className="text-gray-300 text-xs sm:text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                      {project.demo_link && (
                        <a href={project.demo_link} target="_blank" rel="noopener noreferrer" className="bg-neon-green/20 text-neon-green px-3 py-2 rounded text-xs font-mono neon-border hover:bg-neon-green/30 transition-all text-center">
                          DEMO
                        </a>
                      )}
                      {project.repo_link && (
                        <a href={project.repo_link} target="_blank" rel="noopener noreferrer" className="bg-neon-orange/20 text-neon-orange px-3 py-2 rounded text-xs font-mono neon-border hover:bg-neon-orange/30 transition-all text-center">
                          CÓDIGO
                        </a>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Expand Indicator */}
              <div className="flex justify-center mt-4">
                <div className={`w-0 h-0 border-l-4 border-r-4 border-transparent transition-transform duration-300 ${
                  selectedProject === project.id ? 'border-t-4 border-t-neon-pink rotate-180' : 'border-b-4 border-b-neon-blue'
                }`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
