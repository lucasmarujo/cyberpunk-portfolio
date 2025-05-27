
interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  period: string;
  implants: string[];
  description: string;
  reputation: number;
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      id: '001',
      company: 'GRUPO TOMBINI',
      position: 'JUNIOR FULLSTACK DEVELOPER',
      period: 'ABR 2025 - PRESENTE',
      implants: ['Python', 'Django', 'MySQL', 'Docker', 'React.js', 'TypeScript', 'Next.js', 'Tailwind CSS'],
      description: 'Lidero equipe de desenvolvimento frontend em projetos de alta complexidade. Implemento arquiteturas escaláveis e otimizo performance para milhões de usuários.',
      reputation: 95
    },
    {
      id: '002',
      company: 'NEURAL DYNAMICS INC',
      position: 'FULLSTACK DEVELOPER',
      period: '2020 - 2022',
      implants: ['Vue.js', 'Node.js', 'MongoDB', 'AWS'],
      description: 'Desenvolvimento de aplicações web completas com foco em experiência do usuário e performance. Integração de APIs e sistemas de terceiros.',
      reputation: 87
    },
    {
      id: '003',
      company: 'CYBER SOLUTIONS LTDA',
      position: 'JUNIOR DEVELOPER',
      period: '2019 - 2020',
      implants: ['JavaScript', 'HTML5', 'CSS3', 'MySQL'],
      description: 'Início da jornada no desenvolvimento web. Participação em projetos de pequeno e médio porte, aprendizado das bases da programação.',
      reputation: 72
    }
  ];

  const getReputationColor = (rep: number) => {
    if (rep >= 90) return 'text-neon-pink';
    if (rep >= 80) return 'text-neon-orange';
    if (rep >= 70) return 'text-neon-yellow';
    return 'text-neon-blue';
  };

  return (
    <section id="experience" className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 bg-cyber-darker/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-neon-green mb-4 text-glow glitch-text" data-text="EXPERIÊNCIA">
            EXPERIÊNCIA
          </h2>
          <p className="text-neon-blue font-mono text-sm sm:text-lg">
            HISTÓRICO_DE_MODIFICAÇÕES // ÁRVORE_DE_HABILIDADES.DAT
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line - Hidden on mobile, visible on larger screens */}
          <div className="hidden sm:block absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-pink via-neon-blue to-neon-green animate-glow"></div>

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="relative mb-8 sm:mb-12 sm:ml-16 md:ml-20 group"
            >
              {/* Timeline Node - Hidden on mobile */}
              <div className="hidden sm:block absolute -left-20 md:-left-16 top-6 w-6 h-6 md:w-8 md:h-8 bg-cyber-dark border-2 border-neon-blue rounded-full flex items-center justify-center group-hover:border-neon-pink transition-all duration-300">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-neon-blue rounded-full animate-pulse group-hover:bg-neon-pink"></div>
              </div>

              {/* Experience Card */}
              <div className="bg-cyber-gray/50 rounded-lg neon-border p-4 sm:p-6 backdrop-blur-sm group-hover:bg-cyber-gray/70 transition-all duration-300">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4 gap-2">
                  <div className="text-neon-blue font-mono text-xs sm:text-sm">
                    REG_ID: {exp.id}
                  </div>
                  <div className="text-neon-orange font-mono text-xs sm:text-sm">
                    {exp.period}
                  </div>
                </div>

                {/* Company & Position */}
                <h3 className="text-lg sm:text-xl font-bold text-neon-pink mb-2 group-hover:animate-glow break-words">
                  {exp.company}
                </h3>
                <div className="text-neon-green font-mono text-sm sm:text-lg mb-3 sm:mb-4 break-words">
                  {exp.position}
                </div>

                {/* Reputation Bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-neon-blue text-xs sm:text-sm">REPUTAÇÃO:</span>
                    <span className={`font-mono text-xs sm:text-sm ${getReputationColor(exp.reputation)}`}>
                      {exp.reputation}%
                    </span>
                  </div>
                  <div className="w-full bg-cyber-gray h-1.5 sm:h-2 rounded">
                    <div 
                      className={`h-1.5 sm:h-2 rounded transition-all duration-1000 ${getReputationColor(exp.reputation)} bg-current`}
                      style={{ width: `${exp.reputation}%` }}
                    ></div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-xs sm:text-sm mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Implants/Technologies */}
                <div>
                  <div className="text-neon-blue text-xs sm:text-sm mb-2">IMPLANTES ADQUIRIDOS:</div>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {exp.implants.map((implant, i) => (
                      <span
                        key={i}
                        className="bg-neon-green/10 text-neon-green px-2 sm:px-3 py-1 rounded text-xs font-mono border border-neon-green/30 animate-pulse"
                        style={{ animationDelay: `${i * 200}ms` }}
                      >
                        {implant}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="mt-12 sm:mt-16 bg-cyber-gray/30 rounded-lg neon-border p-4 sm:p-6 backdrop-blur-sm">
          <h3 className="text-lg sm:text-xl font-bold text-neon-orange mb-4 text-center">
            ESTATÍSTICAS DO SISTEMA
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-xl sm:text-2xl font-bold text-neon-pink">3+</div>
              <div className="text-xs text-neon-blue font-mono">ANOS_EXP</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-neon-green">50+</div>
              <div className="text-xs text-neon-blue font-mono">PROJETOS</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-neon-orange">15+</div>
              <div className="text-xs text-neon-blue font-mono">TECNOLOGIAS</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-neon-yellow">99%</div>
              <div className="text-xs text-neon-blue font-mono">UPTIME</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
