"use client";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Shield,
  ThumbsUp,
  Zap,
  BookOpen,
  Lock,
} from "lucide-react";

export default function ConvinceToBuyPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const pulse = {
    scale: [1, 1.05, 1],
    transition: { duration: 2, repeat: Infinity },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b text-white overflow-hidden">
      <div className="absolute inset-0 opacity-5 mix-blend-overlay pointer-events-none"></div>

      <motion.div
        className="w-full max-w-4xl px-6 py-16 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2 }}
          className="text-center space-y-8"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-300 to-amber-500 bg-clip-text text-transparent"
            variants={fadeIn}
          >
            Domine os Segredos dos Maiores da Internet
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 leading-relaxed mx-auto max-w-3xl"
            variants={fadeIn}
          >
            Conteúdo exclusivo que{" "}
            <span className="font-bold text-yellow-400">menos de 1%</span> dos
            empreendedores digitais têm acesso. Esta pode ser sua única chance
            de transformar sua presença online.
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.div
        className="w-full max-w-4xl px-6 py-8 backdrop-blur-sm bg-black/40 rounded-2xl border border-gray-800 shadow-2xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <motion.div
          className="mb-12"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.15, delayChildren: 0.6 }}
        >
          <motion.h3
            className="text-2xl font-bold mb-8 flex items-center gap-3"
            variants={fadeIn}
          >
            <BookOpen className="text-yellow-400" />
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              O Que Você Vai Descobrir:
            </span>
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <Lock className="text-yellow-400" />,
                title: "Estratégias Confidenciais",
                desc: "Métodos secretos utilizados pelos grandes influenciadores que nunca são revelados em cursos comuns",
              },
              {
                icon: <Zap className="text-yellow-400" />,
                title: "Monetização Acelerada",
                desc: "Técnicas avançadas para gerar receita desde os primeiros dias do seu projeto digital",
              },
              {
                icon: <Shield className="text-yellow-400" />,
                title: "Proteção Contra Falhas",
                desc: "Aprenda a evitar os erros que fazem 90% dos empreendedores digitais fracassarem",
              },
              {
                icon: <ThumbsUp className="text-yellow-400" />,
                title: "Resultados Comprovados",
                desc: "Métodos testados e aprovados por centenas de empreendedores de sucesso",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="flex gap-4 p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/30 backdrop-blur-md"
              >
                <div className="mt-1">{item.icon}</div>
                <div>
                  <h4 className="font-semibold text-lg text-yellow-300 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <p className="text-red-400 font-semibold mb-2">
            ATENÇÃO: OFERTA POR TEMPO LIMITADO
          </p>
          <p className="text-white/80">
            Este conteúdo exclusivo ficará disponível apenas para os próximos 50
            compradores.
          </p>
        </motion.div>

        <motion.div className="text-center" animate={pulse}>
          <motion.a
            href="https://pay.cakto.com.br/3b57ups_323483"
            className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-yellow-500 to-amber-600 text-black text-xl font-bold rounded-lg shadow-lg hover:from-yellow-400 hover:to-amber-500 transition transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-500/50"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            GARANTIR MEU ACESSO AGORA
          </motion.a>
          <motion.p
            className="text-2xl font-bold mt-4 text-yellow-400"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 1.8 }}
          >
            Apenas R$19,99!
          </motion.p>
        </motion.div>

        <div className="mt-12 flex justify-center items-center gap-6 opacity-80">
          <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center">
            <Lock size={24} className="text-gray-400" />
          </div>
          <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center">
            <Shield size={24} className="text-gray-400" />
          </div>
          <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center">
            <CheckCircle size={24} className="text-gray-400" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
