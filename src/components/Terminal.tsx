import { useState, useEffect } from 'react';

const Terminal = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  const terminalLines = [
    '> INICIANDO PROTOCOLO DE ACESSO...',
    '> VERIFICANDO CREDENCIAIS...',
    '> CONEXÃO ESTABELECIDA COM SERVIDOR',
    '> CARREGANDO PERFIL DE DESENVOLVEDOR...',
    '',
    '██╗     ██╗   ██╗ ██████╗ █████╗ ███████╗    ███╗   ███╗ █████╗ ██████╗ ██╗   ██╗     ██╗ ██████╗  ',
    '██║     ██║   ██║██╔════╝██╔══██╗██╔════╝    ████╗ ████║██╔══██╗██╔══██╗██║   ██║     ██║██╔═══██╗ ',
    '██║     ██║   ██║██║     ███████║███████╗    ██╔████╔██║███████║██████╔╝██║   ██║     ██║██║   ██║ ',
    '██║     ██║   ██║██║     ██╔══██║╚════██║    ██║╚██╔╝██║██╔══██║██╔══██╗██║   ██║██   ██║██║   ██║ ',
    '███████╗╚██████╔╝╚██████╗██║  ██║███████║    ██║ ╚═╝ ██║██║  ██║██║  ██║╚██████╔╝╚█████╔╝╚██████╔╝ ',
    '╚══════╝ ╚═════╝  ╚═════╝╚═╝  ╚═╝╚══════╝    ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝  ╚════╝  ╚═════╝  ',
    '',
    '╔═══════════════════════════════════════╗',
    '║              CYBERDECK ATIVADO        ║',
    '║                                       ║',
    '║  NOME: [Lucas Marujo Amadeu]          ║',
    '║  NÍVEL: JUNIOR_DEV.EXE                ║',
    '║  STATUS: DISPONÍVEL PARA MISSÕES      ║',
    '║                                       ║',
    '╚═══════════════════════════════════════╝',
    '',
    '> ACESSO CONCEDIDO. BEM-VINDO AO PORTFÓLIO',
    '> DIGITE "EXPLORAR" PARA CONTINUAR...'
  ];

  useEffect(() => {
    if (currentLine >= terminalLines.length) {
      setIsComplete(true);
      return;
    }

    const currentLineText = terminalLines[currentLine];
    
    if (currentChar >= currentLineText.length) {
      const timer = setTimeout(() => {
        setCurrentLine(currentLine + 1);
        setCurrentChar(0);
      }, 500);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setCurrentChar(currentChar + 1);
    }, 30);

    return () => clearTimeout(timer);
  }, [currentLine, currentChar, terminalLines]);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowCursor(!showCursor);
    }, 500);
    return () => clearInterval(timer);
  }, [showCursor]);

  const handleExplore = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-6 cyber-grid">
      <div className="w-full max-w-sm sm:max-w-2xl md:max-w-4xl bg-cyber-darker/80 rounded-lg neon-border p-4 sm:p-6 md:p-8 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-4 md:mb-6 border-b border-neon-blue/30 pb-3 md:pb-4">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 md:w-3 md:h-3 bg-neon-green rounded-full animate-pulse"></div>
            <span className="text-neon-green font-mono text-xs md:text-sm">TERMINAL_ATIVO</span>
          </div>
          <div className="flex space-x-2">
            <div className="w-2 h-2 md:w-3 md:h-3 bg-neon-orange rounded-full"></div>
            <div className="w-2 h-2 md:w-3 md:h-3 bg-neon-yellow rounded-full"></div>
            <div className="w-2 h-2 md:w-3 md:h-3 bg-neon-pink rounded-full"></div>
          </div>
        </div>

        <div className="font-fira text-xs sm:text-sm min-h-64 sm:min-h-80 md:min-h-96 whitespace-pre leading-none">
          {terminalLines.slice(0, currentLine).map((line, index) => (
            <div key={index} className="text-neon-blue leading-none m-0 p-0">
              {line}
            </div>
          ))}
          
          {currentLine < terminalLines.length && (
            <div className="text-neon-blue leading-none m-0 p-0">
              {terminalLines[currentLine].slice(0, currentChar)}
              {showCursor && <span className="animate-blink">▊</span>}
            </div>
          )}
          
          {isComplete && (
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <span className="text-neon-green animate-pulse text-lg">{'>'}</span>
              <button
                onClick={handleExplore}
                className="w-full sm:w-auto bg-neon-pink/20 text-neon-pink px-4 sm:px-6 py-3 sm:py-2 rounded neon-border hover:bg-neon-pink/30 transition-all duration-300 animate-glow font-orbitron text-sm sm:text-base"
              >
                EXPLORAR PORTFÓLIO
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Terminal;
