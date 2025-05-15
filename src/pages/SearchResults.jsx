import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaSearch, FaMapMarkerAlt, FaStar, FaFilter, FaTimes } from 'react-icons/fa';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import LazyImage from '../components/common/LazyImage';
import apiService from '../services/api';

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [filters, setFilters] = useState({
    priceRange: [0, 500],
    rating: 0,
    categories: []
  });

  // Parse query parameters
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('q') || '';
    const locationParam = searchParams.get('location') || '';

    setSearchQuery(query);
    setLocationQuery(locationParam);

    // If results were passed in location state, use them
    if (location.state?.results) {
      setResults(location.state.results);
      setLoading(false);
    } else {
      // Otherwise, fetch results based on query parameters
      fetchResults(query, locationParam);
    }
  }, [location]);

  const fetchResults = async (query, locationParam) => {
    setLoading(true);
    try {
      const data = await apiService.search.services(query, locationParam);
      setResults(data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    // Update URL with new search parameters
    navigate(`/search?q=${encodeURIComponent(searchQuery)}&location=${encodeURIComponent(locationQuery)}`);

    // Fetch results
    fetchResults(searchQuery, locationQuery);
  };

  const toggleFilters = () => {
    setFiltersOpen(!filtersOpen);
  };

  const applyFilters = () => {
    // In a real app, this would filter the results based on the selected filters
    // For now, we'll just close the filters panel
    setFiltersOpen(false);
  };

  const resetFilters = () => {
    setFilters({
      priceRange: [0, 500],
      rating: 0,
      categories: []
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          {/* Search Bar */}
          <div className="mb-8">
            <form onSubmit={handleSearch} className="bg-white rounded-lg shadow-md p-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaSearch className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                    placeholder="Search services..."
                  />
                </div>
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaMapMarkerAlt className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={locationQuery}
                    onChange={(e) => setLocationQuery(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                    placeholder="Location"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition"
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Filters (Mobile) */}
            <div className="md:hidden mb-4">
              <button
                onClick={toggleFilters}
                className="w-full bg-white shadow-md rounded-md px-4 py-2 flex items-center justify-center text-gray-700"
              >
                <FaFilter className="mr-2" />
                <span>Filters</span>
              </button>
            </div>

            {/* Filters Panel */}
            <div className={`${filtersOpen ? 'fixed inset-0 z-40 bg-black bg-opacity-50' : 'hidden'} md:block md:relative md:z-auto md:bg-transparent md:w-64`}>
              <div className="bg-white h-full md:h-auto md:rounded-lg shadow-md p-4 md:sticky md:top-20">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Filters</h2>
                  <button
                    onClick={toggleFilters}
                    className="md:hidden text-gray-500 hover:text-gray-700"
                  >
                    <FaTimes />
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Price Range */}
                  <div>
                    <h3 className="font-medium mb-2">Price Range</h3>
                    <div className="flex items-center justify-between">
                      <span>${filters.priceRange[0]}</span>
                      <span>${filters.priceRange[1]}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="500"
                      value={filters.priceRange[1]}
                      onChange={(e) => setFilters({...filters, priceRange: [0, parseInt(e.target.value)]})}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>

                  {/* Rating */}
                  <div>
                    <h3 className="font-medium mb-2">Rating</h3>
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          onClick={() => setFilters({...filters, rating: star})}
                          className={`text-xl ${star <= filters.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        >
                          <FaStar />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Categories */}
                  <div>
                    <h3 className="font-medium mb-2">Categories</h3>
                    <div className="space-y-2">
                      {['Cleaning', 'Salon & Spa', 'Healthcare', 'AC Repair'].map((category) => (
                        <label key={category} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={filters.categories.includes(category)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setFilters({...filters, categories: [...filters.categories, category]});
                              } else {
                                setFilters({...filters, categories: filters.categories.filter(c => c !== category)});
                              }
                            }}
                            className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                          />
                          <span className="ml-2 text-gray-700">{category}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <button
                      onClick={applyFilters}
                      className="flex-1 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition"
                    >
                      Apply
                    </button>
                    <button
                      onClick={resetFilters}
                      className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="flex-1">
              <div className="bg-white rounded-lg shadow-md p-4 mb-6">
                <h1 className="text-xl font-semibold">
                  {loading ? 'Searching...' : `${results.length} results for "${searchQuery}"`}
                  {locationQuery && ` in ${locationQuery}`}
                </h1>
              </div>

              {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md">
                      <div className="h-48 bg-gray-200 animate-pulse"></div>
                      <div className="p-4">
                        <div className="h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
                        <div className="h-3 bg-gray-200 rounded animate-pulse w-1/2 mb-2"></div>
                        <div className="h-3 bg-gray-200 rounded animate-pulse w-1/4"></div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : results.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {results.map((service) => (
                    <div key={service.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                      <div className="aspect-w-16 aspect-h-9">
                        <LazyImage
                          src={service.image}
                          alt={service.title}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium text-gray-800 mb-2">{service.title}</h3>
                        <div className="flex items-center mb-2">
                          <div className="flex items-center text-yellow-400 mr-1">
                            <FaStar />
                          </div>
                          <span className="text-sm text-gray-600">{service.rating} • {service.reviews} reviews</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-gray-500 line-through text-sm mr-2">${service.originalPrice}</span>
                            <span className="text-primary font-semibold">${service.discountedPrice}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                  <h2 className="text-xl font-semibold mb-2">No results found</h2>
                  <p className="text-gray-600 mb-4">Try adjusting your search criteria or browse our categories below.</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                    {['Cleaning', 'Salon & Spa', 'Healthcare', 'AC Repair'].map((category) => (
                      <button
                        key={category}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 px-4 rounded-md transition"
                        onClick={() => {
                          setSearchQuery(category);
                          handleSearch({ preventDefault: () => {} });
                        }}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SearchResults;
