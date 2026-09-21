import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  CalendarCheck2, 
  Users, 
  History, 
  Settings, 
  LogOut,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { DoctorLogoSymbol } from '../common/DoctorLogo';
import { useState } from 'react';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  const { logout } = useAuth();

  const menuItems = [
    { name: 'Tableau de bord', path: '/admin/dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
    { name: 'Rendez-vous', path: '/admin/appointments', icon: <CalendarCheck2 className="w-5 h-5" /> },
    { name: 'Patients', path: '/admin/patients', icon: <Users className="w-5 h-5" /> },
    { name: 'Historique', path: '/admin/history', icon: <History className="w-5 h-5" /> },
    { name: 'Paramètres', path: '/admin/settings', icon: <Settings className="w-5 h-5" /> },
  ];

  return (
    <aside className={`bg-white border-r border-slate-100 flex flex-col h-screen fixed sticky top-0 transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-72'}`}>
      
      {/* Sidebar Header */}
      <div className="p-6 flex items-center justify-between">
        {!isCollapsed && (
          <div className="flex items-center gap-3 overflow-hidden whitespace-nowrap">
            <div className="bg-rose-50 p-1.5 rounded-xl shrink-0">
              <DoctorLogoSymbol className="h-8 w-auto" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-800 leading-tight">Portail Cabinet</span>
              <span className="text-[10px] text-primary-700 font-bold tracking-widest uppercase">Dr. Bentaleb</span>
            </div>
          </div>
        )}
        {isCollapsed && (
          <div className="bg-rose-50 p-1.5 rounded-xl mx-auto">
            <DoctorLogoSymbol className="h-8 w-auto" />
          </div>
        )}

      </div>

      {/* Toggle Button */}
      <button 
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-20 bg-white border border-slate-100 shadow-sm rounded-full p-1 hover:text-primary-600 transition-colors z-10"
      >
        {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
      </button>

      {/* Navigation */}
      <nav className="flex-grow px-4 mt-4 space-y-1">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all group ${
                isActive 
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-200' 
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <span className={`${isActive ? 'text-white' : 'group-hover:text-primary-600'}`}>{item.icon}</span>
              {!isCollapsed && <span className="font-semibold text-sm transition-opacity">{item.name}</span>}
              
              {isActive && !isCollapsed && (
                <motion.div 
                  layoutId="active-pill" 
                  className="ml-auto w-1.5 h-1.5 bg-white rounded-full" 
                />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Sidebar Footer */}
      <div className="p-4 border-t border-slate-50">
        <button 
          onClick={logout}
          className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl text-rose-500 hover:bg-rose-50 transition-all font-semibold text-sm`}
        >
          <LogOut className="w-5 h-5 shrink-0" />
          {!isCollapsed && <span>Déconnexion</span>}
        </button>
      </div>

    </aside>
  );
};

export default Sidebar;
