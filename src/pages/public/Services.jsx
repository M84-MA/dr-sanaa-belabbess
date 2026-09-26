import { Link } from 'react-router-dom';
import { 
  Stethoscope, 
  ShieldCheck, 
  Activity, 
  Syringe, 
  UserCheck, 
  Compass, 
  Calendar,
  ArrowRight,
  Info
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Services = () => {
  const { lang, t } = useLanguage();

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Stethoscope': return <Stethoscope className="w-5 h-5 text-[#29463D]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#29463D]" />;
      case 'Activity': return <Activity className="w-5 h-5 text-[#29463D]" />;
      case 'Syringe': return <Syringe className="w-5 h-5 text-[#29463D]" />;
      case 'UserCheck': return <UserCheck className="w-5 h-5 text-[#29463D]" />;
      case 'Compass': return <Compass className="w-5 h-5 text-[#29463D]" />;
      default: return <Stethoscope className="w-5 h-5 text-[#29463D]" />;
    }
  };

  return (
    <div className="w-full bg-[#FAF9F6] min-h-screen py-16 md:py-24 text-[#26302D]">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <span className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-[#29463D] block">
            {t.expertise.tag}
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-normal text-[#26302D]">
            {t.expertise.title}
          </h1>
          <p className="text-[#5F6C67] text-base leading-relaxed">
            {t.expertise.subtitle}
          </p>
        </div>

        {/* 6 Clean Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {t.expertise.items.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-[#E2DDD5] rounded-xl p-8 space-y-4 shadow-xs hover:border-[#6F8F82] transition-colors flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-[#F1F5F3] flex items-center justify-center">
                  {getIcon(service.icon)}
                </div>
                
                <h3 className="text-xl font-serif font-normal text-[#26302D]">{service.title}</h3>
                
                <p className="text-sm text-[#5F6C67] leading-relaxed">
                  {service.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E2DDD5]">
                <Link to="/booking" className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-[#29463D] hover:underline">
                  <span>{t.nav.booking}</span>
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="p-4 bg-white border border-[#E2DDD5] rounded-xl text-xs text-[#5F6C67] max-w-3xl flex items-start gap-2.5 mb-14">
          <Info className="w-4 h-4 text-[#6F8F82] shrink-0 mt-0.5" />
          <p className="leading-relaxed font-sans">
            {t.expertise.notice}
          </p>
        </div>

        {/* Deep Green CTA */}
        <div className="bg-[#29463D] text-white rounded-2xl p-10 md:p-12 text-center space-y-5 shadow-sm">
          <h2 className="text-3xl font-serif font-normal">{t.expertise.ctaTitle}</h2>
          <p className="text-white/85 text-sm max-w-xl mx-auto font-sans leading-relaxed">
            {t.expertise.ctaDesc}
          </p>
          <div className="pt-2">
            <Link to="/booking" className="inline-flex items-center gap-2 bg-white text-[#29463D] hover:bg-slate-50 px-7 py-3 rounded-md text-xs font-sans font-medium transition-colors">
              <Calendar className="w-4 h-4" />
              <span>{t.hero.ctaBooking}</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;
