import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ServiceProvider } from './context/ServiceContext';
import HomePage from './pages/HomePage';
import SearchResults from './pages/SearchResults';
import ContactPage from './pages/ContactPage';
import AllServicesPage from './pages/AllServicesPage';
import AdminServicePage from './pages/AdminServicePage';
import AuthModal from './components/auth/AuthModal';

function AppContent() {
  const { showAuthModal, openAuthModal } = useAuth();

  // Show login modal when user first visits the site
  useEffect(() => {
    const hasVisited = localStorage.getItem('door2day_visited');

    if (!hasVisited) {
      // Set a small delay to ensure the modal appears after the page loads
      const timer = setTimeout(() => {
        openAuthModal('login');
        localStorage.setItem('door2day_visited', 'true');
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [openAuthModal]);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<AllServicesPage />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/admin/services" element={<AdminServicePage />} />
      </Routes>
      {/* Use AuthModal for login popup */}
      {showAuthModal && <AuthModal />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <ServiceProvider>
          <AppContent />
        </ServiceProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
