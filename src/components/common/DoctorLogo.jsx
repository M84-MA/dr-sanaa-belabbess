import React from 'react';

export const DoctorLogoSymbol = ({ className = "h-9 w-auto", isDark = false }) => (
  <img 
    src="/logo.png" 
    alt="Logo Dr Aziza L'Aarje" 
    className={`object-contain ${className}`}
  />
);

const DoctorLogo = ({ className = "", imgClassName = "h-10 md:h-12 w-auto" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/logo.png" 
        alt="Dr. Aziza L'Aarje - Cardiologue" 
        className={`object-contain shrink-0 ${imgClassName}`} 
      />
    </div>
  );
};

export default DoctorLogo;
