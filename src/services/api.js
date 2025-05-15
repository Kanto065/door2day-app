// Base API URL - in a real app, this would point to your backend server
const API_URL = 'https://api.example.com';

// Import images for mock data
import serviceCleaning from '../assets/images/service-cleaning.jpg';
import serviceSalon from '../assets/images/service-salon.jpg';
import serviceHealthcare from '../assets/images/service-healthcare.jpg';
import serviceAC from '../assets/images/service-ac.jpg';
import serviceRelax from '../assets/images/service-relax.jpg';
import serviceNails from '../assets/images/service-nails.jpg';
import servicePamper from '../assets/images/service-pamper.jpg';
import serviceRevive from '../assets/images/service-revive.jpg';
import trendingSpa from '../assets/images/trending-spa.jpg';
import trendingCleaning from '../assets/images/trending-cleaning.jpg';
import trendingAC from '../assets/images/trending-ac.jpg';
import trendingPro from '../assets/images/trending-pro.jpg';
import newSalon from '../assets/images/new-salon.jpg';
import newBeauty from '../assets/images/new-beauty.jpg';
import newHaven from '../assets/images/new-haven.jpg';
import newRefreshed from '../assets/images/new-refreshed.jpg';

// Helper function for making API requests
const fetchAPI = async (endpoint, options = {}) => {
  const url = `${API_URL}${endpoint}`;

  // Default headers
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  // Add auth token if available
  const token = localStorage.getItem('door2day_token');
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const config = {
    ...options,
    headers,
  };

  try {
    const response = await fetch(url, config);

    // Handle non-JSON responses
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.indexOf('application/json') !== -1) {
      const data = await response.json();

      // Handle API errors
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      return data;
    } else {
      // Handle non-JSON responses
      const text = await response.text();

      if (!response.ok) {
        throw new Error(text || 'Something went wrong');
      }

      return text;
    }
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};

// For demo purposes, we'll use mock data
const mockServices = [
  {
    id: 1,
    title: 'General Cleaning',
    image: serviceCleaning,
    link: '/services/cleaning'
  },
  {
    id: 2,
    title: 'Salon & Spa at Home',
    image: serviceSalon,
    link: '/services/salon'
  },
  {
    id: 3,
    title: 'Healthcare Home',
    image: serviceHealthcare,
    link: '/services/healthcare'
  },
  {
    id: 4,
    title: 'AC Cleaning',
    image: serviceAC,
    link: '/services/ac-cleaning'
  }
];

const mockTopPicks = [
  {
    id: 101,
    title: 'Relax and Rejuvenate: Salon & Spa',
    image: serviceRelax,
    rating: 4.8,
    reviews: 76,
    originalPrice: 120,
    discountedPrice: 99,
    link: '/services/relax-spa'
  },
  {
    id: 102,
    title: 'Flawless Nails, Right Fingertips',
    image: serviceNails,
    rating: 4.7,
    reviews: 58,
    originalPrice: 80,
    discountedPrice: 65,
    link: '/services/nails'
  },
  {
    id: 103,
    title: 'Pamper Yourself: Salon & Spa',
    image: servicePamper,
    rating: 4.9,
    reviews: 84,
    originalPrice: 150,
    discountedPrice: 120,
    link: '/services/pamper-spa'
  },
  {
    id: 104,
    title: 'Revive at Home: Expert Salon',
    image: serviceRevive,
    rating: 4.8,
    reviews: 92,
    originalPrice: 130,
    discountedPrice: 110,
    link: '/services/revive-salon'
  }
];

const mockTrending = [
  {
    id: 201,
    title: 'Tranquility Delivered: Salon & Spa',
    image: trendingSpa,
    rating: 4.8,
    reviews: 76,
    originalPrice: 120,
    discountedPrice: 99,
    link: '/services/tranquility-spa'
  },
  {
    id: 202,
    title: 'Home Cleaning for AC Cleaning',
    image: trendingCleaning,
    rating: 4.7,
    reviews: 58,
    originalPrice: 80,
    discountedPrice: 65,
    link: '/services/home-cleaning'
  },
  {
    id: 203,
    title: 'Home Cleaning for AC Cleaning',
    image: trendingAC,
    rating: 4.9,
    reviews: 84,
    originalPrice: 150,
    discountedPrice: 120,
    link: '/services/ac-cleaning'
  },
  {
    id: 204,
    title: 'Clean From Home: Professional',
    image: trendingPro,
    rating: 4.8,
    reviews: 92,
    originalPrice: 130,
    discountedPrice: 110,
    link: '/services/pro-cleaning'
  }
];

const mockNewServices = [
  {
    id: 301,
    title: 'Home Salon & Spa Services',
    image: newSalon,
    rating: 4.8,
    reviews: 76,
    originalPrice: 120,
    discountedPrice: 99,
    link: '/services/home-salon'
  },
  {
    id: 302,
    title: 'Feel Beautiful, Stay Home! Salon',
    image: newBeauty,
    rating: 4.7,
    reviews: 58,
    originalPrice: 80,
    discountedPrice: 65,
    link: '/services/beauty-salon'
  },
  {
    id: 303,
    title: 'Beauty Haven: Salon & Spa',
    image: newHaven,
    rating: 4.9,
    reviews: 84,
    originalPrice: 150,
    discountedPrice: 120,
    link: '/services/beauty-haven'
  },
  {
    id: 304,
    title: 'Refreshed: Home Salon & Spa',
    image: newRefreshed,
    rating: 4.8,
    reviews: 92,
    originalPrice: 130,
    discountedPrice: 110,
    link: '/services/refreshed-salon'
  }
];

// API service object
const apiService = {
  // Auth endpoints
  auth: {
    login: (credentials) => fetchAPI('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    }),
    register: (userData) => fetchAPI('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    }),
    logout: () => fetchAPI('/auth/logout', {
      method: 'POST',
    }),
  },

  // Services endpoints
  services: {
    getAll: () => Promise.resolve(mockServices),
    getById: (id) => Promise.resolve(mockServices.find(service => service.id === id)),
    getTopPicks: () => Promise.resolve(mockTopPicks),
    getTrending: () => Promise.resolve(mockTrending),
    getNew: () => Promise.resolve(mockNewServices),
    getServiceDetails: (id) => {
      // In a real app, this would be an API call to get detailed service information
      // For now, we'll simulate a backend that sometimes returns data and sometimes doesn't

      // Convert id to number if it's a string
      const numId = typeof id === 'string' ? parseInt(id) : id;

      // Simulate a 50% chance of the backend returning data
      const backendAvailable = Math.random() > 0.5;

      if (!backendAvailable) {
        // Simulate backend not having data for this service
        return Promise.resolve(null);
      }

      // Find the service in our mock data
      const allServices = [
        ...mockServices,
        ...mockTopPicks,
        ...mockTrending,
        ...mockNewServices
      ];

      const service = allServices.find(s => s.id === numId);

      if (!service) {
        return Promise.resolve(null);
      }

      // Return the service with additional details
      return Promise.resolve(service);
    },
  },

  // Search endpoint
  search: {
    services: (query, location) => {
      // In a real app, this would be an API call with query parameters
      const filteredServices = [...mockServices, ...mockTopPicks, ...mockTrending, ...mockNewServices]
        .filter(service =>
          service.title.toLowerCase().includes(query.toLowerCase()) ||
          service.link.toLowerCase().includes(query.toLowerCase())
        );

      return Promise.resolve(filteredServices);
    },
  },
};

export default apiService;
