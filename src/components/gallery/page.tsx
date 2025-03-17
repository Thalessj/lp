"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Eye, Lock, FileText, AlertTriangle } from "lucide-react";

export default function ImageGallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const images = Array.from({ length: 10 }).map(
    (_, i) => `/image/Home ${i + 1}.png`
  );

  useEffect(() => {
    setIsClient(true);
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  const handleThumbnailClick = (index: any) => {
    setCurrentIndex(index);
  };

  if (!isClient) return null;
  return (
    <div className="relative min-h-screen py-24 bg-gradient-to-b text-white overflow-hidden">
      <div className="absolute inset-0 opacity-5 mix-blend-overlay pointer-events-none"></div>

      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 -right-20 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block p-2 px-4 rounded-full bg-yellow-500/10 mb-6 border border-yellow-500/20">
            <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">
              Conteúdo exclusivo
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-300 to-amber-500 bg-clip-text text-transparent mb-6">
            Documentos e Arquivos Vazados
          </h2>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg">
            Uma amostra dos conteúdos confidenciais que você terá acesso. Estes
            documentos revelam estratégias ocultas e métodos que pouquíssimas
            pessoas conhecem.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-yellow-500/10 rounded-2xl blur-3xl -z-10 scale-95 opacity-70"></div>

            <motion.div
              className="relative bg-gradient-to-br from-gray-800/70 to-gray-900/70 p-6 rounded-2xl border border-gray-700/50 backdrop-blur-sm shadow-2xl"
              key={currentIndex}
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-500/10 rounded-bl-3xl"></div>

              <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={images[currentIndex]}
                  fill
                  alt={`Documento confidencial ${currentIndex + 1}`}
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none"></div>

                <div className="absolute top-4 left-4 px-3 py-1 bg-red-500/90 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-2">
                  <AlertTriangle size={12} />
                  <span>CONFIDENCIAL</span>
                </div>

                <div className="absolute bottom-6 left-6">
                  <h3 className="text-xl font-bold text-white mb-1">
                    Documento {currentIndex + 1}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Informação estratégica vazada
                  </p>
                </div>

                <div className="absolute bottom-6 right-6 flex items-center gap-2 px-3 py-1 bg-black/70 backdrop-blur-sm text-white text-xs rounded-full shadow-lg">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span>ACESSO RESTRITO</span>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-500/10 rounded-full flex items-center justify-center">
                    <FileText size={20} className="text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-300">
                      Arquivo {currentIndex + 1} de {images.length}
                    </h4>
                    <p className="text-sm text-gray-400">
                      Estratégia de monetização oculta
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Eye size={16} className="text-gray-400" />
                  <span className="text-sm text-gray-400">
                    {Math.floor(Math.random() * 900) + 100} visualizações
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full lg:w-96 space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div>
              <h3 className="text-xl font-semibold text-yellow-300 mb-4 flex items-center gap-2">
                <Lock size={18} className="text-yellow-400" />
                Mais documentos revelados:
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-3 gap-3">
                {images.map((src, index) => (
                  <motion.div
                    key={index}
                    className={`aspect-square relative rounded-lg overflow-hidden cursor-pointer border-2 ${
                      index === currentIndex
                        ? "border-yellow-500"
                        : "border-gray-700"
                    }`}
                    onClick={() => handleThumbnailClick(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Image
                      src={src}
                      fill
                      alt={`Thumbnail ${index + 1}`}
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 hover:bg-black/10 transition-colors duration-200"></div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-yellow-300 mb-4">
                Por que você precisa desses documentos?
              </h3>
              <ul className="space-y-3">
                {[
                  "Estratégias que não são ensinadas em cursos",
                  "Métodos de monetização altamente eficazes",
                  "Atalhos para resultados mais rápidos",
                  "Informações que podem mudar seu negócio",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300">
                    <div className="w-5 h-5 bg-yellow-500/20 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <motion.a
                href="https://pay.cakto.com.br/3anZiep?affiliate=3FpXchpR"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-bold rounded-lg shadow-lg hover:shadow-yellow-500/30 transition"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                target="_blank"
              >
                Garantir Meu Acesso
              </motion.a>
            </motion.div>

            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex items-start gap-3">
              <AlertTriangle
                size={20}
                className="text-red-400 flex-shrink-0 mt-1"
              />
              <div>
                <h4 className="font-semibold text-red-400">Aviso importante</h4>
                <p className="text-sm text-gray-300">
                  Este conteúdo pode ser removido a qualquer momento por
                  questões legais. Acesse enquanto ainda está disponível.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
