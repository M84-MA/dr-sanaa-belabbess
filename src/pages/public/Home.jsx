import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, Stethoscope, Microscope, Quote, MapPin, Phone, Mail } from 'lucide-react';
import logo from '../../assets/logo.png';

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-medical-50 via-white to-primary-50 py-24 sm:py-32">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/clean-text-patterns.png')] opacity-20"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8 text-center lg:text-left"
            >
              <div className="inline-block bg-primary-100/50 backdrop-blur-md text-primary-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-2">
                Expertise & Technologie Moderne
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-slate-800 leading-tight">
                Dr. Nihad El Halouat <br />
                <span className="text-gradient">Ophtalmologue à Meknès</span>
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0">
                Spécialiste de la vision, je vous accompagne avec précision et bienveillance pour préserver et améliorer votre santé oculaire, grâce aux technologies médicales les plus avancées.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Link to="/booking" className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full text-base font-semibold shadow-lg shadow-primary-500/30 transition-all hover:-translate-y-1">
                  Prendre Rendez-vous
                </Link>
                <Link to="/services" className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-full text-base font-semibold shadow-sm transition-all hover:border-slate-300">
                  Découvrir Nos Services
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center lg:justify-end"
            >
              <img
                src={logo}
                alt="Dr. Nihad El Halouat Logo"
                className="w-full max-w-sm object-contain"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-800 mb-4">
              Des soins oculaires d'excellence
            </h2>
            <p className="text-slate-600 text-lg">
              Notre cabinet est équipé pour diagnostiquer et traiter un large spectre de pathologies oculaires.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Consultation Globale", icon: <Eye />, desc: "Bilan complet de la vue et prescription de lunettes/lentilles." },
              { title: "Chirurgie Réfractive", icon: <Microscope />, desc: "Correction de la myopie, de l'astigmatisme et de la presbytie." },
              { title: "Traitement Médical", icon: <Stethoscope />, desc: "Prise en charge du glaucome, cataracte et autres pathologies." }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:shadow-hover transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-800">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.desc}</p>
                <Link to="/services" className="text-primary-600 font-medium hover:text-primary-700 flex items-center gap-1">
                  En savoir plus <span>→</span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/services" className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-800 transition-colors">
              Voir tous nos services médicalisés
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-800 mb-4">Ce que disent nos patients</h2>
            <p className="text-slate-600">Leur satisfaction est notre priorité absolue.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Ahmed B.", text: "Le Dr. El Halouat est très professionnelle et à l'écoute. Le cabinet est d'une propreté irréprochable et l'équipement est très moderne." },
              { name: "Fatima Z.", text: "Excellente expérience pour ma chirurgie de la cataracte. J'ai retrouvé une vue parfaite, je la recommande vivement." },
              { name: "Youssef M.", text: "Un accueil chaleureux et des explications claires. On se sent vraiment en confiance." }
            ].map((review, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-primary-100" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-slate-600 italic mb-6">"{review.text}"</p>
                <div className="font-semibold text-slate-800">{review.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-800 mb-6">Nous trouver</h2>
              <p className="text-slate-600 text-lg mb-10">
                Le cabinet est idéalement situé à Meknès, facilement accessible avec des possibilités de stationnement à proximité.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg">Adresse</h4>
                    <p className="text-slate-600 text-sm">Immeuble N° 2, 4ème étage, Appt n° 8, En face du Cinéma Caméra, Avenue Mohammed V, Meknès</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg">Téléphone / WhatsApp</h4>
                    <p className="text-slate-600">Fixe: 05 35 51 12 57</p>
                    <p className="text-medical-600 font-medium">WhatsApp: 06 22 60 17 07</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg">E-mail</h4>
                    <p className="text-slate-600">dr.nihadophtalmo@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <Link to="/booking" className="inline-flex bg-primary-600 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-primary-200 hover:bg-primary-700 transition-all">
                  Prendre Rendez-vous en ligne
                </Link>
              </div>
            </div>

            <div className="h-[450px] bg-slate-100 rounded-[2.5rem] overflow-hidden shadow-inner border border-slate-100 relative">
              {/* Google Maps Placeholder */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106000!2d-5.5!3d33.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9da4ec2a66e675%3A0x673c68349257bb3e!2zTWVrbsOocw!5e0!3m2!1sfr!2sma!4v1600000000000!5m2!1sfr!2sma"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
