import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Eye, 
  Microscope, 
  Stethoscope, 
  Droplets,
  Activity,
  Sparkles,
  Camera,
  Layers,
  Zap,
  Box,
  ChevronRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Chirurgie de la Cataracte",
      subtitle: "(Phacoémulsification)",
      icon: <Eye className="w-8 h-8" />,
      desc: "Intervention chirurgicale de pointe pour restaurer la clarté de la vision en remplaçant le cristallin opacifié par un implant artificiel.",
    },
    {
      title: "Chirurgie Réfractive",
      subtitle: "(Myopie, Astigmatisme, Presbytie)",
      icon: <Microscope className="w-8 h-8" />,
      desc: "Correction de la vue au laser pour vous affranchir des lunettes et des lentilles de contact, avec des techniques de dernière génération.",
    },
    {
      title: "Chirurgie du Strabisme",
      subtitle: "Alignement Oculaire",
      icon: <Activity className="w-8 h-8" />,
      desc: "Intervention visant à réaligner les yeux et restaurer une vision binoculaire normale, chez l'enfant comme chez l'adulte.",
    },
    {
      title: "Voies Lacrymales",
      subtitle: "Traitement du Larmoiement",
      icon: <Droplets className="w-8 h-8" />,
      desc: "Prise en charge médico-chirurgicale des larmoiements chroniques et des obstructions des voies lacrymales.",
    },
    {
      title: "Chirurgie du Glaucome",
      subtitle: "Pression Intraoculaire",
      icon: <Stethoscope className="w-8 h-8" />,
      desc: "Traitements médicaux, laser et interventions chirurgicales pour maîtriser la pression de l'œil et préserver le nerf optique.",
    },
    {
      title: "Esthétique du regard",
      subtitle: "Rajeunissement",
      icon: <Sparkles className="w-8 h-8" />,
      desc: "Solutions esthétiques pour le contour des yeux : traitement des cernes, blépharoplastie et rajeunissement médical du regard.",
    },
    {
      title: "Rétinographie",
      subtitle: "Imagerie du fond d'œil",
      icon: <Camera className="w-8 h-8" />,
      desc: "Photographie haute résolution de la rétine pour le dépistage et le suivi des pathologies (diabète, DMLA).",
    },
    {
      title: "Angiographie",
      subtitle: "Vaisseaux Rétiniens",
      icon: <Layers className="w-8 h-8" />,
      desc: "Examen approfondi de la vascularisation de la rétine permettant un diagnostic précis des maladies vasculaires oculaires.",
    },
    {
      title: "Echographie B",
      subtitle: "Examen Ultrasonore",
      icon: <Activity className="w-8 h-8" />,
      desc: "Exploration des structures internes de l'œil par ultrasons, essentielle lorsque le fond d'œil est inaccessible.",
    },
    {
      title: "OCT",
      subtitle: "Tomographie par Cohérence Optique",
      icon: <Box className="w-8 h-8" />,
      desc: "Imagerie en coupe haute résolution de la rétine et du nerf optique pour une analyse micrométrique des tissus.",
    },
    {
      title: "Topographie cornéenne",
      subtitle: "Cartographie de la cornée",
      icon: <Microscope className="w-8 h-8" />,
      desc: "Analyse détaillée de la forme et de la courbure de la cornée, indispensable avant chirurgie réfractive ou pour le kératocône.",
    },
    {
      title: "Laser",
      subtitle: "Traitements Rétiniens et Glaucome",
      icon: <Zap className="w-8 h-8" />,
      desc: "Différents types de lasers (Argon, YAG, SLT) pour le traitement des déchirures rétiniennes, du glaucome ou de la cataracte secondaire.",
    }
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-800 mb-6">Nos Services et Expertises</h1>
          <p className="text-lg text-slate-600">
            Nous proposons une prise en charge complète, du diagnostic à l'intervention chirurgicale, 
            soutenue par un plateau technique moderne et de haute précision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-hover transition-all duration-300 group flex flex-col h-full"
            >
              <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 mb-1">{service.title}</h3>
              <h4 className="text-sm font-medium text-primary-500 mb-4">{service.subtitle}</h4>
              
              <p className="text-slate-600 mb-8 flex-grow">
                {service.desc}
              </p>

              <div className="mt-auto">
                <Link to="/booking" className="inline-flex items-center text-sm font-semibold text-slate-700 hover:text-primary-600 transition-colors group/btn">
                  En savoir plus 
                  <ChevronRight className="w-4 h-4 ml-1 transform group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center bg-primary-600 rounded-3xl p-12 text-white shadow-xl max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/clean-text-patterns.png')] opacity-20"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-heading font-bold mb-6">Besoin d'une consultation ?</h2>
            <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
              N'hésitez pas à prendre rendez-vous en ligne ou à nous contacter par téléphone pour toute question médicale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking" className="bg-white text-primary-600 hover:bg-slate-50 px-8 py-3.5 rounded-full font-semibold transition-colors shadow-lg">
                Prendre Rendez-vous
              </Link>
              <a href="tel:+212000000000" className="bg-primary-700 hover:bg-primary-800 border border-primary-500 text-white px-8 py-3.5 rounded-full font-semibold transition-colors">
                Appeler le Cabinet
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;
