import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ChevronRight } from 'lucide-react';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="bg-white rounded-full p-1 w-12 h-12 flex items-center justify-center">
                <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
              </div>
              <div>
                <h3 className="text-white font-heading font-semibold text-lg">Dr. Nihad El Halouat</h3>
                <p className="text-primary-400 text-xs">Ophtalmologue Spécialiste</p>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mt-4">
              Cabinet d'ophtalmologie spécialisé offrant des soins complets pour la santé de vos yeux, doté des dernières technologies médicales à Meknès.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Liens Rapides</h4>
            <ul className="space-y-3 text-sm flex flex-col">
              {[
                { name: 'Accueil', path: '/' },
                { name: 'Le Cabinet', path: '/about' },
                { name: 'Nos Services', path: '/services' },
                { name: 'Prendre Rendez-vous', path: '/booking' },
                { name: 'Espace Patient', path: '/admin/login' },
              ].map((link) => (
                <Link key={link.name} to={link.path} className="flex items-center hover:text-primary-400 transition-colors group w-fit">
                  <ChevronRight className="w-4 h-4 text-slate-700 group-hover:text-primary-500 transition-colors mr-1" />
                  {link.name}
                </Link>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                <span>Immeuble N° 2, 4ème étage, Appt n° 8<br/>En face du Cinéma Caméra, Avenue Mohammed V, Meknès</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-500 shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+212535511257" className="hover:text-white transition-colors">05 35 51 12 57</a>
                  <a href="https://wa.me/212622601707" target="_blank" rel="noopener noreferrer" className="text-medical-500 hover:text-medical-400 transition-colors text-xs font-medium">WhatsApp: 06 22 60 17 07</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-500 shrink-0" />
                <a href="mailto:dr.nihadophtalmo@gmail.com" className="hover:text-white transition-colors">dr.nihadophtalmo@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-semibold mb-6">Horaires</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between items-center border-b border-slate-800 pb-2">
                <span>Lundi - Vendredi</span>
                <span className="text-white font-medium">09:00 - 18:00</span>
              </li>
              <li className="flex justify-between items-center border-b border-slate-800 pb-2">
                <span>Samedi</span>
                <span className="text-white font-medium">09:00 - 13:00</span>
              </li>
              <li className="flex justify-between items-center text-rose-400 pt-1">
                <span>Dimanche</span>
                <span className="font-medium">Fermé</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 flex flex-col md:flex-row justify-between items-center pt-8 gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Dr. Nihad El Halouat. Tous droits réservés.</p>
          <div className="flex gap-4">
            <Link to="/legal" className="hover:text-white transition-colors">Mentions légales</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
