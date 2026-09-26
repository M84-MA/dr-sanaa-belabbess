import { MapPin, Phone, Clock, Info, Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Contact = () => {
  const { lang, t } = useLanguage();

  return (
    <div className="w-full bg-[#FAF9F6] min-h-screen py-16 md:py-24 text-[#26302D]">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <span className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-[#29463D] block">
            {t.contact.tag}
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-normal text-[#26302D]">
            {t.contact.title}
          </h1>
          <p className="text-[#5F6C67] text-base">
            {t.contact.subtitle}
          </p>
        </div>

        {/* 4 Clean Minimal Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { 
              icon: <Phone className="w-5 h-5 text-[#29463D]" />, 
              title: t.contact.mainPhone, 
              contact: "05 37 29 67 61", 
              sub: "Ligne directe cabinet",
              link: "tel:0537296761"
            },
            { 
              icon: <Phone className="w-5 h-5 text-[#6F8F82]" />, 
              title: "Format international", 
              contact: "+212 537 29 67 61", 
              sub: "Téléphone fixe",
              link: "tel:+212537296761"
            },
            { 
              icon: <Globe className="w-5 h-5 text-[#29463D]" />, 
              title: t.contact.langSpoken, 
              contact: t.contact.langVal, 
              sub: "Répertoire public"
            },
            { 
              icon: <MapPin className="w-5 h-5 text-[#29463D]" />, 
              title: t.contact.city, 
              contact: "Rabat, Maroc", 
              sub: "Hay Sahrij / CYM"
            }
          ].map((item, i) => (
            <div 
              key={i} 
              className="bg-white p-6 rounded-xl border border-[#E2DDD5] shadow-xs space-y-3"
            >
              <div className="w-9 h-9 rounded-md bg-[#F1F5F3] flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xs font-sans font-semibold text-[#5F6C67] uppercase tracking-wider">{item.title}</h3>
                {item.link ? (
                  <a href={item.link} dir="ltr" className="text-sm font-sans text-[#29463D] font-medium hover:underline block truncate mt-0.5">
                    {item.contact}
                  </a>
                ) : (
                  <p className="text-sm font-sans text-[#26302D] font-medium truncate mt-0.5">{item.contact}</p>
                )}
                <p className="text-[11px] text-[#5F6C67] mt-0.5">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 2-Column Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          
          {/* Left Column: Cabinet & Address */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-[#E2DDD5] shadow-xs space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-[#29463D] block mb-1">
                  {t.address.tag}
                </span>
                <h2 className="text-2xl font-serif font-normal text-[#26302D]">{t.address.title}</h2>
                <p className="text-xs text-[#5F6C67]">{t.address.subtitle}</p>
              </div>

              <div className="space-y-4 text-sm text-[#26302D]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#29463D] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-sans font-medium text-[#26302D]">{t.address.primaryTitle}</h4>
                    <p className="text-xs text-[#5F6C67] leading-relaxed mt-0.5">
                      {t.address.primaryDetail}
                    </p>
                    <p className="text-xs text-[#5F6C67] leading-relaxed mt-1 italic">
                      Autre mention répertoriée: {t.address.secondaryDetail}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="tel:0537296761"
                  className="inline-flex items-center gap-2 bg-[#29463D] hover:bg-[#1F3730] text-white px-5 py-2.5 rounded-md text-xs font-sans font-medium transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Appeler le cabinet</span>
                </a>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=218+Avenue+Mohamed+Ben+Abdellah+Rabat+Morocco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#FAF9F6] border border-[#E2DDD5] text-[#26302D] hover:bg-white px-5 py-2.5 rounded-md text-xs font-sans font-medium transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#29463D]" />
                  <span>Voir l'itinéraire</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Opening Hours */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-[#E2DDD5] shadow-xs space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-[#29463D] block mb-1">
                  {t.hours.tag}
                </span>
                <h2 className="text-2xl font-serif font-normal text-[#26302D]">{t.hours.title}</h2>
              </div>

              <div className="space-y-2.5 text-sm text-[#26302D]">
                <div className="flex justify-between border-b border-[#E2DDD5] pb-2">
                  <span>{t.hours.mon}</span>
                  <span className="font-medium">{t.hours.monTime}</span>
                </div>
                <div className="flex justify-between border-b border-[#E2DDD5] pb-2">
                  <span>{t.hours.tue}</span>
                  <span className="font-medium">{t.hours.tueTime}</span>
                </div>
                <div className="flex justify-between border-b border-[#E2DDD5] pb-2">
                  <span>{t.hours.wed}</span>
                  <span className="font-medium">{t.hours.wedTime}</span>
                </div>
                <div className="flex justify-between border-b border-[#E2DDD5] pb-2">
                  <span>{t.hours.thu}</span>
                  <span className="font-medium">{t.hours.thuTime}</span>
                </div>
                <div className="flex justify-between border-b border-[#E2DDD5] pb-2">
                  <span>{t.hours.fri}</span>
                  <span className="font-medium">{t.hours.friTime}</span>
                </div>
                <div className="flex justify-between border-b border-[#E2DDD5] pb-2">
                  <span>{t.hours.sat}</span>
                  <span className="font-medium">{t.hours.satTime}</span>
                </div>
                <div className="flex justify-between text-[#29463D] font-medium pt-1">
                  <span>{t.hours.sun}</span>
                  <span>{t.hours.sunTime}</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Verified Map Container */}
        <div className="rounded-2xl overflow-hidden border border-[#E2DDD5] shadow-xs bg-white p-2">
          <iframe
            title="Localisation Cabinet Dr Sanaa Belabbess Rabat"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.726!2d-6.8780!3d33.9980!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76c8d37442ad5%3A0x8e8d8930e4450c5a!2sAvenue%20Mohamed%20Ben%20Abdellah%2C%20Rabat!5e0!3m2!1sfr!2sma!4v1698000000000!5m2!1sfr!2sma"
            width="100%"
            height="360"
            style={{ border: 0, borderRadius: '12px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </div>
  );
};

export default Contact;
