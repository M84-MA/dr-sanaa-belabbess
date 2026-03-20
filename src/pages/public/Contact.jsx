import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="w-full bg-slate-50 min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-800 mb-6">Contactez-nous</h1>
          <p className="text-lg text-slate-600">
            Une question ? Un besoin spécifique ? Notre équipe est à votre disposition pour vous répondre dans les meilleurs délais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            { 
              icon: <Phone />, 
              title: "Téléphone", 
              contact: "05 35 51 12 57", 
              sub: "Fixe du cabinet",
              color: "bg-blue-50 text-blue-600"
            },
            { 
              icon: <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.411 0 .01 5.403.007 12.04c0 2.12.552 4.19 1.603 6.004L0 24l6.135-1.61a11.77 11.77 0 005.911 1.586h.005c6.638 0 12.039-5.404 12.042-12.041a11.79 11.79 0 00-3.356-8.528z"/></svg>, 
              title: "WhatsApp", 
              contact: "06 22 60 17 07", 
              sub: "Réponse rapide",
              color: "bg-emerald-50 text-emerald-600",
              link: "https://wa.me/212622601707"
            },
            { 
              icon: <Mail />, 
              title: "E-mail", 
              contact: "dr.nihadophtalmo@gmail.com", 
              sub: "Réponse sous 24h",
              color: "bg-purple-50 text-purple-600"
            },
            { 
              icon: <MapPin />, 
              title: "Adresse", 
              contact: "Immeuble N° 2, 4ème étage", 
              sub: "Av. Mohammed V, Meknès",
              color: "bg-rose-50 text-rose-600"
            }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow text-center group"
            >
              <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{item.title}</h3>
              {item.link ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-primary-600 font-bold block hover:underline mb-1">
                  {item.contact}
                </a>
              ) : (
                <p className="text-primary-600 font-bold mb-1">{item.contact}</p>
              )}
              <p className="text-slate-400 text-sm">{item.sub}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden">
          <div className="grid lg:grid-cols-2">
            
            {/* Form */}
            <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-slate-100">
              <h2 className="text-2xl font-bold text-slate-800 mb-8">Envoyez-nous un message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Nom</label>
                    <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all" placeholder="Votre nom" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Email</label>
                    <input type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all" placeholder="votre@email.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Sujet</label>
                  <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all" placeholder="Comment pouvons-nous vous aider ?" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Message</label>
                  <textarea rows="5" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all resize-none" placeholder="Votre message..."></textarea>
                </div>
                <button type="button" className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" /> Envoyer le message
                </button>
              </form>
            </div>

            {/* Practical Info */}
            <div className="p-8 md:p-12 bg-slate-50/50">
              <h2 className="text-2xl font-bold text-slate-800 mb-8">Infos Pratiques</h2>
              
              <div className="space-y-8">
                <div>
                  <h4 className="flex items-center gap-2 font-bold text-slate-800 mb-4">
                    <Clock className="w-5 h-5 text-primary-500" /> Horaires d'ouverture
                  </h4>
                  <div className="space-y-2 text-slate-600">
                    <div className="flex justify-between border-b border-slate-200/60 pb-2">
                      <span>Lundi - Vendredi</span>
                      <span className="font-semibold text-slate-800">09:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200/60 pb-2">
                      <span>Samedi</span>
                      <span className="font-semibold text-slate-800">09:00 - 13:00</span>
                    </div>
                    <div className="flex justify-between text-rose-500 pt-2">
                      <span>Dimanche</span>
                      <span className="font-semibold">Fermé</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-primary-600 rounded-2xl text-white shadow-lg">
                  <h4 className="font-bold mb-2">Urgence Ophtalmologique</h4>
                  <p className="text-primary-100 text-sm leading-relaxed mb-4">
                    En cas d'urgence en dehors des horaires d'ouverture, veuillez vous diriger vers les urgences de l'hôpital le plus proche.
                  </p>
                  <a href="tel:+212535511257" className="inline-block bg-white text-primary-600 px-4 py-2 rounded-lg text-sm font-bold">
                    05 35 51 12 57
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
