import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Activity, 
  HeartPulse, 
  Stethoscope, 
  Quote, 
  MapPin, 
  Phone, 
  Mail, 
  Star, 
  CheckCircle, 
  Sparkles, 
  Award, 
  ArrowRight,
  ShieldCheck,
  Building2
} from 'lucide-react';
import { DoctorLogoSymbol } from '../../components/common/DoctorLogo';

const Home = () => {
  const reviewTags = [
    { name: "Bienveillance", count: 16, icon: "❤️" },
    { name: "Confiance", count: 14, icon: "🤝" },
    { name: "Humaine", count: 11, icon: "🌿" },
    { name: "Compétence", count: 7, icon: "⭐" },
  ];

  const featuredServices = [
    { 
      title: "Diabète & Dyslipidémies", 
      arabic: "داء السكري - الكوليسترول",
      icon: <Activity className="w-7 h-7" />, 
      desc: "Prise en charge personnalisée du diabète de type 1, type 2, diabète gestationnel et troubles lipidiques (cholestérol, triglycérides)." 
    },
    { 
      title: "Pathologies Thyroïdiennes", 
      arabic: "أمراض الغدة الدرقية",
      icon: <HeartPulse className="w-7 h-7" />, 
      desc: "Bilan et traitement des hypothyroïdies, hyperthyroïdies, nodule thyroïdien et goitre." 
    },
    { 
      title: "Échographie & Cytoponction", 
      arabic: "الفحص بالصدى والخزعة بالإبرة الدقيقة",
      icon: <Stethoscope className="w-7 h-7" />, 
      desc: "Échographie cervicale de haute précision et ponction à l'aiguille fine pour une analyse cytologique rigoureuse." 
    },
    { 
      title: "Troubles Hormonaux & SOPK", 
      arabic: "الاضطرابات الهرمونية وتكيس المبيضين",
      icon: <Sparkles className="w-7 h-7" />, 
      desc: "Diagnostic des ovaires polykystiques (SOPK), hyperpilosité/hirsutisme et dérèglements surrénaliens ou hypophysaires." 
    },
    { 
      title: "Obésité & Nutrition Clinique", 
      arabic: "السمنة والتغذية العلاجية",
      icon: <ShieldCheck className="w-7 h-7" />, 
      desc: "Accompagnement nutritionnel médical sur mesure, gestion du poids et métabolisme." 
    },
    { 
      title: "Croissance & Puberté", 
      arabic: "تأخر النمو والبلوغ",
      icon: <Building2 className="w-7 h-7" />, 
      desc: "Suivi pédiatrique et adolescent des retards de croissance st Morales et puberté précoce ou tardive." 
    }
  ];

  const realReviews = [
    {
      name: "Asmae Bouhouts",
      date: "Il y a 2 mois",
      rating: 5,
      text: "Très bonne expérience. Accueil formidable, aussi bien par la secrétaire que par le médecin. La consultation s’est très bien passée. La doctoresse est très à l’écoute, professionnelle et ses explications étaient claires et rassurantes. Je recommande vivement☺️",
      reply: "Je vous remercie pour votre confiance et votre recommandation. Au plaisir de vous accompagner à nouveau."
    },
    {
      name: "Nasri Manssour",
      badge: "Local Guide",
      date: "Il y a 2 mois",
      rating: 5,
      text: "Excellente endocrinologue ! La Dre Samia Bentaleb est très professionnelle, à l'écoute et prend le temps d'expliquer le diagnostic et le traitement. Le cabinet est propre, l'accueil est chaleureux et la consultation s'est déroulée dans de meilleures conditions.",
      reply: "Un grand merci pour votre retour positif et également pour vos mots concernant l'accueil au cabinet."
    },
    {
      name: "Rawane Dulcine",
      date: "Il y a 1 mois",
      rating: 5,
      text: "Honnêtement, c'est une jeune médecin belle, raffinée et très compétente qui assure un suivi assidu de ses patients. J'ai été impressionnée par elle et pour être franche, j'ai adoré le cabinet et ses couleurs chaleureuses. N'oublions pas non plus son assistante elle est polie et serviable 🙏🏻",
      reply: "Je vous remercie Madame pour votre retour et vos compliments."
    },
    {
      name: "Ouissal Hamma",
      date: "Il y a 2 mois",
      rating: 5,
      text: "Je tiens à remercier chaleureusement la meilleure endocrinologue que j’ai eu la chance de rencontrer. Son professionnalisme, sa bienveillance et son écoute font toute la différence. En tant que diabétique de type 1, je me suis toujours sentie soutenue.",
      reply: "Un immense merci pour ce témoignage si touchant et votre recommandation. Nous vous souhaitons le meilleur."
    },
    {
      name: "Kenza MsD",
      date: "Il y a 2 semaines",
      rating: 5,
      text: "Très bonne expérience ❤️ Je suis vraiment satisfaite de son accompagnement. Elle est très douce et surtout kat3ti l wa9t les patients dyalha. J’ai beaucoup apprécié sa façon d’expliquer les choses et ses conseils adaptés à ma situation.",
      reply: "Je vous remercie Madame pour votre retour et votre recommandation."
    },
    {
      name: "Mery Aj",
      date: "Il y a 4 semaines",
      rating: 5,
      text: "J’ai consulté Dr Samia Bentaleb pour mon hypothyroïdie et j’ai été très satisfaite de ma consultation. C’est une endocrinologue sérieuse, compétente et très attentive aux détails. Elle prend le temps d’écouter et d’expliquer clairement.",
      reply: "Merci beaucoup pour votre retour Madame. Au plaisir de vous revoir."
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50/80 via-white to-amber-50/40 py-20 lg:py-28">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/40 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3"></div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Left Main Hero Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
            >
              {/* Badge rating */}
              <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 bg-white/90 backdrop-blur-md border border-rose-100 px-4 py-2 rounded-full text-xs sm:text-sm shadow-sm">
                <span className="flex items-center gap-1 font-bold text-amber-600">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" /> 5,0 / 5,0
                </span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-700 font-semibold">(85 Avis Google vérifiés)</span>
                <span className="text-slate-400">•</span>
                <span className="text-primary-700 font-bold">Cabinet Médical à Meknès</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-slate-900 leading-tight">
                Dr. BENTALEB Samia <br />
                <span className="text-gradient">Endocrinologie, Diabétologie & Nutrition</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Spécialiste diplômée de la Faculté de Médecine de Fès et ancienne praticienne du CHU Hassan II de Fès. Une prise en charge médicale experte, humaine et personnalisée de vos hormones, du diabète et de la nutrition.
              </p>

              {/* Badges / Credentials */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2 text-xs sm:text-sm text-slate-700">
                <span className="flex items-center gap-1.5 bg-primary-50/90 text-primary-800 px-3 py-1.5 rounded-lg border border-primary-100 font-medium">
                  <Award className="w-4 h-4 text-primary-600" /> Lauréate FMP Fès
                </span>
                <span className="flex items-center gap-1.5 bg-primary-50/90 text-primary-800 px-3 py-1.5 rounded-lg border border-primary-100 font-medium">
                  <Building2 className="w-4 h-4 text-primary-600" /> Ancien Médecin Interne CHU Fès
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Link 
                  to="/booking" 
                  className="bg-gradient-to-r from-primary-700 to-primary-600 hover:from-primary-800 hover:to-primary-700 text-white px-8 py-4 rounded-full text-base font-bold shadow-lg shadow-primary-900/20 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <span>Prendre Rendez-vous</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a 
                  href="tel:0663559580" 
                  className="bg-white hover:bg-rose-50/50 text-slate-800 border border-rose-200/80 px-8 py-4 rounded-full text-base font-bold shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5 text-primary-600" />
                  <span>06 63 55 95 80</span>
                </a>
              </div>
            </motion.div>

            {/* Right Hero Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 flex items-center justify-center p-4"
            >
              <div className="relative group max-w-md w-full flex items-center justify-center">
                <div className="absolute -inset-4 bg-gradient-to-tr from-amber-200/30 to-rose-200/30 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition duration-500"></div>
                <DoctorLogoSymbol className="w-full max-w-sm sm:max-w-md h-auto object-contain relative z-10 drop-shadow-2xl" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Review Sentiment Tags Bar */}
      <section className="bg-primary-900 text-white py-12 border-y border-primary-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left space-y-1">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-2xl font-extrabold text-white">5,0 / 5,0</span>
              </div>
              <p className="text-primary-200 text-sm">
                Basé sur <strong className="text-white">85 avis authentiques Google</strong> des patients de Meknès
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {reviewTags.map((tag, idx) => (
                <div 
                  key={idx}
                  className="bg-primary-800/80 hover:bg-primary-800 border border-primary-700 px-4 py-2.5 rounded-2xl flex items-center gap-2 text-sm font-semibold transition-transform hover:-translate-y-0.5"
                >
                  <span>{tag.icon}</span>
                  <span className="text-white">{tag.name}</span>
                  <span className="bg-amber-400/20 text-amber-300 text-xs px-2 py-0.5 rounded-full font-bold">
                    +{tag.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-block bg-rose-50 text-primary-700 border border-rose-100 px-4 py-1.5 rounded-full text-xs font-extrabold tracking-wider uppercase">
              Champs d'Expertise Médicale
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900">
              Prise en charge globale et spécialisée
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Le cabinet offre une approche complète des pathologies endocriniennes et métaboliques selon les protocoles médicaux les plus récents.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                className="bg-stone-50/70 border border-slate-100 rounded-3xl p-8 hover:shadow-hover hover:border-rose-200 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 bg-rose-100/60 text-primary-700 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-700 group-hover:text-white transition-colors duration-300 shadow-sm">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{service.title}</h3>
                  <p className="text-xs font-bold text-primary-600 mb-4">{service.arabic}</p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.desc}</p>
                </div>
                
                <Link to="/services" className="text-primary-700 font-bold text-sm hover:text-primary-900 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>En savoir plus</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-full shadow-md transition-all hover:scale-105"
            >
              <span>Découvrir la liste complète des 10 actes médicaux</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Patient Google Reviews Section */}
      <section className="py-24 bg-gradient-to-b from-stone-50/50 to-rose-50/30 border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-800 border border-amber-200 px-4 py-1.5 rounded-full text-xs font-bold">
              <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
              Témoignages Patient Google (5.0 / 5)
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900">
              Ce que disent nos patients
            </h2>
            <p className="text-slate-600 text-base">
              La bienveillance, le temps accordé à chaque consultation et l'écoute sont au cœur de notre engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {realReviews.map((rev, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-rose-100/70 flex flex-col justify-between relative hover:shadow-md transition-shadow"
              >
                <div>
                  <Quote className="absolute top-6 right-6 w-8 h-8 text-rose-100" />
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                        {rev.name}
                        {rev.badge && (
                          <span className="bg-blue-50 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded-md">
                            {rev.badge}
                          </span>
                        )}
                      </h4>
                      <p className="text-xs text-slate-400">{rev.date}</p>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-4">
                    {[...Array(rev.rating)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-slate-700 text-sm leading-relaxed italic mb-6">
                    "{rev.text}"
                  </p>
                </div>

                {rev.reply && (
                  <div className="mt-4 pt-4 border-t border-slate-100 bg-stone-50 p-3.5 rounded-2xl text-xs text-slate-600">
                    <span className="font-bold text-primary-700 block mb-1">
                      Réponse du Dr. BENTALEB Samia :
                    </span>
                    "{rev.reply}"
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Map Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8">
              <div>
                <div className="inline-block bg-primary-50 text-primary-700 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase mb-3">
                  Localisation & Accès
                </div>
                <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 mb-4">
                  Trouver le Cabinet à Meknès
                </h2>
                <p className="text-slate-600 text-base leading-relaxed">
                  Le cabinet du Dr. BENTALEB Samia est idéalement situé au centre-ville de Meknès, au sein de l'Imperial Center, facilement accessible avec stationnement à proximité.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-rose-100/60 text-primary-700 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Adresse du Cabinet</h4>
                    <p className="text-slate-600 text-sm mt-0.5">
                      Avenue Moulay Youssef, Imperial Center, 2ème étage, Bureau N°14 (En face de la maison Volvo) - Meknès 50000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-rose-100/60 text-primary-700 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Téléphone & WhatsApp</h4>
                    <p className="text-primary-700 font-bold text-base">06 63 55 95 80</p>
                    <p className="text-slate-500 text-xs">Accueil téléphonique & prise de rendez-vous rapide</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-rose-100/60 text-primary-700 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">E-mail</h4>
                    <p className="text-slate-600 text-sm">dr.bentalebsamia@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/booking" 
                  className="bg-primary-700 hover:bg-primary-800 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-primary-900/20 transition-all text-center"
                >
                  Prendre Rendez-vous en Ligne
                </Link>
                <a 
                  href="https://wa.me/212663559580" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-bold shadow-md transition-all text-center flex items-center justify-center gap-2"
                >
                  <span>WhatsApp Direct</span>
                </a>
              </div>
            </div>

            {/* Google Maps Frame */}
            <div className="h-[480px] bg-slate-100 rounded-[2.5rem] overflow-hidden shadow-lg border border-rose-100 relative">
              <iframe
                title="Carte Google Maps Dr Samia Bentaleb"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.748!2d-5.548!3d33.8967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDUzJzg4LjEiTiA1wrAzMic1Mi44Ilc!5e0!3m2!1sfr!2sma!4v1700000000000!5m2!1sfr!2sma"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="w-full h-full"
              ></iframe>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;

