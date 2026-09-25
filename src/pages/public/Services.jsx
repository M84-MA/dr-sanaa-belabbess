import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Activity, 
  HeartPulse, 
  Stethoscope, 
  ShieldCheck, 
  UserCheck, 
  Calendar,
  ArrowRight,
  Info
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Services = () => {
  const { lang, t } = useLanguage();

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-[#7B2638]" />;
      case 'Activity': return <Activity className="w-5 h-5 text-[#7B2638]" />;
      case 'Stethoscope': return <Stethoscope className="w-5 h-5 text-[#7B2638]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#7B2638]" />;
      case 'UserCheck': return <UserCheck className="w-5 h-5 text-[#7B2638]" />;
      default: return <HeartPulse className="w-5 h-5 text-[#7B2638]" />;
    }
  };

  return (
    <div className="w-full bg-[#F4F5F3] min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-[#7B2638] block">
            {t.expertise.tag}
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-normal text-[#17202A]">
            {t.expertise.title}
          </h1>
          <p className="text-[#68727D] text-base leading-relaxed">
            {t.expertise.subtitle}
          </p>
        </div>

        {/* 5 Clean Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {t.expertise.items.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-[#E6E3DF] rounded-xl p-8 space-y-4 shadow-subtle hover:border-[#C98C98] transition-colors flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-md bg-[#F9F3F4] flex items-center justify-center">
                  {getIcon(service.icon)}
                </div>
                
                <h3 className="text-2xl font-serif font-normal text-[#17202A]">{service.title}</h3>
                
                <p className="text-sm text-[#68727D] leading-relaxed">
                  {service.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E6E3DF]">
                <Link to="/booking" className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-[#7B2638] hover:text-[#5E1D2A]">
                  <span>{t.nav.booking}</span>
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="p-4 bg-white border border-[#E6E3DF] rounded-xl text-xs text-[#68727D] max-w-3xl flex items-start gap-2.5 mb-16">
          <Info className="w-4 h-4 text-[#7897B8] shrink-0 mt-0.5" />
          <p className="leading-relaxed font-sans">
            {t.expertise.notice}
          </p>
        </div>

        {/* Deep Burgundy CTA */}
        <div className="bg-[#7B2638] text-white rounded-xl p-10 md:p-12 text-center space-y-5">
          <h2 className="text-3xl font-serif font-normal">{t.expertise.ctaTitle}</h2>
          <p className="text-white/80 text-sm max-w-xl mx-auto font-sans leading-relaxed">
            {t.expertise.ctaDesc}
          </p>
          <div className="pt-2">
            <Link to="/booking" className="inline-flex items-center gap-2 bg-white text-[#7B2638] hover:bg-slate-50 px-7 py-3 rounded-md text-xs font-sans font-medium transition-colors">
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
