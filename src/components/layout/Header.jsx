import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaUser, FaSignOutAlt, FaBars, FaTimes, FaSearch, FaMapMarkerAlt, FaChevronDown, FaPlus } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const { isAuthenticated, user, logout, openAuthModal } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchLocation, setSearchLocation] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  // Ref for the dropdown menu
  const userMenuRef = useRef(null);

  // Check if we're on the home page
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      // Only show search in header on home page
      if (!isHomePage) return;

      // Get the hero section height (approximate)
      const heroHeight = 400; // Adjust this value based on your actual hero height

      if (window.scrollY > heroHeight) {
        setShowSearch(true);
      } else {
        setShowSearch(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  // Handle click outside to close user menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserMenuOpen(false);
      }
    };

    // Add event listener when menu is open
    if (userMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Clean up
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [userMenuOpen]);

  const handleSearch = (e) => {
    e.preventDefault();

    if (!searchQuery.trim()) return;

    setIsSearching(true);

    // Navigate to search results page
    navigate(`/search?q=${encodeURIComponent(searchQuery)}&location=${encodeURIComponent(searchLocation)}`);

    setIsSearching(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  const handleLogin = () => {
    console.log('Login button clicked, navigating to login page');
    navigate('/login');
  };

  const handleLogout = () => {
    logout();
    setUserMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-teal-600 flex items-center">
            <span className="text-primary">door</span>
            <span className="text-secondary">2</span>
            <span className="text-primary">day</span>
          </Link>
        </div>

        {/* Header Search Bar - Only visible when scrolled on home page */}
        {isHomePage && showSearch && (
          <div className="hidden md:block flex-grow mx-8 max-w-xl">
            <form onSubmit={handleSearch} className="bg-gray-100 rounded-lg flex items-center p-1">
              <div className="flex items-center border-r border-gray-300 px-3 w-1/3">
                <FaMapMarkerAlt className="text-primary mr-2 text-sm" />
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full bg-transparent focus:outline-none text-sm py-1"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  aria-label="Location"
                />
              </div>
              <div className="flex items-center px-3 w-2/3">
                <input
                  type="text"
                  placeholder="Find services..."
                  className="w-full bg-transparent focus:outline-none text-sm py-1"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  required
                  aria-label="Service"
                />
                <button
                  type="submit"
                  disabled={isSearching}
                  className="bg-primary text-white p-1 rounded-md hover:bg-primary/90 transition ml-2 disabled:opacity-70"
                  aria-label="Search"
                >
                  <FaSearch className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-primary">
            Home
          </Link>

          <Link to="/services" className="text-gray-700 hover:text-primary">
            All services
          </Link>

          <Link to="/contact" className="text-gray-700 hover:text-primary">
            Book a Service
          </Link>

          {/* Admin-only Create Services link */}
          {isAuthenticated && user?.isAdmin && (
            <Link to="/admin/services" className="text-gray-700 hover:text-primary flex items-center">
              <FaPlus className="mr-1 h-3 w-3" />
              <span>Create Services</span>
            </Link>
          )}

          {isAuthenticated ? (
            user?.isAdmin ? (
              // Admin user with dropdown
              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={toggleUserMenu}
                  className="flex items-center space-x-2 text-gray-700 hover:text-primary focus:outline-none"
                >
                  <span className="font-medium">{user?.name}</span>
                  <FaChevronDown className="h-3 w-3" />
                </button>

                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <FaSignOutAlt className="mr-2" />
                      <span>Log out</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              // Regular user with direct logout button
              <button
                onClick={handleLogout}
                className="flex items-center text-gray-700 hover:text-primary"
              >
                <FaSignOutAlt className="mr-2" />
                <span>Log out</span>
              </button>
            )
          ) : (
            <a
              href="/login"
              onClick={(e) => {
                e.preventDefault();
                console.log('Login link clicked');
                handleLogin();
              }}
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition inline-block"
            >
              Log in
            </a>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <FaTimes className="h-6 w-6" />
          ) : (
            <FaBars className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-primary py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              to="/services"
              className="text-gray-700 hover:text-primary py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              All services
            </Link>

            <Link
              to="/contact"
              className="text-gray-700 hover:text-primary py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book a Service
            </Link>

            {isAuthenticated ? (
              <>
                {/* Only show admin links for admin users */}
                {user?.isAdmin && (
                  <Link
                    to="/admin/services"
                    className="text-gray-700 hover:text-primary py-2 flex items-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <FaPlus className="mr-2" />
                    <span>Create Services</span>
                  </Link>
                )}
                <button
                  onClick={() => {
                    handleLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="text-left text-gray-700 hover:text-primary py-2 flex items-center"
                >
                  <FaSignOutAlt className="mr-2" />
                  <span>Log out</span>
                </button>
              </>
            ) : (
              <a
                href="/login"
                onClick={(e) => {
                  e.preventDefault();
                  console.log('Mobile login link clicked');
                  handleLogin();
                  setMobileMenuOpen(false);
                }}
                className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition w-full text-left block"
              >
                Log in
              </a>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
