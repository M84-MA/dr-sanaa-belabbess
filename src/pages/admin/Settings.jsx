import { useState } from 'react';
import { 
  User, 
  Lock, 
  Shield, 
  Bell, 
  Save,
  LogOut,
  AlertCircle,
  CheckCircle2
} from 'lucide-react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

const Settings = () => {
  const { user, logout } = useAuth();
  const [passwordData, setPasswordData] = useState({
    newPassword: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    if (passwordData.newPassword.length < 6) {
      setMessage({ type: 'error', text: 'Le mot de passe doit contenir au moins 6 caractères.' });
      return;
    }
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setMessage({ type: 'error', text: 'Les mots de passe ne correspondent pas.' });
      return;
    }
    
    setLoading(true);
    setMessage({ type: '', text: '' });
    
    try {
      await axios.put('http://localhost:8080/api/admin/settings/password', {
        newPassword: passwordData.newPassword
      });
      setMessage({ type: 'success', text: 'Mot de passe mis à jour avec succès !' });
      setPasswordData({ newPassword: '', confirmPassword: '' });
    } catch (err) {
      setMessage({ type: 'error', text: err.response?.data || 'Une erreur est survenue.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">Paramètres</h1>
        <p className="text-slate-500 mt-1">Gérez votre profil et la sécurité de votre compte.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Sidebar - Menu */}
        <div className="space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 bg-primary-50 text-primary-600 rounded-2xl font-bold text-sm text-left transition-all">
            <Lock className="w-4 h-4" /> Sécurité
          </button>
          <button className="w-full disabled flex items-center gap-3 px-4 py-3 text-slate-300 rounded-2xl font-semibold text-sm text-left cursor-not-allowed">
            <Bell className="w-4 h-4" /> Notifications
          </button>
          <button className="w-full disabled flex items-center gap-3 px-4 py-3 text-slate-300 rounded-2xl font-semibold text-sm text-left cursor-not-allowed">
            <Shield className="w-4 h-4" /> Confidentialité
          </button>
        </div>

        {/* Main Content */}
        <div className="md:col-span-2 space-y-8">
          {/* Profile Overview */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <div className="flex items-center gap-6 mb-8">
               <div className="w-20 h-20 bg-primary-50 rounded-3xl flex items-center justify-center">
                 <User className="w-10 h-10 text-primary-600" />
               </div>
               <div>
                  <h3 className="text-lg font-bold text-slate-800">Compte Administrateur</h3>
                  <p className="text-sm text-slate-400 italic">Identifiant: {user?.username}</p>
               </div>
            </div>
            
            <form onSubmit={handlePasswordChange} className="space-y-6">
               <h4 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                 <Lock className="w-4 h-4 text-primary-600" /> Changer le mot de passe
               </h4>
               
               {message.text && (
                 <div className={`p-4 rounded-2xl flex items-center gap-3 text-sm font-medium ${
                   message.type === 'success' ? 'bg-medical-50 text-medical-700' : 'bg-rose-50 text-rose-700'
                 }`}>
                   {message.type === 'success' ? <CheckCircle2 className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                   {message.text}
                 </div>
               )}

               <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 ml-2">Nouveau mot de passe</label>
                    <input 
                      type="password" 
                      required
                      value={passwordData.newPassword}
                      onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
                      placeholder="••••••••"
                      className="w-full px-5 py-3.5 bg-slate-50 border-transparent rounded-2xl focus:bg-white focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 outline-none transition-all text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 ml-2">Confirmer le mot de passe</label>
                    <input 
                      type="password" 
                      required
                      value={passwordData.confirmPassword}
                      onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})}
                      placeholder="••••••••"
                      className="w-full px-5 py-3.5 bg-slate-50 border-transparent rounded-2xl focus:bg-white focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 outline-none transition-all text-sm"
                    />
                  </div>
               </div>

               <button 
                 type="submit"
                 disabled={loading}
                 className="w-full flex items-center justify-center gap-3 bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 disabled:opacity-50 disabled:cursor-not-allowed"
               >
                 {loading ? "Mise à jour..." : "Enregistrer les modifications"} <Save className="w-4 h-4" />
               </button>
            </form>
          </div>

          {/* Danger Zone */}
          <div className="bg-rose-50/50 p-8 rounded-[2.5rem] border border-rose-100">
             <h4 className="text-sm font-bold text-rose-800 mb-2">Zone de danger</h4>
             <p className="text-xs text-rose-600/80 mb-6 font-medium">Attention: La déconnexion mettra fin à votre session actuelle.</p>
             <button 
               onClick={logout}
               className="flex items-center gap-2 text-rose-600 hover:text-rose-700 font-bold text-sm bg-white px-6 py-3 rounded-xl shadow-sm border border-rose-100 transition-all hover:shadow-md"
             >
               <LogOut className="w-4 h-4" /> Se déconnecter
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
