import { useState, useEffect } from 'react';
import { 
  Search, 
  Filter, 
  Calendar, 
  CheckCircle2, 
  XCircle, 
  Clock,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import axios from 'axios';

const History = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('ALL'); // ALL, COMPLETED, CANCELLED

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    setLoading(true);
    try {
      // In a real scenario, we might want to fetch both COMPLETED and CANCELLED
      // For now, we fetch all and filter in frontend or use a custom endpoint
      const response = await axios.get('http://localhost:8080/api/admin/appointments');
      const allApp = response.data.content || [];
      // Filter only historical ones
      setAppointments(allApp.filter(a => a.status === 'COMPLETED' || a.status === 'CANCELLED'));
    } catch (err) {
      console.error('Error fetching history', err);
      setAppointments([]);
    } finally {
      setLoading(false);
    }
  };

  const filteredHistory = appointments.filter(app => {
    const matchesFilter = filter === 'ALL' || app.status === filter;
    const matchesSearch = app.patientName.toLowerCase().includes(search.toLowerCase()) || 
                         app.patientPhone.includes(search);
    return matchesFilter && matchesSearch;
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case 'CANCELLED': return <span className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-[10px] font-bold">Annulé</span>;
      case 'COMPLETED': return <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-[10px] font-bold">Terminé</span>;
      default: return null;
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Historique des Soins</h1>
          <p className="text-slate-500 mt-1">Consultez l'historique complet des consultations passées.</p>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="bg-white p-4 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col lg:flex-row gap-4 items-center">
        <div className="relative flex-grow w-full lg:w-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Rechercher par patient ou téléphone..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-slate-50 border-transparent rounded-2xl focus:bg-white focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 outline-none transition-all text-sm"
          />
        </div>
        
        <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 w-full lg:w-auto">
          {['ALL', 'COMPLETED', 'CANCELLED'].map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                filter === s 
                  ? 'bg-slate-900 border-slate-900 text-white shadow-md' 
                  : 'bg-white border-slate-100 text-slate-500 hover:border-slate-200'
              }`}
            >
              {s === 'ALL' ? 'Tout l\'historique' : s === 'COMPLETED' ? 'Terminés' : 'Annulés'}
            </button>
          ))}
        </div>
      </div>

      {/* History Table */}
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
              ) : filteredHistory.length > 0 ? (
                filteredHistory.map((app) => (
                  <tr key={app.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-8 py-5">
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-800 text-sm">{app.patientName}</span>
                        <span className="text-xs text-slate-400">{app.patientPhone}</span>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-700 text-sm">{new Date(app.appointmentDate).toLocaleDateString('fr-FR')}</span>
                        <span className="text-xs text-slate-400">{app.appointmentTime}</span>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <span className="text-slate-600 text-sm">{app.serviceType}</span>
                    </td>
                    <td className="px-8 py-5">
                      {getStatusBadge(app.status)}
                    </td>
                    <td className="px-8 py-5">
                      <button className="p-2 hover:bg-white hover:shadow-sm rounded-lg transition-all text-slate-400 hover:text-primary-600">
                        <Clock className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-8 py-20 text-center text-slate-400 italic">
                    Aucun historique trouvé.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default History;
