import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar, ChevronDown } from 'lucide-react';
import DoctorLogo from '../common/DoctorLogo';
import { useLanguage } from '../../context/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
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
    { name: t.nav.contact, path: '/contact' },
  ];

  const languages = [
    { code: 'fr', label: 'FR' },
    { code: 'ar', label: 'AR' },
    { code: 'en', label: 'EN' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md py-3 shadow-sm border-b border-[#E6E3DF]' : 'bg-[#FAF9F6] py-5 border-b border-[#E6E3DF]'}`}>
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center">
          
          {/* LEFT: Refined Doctor Brand */}
          <Link to="/" className="group">
            <DoctorLogo />
          </Link>

          {/* CENTER: Clean Minimal Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-sans font-medium transition-colors tracking-wide relative py-1 ${
                    isActive ? 'text-[#7B2638] font-semibold' : 'text-[#68727D] hover:text-[#17202A]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#7B2638]"></span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT: Language Switcher & Primary CTA */}
          <div className="hidden md:flex items-center gap-5">
            {/* Minimal Language Selector (FR | AR | EN) */}
            <div className="flex items-center gap-1.5 text-xs font-sans font-medium text-[#68727D] bg-white border border-[#E6E3DF] px-2.5 py-1.5 rounded-md">
              {languages.map((l, index) => (
                <span key={l.code} className="flex items-center gap-1.5">
                  <button
                    onClick={() => setLang(l.code)}
                    className={`transition-colors uppercase hover:text-[#7B2638] ${
                      lang === l.code ? 'text-[#7B2638] font-bold' : 'text-[#68727D]'
                    }`}
                  >
                    {l.label}
                  </button>
                  {index < languages.length - 1 && <span className="text-[#E6E3DF]">|</span>}
                </span>
              ))}
            </div>

            {/* Primary CTA Button */}
            <Link
              to="/booking"
              className="bg-[#7B2638] hover:bg-[#681F2E] text-white px-5 py-2.5 rounded-md text-xs font-sans font-medium tracking-wide transition-colors shadow-sm flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{t.nav.booking}</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <div className="flex bg-white rounded-md p-1 border border-[#E6E3DF] text-xs">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`px-2 py-0.5 font-medium rounded uppercase transition-colors ${
                    lang === l.code ? 'bg-[#7B2638] text-white' : 'text-[#68727D]'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>

            <button
              className="text-[#17202A] p-2 rounded-md border border-[#E6E3DF]"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#FAF9F6] border-b border-[#E6E3DF] py-5 px-6 flex flex-col gap-4 shadow-lg slide-down">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-sans font-medium py-2 ${
                  location.pathname === link.path ? 'text-[#7B2638] font-semibold' : 'text-[#17202A]'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="h-px bg-[#E6E3DF] my-1"></div>
            <Link
              to="/booking"
              className="bg-[#7B2638] text-white px-4 py-3 rounded-md text-center font-medium shadow-sm flex items-center justify-center gap-2 text-sm"
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
