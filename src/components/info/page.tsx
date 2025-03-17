"use client";
import { motion } from "framer-motion";
import {
  Lock,
  Download,
  FolderLock,
  Eye,
  AlertTriangle,
  Shield,
  Bell,
} from "lucide-react";

export default function MoreInfoSection() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay pointer-events-none"></div>

      <div className="absolute opacity-30 blur-3xl -z-10">
        <div className="absolute top-0 -left-20 w-72 h-72 bg-yellow-600/20 rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/10 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-16">
        <motion.div
          className="max-w-2xl space-y-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="inline-block px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              className="absolute -left-1 top-1/2 w-2 h-2 bg-red-500 rounded-full"
            ></motion.div>
            <div className="flex items-center gap-2">
              <AlertTriangle size={16} className="text-red-400" />
              <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wide">
                Conteúdo exclusivo e restrito
              </span>
            </div>
          </div>

          <motion.h2
            className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-yellow-300 to-yellow-600 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Documentos vazados que você não pode ignorar!
          </motion.h2>

          <motion.p
            className="text-gray-300 text-xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Você já se perguntou o que os maiores influenciadores, empresários e
            gurus da internet escondem? Estes documentos secretos incluem
            estratégias, métodos e segredos que nunca deveriam vir a público.
            Agora você tem a chance de acessar tudo antes que desapareça!
          </motion.p>

          <motion.div
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <h3 className="text-lg font-semibold text-yellow-300 mb-4 flex items-center gap-2">
              <Eye size={18} />O que você vai descobrir:
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
              <li className="flex items-center gap-3 text-gray-200">
                <div className="w-8 h-8 bg-yellow-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-yellow-400">📁</span>
                </div>
                <span>Planilhas e documentos estratégicos</span>
              </li>
              <li className="flex items-center gap-3 text-gray-200">
                <div className="w-8 h-8 bg-yellow-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-yellow-400">📝</span>
                </div>
                <span>Anotações confidenciais e arquivos pessoais</span>
              </li>
              <li className="flex items-center gap-3 text-gray-200">
                <div className="w-8 h-8 bg-yellow-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-yellow-400">📜</span>
                </div>
                <span>Métodos de monetização não divulgados</span>
              </li>
              <li className="flex items-center gap-3 text-gray-200">
                <div className="w-8 h-8 bg-yellow-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-yellow-400">📡</span>
                </div>
                <span>Informações vazadas dos bastidores</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="flex items-center gap-4 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.a
              href="https://pay.cakto.com.br/3anZiep?affiliate=3FpXchpR"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-bold text-lg rounded-lg shadow-lg hover:shadow-yellow-500/30 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              target="_blank"
            >
              <Download size={22} />
              Acessar Agora
            </motion.a>

            <div className="flex items-center gap-2 text-gray-400">
              <Shield size={18} />
              <span className="text-sm">Acesso protegido</span>
            </div>
          </motion.div>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Bell size={14} />
            <span>Acesso limitado - Pode ser removido a qualquer momento</span>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 1,
            delay: 0.4,
            type: "spring",
            stiffness: 100,
          }}
        >
          <div className="absolute inset-0 bg-yellow-400 blur-3xl opacity-20 rounded-full -z-10"></div>

          <motion.div
            className="p-8 md:p-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700/50 shadow-2xl relative overflow-hidden"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-500/10 rounded-bl-3xl"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-yellow-500/10 rounded-tr-3xl"></div>

            <FolderLock size={140} className="text-yellow-400" />

            <div className="absolute top-6 right-6 w-4 h-4 bg-red-500 rounded-full pulse-animation"></div>

            <div className="mt-8 text-center">
              <div className="font-mono text-sm bg-gray-800 px-4 py-2 rounded-lg text-gray-400 mb-2">
                DOCUMENT ID: X7R2-LK9P
              </div>
              <div className="text-yellow-300 text-sm font-semibold">
                CONTEÚDO CLASSIFICADO
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
