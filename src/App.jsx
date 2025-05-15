import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ServiceProvider } from './context/ServiceContext';
import HomePage from './pages/HomePage';
import SearchResults from './pages/SearchResults';
import ContactPage from './pages/ContactPage';
import AllServicesPage from './pages/AllServicesPage';
import AdminServicePage from './pages/AdminServicePage';
import LoginPage from './pages/LoginPage';
import AuthModal from './components/auth/AuthModal';
import SimpleLoginModal from './components/auth/SimpleLoginModal';

// Lazy load components for better performance
const LazyAuthModal = () => {
  const { showAuthModal, openAuthModal } = useAuth();

  // Debug: Log when showAuthModal changes in LazyAuthModal
  useEffect(() => {
    console.log('LazyAuthModal - showAuthModal value:', showAuthModal);
  }, [showAuthModal]);

  // Show login modal when user first visits the site
  useEffect(() => {
    const hasVisited = localStorage.getItem('door2day_visited');
    console.log('LazyAuthModal - hasVisited:', hasVisited);

    if (!hasVisited) {
      console.log('LazyAuthModal - First visit detected, will show login modal');
      // Set a small delay to ensure the modal appears after the page loads
      const timer = setTimeout(() => {
        console.log('LazyAuthModal - Showing first-visit login modal');
        openAuthModal('login');
        localStorage.setItem('door2day_visited', 'true');
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [openAuthModal]);

  console.log('LazyAuthModal - Rendering, showAuthModal:', showAuthModal);
  return showAuthModal ? <AuthModal /> : null;
};

function AppContent() {
  const { showAuthModal } = useAuth();

  console.log('AppContent - showAuthModal:', showAuthModal);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<AllServicesPage />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/admin/services" element={<AdminServicePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      {/* Use SimpleLoginModal instead of AuthModal */}
      {showAuthModal && <SimpleLoginModal />}
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
