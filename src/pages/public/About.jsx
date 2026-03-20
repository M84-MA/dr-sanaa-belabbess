import { GraduationCap, Award, Building } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../../assets/logo.png';

const About = () => {
  const experiences = [
    {
      year: "Lauréate",
      title: "Doctorat en Médecine",
      institution: "Faculté de Médecine et de Pharmacie de Fès",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      year: "Ancien Médecin",
      title: "Pratique Hospitalière",
      institution: "Hôpital Militaire Moulay Ismail",
      icon: <Building className="w-6 h-6" />
    },
    {
      year: "Membre",
      title: "Société Française d'Ophtalmologie (SFO)",
      institution: "Recherche et formation continue",
      icon: <Award className="w-6 h-6" />
    }
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-800 mb-6">
            Le Cabinet & Le Médecin
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Un cabinet d'ophtalmologie pensé pour votre confort, alliant l'expertise médicale à une approche profondément humaine.
          </p>
        </div>

        {/* Presentation Card */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 mb-20 flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-slate-800">Votre vision entre de bonnes mains</h2>
            <p className="text-slate-600 leading-relaxed text-justify">
              Le cabinet du Dr. Nihad El Halouat est un espace médical spécialisé au cœur de Meknès, dédié entièrement à la santé et au confort de vos yeux.
              Doté d'un plateau technique de pointe et des dernières innovations technologiques, nous assurons des diagnostics précis et des traitements adaptés pour tout type d'affection visuelle.
            </p>
            <p className="text-slate-600 leading-relaxed text-justify">
              Nous accordons une importance primordiale à l'écoute, à l'accompagnement personnalisé et à l'excellence des soins médicaux et chirurgicaux.
            </p>
          </div>
          <div className="md:w-1/2 w-full flex justify-center">
            <img
              src={logo}
              alt="Dr. Nihad El Halouat Logo"
              className="w-full max-w-sm object-contain"
            />
          </div>
        </div>

        {/* Timeline Section */}
        <div>
          <h2 className="text-3xl font-heading font-bold text-slate-800 text-center mb-16">Parcours et Diplômes</h2>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-primary-200"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}
                >
                  {/* Content */}
                  <div className="w-full md:w-1/2 bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative z-10">
                    <span className="text-sm font-bold text-primary-500 tracking-wider uppercase mb-2 block">{exp.year}</span>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{exp.title}</h3>
                    <p className="text-slate-600">{exp.institution}</p>
                  </div>

                  {/* Marker */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-14 h-14 bg-white border-4 border-primary-100 text-primary-600 rounded-full items-center justify-center z-20 shadow-sm">
                    {exp.icon}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
