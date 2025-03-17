"use client";
import { motion } from "framer-motion";
import {
  FolderOpen,
  User,
  Shield,
  FileText,
  Globe,
  Star,
  Lock,
  Briefcase,
  Key,
} from "lucide-react";

const cardData = [
  {
    title: "Segurança Absoluta",
    description: "Seus dados estão protegidos com criptografia de ponta.",
    icon: <Shield size={40} className="text-yellow-400" />,
    actionText: "Saiba Mais",
    tag: "Protegido",
  },
  {
    title: "Acesso Exclusivo",
    description: "Apenas 0,01% da internet conhece essas pastas secretas!",
    icon: <FolderOpen size={40} className="text-yellow-400" />,
    actionText: "Descubra Agora",
    tag: "Premium",
  },
  {
    title: "Documentos Vazados",
    description: "Relatórios, planilhas e PDFs que mudam o jogo.",
    icon: <FileText size={40} className="text-yellow-400" />,
    actionText: "Ver Arquivos",
    tag: "Novo",
  },
  {
    title: "Comunidade Secreta",
    description: "Entre para o grupo fechado de especialistas.",
    icon: <User size={40} className="text-yellow-400" />,
    actionText: "Entrar Agora",
    tag: "VIP",
  },
  {
    title: "Rede Global",
    description: "Conecte-se com pessoas e oportunidades do mundo todo.",
    icon: <Globe size={40} className="text-yellow-400" />,
    actionText: "Explorar",
    tag: "Internacional",
  },
  {
    title: "Recursos Exclusivos",
    description: "Desbloqueie conteúdos e ferramentas premium.",
    icon: <Star size={40} className="text-yellow-400" />,
    actionText: "Aproveite",
    tag: "Especial",
  },
];

export default function Cards() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">
        Explore as Oportunidades
      </h2>
      <p className="text-gray-400 text-center max-w-xl mb-12">
        Acesse conteúdos exclusivos, proteja seus dados e participe de uma
        comunidade com benefícios incríveis. Escolha sua próxima jornada!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            className="relative bg-gray-800 p-6 rounded-xl shadow-lg text-center flex flex-col items-center border border-gray-700 transition-transform transform hover:scale-105 hover:border-yellow-400 hover:shadow-yellow-400/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.07 }}
          >
            <span className="absolute top-[-12px] px-3 py-1 text-sm bg-yellow-400 text-black font-semibold rounded-full shadow-md">
              {card.tag}
            </span>

            {card.icon}
            <h3 className="text-xl font-semibold mt-4">{card.title}</h3>
            <p className="text-gray-400 mt-2">{card.description}</p>

            <motion.button
              className="mt-4 px-6 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold rounded-lg shadow-lg hover:shadow-yellow-400/50 transition duration-300"
              whileTap={{ scale: 0.9 }}
            >
              {card.actionText}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
