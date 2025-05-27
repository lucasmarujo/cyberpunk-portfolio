
import { useState } from 'react';

const Contact = () => {
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsTransmitting(true);
    
    // Simulate transmission
    setTimeout(() => {
      setIsTransmitting(false);
      setFormData({ name: '', email: '', message: '' });
      // Here you would typically send the form data
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/lucas-marujo-amadeu-5322a7219/', signal: '██████████' },
    { name: 'GitHub', url: 'https://github.com/lucasmarujo', signal: '████████░░' },
    { name: 'Email', url: '#', signal: '██████░░░░' }
  ];

  return (
    <section id="contact" className="min-h-screen py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neon-yellow mb-2 sm:mb-4 text-glow glitch-text" data-text="ENTRE EM CONTATO">
            ENTRE EM CONTATO
          </h2>
          <p className="text-neon-blue font-mono text-sm sm:text-base lg:text-lg px-2">
            FREQUÊNCIA_DE_COMUNICAÇÃO // PROTOCOLO_SEGURO.NET
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Communication Terminal */}
          <div className="bg-cyber-gray/50 rounded-lg neon-border p-4 sm:p-6 backdrop-blur-sm order-2 lg:order-1">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 border-b border-neon-yellow/30 pb-3 sm:pb-4 gap-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-neon-green rounded-full animate-pulse"></div>
                <span className="text-neon-green font-mono text-xs sm:text-sm">CANAL_ABERTO</span>
              </div>
              <div className="text-neon-yellow font-mono text-xs">
                CRIPTOGRAFIA: AES-256
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-neon-blue font-mono text-xs sm:text-sm mb-2">
                  IDENTIFICAÇÃO:
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-cyber-dark border border-neon-blue/50 rounded px-3 sm:px-4 py-2 sm:py-3 text-neon-blue font-mono text-sm sm:text-base focus:border-neon-pink focus:outline-none transition-all duration-300"
                  placeholder="Digite seu nome..."
                  required
                />
              </div>

              <div>
                <label className="block text-neon-blue font-mono text-xs sm:text-sm mb-2">
                  CANAL_DE_RETORNO:
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-cyber-dark border border-neon-blue/50 rounded px-3 sm:px-4 py-2 sm:py-3 text-neon-blue font-mono text-sm sm:text-base focus:border-neon-pink focus:outline-none transition-all duration-300"
                  placeholder="Digite seu email..."
                  required
                />
              </div>

              <div>
                <label className="block text-neon-blue font-mono text-xs sm:text-sm mb-2">
                  MENSAGEM_CRIPTOGRAFADA:
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full bg-cyber-dark border border-neon-blue/50 rounded px-3 sm:px-4 py-2 sm:py-3 text-neon-blue font-mono text-sm sm:text-base focus:border-neon-pink focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Digite sua mensagem..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isTransmitting}
                className={`w-full py-3 sm:py-4 rounded font-mono text-xs sm:text-sm transition-all duration-300 ${
                  isTransmitting
                    ? 'bg-neon-orange/20 text-neon-orange border border-neon-orange animate-pulse'
                    : 'bg-neon-pink/20 text-neon-pink border border-neon-pink hover:bg-neon-pink/30 animate-glow'
                }`}
              >
                {isTransmitting ? 'TRANSMITINDO...' : 'ENVIAR_TRANSMISSÃO'}
              </button>
            </form>

            {isTransmitting && (
              <div className="mt-4 sm:mt-6 text-center">
                <div className="text-neon-orange font-mono text-xs animate-pulse overflow-hidden">
                  <span className="hidden sm:inline">████████████████████</span>
                  <span className="sm:hidden">██████████</span>
                  <span className="ml-2">100%</span>
                </div>
                <div className="text-neon-blue font-mono text-xs mt-2">
                  ESTABELECENDO CONEXÃO SEGURA...
                </div>
              </div>
            )}
          </div>

          {/* Network Status */}
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            {/* Social Networks */}
            <div className="bg-cyber-gray/50 rounded-lg neon-border p-4 sm:p-6 backdrop-blur-sm">
              <h3 className="text-base sm:text-lg font-bold text-neon-green mb-3 sm:mb-4 flex items-center space-x-2">
                <span>◉</span>
                <span>REDES_DISPONÍVEIS</span>
              </h3>
              
              <div className="space-y-2 sm:space-y-3">
                {socialLinks.map((link, index) => (
                  <div key={index} className="flex items-center justify-between p-2 sm:p-3 bg-cyber-dark/50 rounded border border-neon-blue/30 hover:border-neon-green/50 transition-all duration-300 cursor-pointer group">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-neon-green rounded-full animate-pulse"></div>
                      <span className="text-neon-blue group-hover:text-neon-green font-mono text-xs sm:text-sm">
                        {link.name}
                      </span>
                    </div>
                    <div className="text-neon-green font-mono text-xs overflow-hidden">
                      <span className="hidden sm:inline">{link.signal}</span>
                      <span className="sm:hidden">{link.signal.substring(0, 6)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* System Status */}
            <div className="bg-cyber-gray/50 rounded-lg neon-border p-4 sm:p-6 backdrop-blur-sm">
              <h3 className="text-base sm:text-lg font-bold text-neon-orange mb-3 sm:mb-4 flex items-center space-x-2">
                <span>◈</span>
                <span className="text-xs sm:text-base">STATUS_DO_SISTEMA</span>
              </h3>
              
              <div className="space-y-2 sm:space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-neon-blue font-mono text-xs sm:text-sm">SERVIDOR:</span>
                  <span className="text-neon-green font-mono text-xs sm:text-sm">ONLINE</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neon-blue font-mono text-xs sm:text-sm">LATÊNCIA:</span>
                  <span className="text-neon-yellow font-mono text-xs sm:text-sm">12ms</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neon-blue font-mono text-xs sm:text-sm">SEGURANÇA:</span>
                  <span className="text-neon-pink font-mono text-xs sm:text-sm">MÁXIMA</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neon-blue font-mono text-xs sm:text-sm">DISPONIBILIDADE:</span>
                  <span className="text-neon-green font-mono text-xs sm:text-sm">24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
