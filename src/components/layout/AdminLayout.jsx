import { Navigate, Outlet } from 'react-router-dom';
import Sidebar from './AdminSidebar';
import { useAuth } from '../../context/AuthContext';
import { Bell, Search, UserCircle, Loader2 } from 'lucide-react';

const AdminLayout = () => {
  const { user, loading, token } = useAuth();

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="w-8 h-8 text-primary-600 animate-spin" />
      </div>
    );
  }

  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <div className="flex bg-slate-50 min-h-screen">
      <Sidebar />
      
      <div className="flex-grow flex flex-col min-w-0">
        {/* Topbar */}
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-100 flex items-center justify-between px-8 sticky top-0 z-30">
          <div className="flex items-center gap-4 flex-grow max-w-xl">
             <div className="relative w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Rechercher un patient, un RDV..." 
                  className="w-full pl-11 pr-4 py-2.5 bg-slate-100/50 border-transparent rounded-xl focus:bg-white focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 transition-all outline-none text-sm"
                />
             </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="relative w-10 h-10 flex items-center justify-center text-slate-500 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-rose-500 border-2 border-white rounded-full"></span>
            </button>
            <div className="h-8 w-px bg-slate-200"></div>
            <div className="flex items-center gap-3 pl-2">
              <div className="flex flex-col items-end">
                <span className="text-sm font-bold text-slate-800">Admin</span>
                <span className="text-[10px] bg-medical-100 text-medical-700 px-2 py-0.5 rounded-full font-bold uppercase">Médecin</span>
              </div>
              <UserCircle className="w-10 h-10 text-slate-300" />
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="p-8 flex-grow">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
