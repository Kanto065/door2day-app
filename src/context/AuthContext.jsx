import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'register'

  useEffect(() => {
    // Check if user is already logged in (e.g., from localStorage)
    const storedUser = localStorage.getItem('door2day_user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Error parsing stored user:', error);
        localStorage.removeItem('door2day_user');
      }
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      // In a real app, this would be an API call
      // For demo purposes, we'll simulate a successful login
      // Check if this is an admin login (for demo purposes, admin@door2day.com)
      const isAdmin = email.toLowerCase() === 'admin@door2day.com';
      const userData = {
        id: 1,
        name: isAdmin ? 'Admin' : 'User',
        email,
        isAdmin
      };
      setUser(userData);
      setIsAuthenticated(true);
      localStorage.setItem('door2day_user', JSON.stringify(userData));
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const register = async (name, email, password) => {
    try {
      // In a real app, this would be an API call
      // For demo purposes, we'll simulate a successful registration
      const userData = { id: 1, name, email };
      setUser(userData);
      setIsAuthenticated(true);
      localStorage.setItem('door2day_user', JSON.stringify(userData));
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('door2day_user');
  };

  const openAuthModal = (mode = 'login') => {
    console.log('AuthContext - openAuthModal called with mode:', mode);
    setAuthMode(mode);
    setShowAuthModal(true);
    console.log('AuthContext - showAuthModal set to true');
  };

  const closeAuthModal = () => {
    console.log('AuthContext - closeAuthModal called');
    setShowAuthModal(false);
    console.log('AuthContext - showAuthModal set to false');
  };

  const toggleAuthMode = () => {
    setAuthMode(authMode === 'login' ? 'register' : 'login');
  };

  const value = {
    user,
    isAuthenticated,
    loading,
    login,
    register,
    logout,
    showAuthModal,
    authMode,
    openAuthModal,
    closeAuthModal,
    toggleAuthMode
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
