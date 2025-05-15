import { useState } from 'react';
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import apiService from '../../services/api';
import heroImage from '../../assets/images/hero-bg.jpg';

const Hero = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState('');
  const [service, setService] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!service.trim()) return;

    setIsSearching(true);

    try {
      // In a real app, this would call the API with the search parameters
      const results = await apiService.search.services(service, location);

      // Navigate to search results page with query parameters
      navigate(`/search?q=${encodeURIComponent(service)}&location=${encodeURIComponent(location)}`, {
        state: { results }
      });
    } catch (error) {
      console.error('Search error:', error);
      // Show error message to user
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="relative bg-gray-100 py-20">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          opacity: 0.7
        }}
      ></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-dark">Your All-In-One Service</span><br />
            <span className="text-dark">Booking</span> <span className="text-primary">Platform</span>
          </h1>
        </div>

        {/* Search Box */}
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSearch} className="bg-white rounded-lg shadow-lg p-1 flex flex-col md:flex-row">
            <div className="flex items-center border-b md:border-b-0 md:border-r border-gray-200 p-3 md:w-1/3">
              <FaMapMarkerAlt className="text-primary mr-2" />
              <input
                type="text"
                placeholder="Current location"
                className="w-full focus:outline-none"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                aria-label="Location"
              />
            </div>
            <div className="flex items-center p-3 md:w-2/3">
              <input
                type="text"
                placeholder="Find your service here..."
                className="w-full focus:outline-none"
                value={service}
                onChange={(e) => setService(e.target.value)}
                required
                aria-label="Service"
              />
              <button
                type="submit"
                disabled={isSearching}
                className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition ml-2 disabled:opacity-70"
                aria-label="Search"
              >
                {isSearching ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span className="hidden md:inline">Searching...</span>
                  </span>
                ) : (
                  <>
                    <span className="hidden md:inline">Search</span>
                    <FaSearch className="md:hidden" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
