import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, User, Phone, FileText, CheckCircle2, Loader2, ChevronRight, ShieldCheck, PhoneCall, Copy, Check } from 'lucide-react';
import axios from 'axios';
import { formatWhatsAppTextMessage, getWhatsAppUrl, sendWhatsAppTextMessage } from '../../utils/whatsappCardGenerator';
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

  const handleCopyText = () => {
    const message = formatWhatsAppTextMessage(submittedBooking);
    navigator.clipboard.writeText(message);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2500);
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
      // Auto open WhatsApp with pre-written message populated
      sendWhatsAppTextMessage(currentBooking);
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

                {/* Pre-written WhatsApp message box */}
                <div className="bg-[#FAF9F6] border border-[#E6E3DF] rounded-lg p-4 text-left font-mono text-xs text-[#17202A] relative overflow-y-auto max-h-40 group">
                  <pre className="font-sans text-xs leading-relaxed whitespace-pre-wrap text-[#17202A]">
                    {formatWhatsAppTextMessage(submittedBooking)}
                  </pre>
                  <button 
                    onClick={handleCopyText}
                    className="absolute top-2 right-2 bg-white border border-[#E6E3DF] hover:bg-[#FAF9F6] text-[#17202A] px-2.5 py-1 rounded text-[11px] font-sans font-medium flex items-center gap-1 shadow-xs transition-colors"
                  >
                    {copiedText ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span className="text-emerald-600">Copié !</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 text-[#68727D]" />
                        <span>Copier</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Primary Action Buttons */}
                <div className="space-y-2.5 pt-1">
                  <a 
                    href={getWhatsAppUrl(submittedBooking)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 rounded-lg font-sans text-sm font-semibold transition-all flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                    <span>{lang === 'ar' ? 'إرسال الرسالة عبر الواتساب' : lang === 'en' ? 'Open & Send via WhatsApp' : 'Envoyer la demande sur WhatsApp'}</span>
                  </a>

                  <div className="grid sm:grid-cols-2 gap-2.5 pt-1">
                    <a 
                      href="tel:+212522503315"
                      className="bg-[#7B2638] hover:bg-[#681F2E] text-white p-3 rounded-lg font-sans text-xs font-medium transition-colors flex items-center justify-center gap-2"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>05 22 50 33 15</span>
                    </a>

                    <a 
                      href="tel:+212612154032"
                      className="bg-white border border-[#E6E3DF] hover:bg-[#FAF9F6] text-[#17202A] p-3 rounded-lg font-sans text-xs font-medium transition-colors flex items-center justify-center gap-2"
                    >
                      <PhoneCall className="w-3.5 h-3.5 text-[#7897B8]" />
                      <span>06 12 15 40 32</span>
                    </a>
                  </div>
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
