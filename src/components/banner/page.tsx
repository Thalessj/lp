"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Globe, Lock, AlertTriangle, ArrowRight, Eye } from "lucide-react";

export default function Banner() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b text-white">
      <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none"></div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center justify-between gap-12 relative z-10">
        <motion.div
          className="max-w-2xl space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h4
            className="text-yellow-400 text-lg md:text-xl flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Globe size={20} className="text-yellow-400" />
            As pastas e subpastas que 0,01% da internet têm acesso!
          </motion.h4>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Um vazamento de arquivos ocorrido no início de 2025 desmascarou
            vários gurus de internet!
          </motion.h1>

          <motion.p
            className="text-gray-300 text-lg md:text-xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Descubra os segredos escondidos nas profundezas da internet.
            Arquivos confidenciais, informações vazadas e muito mais!
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 pt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.a
              href="https://pay.cakto.com.br/3anZiep?affiliate=3FpXchpR"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-bold text-lg rounded-lg shadow-lg hover:shadow-yellow-500/30 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              target="_blank"
            >
              Acesse Agora
              <ArrowRight size={20} />
            </motion.a>

            <div className="flex items-center gap-2 text-gray-400 pl-4">
              <Lock size={16} />
              <span className="text-sm">
                Acesso exclusivo por tempo limitado
              </span>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center gap-6 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                <Eye size={16} className="text-yellow-400" />
              </div>
              <div className="text-sm text-gray-400">
                <span className="text-yellow-400 font-semibold">2,731</span>{" "}
                visualizando agora
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-6 h-6 rounded-full bg-gray-700 border border-gray-600"
                  ></div>
                ))}
              </div>
              <span className="text-sm text-gray-400">+87 compraram hoje</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.4,
            type: "spring",
            stiffness: 100,
          }}
        >
          <div className="absolute inset-0 bg-yellow-500/20 rounded-2xl blur-3xl -z-10 scale-95 opacity-50"></div>

          <motion.div
            className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-4 rounded-2xl border border-gray-700/50 backdrop-blur-sm shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-500/10 rounded-bl-3xl"></div>
            <div className="absolute -bottom-2 -right-2 w-32 h-16 bg-yellow-500/5 rounded-full blur-xl"></div>

            <Image
              src="/image/Home 3.png"
              width={500}
              height={500}
              alt="Imagem representando arquivos vazados"
              className="rounded-lg shadow-lg object-cover w-full max-w-md relative z-10"
            />

            <div className="absolute top-4 left-4 px-3 py-1 bg-red-500/90 text-white text-xs font-bold rounded-full shadow-lg">
              CONFIDENCIAL
            </div>

            <div className="absolute bottom-6 right-6 flex items-center gap-2 px-3 py-1 bg-black/70 backdrop-blur-sm text-white text-xs rounded-full shadow-lg">
              <div className="w-2 h-2 bg-red-500 rounded-full pulse-animation"></div>
              <span>DADOS SENSÍVEIS</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
