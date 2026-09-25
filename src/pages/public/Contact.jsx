import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, AlertTriangle, Info, Building2, Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Contact = () => {
  const { lang, t } = useLanguage();

  return (
    <div className="w-full bg-[#FAF9F6] min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-[#7B2638] block">
            {t.contact.tag}
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-normal text-[#17202A]">
            {t.contact.title}
          </h1>
          <p className="text-[#68727D] text-base">
            {t.contact.subtitle}
          </p>
        </div>

        {/* 4 Clean Minimal Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { 
              icon: <Phone className="w-5 h-5 text-[#7B2638]" />, 
              title: t.contact.mainPhone, 
              contact: t.contact.mainNum, 
              sub: t.contact.mainSub,
              link: "tel:+212522503315"
            },
            { 
              icon: <Phone className="w-5 h-5 text-[#7897B8]" />, 
              title: t.contact.addPhone, 
              contact: t.contact.addNum, 
              sub: t.contact.addSub,
              link: "tel:+212612154032"
            },
            { 
              icon: <Globe className="w-5 h-5 text-[#7B2638]" />, 
              title: t.contact.langSpoken, 
              contact: t.contact.langVal, 
              sub: lang === 'ar' ? 'دليل عام' : 'Répertoire public'
            },
            { 
              icon: <MapPin className="w-5 h-5 text-[#7B2638]" />, 
              title: t.contact.city, 
              contact: t.contact.cityVal, 
              sub: "Casablanca"
            }
          ].map((item, i) => (
            <div 
              key={i} 
              className="bg-white p-6 rounded-xl border border-[#E6E3DF] shadow-subtle space-y-3"
            >
              <div className="w-9 h-9 rounded-md bg-[#F9F3F4] flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <h3 className="text-sm font-sans font-semibold text-[#17202A]">{item.title}</h3>
                {item.link ? (
                  <a href={item.link} className="text-sm font-sans text-[#7B2638] font-medium hover:underline block truncate">
                    {item.contact}
                  </a>
                ) : (
                  <p className="text-sm font-sans text-[#17202A] font-medium truncate">{item.contact}</p>
                )}
                <p className="text-[11px] text-[#68727D] mt-0.5">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 2-Column Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Left Column: Cabinet & Addresses */}
          <div className="bg-white p-8 md:p-10 rounded-xl border border-[#E6E3DF] shadow-subtle space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-[#7B2638] block mb-1">
                  {t.address.tag}
                </span>
                <h2 className="text-2xl font-serif font-normal text-[#17202A]">{t.address.title}</h2>
                <p className="text-xs text-[#68727D]">{t.address.subtitle}</p>
              </div>

              <div className="space-y-5 text-sm text-[#17202A]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#7B2638] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-sans font-medium text-[#17202A]">{t.address.primaryTitle}</h4>
                    <p className="text-xs text-[#68727D] leading-relaxed mt-0.5">
                      {t.address.primaryDetail}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-4 border-t border-[#E6E3DF]">
                  <Building2 className="w-4 h-4 text-[#7897B8] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-sans font-medium text-[#17202A]">{t.address.secondaryTitle}</h4>
                    <p className="text-xs text-[#68727D] leading-relaxed mt-0.5">
                      {t.address.secondaryDetail}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#F9F3F4] border border-[#7B2638]/15 rounded-lg text-xs text-[#7B2638] flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-[#7B2638]" />
              <p className="leading-relaxed font-sans">
                {t.address.disclaimer}
              </p>
            </div>
          </div>

          {/* Right Column: Opening Hours */}
          <div className="bg-white p-8 md:p-10 rounded-xl border border-[#E6E3DF] shadow-subtle space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-[#7B2638] block mb-1">
                  {t.hours.tag}
                </span>
                <h2 className="text-2xl font-serif font-normal text-[#17202A]">{t.hours.title}</h2>
              </div>

              <div className="space-y-3 text-sm text-[#17202A]">
                <div className="flex justify-between border-b border-[#E6E3DF] pb-3">
                  <span>{t.hours.monFri}</span>
                  <span className="font-medium">{t.hours.monFriTime}</span>
                </div>
                <div className="flex justify-between border-b border-[#E6E3DF] pb-3">
                  <span>{t.hours.sat}</span>
                  <span className="font-medium">{t.hours.satTime}</span>
                </div>
                <div className="flex justify-between text-[#7B2638] font-medium pt-1">
                  <span>{t.hours.sun}</span>
                  <span>{t.hours.sunTime}</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#F4F5F3] border border-[#E6E3DF] rounded-lg text-xs text-[#68727D] flex items-start gap-2.5">
              <Info className="w-4 h-4 text-[#7897B8] shrink-0 mt-0.5" />
              <p className="leading-relaxed font-sans">
                {t.hours.disclaimer}
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;
