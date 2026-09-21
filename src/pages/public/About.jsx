import { GraduationCap, Award, Building2, HeartHandshake, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { DoctorLogoSymbol } from '../../components/common/DoctorLogo';

const About = () => {
  const experiences = [
    {
      year: "Diplôme Spécialisé",
      title: "Lauréate de la Faculté de Médecine",
      institution: "Faculté de Médecine et de Pharmacie de Fès (FMPF)",
      arabic: "خريجة كلية الطب والصيدلة بفاس",
      icon: <GraduationCap className="w-6 h-6 text-primary-700" />
    },
    {
      year: "Formation Hospitalière",
      title: "Ancien Médecin Interne",
      institution: "Centre Hospitalier Universitaire (CHU) Hassan II de Fès",
      arabic: "طبيبة داخلية سابقا بالمركز الاستشفائي الجامعي الحسن الثاني - فاس",
      icon: <Building2 className="w-6 h-6 text-primary-700" />
    },
    {
      year: "Pratique Clinique",
      title: "Ancien Médecin du CHU",
      institution: "Service d'Endocrinologie, Diabétologie et Maladies Métaboliques - CHU de Fès",
      arabic: "طبيبة سابقة بالمركز الاستشفائي الجامعي الحسن الثاني - فاس",
      icon: <Award className="w-6 h-6 text-primary-700" />
    }
  ];

  const values = [
    {
      title: "Bienveillance & Écoute",
      desc: "Chaque patient bénéficie d'un temps de consultation dédié pour exprimer ses symptômes et inquiétudes sans précipitation.",
      icon: <HeartHandshake className="w-6 h-6 text-primary-700" />
    },
    {
      title: "Rigueur Scientifique",
      desc: "Prise en charge basée sur les recommandations internationales en endocrinologie, diabétologie et nutrition.",
      icon: <ShieldCheck className="w-6 h-6 text-primary-700" />
    },
    {
      title: "Pédagogie & Disponibilité",
      desc: "Explications claires du diagnostic et du plan de traitement pour vous rendre acteur de votre santé au quotidien.",
      icon: <Clock className="w-6 h-6 text-primary-700" />
    }
  ];

  return (
    <div className="w-full bg-stone-50/60 min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block bg-rose-100/60 text-primary-800 border border-rose-200 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase">
            Le Cabinet & Votre Praticienne
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-slate-900">
            Dr. BENTALEB Samia
          </h1>
          <p className="text-lg text-primary-700 font-bold max-w-2xl mx-auto">
            Spécialiste en Endocrinologie, Diabétologie, Maladies Métaboliques et Nutrition
          </p>
        </div>

        {/* Presentation Card */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-rose-100 mb-20 flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-3/5 space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 leading-snug">
              Une médecine spécialisée centrée sur le patient et la bienveillance
            </h2>
            <p className="text-slate-600 leading-relaxed text-justify text-base">
              Le cabinet du Dr. BENTALEB Samia, situé à l'Imperial Center au cœur de Meknès, offre un espace médical chaleureux et rassurant dédié à l'évaluation, au suivi et au traitement des affections hormonales et métaboliques.
            </p>
            <p className="text-slate-600 leading-relaxed text-justify text-base">
              Riche de son expérience hospitalière au CHU Hassan II de Fès, le Dr. Bentaleb accorde une importance primordiale à l'écoute attentive, aux explications pédagogiques et à l'instauration d'un lien de confiance durable avec chaque patient.
            </p>
            <div className="pt-2 grid grid-cols-2 gap-3 text-xs font-bold text-slate-800">
              <div className="flex items-center gap-2 bg-stone-50 p-3 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Suivi Diabète Type 1 & 2</span>
              </div>
              <div className="flex items-center gap-2 bg-stone-50 p-3 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Échographie & Cytoponction</span>
              </div>
            </div>
          </div>
          <div className="md:w-2/5 w-full flex justify-center">
            <div className="bg-stone-50 p-8 rounded-3xl border border-rose-100 text-center w-full max-w-sm shadow-inner flex flex-col items-center justify-center">
              <DoctorLogoSymbol className="h-44 w-auto mx-auto" />
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-heading font-extrabold text-slate-900 text-center mb-16">
            Parcours Académique et Hospitalier
          </h2>

          <div className="space-y-8 max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="bg-white p-8 rounded-3xl border border-rose-100 shadow-sm flex flex-col md:flex-row gap-6 items-start hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center shrink-0 border border-rose-100">
                  {exp.icon}
                </div>
                <div className="space-y-1 flex-grow">
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block">
                    {exp.year}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">{exp.title}</h3>
                  <p className="text-slate-700 text-sm font-medium">{exp.institution}</p>
                  <p className="text-xs text-primary-700 font-semibold pt-1">{exp.arabic}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Clinic Values */}
        <div>
          <h2 className="text-3xl font-heading font-extrabold text-slate-900 text-center mb-12">
            Nos Engagements Médicaux
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-rose-100 shadow-sm text-center space-y-4">
                <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center mx-auto border border-rose-100">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900">{v.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;

