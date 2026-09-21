export const DoctorLogoSymbol = ({ className = "h-12 w-auto", alt = "Dr. Samia BENTALEB Logo" }) => (
  <img
    src="/images/logo.png"
    alt={alt}
    className={`object-contain ${className}`}
  />
);

const DoctorLogo = ({ showText = true, isDark = false, className = "" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <DoctorLogoSymbol className="h-12 w-auto shrink-0" />
      {showText && (
        <div className="flex flex-col">
          <span className={`font-heading font-bold text-lg leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Dr. Samia BENTALEB
          </span>
          <span className="text-xs font-semibold text-primary-600 tracking-wide">
            Endocrinologie & Diabétologie
          </span>
        </div>
      )}
    </div>
  );
};

export default DoctorLogo;
