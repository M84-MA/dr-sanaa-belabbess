import { Link } from 'react-router-dom';
import { MapPin, Phone, ChevronRight, Info } from 'lucide-react';
import DoctorLogo from '../common/DoctorLogo';
import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
  const { lang, setLang, t } = useLanguage();

  return (
    <footer className="bg-[#FAF9F6] border-t border-[#E6E3DF] text-[#17202A] pt-16 pb-12 font-sans">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <DoctorLogo />
            </Link>
            <p className="text-xs text-[#68727D] leading-relaxed mt-2">
              {t.hero.desc}
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-serif font-normal text-[#17202A] text-lg">
              {t.footer.navHeader}
            </h4>
            <ul className="space-y-2.5 text-xs text-[#68727D] font-medium">
              {[
                { name: t.nav.home, path: '/' },
                { name: t.nav.about, path: '/about' },
                { name: t.nav.services, path: '/services' },
                { name: t.nav.booking, path: '/booking' },
                { name: t.nav.contact, path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-[#7B2638] transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-[#E6E3DF] rtl:rotate-180" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Phones */}
          <div className="space-y-4">
            <h4 className="font-serif font-normal text-[#17202A] text-lg">
              {t.footer.contactHeader}
            </h4>
            <ul className="space-y-3 text-xs text-[#68727D]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#7B2638] shrink-0 mt-0.5" />
                <span>{t.contact.cityVal}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#7B2638] shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1 text-[#17202A] font-medium">
                  <a href="tel:+212522503315" className="hover:text-[#7B2638] transition-colors">+212 522 50 33 15</a>
                  <a href="tel:+212612154032" className="hover:text-[#7B2638] transition-colors">+212 612 15 40 32</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Languages */}
          <div className="space-y-4">
            <h4 className="font-serif font-normal text-[#17202A] text-lg">
              {t.footer.langHeader}
            </h4>
            <div className="flex flex-col gap-2 text-xs text-[#68727D]">
              <button 
                onClick={() => setLang('fr')} 
                className={`text-left rtl:text-right transition-colors ${lang === 'fr' ? 'text-[#7B2638] font-bold' : 'hover:text-[#17202A]'}`}
              >
                Français
              </button>
              <button 
                onClick={() => setLang('ar')} 
                className={`text-left rtl:text-right transition-colors ${lang === 'ar' ? 'text-[#7B2638] font-bold' : 'hover:text-[#17202A]'}`}
              >
                العربية
              </button>
              <button 
                onClick={() => setLang('en')} 
                className={`text-left rtl:text-right transition-colors ${lang === 'en' ? 'text-[#7B2638] font-bold' : 'hover:text-[#17202A]'}`}
              >
                English
              </button>
            </div>
          </div>

        </div>

        {/* Disclaimer Bar */}
        <div className="border-t border-[#E6E3DF] pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#68727D]">
          <p>© {new Date().getFullYear()} {t.footer.rights}</p>
          <div className="flex items-center gap-1.5 text-[11px]">
            <Info className="w-3.5 h-3.5 text-[#7897B8] shrink-0" />
            <span>{t.onlinePresence}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
