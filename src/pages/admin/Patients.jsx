import { useState, useEffect } from 'react';
import { 
  Search, 
  User, 
  Phone, 
  Mail, 
  Calendar,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  ExternalLink
} from 'lucide-react';
import axios from 'axios';

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:8080/api/admin/patients');
      setPatients(response.data.content || []);
    } catch (err) {
      console.error('Error fetching patients', err);
      setPatients([]);
    } finally {
      setLoading(false);
    }
  };

  const filteredPatients = patients.filter(p => 
    p.fullName.toLowerCase().includes(search.toLowerCase()) || 
    p.phone.includes(search) ||
    p.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Base Patients</h1>
          <p className="text-slate-500 mt-1">Consultez et gérez les dossiers de vos patients.</p>
        </div>
      </div>

      {/* Search & Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 bg-white p-4 rounded-[2rem] shadow-sm border border-slate-100">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Rechercher par nom, téléphone ou email..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-slate-50 border-transparent rounded-2xl focus:bg-white focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 outline-none transition-all text-sm"
            />
          </div>
        </div>
        <div className="bg-primary-600 rounded-[2rem] p-6 text-white flex flex-col justify-center">
          <span className="text-primary-100 text-xs font-bold uppercase tracking-wider">Total Patients</span>
          <span className="text-2xl font-bold mt-1">{patients.length}</span>
        </div>
      </div>

      {/* Patients Table */}
      <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Patient</th>
                <th className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Contact</th>
                <th className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Rendez-vous</th>
                <th className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Dernière Visite</th>
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
              ) : filteredPatients.length > 0 ? (
                filteredPatients.map((p) => (
                  <tr key={p.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center font-bold text-sm">
                          {p.fullName.charAt(0)}
                        </div>
                        <span className="font-bold text-slate-800 text-sm">{p.fullName}</span>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                          <Phone className="w-3 h-3 text-slate-400" /> {p.phone}
                        </div>
                        {p.email && (
                          <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                            <Mail className="w-3 h-3" /> {p.email}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-[10px] font-bold">
                        {p.totalAppointments} Consultation{p.totalAppointments > 1 ? 's' : ''}
                      </span>
                    </td>
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Calendar className="w-4 h-4 text-slate-300" />
                        {p.lastVisit !== 'N/A' ? new Date(p.lastVisit).toLocaleDateString('fr-FR') : 'Aucune'}
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <button className="p-2 hover:bg-white hover:shadow-sm rounded-lg transition-all text-slate-400 hover:text-primary-600">
                        <ExternalLink className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-8 py-20 text-center text-slate-400 italic">
                    Aucun patient trouvé.
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

export default Patients;
