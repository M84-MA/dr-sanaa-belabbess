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
            className="mb-4 bg-white rounded-xl p-6 shadow-elevated border border-[#E2DDD5] w-80 max-w-[calc(100vw-2rem)] space-y-4"
          >
            <div className="flex items-center justify-between border-b border-[#E2DDD5] pb-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-md bg-[#F1F5F3] text-[#29463D] flex items-center justify-center">
                  <PhoneCall className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-serif font-normal text-[#26302D] text-base">
                    {lang === 'ar' ? 'الاتصال المباشر بالعيادة' : lang === 'en' ? 'Direct Practice Call' : 'Appel Direct au Cabinet'}
                  </h4>
                  <p className="text-[10px] text-[#5F6C67]">Rabat, Maroc</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-[#5F6C67] hover:text-[#26302D] p-1 rounded-md"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-[#5F6C67] leading-relaxed">
              {lang === 'ar' 
                ? 'يرجى التواصل عبر هاتف العيادة للاستفسار أو تنظيم الموعد:' 
                : lang === 'en' 
                ? 'Please call the practice for inquiries or appointments:' 
                : 'Veuillez contacter le cabinet sur la ligne téléphonique officielle :'}
            </p>

            <div className="space-y-2 pt-1">
              <a
                href="tel:0537296761"
                className="flex items-center justify-between bg-[#29463D] hover:bg-[#1F3730] text-white p-3 rounded-md font-sans text-xs font-medium transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5" />
                  <span dir="ltr">05 37 29 67 61</span>
                </span>
                <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded text-white font-normal">
                  {lang === 'ar' ? 'الرئيسي' : 'Ligne Fixe'}
                </span>
              </a>

              <a
                href="tel:+212537296761"
                className="flex items-center justify-between bg-white hover:bg-[#FAF9F6] text-[#26302D] border border-[#E2DDD5] p-3 rounded-md font-sans text-xs font-medium transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#6F8F82]" />
                  <span dir="ltr">+212 537 29 67 61</span>
                </span>
                <span className="text-[10px] bg-[#F1F5F3] px-2 py-0.5 rounded text-[#5F6C67] font-normal">
                  International
                </span>
              </a>
            </div>

            <div className="flex items-center gap-1.5 text-[10px] text-[#5F6C67] pt-1 border-t border-[#E2DDD5]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#29463D] shrink-0" />
              <span>{lang === 'ar' ? 'رقم هاتف موثق في الأدلة العامة' : 'Numéro vérifié issu des annuaires publics'}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="bg-[#29463D] hover:bg-[#1F3730] text-white p-3.5 rounded-full shadow-lg flex items-center justify-center transition-colors border border-white/20"
        aria-label="Appeler Dr Sanaa Belabbess"
      >
        <Phone className="w-5 h-5" />
      </motion.button>
    </div>
  );
};

export default CallFAB;
