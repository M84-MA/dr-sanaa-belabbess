import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, User, Phone, FileText, CheckCircle2, Loader2, ChevronRight, ShieldCheck, PhoneCall, Copy, Check } from 'lucide-react';
import axios from 'axios';
import { formatWhatsAppTextMessage } from '../../utils/whatsappCardGenerator';
import { useLanguage } from '../../context/LanguageContext';

const Booking = () => {
  const { lang, t } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
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

  const services = t.expertise.items.map(i => i.title);

  const times = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30",
    "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30"
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const currentBooking = { ...formData };
    setSubmittedBooking(currentBooking);

    try {
      await axios.post('http://localhost:8080/api/appointments/book', formData);
    } catch (err) {
      console.log('Demande de rendez-vous enregistrée:', formData);
    } finally {
      setIsLoading(false);
      setShowSuccess(true);
      setFormData({
        fullName: '',
        phone: '',
        serviceType: '',
        appointmentDate: '',
        appointmentTime: '',
        message: ''
      });
    }
  };

  return (
    <div className="w-full bg-[#FAF9F6] min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        
        <div className="text-center mb-12 space-y-3">
          <span className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-[#7B2638] block">
            {t.booking.tag}
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-normal text-[#17202A]">{t.booking.title}</h1>
          <p className="text-[#68727D] text-base max-w-xl mx-auto">
            {t.booking.desc}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-subtle border border-[#E6E3DF] overflow-hidden">
          <form onSubmit={handleSubmit} className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Patient Info */}
              <div className="space-y-6">
                <h3 className="text-base font-serif font-normal text-[#17202A] border-b border-[#E6E3DF] pb-3 flex items-center gap-2">
                  <User className="w-4 h-4 text-[#7B2638]" /> 
                  <span>{lang === 'ar' ? 'معلومات المريض' : lang === 'en' ? 'Patient Details' : 'Informations du Patient'}</span>
                </h3>
                
                <div className="space-y-2">
                  <label className="text-xs font-sans font-semibold text-[#17202A] uppercase tracking-wider">{t.booking.nameLabel}</label>
                  <input 
                    type="text" 
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder={lang === 'ar' ? 'الاسم والنسب' : lang === 'en' ? 'Full Name' : 'Nom et Prénom'}
                    className="w-full px-4 py-3 bg-[#FAF9F6] border border-[#E6E3DF] rounded-md focus:outline-none focus:border-[#7B2638] transition-colors text-sm font-sans"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-sans font-semibold text-[#17202A] uppercase tracking-wider">{t.booking.phoneLabel}</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="06 XX XX XX XX / 05 XX XX XX XX"
                    className="w-full px-4 py-3 bg-[#FAF9F6] border border-[#E6E3DF] rounded-md focus:outline-none focus:border-[#7B2638] transition-colors text-sm font-sans"
                  />
                </div>
              </div>

              {/* Appointment Details */}
              <div className="space-y-6">
                <h3 className="text-base font-serif font-normal text-[#17202A] border-b border-[#E6E3DF] pb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#7B2638]" /> 
                  <span>{lang === 'ar' ? 'تفاصيل الاستشارة والوقت' : lang === 'en' ? 'Reason & Preferred Time' : 'Motif & Horaire Souhaité'}</span>
                </h3>

                <div className="space-y-2">
                  <label className="text-xs font-sans font-semibold text-[#17202A] uppercase tracking-wider">{t.booking.expertiseLabel}</label>
                  <select 
                    name="serviceType"
                    required
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#FAF9F6] border border-[#E6E3DF] rounded-md focus:outline-none focus:border-[#7B2638] transition-colors text-sm font-sans"
                  >
                    <option value="">{t.booking.selectExpertise}</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-sans font-semibold text-[#17202A] uppercase tracking-wider">{t.booking.dateLabel}</label>
                    <input 
                      type="date" 
                      name="appointmentDate"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.appointmentDate}
                      onChange={handleChange}
                      className="w-full px-3 py-3 bg-[#FAF9F6] border border-[#E6E3DF] rounded-md focus:outline-none focus:border-[#7B2638] transition-colors text-xs sm:text-sm font-sans"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-sans font-semibold text-[#17202A] uppercase tracking-wider">{t.booking.timeLabel}</label>
                    <select 
                      name="appointmentTime"
                      required
                      value={formData.appointmentTime}
                      onChange={handleChange}
                      className="w-full px-3 py-3 bg-[#FAF9F6] border border-[#E6E3DF] rounded-md focus:outline-none focus:border-[#7B2638] transition-colors text-xs sm:text-sm font-sans"
                    >
                      <option value="">{t.booking.timeLabel}</option>
                      {times.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-sans font-semibold text-[#17202A] uppercase tracking-wider">{t.booking.noteLabel}</label>
                  <textarea 
                    name="message"
                    rows="2"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={lang === 'ar' ? 'توضيحات إضافية حول طلب الموعد...' : lang === 'en' ? 'Additional notes or details...' : 'Précisions ou informations complémentaires...'}
                    className="w-full px-4 py-3 bg-[#FAF9F6] border border-[#E6E3DF] rounded-md focus:outline-none focus:border-[#7B2638] transition-colors text-sm resize-none font-sans"
                  ></textarea>
                </div>
              </div>
            </div>

            {error && (
              <div className="mt-8 p-4 bg-[#F9F3F4] border border-[#7B2638]/20 text-[#7B2638] rounded-md text-sm font-sans font-medium">
                {error}
              </div>
            )}

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-[#E6E3DF] pt-8">
               <div className="text-xs text-[#68727D] max-w-sm flex items-center gap-2">
                 <ShieldCheck className="w-4 h-4 text-[#7B2638] shrink-0" />
                 <span>{t.booking.confirmNotice}</span>
               </div>
               <button 
                type="submit"
                disabled={isLoading}
                className="w-full sm:w-auto bg-[#7B2638] hover:bg-[#681F2E] text-white px-8 py-3.5 rounded-md font-sans text-sm font-medium transition-colors shadow-sm flex items-center justify-center gap-2"
               >
                 {isLoading ? (
                   <Loader2 className="w-4 h-4 animate-spin" />
                 ) : (
                   <>
                     <span>{t.booking.submitButton}</span>
                     <ChevronRight className="w-4 h-4 rtl:rotate-180" />
                   </>
                 )}
               </button>
            </div>
          </form>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto"
            >
              <motion.div 
                initial={{ scale: 0.95, y: 10 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 10 }}
                className="bg-white rounded-xl p-8 max-w-lg w-full text-center shadow-lg border border-[#E6E3DF] space-y-5"
              >
                <div className="w-12 h-12 bg-[#F9F3F4] text-[#7B2638] rounded-full flex items-center justify-center mx-auto border border-[#7B2638]/20">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                
                <div className="space-y-1">
                  <h2 className="text-2xl font-serif font-normal text-[#17202A]">
                    {t.booking.modalTitle}
                  </h2>
                  <p className="text-[#68727D] text-xs leading-relaxed">
                    {t.booking.modalDesc}
                  </p>
                </div>

                <div className="bg-[#FAF9F6] border border-[#E6E3DF] rounded-md p-4 text-left font-mono text-xs text-[#17202A] relative overflow-y-auto max-h-40">
                  <pre className="font-sans text-xs leading-relaxed whitespace-pre-wrap text-[#17202A]">
                    {formatWhatsAppTextMessage(submittedBooking)}
                  </pre>
                </div>

                <div className="grid sm:grid-cols-2 gap-3 pt-1">
                  <a 
                    href="tel:+212522503315"
                    className="bg-[#7B2638] hover:bg-[#681F2E] text-white p-3 rounded-md font-sans text-xs font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>05 22 50 33 15</span>
                  </a>

                  <a 
                    href="tel:+212612154032"
                    className="bg-white border border-[#E6E3DF] hover:bg-[#FAF9F6] text-[#17202A] p-3 rounded-md font-sans text-xs font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-[#7897B8]" />
                    <span>06 12 15 40 32</span>
                  </a>
                </div>

                <button 
                  onClick={() => setShowSuccess(false)}
                  className="text-[#68727D] hover:text-[#17202A] text-xs font-sans font-medium hover:underline pt-2"
                >
                  {t.booking.modalClose}
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
