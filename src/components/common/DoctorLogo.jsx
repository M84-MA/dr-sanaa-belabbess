import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const DoctorLogoSymbol = ({ className = "h-9 w-auto", isDark = false }) => (
  <img 
    src="/logo.png" 
    alt="Logo Dr Sanaa Belabbess" 
    className={`object-contain ${className}`}
  />
);

const DoctorLogo = ({ className = "", imgClassName = "h-10 md:h-12 w-auto", showSubtitle = true }) => {
  const { lang } = useLanguage();
  
  const title = lang === 'ar' ? 'د. سناء بلعباس' : 'Dr. Sanaa Belabbess';
  const subtitle = lang === 'ar' ? 'طبيبة عامة' : lang === 'en' ? 'General Practitioner' : 'Médecin Généraliste';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img 
        src="/logo.png" 
        alt={`Logo ${title}`} 
        className={`object-contain shrink-0 ${imgClassName}`} 
      />
      <div className="flex flex-col">
        <span className="font-serif font-semibold text-[#26302D] text-base md:text-lg leading-tight tracking-tight group-hover:text-[#29463D] transition-colors">
          {title}
        </span>
        {showSubtitle && (
          <span className="font-sans text-[11px] font-medium text-[#5F6C67] uppercase tracking-wider">
            {subtitle}
          </span>
        )}
      </div>
    </div>
  );
};

export default DoctorLogo;
