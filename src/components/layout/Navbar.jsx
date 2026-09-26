import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar } from 'lucide-react';
import DoctorLogo from '../common/DoctorLogo';
import { useLanguage } from '../../context/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.services, path: '/services' },
    { name: t.nav.cabinet, path: '/contact' },
    { name: t.nav.contact, path: '/contact' },
  ];

  const languages = [
    { code: 'fr', label: 'FR' },
    { code: 'ar', label: 'AR' },
    { code: 'en', label: 'EN' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md py-3 shadow-xs border-b border-[#E2DDD5]' : 'bg-[#FAF9F6] py-4 border-b border-[#E2DDD5]'}`}>
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center">
          
          {/* LEFT: Doctor Brand */}
          <Link to="/" className="group">
            <DoctorLogo />
          </Link>

          {/* CENTER: Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, idx) => {
              const isActive = location.pathname === link.path && (idx !== 3 || location.hash === '#cabinet');
              return (
                <Link
                  key={`${link.path}-${idx}`}
                  to={link.path}
                  className={`text-sm font-sans font-medium transition-colors tracking-wide relative py-1 ${
                    isActive ? 'text-[#29463D] font-semibold' : 'text-[#5F6C67] hover:text-[#26302D]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#29463D]"></span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT: Language Switcher & Primary CTA */}
          <div className="hidden md:flex items-center gap-5">
            {/* Language Selector (FR | AR | EN) */}
            <div className="flex items-center gap-1.5 text-xs font-sans font-medium text-[#5F6C67] bg-white border border-[#E2DDD5] px-2.5 py-1.5 rounded-md">
              {languages.map((l, index) => (
                <span key={l.code} className="flex items-center gap-1.5">
                  <button
                    onClick={() => setLang(l.code)}
                    className={`transition-colors uppercase hover:text-[#29463D] ${
                      lang === l.code ? 'text-[#29463D] font-bold' : 'text-[#5F6C67]'
                    }`}
                  >
                    {l.label}
                  </button>
                  {index < languages.length - 1 && <span className="text-[#E2DDD5]">|</span>}
                </span>
              ))}
            </div>

            {/* Primary CTA Button */}
            <Link
              to="/booking"
              className="bg-[#29463D] hover:bg-[#1F3730] text-white px-5 py-2.5 rounded-md text-xs font-sans font-medium tracking-wide transition-colors shadow-xs flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{t.nav.booking}</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <div className="flex bg-white rounded-md p-1 border border-[#E2DDD5] text-xs">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`px-2 py-0.5 font-medium rounded uppercase transition-colors ${
                    lang === l.code ? 'bg-[#29463D] text-white' : 'text-[#5F6C67]'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>

            <button
              className="text-[#26302D] p-2 rounded-md border border-[#E2DDD5]"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#FAF9F6] border-b border-[#E2DDD5] py-5 px-6 flex flex-col gap-4 shadow-md">
            {navLinks.map((link, idx) => (
              <Link
                key={`mobile-${link.path}-${idx}`}
                to={link.path}
                className={`text-base font-sans font-medium py-2 ${
                  location.pathname === link.path ? 'text-[#29463D] font-semibold' : 'text-[#26302D]'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="h-px bg-[#E2DDD5] my-1"></div>
            <Link
              to="/booking"
              className="bg-[#29463D] text-white px-4 py-3 rounded-md text-center font-medium shadow-xs flex items-center justify-center gap-2 text-sm"
              onClick={() => setIsOpen(false)}
            >
              <Calendar className="w-4 h-4" />
              {t.nav.booking}
            </Link>
          </div>
        )}

      </div>
    </header>
  );
};

export default Navbar;
