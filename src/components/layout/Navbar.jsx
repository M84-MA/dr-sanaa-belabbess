import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import DoctorLogo from '../common/DoctorLogo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Le Cabinet', path: '/about' },
    { name: 'Services & Expertises', path: '/services' },
    { name: 'Contact & Accès', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3 shadow-md' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="group">
            <DoctorLogo />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-semibold transition-colors hover:text-primary-600 ${
                    location.pathname === link.path ? 'text-primary-600 border-b-2 border-primary-600 pb-0.5' : 'text-slate-700'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              <a href="tel:+212663559580" className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-primary-600 transition-colors border-r border-slate-200 pr-4">
                <Phone className="w-4 h-4 text-primary-600" />
                <span>06 63 55 95 80</span>
              </a>
              <a href="https://wa.me/212663559580" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.411 0 .01 5.403.007 12.04c0 2.12.552 4.19 1.603 6.004L0 24l6.135-1.61a11.77 11.77 0 005.911 1.586h.005c6.638 0 12.039-5.404 12.042-12.041a11.79 11.79 0 00-3.356-8.528z"/></svg>
                <span>WhatsApp</span>
              </a>
              <Link
                to="/booking"
                className="bg-gradient-to-r from-primary-700 to-primary-600 hover:from-primary-800 hover:to-primary-700 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-md hover:shadow-lg flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Prendre RDV</span>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-700 hover:text-primary-600 transition-colors p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-rose-100 py-4 px-4 flex flex-col gap-4 slide-down">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-base font-semibold p-3 rounded-xl ${
                  location.pathname === link.path ? 'bg-primary-50 text-primary-700' : 'text-slate-700'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="h-px bg-rose-100 my-2"></div>
            <a href="tel:0663559580" className="flex items-center justify-center gap-2 text-primary-700 font-bold p-2">
              <Phone className="w-4 h-4" /> 06 63 55 95 80
            </a>
            <Link
              to="/booking"
              className="bg-primary-700 text-white px-4 py-3.5 rounded-xl text-center font-bold shadow-md flex items-center justify-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <Calendar className="w-5 h-5" />
              Prendre Rendez-vous
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

