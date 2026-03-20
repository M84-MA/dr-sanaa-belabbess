import { motion } from 'framer-motion';
import { 
  Users, 
  Calendar, 
  Clock, 
  TrendingUp,
  ArrowUpRight,
  ChevronRight
} from 'lucide-react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalAppointments: 0,
    pendingAppointments: 0,
    todayAppointments: 0,
    totalPatients: 0
  });
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const statsRes = await axios.get('http://localhost:8080/api/admin/appointments/stats');
        setStats(statsRes.data);

        const appointmentsRes = await axios.get('http://localhost:8080/api/admin/appointments?size=5&sort=appointmentDate,asc');
        setAppointments(appointmentsRes.data.content || []);
      } catch (err) {
        console.error('Failed to fetch dashboard data', err);
      }
    };
    fetchData();
  }, []);

  const cards = [
    { label: 'Total RDV', value: stats.totalAppointments, icon: <Calendar />, color: 'bg-primary-500' },
    { label: 'En attente', value: stats.pendingAppointments, icon: <Clock />, color: 'bg-amber-500' },
    { label: "RDV aujourd'hui", value: stats.todayAppointments, icon: <TrendingUp />, color: 'bg-medical-500' },
    { label: 'Patients', value: stats.totalPatients, icon: <Users />, color: 'bg-indigo-500' },
  ];

  const getStatusLabel = (status) => {
    switch (status) {
      case 'PENDING': return 'En attente';
      case 'CONFIRMED': return 'Confirmé';
      case 'COMPLETED': return 'Terminé';
      case 'CANCELLED': return 'Annulé';
      default: return status;
    }
  };

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">Bonjour, Dr. El Halouat</h1>
        <p className="text-slate-500 mt-1">Voici le résumé de votre activité pour aujourd'hui.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`${card.color} text-white p-3 rounded-2xl shadow-lg`}>
                {card.icon}
              </div>
              <span className="flex items-center text-xs font-bold text-medical-600 bg-medical-50 px-2 py-1 rounded-full">
                <ArrowUpRight className="w-3 h-3 mr-1" /> Stat
              </span>
            </div>
            <div className="space-y-1">
              <h3 className="text-slate-400 text-sm font-medium">{card.label}</h3>
              <p className="text-3xl font-bold text-slate-800">{card.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content (Recent Activity) */}
        <div className="lg:col-span-2 space-y-8">
           <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
             <div className="flex items-center justify-between mb-8">
               <h2 className="text-xl font-bold text-slate-800">Prochains Rendez-vous</h2>
               <button className="text-primary-600 text-sm font-semibold hover:underline">Voir tout</button>
             </div>
             
             <div className="space-y-4">
               {appointments.length > 0 ? (
                 appointments.map((app) => (
                   <div key={app.id} className="flex items-center gap-4 p-4 hover:bg-slate-50 rounded-2xl transition-colors border border-transparent hover:border-slate-100">
                      <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center font-bold">
                        {app.patientName.charAt(0)}
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-bold text-slate-800">{app.patientName}</h4>
                        <p className="text-xs text-slate-500">Service: {app.serviceType} • <span className="text-primary-600 font-medium">{app.appointmentTime}</span></p>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                        app.status === 'PENDING' ? 'bg-amber-50 text-amber-700' : 
                        app.status === 'CONFIRMED' ? 'bg-medical-50 text-medical-700' :
                        'bg-slate-50 text-slate-700'
                      }`}>
                        {getStatusLabel(app.status)}
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-300" />
                   </div>
                 ))
               ) : (
                 <div className="text-center py-10 text-slate-400 italic">
                   Aucun rendez-vous à venir.
                 </div>
               )}
             </div>
           </div>
        </div>

        {/* Sidebar Mini Components */}
        <div className="space-y-8">
           {/* Add other sidebar components here if needed */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
