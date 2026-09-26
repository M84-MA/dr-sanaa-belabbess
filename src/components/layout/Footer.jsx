import { Link } from 'react-router-dom';
import { MapPin, Phone, ChevronRight } from 'lucide-react';
import DoctorLogo from '../common/DoctorLogo';
import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
  const { lang, setLang, t } = useLanguage();

  return (
    <footer className="bg-[#FAF9F6] border-t border-[#E2DDD5] text-[#26302D] pt-16 pb-12 font-sans">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <DoctorLogo />
            </Link>
            <p className="text-xs text-[#5F6C67] leading-relaxed mt-2">
              {t.hero.desc}
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-serif font-normal text-[#26302D] text-lg">
              {t.footer.navHeader}
            </h4>
            <ul className="space-y-2.5 text-xs text-[#5F6C67] font-medium">
              {[
                { name: t.nav.home, path: '/' },
                { name: t.nav.about, path: '/about' },
                { name: t.nav.services, path: '/services' },
                { name: t.nav.cabinet, path: '/contact' },
                { name: t.nav.contact, path: '/contact' },
              ].map((link, idx) => (
                <li key={`${link.path}-${idx}`}>
                  <Link to={link.path} className="hover:text-[#29463D] transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-[#E2DDD5] rtl:rotate-180" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Phone */}
          <div className="space-y-4">
            <h4 className="font-serif font-normal text-[#26302D] text-lg">
              {t.footer.contactHeader}
            </h4>
            <ul className="space-y-3 text-xs text-[#5F6C67]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#6F8F82] shrink-0 mt-0.5" />
                <span>218 Avenue Mohamed Ben Abdellah<br />Rabat 10050, Maroc</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#6F8F82] shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1 text-[#26302D] font-medium">
                  <a href="tel:0537296761" dir="ltr" className="hover:text-[#29463D] transition-colors">05 37 29 67 61</a>
                  <a href="tel:+212537296761" dir="ltr" className="hover:text-[#29463D] transition-colors">+212 537 29 67 61</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Languages */}
          <div className="space-y-4">
            <h4 className="font-serif font-normal text-[#26302D] text-lg">
              {t.footer.langHeader}
            </h4>
            <div className="flex flex-col gap-2 text-xs text-[#5F6C67]">
              <button 
                onClick={() => setLang('fr')} 
                className={`text-left rtl:text-right transition-colors ${lang === 'fr' ? 'text-[#29463D] font-bold' : 'hover:text-[#26302D]'}`}
              >
                Français
              </button>
              <button 
                onClick={() => setLang('ar')} 
                className={`text-left rtl:text-right transition-colors ${lang === 'ar' ? 'text-[#29463D] font-bold' : 'hover:text-[#26302D]'}`}
              >
                العربية
              </button>
              <button 
                onClick={() => setLang('en')} 
                className={`text-left rtl:text-right transition-colors ${lang === 'en' ? 'text-[#29463D] font-bold' : 'hover:text-[#26302D]'}`}
              >
                English
              </button>
            </div>
          </div>

        </div>

        {/* Disclaimer Bar */}
        <div className="border-t border-[#E2DDD5] pt-6 flex justify-center items-center text-xs text-[#5F6C67]">
          <p>© {new Date().getFullYear()} {t.footer.rights}</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
