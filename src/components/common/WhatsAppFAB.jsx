import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppFAB = () => {
  const phoneNumber = "212622601707";
  const message = "Bonjour Dr. Nihad El Halouat, je souhaite prendre rendez-vous pour une consultation.";
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[100] bg-medical-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-medical-600 transition-colors group"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <div className="absolute right-full mr-4 bg-white text-slate-800 px-4 py-2 rounded-xl shadow-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-100">
        Besoin d'aide ? WhatsApp
      </div>
      <MessageCircle className="w-7 h-7" />
    </motion.a>
  );
};

export default WhatsAppFAB;
