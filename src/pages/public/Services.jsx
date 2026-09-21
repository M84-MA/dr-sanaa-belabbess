import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Activity, 
  HeartPulse, 
  Stethoscope, 
  Syringe, 
  Flame, 
  Sparkles, 
  ShieldCheck, 
  TrendingUp, 
  Scale, 
  Brain,
  ChevronRight,
  Phone,
  Calendar
} from 'lucide-react';


const Services = () => {
  const services = [
    {
      title: "Diabète - Dyslipidémies",
      arabic: "داء السكري - الكوليسترول",
      icon: <Activity className="w-7 h-7" />,
      desc: "Prise en charge personnalisée du diabète de type 1, type 2, diabète gestationnel, bilan des complications et traitement des dyslipidémies (hypercholestérolémie, hypertriglycéridémie).",
    },
    {
      title: "Goitre et Dysthyroïdies",
      arabic: "أمراض الغدة الدرقية",
      icon: <HeartPulse className="w-7 h-7" />,
      desc: "Diagnostic et traitement des dérèglements de la thyroïde : hypothyroïdie, hyperthyroïdie (Basedow, Hashimoto), goitres simples ou nodulaires.",
    },
    {
      title: "Échographie Cervicale",
      arabic: "الفحص بالصدى",
      icon: <Stethoscope className="w-7 h-7" />,
      desc: "Échographie thyroïdienne et cervicale haute précision réalisée en consultation pour l'évaluation morphologique immédiate des nodules et de la glande.",
    },
    {
      title: "Cytoponction Thyroïdienne",
      arabic: "الخزعة بالإبرة الدقيقة للغدة الدرقية",
      icon: <Syringe className="w-7 h-7" />,
      desc: "Prélèvement à l'aiguille fine sous contrôle échographique pour l'analyse cytologique rigoureuse et la caractérisation des nodules thyroïdiens.",

    },
    {
      title: "Dyscalcémies & Parathyroïdes",
      arabic: "اضطرابات الكالسيوم",
      icon: <Flame className="w-7 h-7" />,
      desc: "Exploration des anomalies du métabolisme du phosphore et du calcium, hyperparathyroïdie, hypoparathyroïdie et ostéoporose.",
    },
    {
      title: "Troubles Hormonaux Globaux",
      arabic: "الاضطرابات الهرمونية",
      icon: <Brain className="w-7 h-7" />,
      desc: "Diagnostic et suivi des affections complexes des glandes endocrines : hypophyse (adénomes, prolactine), surrénales (cortisol, tension) et gonades.",
    },
    {
      title: "Ovaires Polykystiques (SOPK)",
      arabic: "تكيس المبيضين",
      icon: <Sparkles className="w-7 h-7" />,
      desc: "Prise en charge globale du syndrome des ovaires polykystiques (SOPK) : régulation des cycles menstruels, fertilité et sensibilité à l'insuline.",
    },
    {
      title: "Hyperpilosité & Hirsutisme",
      arabic: "الشعر الزائد",
      icon: <ShieldCheck className="w-7 h-7" />,
      desc: "Bilan hormonal approfondi de l'hyperpilosité féminine, hirsutisme et alopécie androgénique pour cibler le traitement adapté.",
    },
    {
      title: "Retard de Croissance & Puberté",
      arabic: "تأخر النمو والبلوغ",
      icon: <TrendingUp className="w-7 h-7" />,
      desc: "Évaluation de la courbe staturo-pondérale chez l'enfant et l'adolescent, déficit en hormone de croissance et décalages pubertaires.",
    },
    {
      title: "Obésité et Nutrition Clinique",
      arabic: "السمنة والتغذية العلاجية",
      icon: <Scale className="w-7 h-7" />,
      desc: "Accompagnement nutritionnel médicalisé sur mesure, rebalancement métabolique, gestion du surpoids et conseils diététiques personnalisés.",
    }
  ];

  return (
    <div className="w-full bg-stone-50/60 min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Title Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
          <div className="inline-block bg-rose-100/60 text-primary-800 border border-rose-200 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase">
            Spécialités & Actes Médicaux
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-slate-900">
            Nos Services et Expertises
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Cabinet du Dr. BENTALEB Samia — Diagnostic, suivi et échographie en Endocrinologie, Diabétologie, Maladies Métaboliques et Nutrition à Meknès.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="bg-white rounded-3xl p-8 border border-rose-100/80 shadow-sm hover:shadow-hover hover:border-rose-200 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 bg-rose-50 text-primary-700 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-700 group-hover:text-white transition-colors duration-300 border border-rose-100">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-1">{service.title}</h3>
                <h4 className="text-xs font-bold text-primary-600 mb-4">{service.arabic}</h4>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Link to="/booking" className="inline-flex items-center text-xs font-bold text-primary-700 hover:text-primary-900 transition-colors group/btn">
                  <span>Demander un rendez-vous</span>
                  <ChevronRight className="w-4 h-4 ml-1 transform group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Card */}
        <div className="mt-20 text-center bg-gradient-to-r from-primary-800 via-primary-700 to-primary-900 rounded-3xl p-10 md:p-14 text-white shadow-xl max-w-4xl mx-auto relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold">Besoin d'une consultation spécialisée ?</h2>
            <p className="text-primary-100 text-base max-w-2xl mx-auto leading-relaxed">
              Pour tout suivi de votre diabète, bilan thyroïdien ou conseils nutritionnels, notre secrétariat vous accueille et répond à toutes vos questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Link to="/booking" className="bg-white text-primary-900 hover:bg-stone-50 px-8 py-4 rounded-full font-bold transition-colors shadow-lg flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>Prendre Rendez-vous en Ligne</span>
              </Link>
              <a href="tel:0663559580" className="bg-primary-900/60 hover:bg-primary-950 border border-primary-500 text-white px-8 py-4 rounded-full font-bold transition-colors flex items-center justify-center gap-2">
                <Phone className="w-5 h-5 text-amber-400" />
                <span>Appeler: 06 63 55 95 80</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;

