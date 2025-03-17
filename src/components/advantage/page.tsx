"use client";
import { motion } from "framer-motion";
import { CheckCircle, ShieldCheck, Eye, TrendingUp } from "lucide-react";

const benefitsData = [
  {
    title: "Informações Privilegiadas",
    description:
      "Acesse dados estratégicos que não estão disponíveis ao público geral.",
    icon: CheckCircle,
  },
  {
    title: "Oportunidades Únicas",
    description:
      "Descubra estratégias e métodos que os experts utilizam secretamente.",
    icon: TrendingUp,
  },
  {
    title: "Networking Secreto",
    description:
      "Entre em contato com pessoas influentes que compartilham dos mesmos interesses.",
    icon: ShieldCheck,
  },
  {
    title: "Atualizações em Tempo Real",
    description: "Novos arquivos e documentos adicionados regularmente.",
    icon: Eye,
  },
  {
    title: "Métodos Ocultos de Monetização",
    description:
      "Aprenda técnicas de monetização pouco conhecidas e altamente eficazes.",
    icon: CheckCircle,
  },
  {
    title: "Material Exclusivo",
    description:
      "Planilhas, documentos e estratégias usadas por milionários da internet.",
    icon: ShieldCheck,
  },
];

export default function Advantage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">
        Vantagens Exclusivas
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {benefitsData.map((benefit, index) => (
          <motion.div
            key={index}
            className="bg-gray-700 p-6 rounded-xl shadow-lg flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <benefit.icon size={40} className="text-yellow-400 mr-4" />
            <div>
              <h3 className="text-xl font-semibold">{benefit.title}</h3>
              <p className="text-gray-300 mt-2">{benefit.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
