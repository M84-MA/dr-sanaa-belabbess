import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle2, Loader2, ChevronRight } from 'lucide-react';
import axios from 'axios';

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

  const services = [
    "Chirurgie de la Cataracte",
    "Chirurgie Réfractive",
    "Chirurgie du Strabisme",
    "Voies Lacrymales",
    "Chirurgie du Glaucome",
    "Esthétique du regard",
    "Consultation Simple",
    "Autre"
  ];

  const times = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"
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
      // API call to Spring Boot backend
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
      setError("Une erreur est survenue lors de la réservation. Veuillez réessayer ou nous contacter par téléphone.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen py-20 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-100/30 rounded-full blur-3xl -z-10 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-medical-100/30 rounded-full blur-3xl -z-10 translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
          >
            <Calendar className="w-4 h-4" />
            Réservation en ligne
          </motion.div>
          <h1 className="text-4xl font-heading font-bold text-slate-800 mb-4">Prendre Rendez-vous</h1>
          <p className="text-slate-600 text-lg">
            Remplissez le formulaire ci-dessous pour réserver votre créneau. Notre équipe vous contactera pour confirmer.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden"
        >
          <form onSubmit={handleSubmit} className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Patient Info */}
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2 border-b border-slate-100 pb-2">
                  <User className="w-5 h-5 text-primary-500" /> Informations Personnelles
                </h3>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Nom Complet *</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                      type="text" 
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Dr. Jean Dupont"
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Téléphone *</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="06 XX XX XX XX"
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Email (optionnel)</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre@email.com"
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Appointment Details */}
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2 border-b border-slate-100 pb-2">
                  <Clock className="w-5 h-5 text-primary-500" /> Détails du Rendez-vous
                </h3>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Service *</label>
                  <select 
                    name="serviceType"
                    required
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all appearance-none"
                  >
                    <option value="">Sélectionnez un service</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Date *</label>
                    <input 
                      type="date" 
                      name="appointmentDate"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.appointmentDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Heure *</label>
                    <select 
                      name="appointmentTime"
                      required
                      value={formData.appointmentTime}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all appearance-none"
                    >
                      <option value="">Heure</option>
                      {times.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Message (optionnel)</label>
                  <div className="relative">
                    <FileText className="absolute left-4 top-4 w-4 h-4 text-slate-400" />
                    <textarea 
                      name="message"
                      rows="1"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Informations complémentaires..."
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

            {error && (
              <div className="mt-8 p-4 bg-rose-50 border border-rose-100 text-rose-600 rounded-xl text-sm font-medium">
                {error}
              </div>
            )}

            <div className="mt-12 flex items-center justify-between gap-6 border-t border-slate-100 pt-8">
               <div className="hidden sm:block text-xs text-slate-400 max-w-[200px]">
                 * Vos données sont protégées et ne seront utilisées que pour la gestion de votre rendez-vous.
               </div>
               <button 
                type="submit"
                disabled={isLoading}
                className="w-full sm:w-auto bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white px-10 py-4 rounded-full font-bold shadow-lg shadow-primary-200 flex items-center justify-center gap-3 transition-all hover:-translate-y-1 active:scale-95"
               >
                 {isLoading ? (
                   <Loader2 className="w-5 h-5 animate-spin" />
                 ) : (
                   <>
                     Confirmer la Réservation
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
              className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-slate-900/60 backdrop-blur-sm"
            >
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-white rounded-[2rem] p-10 max-w-lg w-full text-center shadow-2xl"
              >
                <div className="w-20 h-20 bg-medical-100 text-medical-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Demande Envoyée !</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Merci ! Votre demande de rendez-vous a été enregistrée avec succès. Notre équipe vous contactera sous peu pour confirmer l'horaire définitif.
                </p>
                <button 
                  onClick={() => setShowSuccess(false)}
                  className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full font-bold transition-all shadow-md active:scale-95"
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
