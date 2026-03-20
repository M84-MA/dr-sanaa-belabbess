import { useState, useEffect } from 'react';
import { 
  Search, 
  Filter, 
  Plus,
  X,
  MoreHorizontal,
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  XCircle,
  Clock
} from 'lucide-react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';

const AppointmentsList = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('ALL');
  const [search, setSearch] = useState('');
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceType: 'Consultation Générale',
    appointmentDate: '',
    appointmentTime: '',
    message: ''
  });
  const [submitLoading, setSubmitLoading] = useState(false);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:8080/api/admin/appointments');
      const data = response.data.content || [];
      setAppointments(data);
    } catch (err) {
      console.error('Error fetching appointments', err);
      setAppointments([]);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await axios.put(`http://localhost:8080/api/admin/appointments/${id}/status?status=${status}`);
      fetchAppointments();
      setSelectedAppointment(null);
    } catch (err) {
      console.error('Error updating status', err);
    }
  };

  const handleAddAppointment = async (e) => {
    e.preventDefault();
    setSubmitLoading(true);
    try {
      await axios.post('http://localhost:8080/api/admin/appointments', formData);
      setIsAddModalOpen(false);
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        serviceType: 'Consultation Générale',
        appointmentDate: '',
        appointmentTime: '',
        message: ''
      });
      fetchAppointments();
    } catch (err) {
      console.error('Error creating appointment', err);
      alert('Une erreur est survenue lors de la création du rendez-vous.');
    } finally {
      setSubmitLoading(false);
    }
  };

  const filteredAppointments = appointments.filter(app => {
    const matchesFilter = filter === 'ALL' || app.status === filter;
    const matchesSearch = app.patientName.toLowerCase().includes(search.toLowerCase()) || 
                         app.patientPhone.includes(search);
    return matchesFilter && matchesSearch;
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case 'CONFIRMED': return <span className="bg-medical-100 text-medical-700 px-3 py-1 rounded-full text-xs font-bold">Confirmé</span>;
      case 'PENDING': return <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-bold">En attente</span>;
      case 'CANCELLED': return <span className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-xs font-bold">Annulé</span>;
      case 'COMPLETED': return <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-bold">Terminé</span>;
      default: return null;
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Gestion des Rendez-vous</h1>
          <p className="text-slate-500 mt-1">Gérez et suivez toutes les demandes de consultation.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsAddModalOpen(true)}
            className="flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-primary-700 transition-all shadow-lg shadow-primary-200"
          >
            <Plus className="w-5 h-5" /> Ajouter un RDV
          </button>
          <button onClick={fetchAppointments} className="bg-white border border-slate-200 p-2.5 rounded-xl hover:bg-slate-50 transition-all shadow-sm">
             <Clock className={`w-5 h-5 text-slate-500 ${loading ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="bg-white p-4 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-grow">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Rechercher par nom ou téléphone..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-slate-50 border-transparent rounded-2xl focus:bg-white focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 outline-none transition-all text-sm"
          />
        </div>
        
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
          {['ALL', 'PENDING', 'CONFIRMED', 'CANCELLED'].map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                filter === s 
                  ? 'bg-slate-900 border-slate-900 text-white shadow-md' 
                  : 'bg-white border-slate-100 text-slate-500 hover:border-slate-200'
              }`}
            >
              {s === 'ALL' ? 'Tous' : s === 'PENDING' ? 'En attente' : s === 'CONFIRMED' ? 'Confirmés' : 'Annulés'}
            </button>
          ))}
        </div>
      </div>

      {/* Appointments Table */}
      <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Patient</th>
                <th className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Date & Heure</th>
                <th className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Service</th>
                <th className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Statut</th>
                <th className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {loading ? (
                [...Array(5)].map((_, i) => (
                  <tr key={i} className="animate-pulse">
                    <td colSpan="5" className="px-8 py-6 h-20 bg-slate-50/20"></td>
                  </tr>
                ))
              ) : filteredAppointments.length > 0 ? (
                filteredAppointments.map((app) => (
                  <tr key={app.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center font-bold text-sm">
                          {app.patientName.charAt(0)}
                        </div>
                        <div className="flex flex-col">
                          <span className="font-bold text-slate-800 text-sm">{app.patientName}</span>
                          <span className="text-xs text-slate-400">{app.patientPhone}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-700 text-sm">{new Date(app.appointmentDate).toLocaleDateString('fr-FR')}</span>
                        <span className="text-xs text-primary-600 font-bold">{app.appointmentTime}</span>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <span className="text-slate-600 text-sm">{app.serviceType}</span>
                    </td>
                    <td className="px-8 py-5">
                      {getStatusBadge(app.status)}
                    </td>
                    <td className="px-8 py-5">
                      <button 
                        onClick={() => setSelectedAppointment(app)}
                        className="p-2 hover:bg-white hover:shadow-sm rounded-lg transition-all text-slate-400 hover:text-primary-600"
                      >
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-8 py-20 text-center text-slate-400 italic">
                    Aucun rendez-vous trouvé.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Placeholder */}
        <div className="px-8 py-6 border-t border-slate-50 flex items-center justify-between">
            <span className="text-xs text-slate-400 font-medium">Affichage de {filteredAppointments.length} résultats</span>
            <div className="flex gap-2">
              <button className="p-2 border border-slate-100 rounded-lg text-slate-300 cursor-not-allowed"><ChevronLeft className="w-4 h-4" /></button>
              <button className="p-2 border border-slate-100 rounded-lg text-slate-300 cursor-not-allowed"><ChevronRight className="w-4 h-4" /></button>
            </div>
        </div>
      </div>

      {/* Add Modal */}
      <AnimatePresence>
        {isAddModalOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAddModalOpen(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl relative overflow-hidden"
            >
              <div className="p-8 border-b border-slate-50 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-slate-800">Ajouter un Rendez-vous</h2>
                <button onClick={() => setIsAddModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleAddAppointment} className="p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 ml-2">Nom Complet</label>
                    <input 
                      type="text" 
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      className="w-full px-5 py-3.5 bg-slate-50 border-transparent rounded-2xl focus:bg-white focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 outline-none transition-all text-sm font-medium"
                      placeholder="Ex: Ahmed El Mansouri"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 ml-2">Téléphone</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-5 py-3.5 bg-slate-50 border-transparent rounded-2xl focus:bg-white focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 outline-none transition-all text-sm font-medium"
                      placeholder="0612345678"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 ml-2">Email (Optionnel)</label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-5 py-3.5 bg-slate-50 border-transparent rounded-2xl focus:bg-white focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 outline-none transition-all text-sm font-medium"
                      placeholder="patient@example.com"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 ml-2">Service</label>
                    <select 
                      value={formData.serviceType}
                      onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
                      className="w-full px-5 py-3.5 bg-slate-50 border-transparent rounded-2xl focus:bg-white focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 outline-none transition-all text-sm font-medium"
                    >
                      <option>Consultation Générale</option>
                      <option>Examen de Vue</option>
                      <option>Cataracte</option>
                      <option>Chirurgie Réfractive</option>
                      <option>Suivi Glaucome</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 ml-2">Date</label>
                    <input 
                      type="date" 
                      required
                      value={formData.appointmentDate}
                      onChange={(e) => setFormData({...formData, appointmentDate: e.target.value})}
                      className="w-full px-5 py-3.5 bg-slate-50 border-transparent rounded-2xl focus:bg-white focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 outline-none transition-all text-sm font-medium"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 ml-2">Heure</label>
                    <input 
                      type="time" 
                      required
                      value={formData.appointmentTime}
                      onChange={(e) => setFormData({...formData, appointmentTime: e.target.value})}
                      className="w-full px-5 py-3.5 bg-slate-50 border-transparent rounded-2xl focus:bg-white focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 outline-none transition-all text-sm font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 ml-2">Note/Message</label>
                  <textarea 
                    rows="3"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-5 py-3.5 bg-slate-50 border-transparent rounded-2xl focus:bg-white focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 outline-none transition-all text-sm font-medium resize-none"
                    placeholder="Notes additionnelles..."
                  />
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <button 
                    type="button"
                    onClick={() => setIsAddModalOpen(false)}
                    className="px-8 py-3.5 rounded-2xl font-bold text-slate-500 hover:bg-slate-50 transition-all"
                  >
                    Annuler
                  </button>
                  <button 
                    type="submit"
                    disabled={submitLoading}
                    className="px-10 py-3.5 bg-primary-600 text-white rounded-2xl font-bold hover:bg-primary-700 transition-all shadow-lg shadow-primary-100 disabled:opacity-50"
                  >
                    {submitLoading ? 'Création...' : 'Créer le rendez-vous'}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Detail/Action Modal */}
      <AnimatePresence>
        {selectedAppointment && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
             <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedAppointment(null)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
             />
             <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl relative overflow-hidden"
             >
                <div className="p-8 pb-4 flex justify-between items-start">
                   <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center">
                     <CalendarIcon className="w-8 h-8 text-slate-300" />
                   </div>
                   <button onClick={() => setSelectedAppointment(null)} className="text-slate-400 hover:text-slate-600">✕</button>
                </div>

                <div className="p-8 pt-0 space-y-8">
                   <div>
                     <h2 className="text-2xl font-bold text-slate-800">{selectedAppointment.patientName}</h2>
                     <p className="text-slate-500">Détails de la demande de rendez-vous</p>
                   </div>

                   <div className="grid grid-cols-2 gap-6 bg-slate-50 p-6 rounded-3xl border border-slate-100/50">
                      <div className="space-y-1">
                        <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Date</span>
                        <p className="font-bold text-slate-700">{new Date(selectedAppointment.appointmentDate).toLocaleDateString('fr-FR')}</p>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Heure</span>
                        <p className="font-bold text-primary-600">{selectedAppointment.appointmentTime}</p>
                      </div>
                      <div className="space-y-1 col-span-2">
                        <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Service</span>
                        <p className="font-bold text-slate-700">{selectedAppointment.serviceType}</p>
                      </div>
                      {selectedAppointment.message && (
                        <div className="space-y-1 col-span-2">
                          <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Message</span>
                          <p className="text-sm text-slate-600 italic">"{selectedAppointment.message}"</p>
                        </div>
                      )}
                   </div>

                   <div className="space-y-4">
                     <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 block ml-2">Changer le statut</span>
                     <div className="grid grid-cols-2 gap-3">
                        <button 
                          onClick={() => updateStatus(selectedAppointment.id, 'CONFIRMED')}
                          className="flex items-center justify-center gap-2 bg-medical-50 text-medical-700 hover:bg-medical-100 border border-medical-200 py-3 rounded-2xl font-bold transition-all"
                        >
                          <CheckCircle2 className="w-4 h-4" /> Confirmer
                        </button>
                        <button 
                          onClick={() => updateStatus(selectedAppointment.id, 'CANCELLED')}
                          className="flex items-center justify-center gap-2 bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200 py-3 rounded-2xl font-bold transition-all"
                        >
                          <XCircle className="w-4 h-4" /> Annuler
                        </button>
                        <button 
                          onClick={() => updateStatus(selectedAppointment.id, 'COMPLETED')}
                          className="flex items-center justify-center gap-2 bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200 py-3 rounded-2xl font-bold transition-all col-span-2"
                        >
                          <CheckCircle2 className="w-4 h-4" /> Marquer comme Terminé
                        </button>
                     </div>
                   </div>
                </div>
             </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AppointmentsList;
