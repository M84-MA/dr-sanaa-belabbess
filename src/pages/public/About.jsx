import { Stethoscope, ShieldCheck, Heart, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { Link } from 'react-router-dom';

const About = () => {
  const { lang, t } = useLanguage();

  return (
    <div className="w-full bg-[#FAF9F6] min-h-screen py-16 md:py-24 text-[#26302D]">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">

        {/* Page Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <span className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-[#29463D] block">
            {t.profile.tag}
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-normal text-[#26302D]">
            {t.hero.title}
          </h1>
          <p className="text-xl font-serif italic text-[#29463D]">
            {t.hero.subtitle} — Rabat
          </p>
        </div>

        {/* Editorial Layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          
          {/* Left Editorial Visual */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-[#E2DDD5] overflow-hidden bg-white p-2 shadow-xs">
              <img 
                src="/images/medical-office.jpg" 
                alt="Cabinet Médical Dr Sanaa Belabbess" 
                className="w-full h-[460px] object-cover rounded-xl"
              />
            </div>
            
            <div className="p-6 bg-white border border-[#E2DDD5] rounded-xl space-y-2 text-xs text-[#5F6C67]">
              <h4 className="font-sans font-semibold text-[#26302D] flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#29463D]" />
                Localisation du cabinet
              </h4>
              <p className="leading-relaxed">
                218 Avenue Mohamed Ben Abdellah, Rabat 10050<br />
                Quartier Yacoub El Mansour / Hay Sahrij / CYM
              </p>
            </div>
          </div>

          {/* Right Presentation */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-serif font-normal text-[#26302D] leading-tight">
                {t.profile.heading}
              </h2>
              <p className="text-[#5F6C67] text-base leading-relaxed">
                {t.profile.subtitle}
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {t.profile.bullets.map((item, index) => (
                <div key={index} className="p-5 bg-white border border-[#E2DDD5] rounded-xl space-y-1.5 shadow-xs">
                  <span className="text-[10px] font-sans font-bold text-[#29463D] uppercase tracking-wider block">{item.tag}</span>
                  <h3 className="text-base font-serif font-normal text-[#26302D]">{item.title}</h3>
                  <p className="text-xs text-[#5F6C67] font-sans leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[#E2DDD5] flex flex-wrap items-center gap-4">
              <Link
                to="/booking"
                className="bg-[#29463D] hover:bg-[#1F3730] text-white px-6 py-3 rounded-md text-xs font-sans font-medium transition-colors"
              >
                {t.nav.booking}
              </Link>
              <a
                href="tel:0537296761"
                className="inline-flex items-center gap-2 border border-[#E2DDD5] bg-white text-[#26302D] hover:bg-[#FAF9F6] px-6 py-3 rounded-md text-xs font-sans font-medium transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#29463D]" />
                <span dir="ltr">05 37 29 67 61</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default About;
