import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/public/Home';
import About from './pages/public/About';
import Services from './pages/public/Services';
import Booking from './pages/public/Booking';
import Contact from './pages/public/Contact';
import AdminLogin from './pages/admin/Login';

import AdminLayout from './components/layout/AdminLayout';
import AdminDashboard from './pages/admin/Dashboard';
import AppointmentsList from './pages/admin/AppointmentsList';
import Patients from './pages/admin/Patients';
import History from './pages/admin/History';
import Settings from './pages/admin/Settings';
import CallFAB from './components/common/CallFAB';

function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Routes>
              {/* Auth Routes */}
              <Route path="/admin/login" element={<AdminLogin />} />
              
              {/* Admin Dashboard Routes (Protected by AdminLayout) */}
              <Route path="/admin" element={<AdminLayout />}>
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="appointments" element={<AppointmentsList />} />
                <Route path="patients" element={<Patients />} />
                <Route path="history" element={<History />} />
                <Route path="settings" element={<Settings />} />
              </Route>

              {/* Public Routes with Navbar/Footer */}
              <Route path="/*" element={
                <>
                  <Navbar />
                  <main className="flex-grow pt-20">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/services" element={<Services />} />
                      <Route path="/booking" element={<Booking />} />
                      <Route path="/contact" element={<Contact />} />
                    </Routes>
                  </main>
                  <Footer />
                </>
              } />
            </Routes>
            <CallFAB />
          </div>
        </Router>
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App;
