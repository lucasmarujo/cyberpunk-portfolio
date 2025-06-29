import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import ilac from '../lib/certified/ilac.jpg';

//Alura
import alurareactjs from '../lib/certified/reactjs.pdf';
import alurajsbackend from '../lib/certified/jsbackend.pdf';
import alurahtmlcss from '../lib/certified/htmlcss.pdf';
import alurafrontend from '../lib/certified/frontend.pdf';
import aluraengenharia from '../lib/certified/eds.pdf';
import aluraphp from '../lib/certified/php.pdf';
import aluragestti from '../lib/certified/gestti.pdf';
import aluraseo from '../lib/certified/seo.pdf';
import alurabusiness from '../lib/certified/business.pdf';

//Udemy
import udemyredes from '../lib/certified/redes.pdf';
import udemypowerbi from '../lib/certified/powerbi.pdf';
import udemywin22 from '../lib/certified/win22.pdf';

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
        { id: 'alura01', name: 'Formação React', image: alurareactjs },
        { id: 'alura02', name: 'Javascript para back-end', image: alurajsbackend },
        { id: 'alura03', name: 'HTML & CSS', image: alurahtmlcss },
        { id: 'alura05', name: 'Front-End', image: alurafrontend },
        { id: 'alura04', name: 'Engenharia de Software', image: aluraengenharia },
        { id: 'alura06', name: 'Formação PHP', image: aluraphp },
        { id: 'alura07', name: 'Gestão de infraestrutura de TI', image: aluragestti },
        { id: 'alura08', name: 'SEO', image: aluraseo },
        { id: 'alura09', name: 'Business Agility', image: alurabusiness }
      ]
    },
    {
      id: 'cat02',
      school: 'Udemy',
      certificates: [
        { id: 'udemy01', name: 'Redes de Computadores', image: udemyredes },
        { id: 'udemy02', name: 'Power BI', image: udemypowerbi },
        { id: 'udemy03', name: 'Windows Server 2022', image: udemywin22 }
      ]
    },
    {
      id: 'cat03',
      school: 'ILAC',
      certificates: [
        { id: 'cour01', name: 'Cambridge Pro Efficiency English C2', image: ilac }
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
              ESCOLAS
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
                // Verifica se é PDF
                currentCert.image.endsWith('.pdf') ? (
                  <motion.div
                    key={currentCert.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="w-full max-w-full max-h-[60vh] rounded neon-border flex justify-center items-center bg-cyber-gray/80"
                  >
                    <iframe
                      src={currentCert.image}
                      title={currentCert.name}
                      className="w-full h-[60vh] rounded"
                    />
                  </motion.div>
                ) : (
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
                )
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