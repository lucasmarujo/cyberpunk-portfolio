import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Certificate {
  id: string;
  name: string;
  image: string;          // URL ou import estático da imagem
}

interface Category {
  id: string;
  school: string;
  certificates: Certificate[];
}

// Imagens de exemplo (substitua pelos seus arquivos locais, se desejar)
// import reactAlura from '../lib/img/react-alura.png';
const placeholder = 'https://via.placeholder.com/800x600?text=Certificado';

const Certified = () => {
  /* ---------------- DADOS ---------------- */
  const categories: Category[] = [
    {
      id: 'cat01',
      school: 'Alura',
      certificates: [
        { id: 'alura01', name: 'Formação React', image: placeholder },
        { id: 'alura02', name: 'Formação Node.js', image: placeholder }
      ]
    },
    {
      id: 'cat02',
      school: 'Rocketseat',
      certificates: [
        { id: 'rock01', name: 'Ignite React', image: placeholder },
        { id: 'rock02', name: 'NLW Return', image: placeholder }
      ]
    },
    {
      id: 'cat03',
      school: 'Coursera',
      certificates: [
        { id: 'cour01', name: 'Google IT Support', image: placeholder },
        { id: 'cour02', name: 'Meta Front-End', image: placeholder }
      ]
    }
  ];

  /* --------------- ESTADO ---------------- */
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0].id);
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

  /* --------- OBTÉM DADOS ATUAIS ---------- */
  const currentCategory = categories.find(c => c.id === selectedCategory)!;
  const currentCert = currentCategory.certificates.find(c => c.id === selectedCertificate);

  /* --------------- RENDER ---------------- */
  return (
    <section id="certified" className="min-h-screen py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-neon-orange mb-4 text-glow glitch-text"
              data-text="CERTIFICADOS">
            CERTIFICADOS
          </h2>
          <p className="text-neon-blue font-mono text-sm sm:text-lg">
            BASE_DE_DADOS // CERTIFICADOS.EXE
          </p>
        </div>

        {/* GRID RESPONSIVO */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* -------- COLUNA ESQUERDA: CATEGORIAS -------- */}
          <div>
            <h3 className="text-neon-blue mb-3 font-mono text-xs sm:text-sm">
              ESCOLAS / CATEGORIAS
            </h3>
            <motion.ul layout className="space-y-3">
              {categories.map(category => (
                <motion.li
                  key={category.id}
                  layout
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className={`cursor-pointer p-3 rounded neon-border transition-all
                             ${selectedCategory === category.id
                               ? 'bg-cyber-gray/70 text-neon-green'
                               : 'bg-cyber-gray/50 text-neon-blue hover:bg-cyber-gray/60'}`}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setSelectedCertificate(null); // reset ao trocar categoria
                  }}
                >
                  <span className="font-bold">{category.school}</span>
                  <span className="float-right font-mono text-xs">
                    {category.certificates.length}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* -------- COLUNA MEIO: LISTA DE CERTIFICADOS -------- */}
          <div>
            <h3 className="text-neon-blue mb-3 font-mono text-xs sm:text-sm">
              CERTIFICADOS
            </h3>
            <AnimatePresence mode="wait">
              {currentCategory && (
                <motion.ul
                  key={currentCategory.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-3"
                >
                  {currentCategory.certificates.map(cert => (
                    <motion.li
                      key={cert.id}
                      layout
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className={`cursor-pointer p-3 rounded neon-border transition-all
                                 ${selectedCertificate === cert.id
                                   ? 'bg-cyber-gray/70 text-neon-pink'
                                   : 'bg-cyber-gray/50 text-neon-blue hover:bg-cyber-gray/60'}`}
                      onClick={() => setSelectedCertificate(cert.id)}
                    >
                      {cert.name}
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          {/* -------- COLUNA DIREITA: IMAGEM DO CERTIFICADO -------- */}
          <div className="flex items-start justify-center md:col-span-1">
            <AnimatePresence mode="wait">
              {currentCert ? (
                <motion.img
                  key={currentCert.id}
                  src={currentCert.image}
                  alt={currentCert.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="max-w-full max-h-[60vh] object-contain rounded neon-border"
                />
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  exit={{ opacity: 0 }}
                  className="w-full h-64 bg-cyber-gray/30 flex items-center justify-center rounded neon-border"
                >
                  <span className="text-neon-blue font-mono text-sm">
                    Selecione um certificado
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certified;