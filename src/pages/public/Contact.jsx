import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  return (
    <div className="w-full bg-stone-50/60 min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
          <div className="inline-block bg-rose-100/60 text-primary-800 border border-rose-200 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase">
            Contact & Localisation
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-slate-900">Contactez le Cabinet</h1>
          <p className="text-lg text-slate-600">
            Une question sur une consultation, un bilan ou une prise de rendez-vous ? Notre secrétariat est à votre entière disposition.
          </p>
        </div>

        {/* 4 Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { 
              icon: <Phone className="w-6 h-6" />, 
              title: "Téléphone", 
              contact: "06 63 55 95 80", 
              sub: "Ligne directe du cabinet",
              color: "bg-rose-50 text-primary-700",
              link: "tel:0663559580"
            },
            { 
              icon: <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.411 0 .01 5.403.007 12.04c0 2.12.552 4.19 1.603 6.004L0 24l6.135-1.61a11.77 11.77 0 005.911 1.586h.005c6.638 0 12.039-5.404 12.042-12.041a11.79 11.79 0 00-3.356-8.528z"/></svg>, 
              title: "WhatsApp Direct", 
              contact: "06 63 55 95 80", 
              sub: "Réponse rapide & RDV",
              color: "bg-emerald-50 text-emerald-700",
              link: "https://wa.me/212663559580"
            },
            { 
              icon: <Mail className="w-6 h-6" />, 
              title: "E-mail", 
              contact: "dr.bentalebsamia@gmail.com", 
              sub: "Demandes administratives",
              color: "bg-amber-50 text-amber-800",
              link: "mailto:dr.bentalebsamia@gmail.com"
            },
            { 
              icon: <MapPin className="w-6 h-6" />, 
              title: "Adresse", 
              contact: "Imperial Center, 2ème étage", 
              sub: "Bd Moulay Youssef, Meknès",
              color: "bg-purple-50 text-purple-700"
            }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-3xl border border-rose-100 shadow-sm hover:shadow-md transition-all text-center group"
            >
              <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">{item.title}</h3>
              {item.link ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-primary-700 font-bold block hover:underline text-sm mb-1 truncate">
                  {item.contact}
                </a>
              ) : (
                <p className="text-primary-700 font-bold text-sm mb-1 truncate">{item.contact}</p>
              )}
              <p className="text-slate-500 text-xs">{item.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact Form & Hours Grid */}
        <div className="bg-white rounded-[2.5rem] shadow-xl border border-rose-100 overflow-hidden">
          <div className="grid lg:grid-cols-2">
            
            {/* Form */}
            <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-slate-100 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Laissez-nous un message</h2>
                <p className="text-slate-500 text-xs">Nous vous répondrons dans les plus brefs délais.</p>
              </div>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase">Nom Complet</label>
                    <input type="text" className="w-full px-4 py-3 bg-stone-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600 outline-none transition-all text-sm" placeholder="Votre nom" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase">Téléphone / WhatsApp</label>
                    <input type="tel" className="w-full px-4 py-3 bg-stone-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600 outline-none transition-all text-sm" placeholder="06 XX XX XX XX" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase">Sujet de consultation</label>
                  <input type="text" className="w-full px-4 py-3 bg-stone-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600 outline-none transition-all text-sm" placeholder="Ex: Bilan thyroïde, suivi diabète..." />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase">Message</label>
                  <textarea rows="4" className="w-full px-4 py-3 bg-stone-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600 outline-none transition-all text-sm resize-none" placeholder="Votre message..."></textarea>
                </div>
                <button type="button" className="w-full bg-primary-700 hover:bg-primary-800 text-white py-4 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 shadow-md">
                  <Send className="w-4 h-4" /> Envoyer le message
                </button>
              </form>
            </div>

            {/* Practical Info & Hours */}
            <div className="p-8 md:p-12 bg-stone-50/50 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Horaires & Repères d'accès</h2>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="flex items-center gap-2 font-bold text-slate-900 text-base mb-4">
                      <Clock className="w-5 h-5 text-primary-700" /> Horaires de consultation
                    </h4>
                    <div className="space-y-2.5 text-sm text-slate-600">
                      <div className="flex justify-between border-b border-slate-200/80 pb-2">
                        <span>Lundi - Vendredi</span>
                        <span className="font-bold text-slate-900">09:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-200/80 pb-2">
                        <span>Samedi</span>
                        <span className="font-bold text-slate-900">09:00 - 13:00</span>
                      </div>
                      <div className="flex justify-between text-rose-600 pt-1 font-semibold">
                        <span>Dimanche</span>
                        <span>Fermé</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-rose-100 shadow-sm space-y-3">
                    <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Repères pratiques
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Le cabinet se trouve au <strong>2ème étage, Bureau N°14 de l'Imperial Center</strong>, situé sur le Boulevard Moulay Youssef (exactement <strong>en face de la succursale Volvo Car Maroc</strong>).
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-primary-900 text-white rounded-2xl shadow-lg space-y-3">
                <h4 className="font-bold text-base text-amber-300">Accueil Téléphonique</h4>
                <p className="text-primary-100 text-xs leading-relaxed">
                  Pour tout renseignement urgent ou confirmation d'horaires de rdv, contactez-nous directement par téléphone.
                </p>
                <a href="tel:0663559580" className="inline-block bg-white text-primary-900 px-5 py-2.5 rounded-xl text-xs font-bold shadow">
                  06 63 55 95 80
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;

