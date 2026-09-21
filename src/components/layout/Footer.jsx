import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ChevronRight, Award } from 'lucide-react';
import DoctorLogo from '../common/DoctorLogo';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <DoctorLogo isDark={true} />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mt-4">
              Cabinet médical d'Endocrinologie, Diabétologie, Maladies Métaboliques et Nutrition. Une prise en charge globale, moderne et bienveillante au cœur de Meknès.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 bg-amber-950/60 border border-amber-800/60 px-3 py-1.5 rounded-full">
              <Award className="w-3.5 h-3.5" /> Lauréate FMP Fès • Ancien Médecin CHU Fès
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-heading font-bold text-base mb-6">Navigation</h4>
            <ul className="space-y-3 text-sm flex flex-col">
              {[
                { name: 'Accueil', path: '/' },
                { name: 'Le Cabinet & Spécialiste', path: '/about' },
                { name: 'Services & Traitements', path: '/services' },
                { name: 'Prendre Rendez-vous', path: '/booking' },
                { name: 'Contact & Accès', path: '/contact' },
                { name: 'Espace Praticien', path: '/admin/login' },
              ].map((link) => (
                <Link key={link.name} to={link.path} className="flex items-center hover:text-amber-400 transition-colors group w-fit">
                  <ChevronRight className="w-4 h-4 text-slate-700 group-hover:text-amber-400 transition-colors mr-1" />
                  {link.name}
                </Link>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-heading font-bold text-base mb-6">Contact & Adresse</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  Avenue Moulay Youssef, Imperial Center<br />
                  2ème étage, Bureau N°14 (En face de la maison Volvo)<br />
                  Meknès 50000, Maroc
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+212663559580" className="hover:text-white font-bold transition-colors">06 63 55 95 80</a>
                  <a href="https://wa.me/212663559580" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 transition-colors text-xs font-semibold">WhatsApp: 06 63 55 95 80</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-400 shrink-0" />
                <a href="mailto:dr.bentalebsamia@gmail.com" className="hover:text-white transition-colors">dr.bentalebsamia@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-heading font-bold text-base mb-6">Horaires de Consultation</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between items-center border-b border-slate-900 pb-2">
                <span>Lundi - Vendredi</span>
                <span className="text-white font-semibold">09:00 - 18:00</span>
              </li>
              <li className="flex justify-between items-center border-b border-slate-900 pb-2">
                <span>Samedi</span>
                <span className="text-white font-semibold">09:00 - 13:00</span>
              </li>
              <li className="flex justify-between items-center text-rose-400 pt-1">
                <span>Dimanche</span>
                <span className="font-semibold">Fermé</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-900 flex flex-col md:flex-row justify-between items-center pt-8 gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Dr. BENTALEB Samia. Cabinet d'Endocrinologie, Diabétologie & Nutrition. Tous droits réservés.</p>
          <div className="flex gap-4">
            <Link to="/contact" className="hover:text-amber-400 transition-colors">Plan d'accès</Link>
            <Link to="/booking" className="hover:text-amber-400 transition-colors">Prise de RDV</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

