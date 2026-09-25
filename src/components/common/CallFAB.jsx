import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, X, PhoneCall, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const CallFAB = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { lang } = useLanguage();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* Expanded Call Modal Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="mb-4 bg-white rounded-xl p-6 shadow-elevated border border-[#E6E3DF] w-80 max-w-[calc(100vw-2rem)] space-y-4"
          >
            <div className="flex items-center justify-between border-b border-[#E6E3DF] pb-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-md bg-[#F9F3F4] text-[#7B2638] flex items-center justify-center">
                  <PhoneCall className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-serif font-normal text-[#17202A] text-base">
                    {lang === 'ar' ? 'الاتصال المباشر بالعيادة' : lang === 'en' ? 'Direct Clinic Call' : 'Appel Direct au Cabinet'}
                  </h4>
                  <p className="text-[10px] text-[#68727D]">Casablanca, Maroc</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-[#68727D] hover:text-[#17202A] p-1 rounded-md"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-[#68727D] leading-relaxed">
              {lang === 'ar' 
                ? 'يرجى التواصل عبر أحد الأرقام المعتمدة للمعلومات أو طلب المواعيد:' 
                : lang === 'en' 
                ? 'Please call either official phone line for inquiries or appointments:' 
                : 'Veuillez contacter le cabinet sur l\'une des lignes téléphoniques publiques :'}
            </p>

            <div className="space-y-2 pt-1">
              <a
                href="tel:+212522503315"
                className="flex items-center justify-between bg-[#7B2638] hover:bg-[#681F2E] text-white p-3 rounded-md font-sans text-xs font-medium transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5" />
                  <span>05 22 50 33 15</span>
                </span>
                <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded text-white font-normal">
                  {lang === 'ar' ? 'الرئيسي' : 'Ligne 1'}
                </span>
              </a>

              <a
                href="tel:+212612154032"
                className="flex items-center justify-between bg-white hover:bg-[#FAF9F6] text-[#17202A] border border-[#E6E3DF] p-3 rounded-md font-sans text-xs font-medium transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#7897B8]" />
                  <span>06 12 15 40 32</span>
                </span>
                <span className="text-[10px] bg-[#F4F5F3] px-2 py-0.5 rounded text-[#68727D] font-normal">
                  {lang === 'ar' ? 'إضافي' : 'Ligne 2'}
                </span>
              </a>
            </div>

            <div className="flex items-center gap-1.5 text-[10px] text-[#68727D] pt-1 border-t border-[#E6E3DF]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#7B2638] shrink-0" />
              <span>{lang === 'ar' ? 'أرقام هاتف موثقة في الأدلة الطبية العامة' : 'Numéros vérifiés issus des annuaires publics'}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="bg-[#7B2638] hover:bg-[#681F2E] text-white p-3.5 rounded-full shadow-lg flex items-center justify-center transition-colors border border-white/20"
        aria-label="Appeler Dr. Aziza L'Aarje"
      >
        <Phone className="w-5 h-5" />
      </motion.button>
    </div>
  );
};

export default CallFAB;
