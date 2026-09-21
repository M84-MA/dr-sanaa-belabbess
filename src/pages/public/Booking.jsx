import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle2, Loader2, ChevronRight, Award, MessageCircle, Copy, Check, Send } from 'lucide-react';
import axios from 'axios';
import { formatWhatsAppTextMessage } from '../../utils/whatsappCardGenerator';

const Booking = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceType: '',
    appointmentDate: '',
    appointmentTime: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');
  const [submittedBooking, setSubmittedBooking] = useState(null);
  const [copiedText, setCopiedText] = useState(false);

  const services = [
    "Consultation Endocrinologie & Bilan Hormonal",
    "Suivi Diabète (Type 1, Type 2, Gestationnel)",
    "Bilan Thyroïde & Échographie Cervicale",
    "Cytoponction Thyroïdienne (Aiguille fine)",
    "Ovaires Polykystiques (SOPK) & Hyperpilosité",
    "Obésité, Métabolisme & Nutrition Clinique",
    "Retard de Croissance & Puberté (Enfant/Ado)",
    "Autre Motif / Deuxième Avis Médical"
  ];

  const times = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "14:30", "15:00", "15:30", "16:00", "16:30", "17:00"
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const currentBooking = { ...formData };
      setSubmittedBooking(currentBooking);

      // Send reservation data
      await axios.post('http://localhost:8080/api/appointments/book', formData);
      setShowSuccess(true);
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        serviceType: '',
        appointmentDate: '',
        appointmentTime: '',
        message: ''
      });
    } catch (err) {
      console.log('Simulated reservation offline submission:', formData);
      setShowSuccess(true);
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        serviceType: '',
        appointmentDate: '',
        appointmentTime: '',
        message: ''
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full bg-stone-50/60 min-h-screen py-20 relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-rose-100/40 rounded-full blur-3xl -z-10 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-amber-100/40 rounded-full blur-3xl -z-10 translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        
        <div className="text-center mb-12 space-y-3">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-rose-100/70 text-primary-800 border border-rose-200 px-4 py-1.5 rounded-full text-xs font-bold"
          >
            <Calendar className="w-4 h-4 text-primary-700" />
            Demande de Rendez-vous en Ligne
          </motion.div>
          <h1 className="text-4xl font-heading font-extrabold text-slate-900">Prendre Rendez-vous</h1>
          <p className="text-slate-600 text-base max-w-xl mx-auto">
            Cabinet du Dr. BENTALEB Samia à Meknès. Choisissez votre motif et votre créneau souhaité, nous vous recontacterons pour la confirmation.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-xl border border-rose-100 overflow-hidden"
        >
          <form onSubmit={handleSubmit} className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Patient Info */}
              <div className="space-y-6">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 border-b border-rose-100 pb-3">
                  <User className="w-5 h-5 text-primary-700" /> Informations du Patient
                </h3>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Nom Complet *</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                      type="text" 
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Ex: Fatima Zahra Alami"
                      className="w-full pl-11 pr-4 py-3 bg-stone-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600 transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Numéro de Téléphone *</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="06 XX XX XX XX"
                      className="w-full pl-11 pr-4 py-3 bg-stone-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600 transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">E-mail (Optionnel)</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre@email.com"
                      className="w-full pl-11 pr-4 py-3 bg-stone-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600 transition-all text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Appointment Details */}
              <div className="space-y-6">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 border-b border-rose-100 pb-3">
                  <Clock className="w-5 h-5 text-primary-700" /> Motif & Horaire Souhaité
                </h3>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Motif de Consultation *</label>
                  <select 
                    name="serviceType"
                    required
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-stone-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600 transition-all text-sm"
                  >
                    <option value="">Sélectionnez une spécialité</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Date *</label>
                    <input 
                      type="date" 
                      name="appointmentDate"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.appointmentDate}
                      onChange={handleChange}
                      className="w-full px-3 py-3 bg-stone-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600 transition-all text-xs sm:text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Heure *</label>
                    <select 
                      name="appointmentTime"
                      required
                      value={formData.appointmentTime}
                      onChange={handleChange}
                      className="w-full px-3 py-3 bg-stone-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600 transition-all text-xs sm:text-sm"
                    >
                      <option value="">Heure</option>
                      {times.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Précisions ou Note (Optionnel)</label>
                  <div className="relative">
                    <FileText className="absolute left-4 top-4 w-4 h-4 text-slate-400" />
                    <textarea 
                      name="message"
                      rows="2"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Ancien suivi, symptômes ou questions..."
                      className="w-full pl-11 pr-4 py-3 bg-stone-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600 transition-all text-sm resize-none"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

            {error && (
              <div className="mt-8 p-4 bg-rose-50 border border-rose-100 text-rose-700 rounded-xl text-sm font-medium">
                {error}
              </div>
            )}

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-slate-100 pt-8">
               <div className="text-xs text-slate-500 max-w-sm flex items-center gap-2">
                 <Award className="w-4 h-4 text-amber-600 shrink-0" />
                 <span>Vos données sont strictement confidentielles. Pour toute urgence immédiate, appelez le <strong>06 63 55 95 80</strong>.</span>
               </div>
               <button 
                type="submit"
                disabled={isLoading}
                className="w-full sm:w-auto bg-gradient-to-r from-primary-700 to-primary-600 hover:from-primary-800 hover:to-primary-700 text-white px-10 py-4 rounded-full font-bold shadow-lg shadow-primary-900/20 flex items-center justify-center gap-3 transition-all hover:-translate-y-0.5 active:scale-95"
               >
                 {isLoading ? (
                   <Loader2 className="w-5 h-5 animate-spin" />
                 ) : (
                   <>
                     Confirmer ma Demande
                     <ChevronRight className="w-5 h-5" />
                   </>
                 )}
               </button>
            </div>
          </form>
        </motion.div>

        {/* Success Modal */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm overflow-y-auto"
            >
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-white rounded-[2rem] p-6 md:p-8 max-w-xl w-full text-center shadow-2xl border border-rose-100 my-8 max-h-[90vh] flex flex-col overflow-hidden"
              >
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3 border border-emerald-100 shrink-0">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                
                <h2 className="text-2xl font-bold text-slate-900 mb-1">Demande Prête pour WhatsApp !</h2>
                <p className="text-slate-600 mb-4 text-xs md:text-sm leading-relaxed">
                  Votre message est prêt. Cliquez ci-dessous pour l'envoyer directement au secrétariat du <strong>Dr. BENTALEB Samia (06 63 55 95 80)</strong>.
                </p>

                {/* Formatted Text Message Preview Box */}
                <div className="mb-5 bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-4 text-left font-mono text-xs text-slate-800 relative group overflow-y-auto max-h-56 shadow-inner">
                  <div className="flex items-center justify-between border-b border-emerald-200/60 pb-2 mb-2 font-sans font-bold text-[11px] text-emerald-900">
                    <span className="flex items-center gap-1.5">
                      <MessageCircle className="w-4 h-4 text-emerald-600" /> Aperçu du Message WhatsApp
                    </span>
                    <button
                      onClick={() => {
                        const text = formatWhatsAppTextMessage(submittedBooking);
                        navigator.clipboard.writeText(text);
                        setCopiedText(true);
                        setTimeout(() => setCopiedText(false), 2000);
                      }}
                      className="text-emerald-700 hover:text-emerald-900 flex items-center gap-1 text-[10px] font-semibold bg-white/80 px-2 py-0.5 rounded border border-emerald-200"
                    >
                      {copiedText ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
                      <span>{copiedText ? 'Copié !' : 'Copier'}</span>
                    </button>
                  </div>
                  <pre className="font-sans text-xs leading-relaxed whitespace-pre-wrap text-slate-700 select-all">
                    {formatWhatsAppTextMessage(submittedBooking)}
                  </pre>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <a 
                    href={`https://wa.me/212663559580?text=${encodeURIComponent(formatWhatsAppTextMessage(submittedBooking))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-3.5 rounded-full font-bold transition-all shadow-lg shadow-emerald-900/20 active:scale-95 text-xs sm:text-sm flex items-center justify-center gap-2.5"
                  >
                    <MessageCircle className="w-5 h-5 text-white" />
                    <span>Envoyer le Message sur WhatsApp</span>
                  </a>

                  <button
                    onClick={() => {
                      const text = formatWhatsAppTextMessage(submittedBooking);
                      navigator.clipboard.writeText(text);
                      setCopiedText(true);
                      setTimeout(() => setCopiedText(false), 2000);
                    }}
                    className="w-full sm:w-auto bg-stone-100 hover:bg-stone-200 text-slate-700 px-5 py-3.5 rounded-full font-bold transition-all text-xs flex items-center justify-center gap-1.5 border border-slate-200"
                  >
                    {copiedText ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-slate-500" />}
                    <span>{copiedText ? 'Texte copié !' : 'Copier le texte'}</span>
                  </button>
                </div>

                <button 
                  onClick={() => setShowSuccess(false)}
                  className="mt-4 text-slate-400 hover:text-slate-600 text-xs font-semibold py-1 hover:underline"
                >
                  Fermer
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Booking;

