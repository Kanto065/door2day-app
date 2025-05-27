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

import service1 from '../assets/images/service1.jpeg';
import service2 from '../assets/images/service2.jpeg';
import service3 from '../assets/images/service3.jpeg';
import service4 from '../assets/images/service4.jpeg';

// Import images
import service5 from '../assets/images/service5.jpeg';
import service6 from '../assets/images/service6.jpeg';
import service7 from '../assets/images/service7.jpeg';
import service8 from '../assets/images/service8.jpeg';
import service9 from '../assets/images/service9.jpeg';
import service10 from '../assets/images/service10.jpeg';
import service11 from '../assets/images/service11.jpeg';

// Helper function for making API requests
const fetchAPI = async (endpoint, options = {}) => {
  const url = `${API_URL}${endpoint}`;

  // Default headers
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  // Add auth token if available
  const token = localStorage.getItem('Sofa Upholstery_token');
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
    title: 'Sofa Repair and Upholstery',
    image: service1,
    link: '/services/cleaning'
  },
  {
    id: 2,
    title: 'Chair Upholstery',
    image: service2,
    link: '/services/salon'
  },
  {
    id: 3,
    title: 'Furniture Upholstery Services',
    image: service3,
    link: '/services/healthcare'
  },
  {
    id: 4,
    title: 'Curtains Sales and Installation',
    image: service4,
    link: '/services/ac-cleaning'
  }
];

const mockTopPicks = [
  {
    id: 101,
    title: 'Premium Sofa Upholstery Service',
    image: service5,
    rating: 4.8,
    reviews: 76,
    originalPrice: 1200,
    discountedPrice: 999,
    link: '/services/premium-sofa'
  },
  {
    id: 102,
    title: 'Expert Sofa Repair & Restoration',
    image: service6,
    rating: 4.7,
    reviews: 58,
    originalPrice: 800,
    discountedPrice: 650,
    link: '/services/sofa-repair'
  },
  {
    id: 103,
    title: 'Custom Sofa Design & Making',
    image: service7,
    rating: 4.9,
    reviews: 84,
    originalPrice: 1500,
    discountedPrice: 1200,
    link: '/services/custom-sofa'
  },
  {
    id: 104,
    title: 'Professional Sofa Refurbishment',
    image: service8,
    rating: 4.8,
    reviews: 92,
    originalPrice: 1300,
    discountedPrice: 1100,
    link: '/services/sofa-refurbishment'
  }
];

const mockTrending = [
  {
    id: 201,
    title: 'Luxury Sofa Reupholstery',
    image: service9,
    rating: 4.8,
    reviews: 76,
    originalPrice: 1200,
    discountedPrice: 999,
    link: '/services/luxury-sofa'
  },
  {
    id: 202,
    title: 'Vintage Sofa Restoration',
    image: service10,
    rating: 4.7,
    reviews: 58,
    originalPrice: 800,
    discountedPrice: 650,
    link: '/services/vintage-sofa'
  },
  {
    id: 203,
    title: 'Modern Sofa Design',
    image: service11,
    rating: 4.9,
    reviews: 84,
    originalPrice: 1500,
    discountedPrice: 1200,
    link: '/services/modern-sofa'
  },
  {
    id: 204,
    title: 'Sofa Repair & Maintenance',
    image: service8,
    rating: 4.8,
    reviews: 92,
    originalPrice: 1300,
    discountedPrice: 1100,
    link: '/services/sofa-maintenance'
  }
];

const mockNewServices = [
  {
    id: 301,
    title: 'Premium Sofa Upholstery',
    image: service7,
    rating: 4.8,
    reviews: 76,
    originalPrice: 1200,
    discountedPrice: 999,
    link: '/services/new-premium-sofa'
  },
  {
    id: 302,
    title: 'Expert Sofa Restoration',
    image: service9,
    rating: 4.7,
    reviews: 58,
    originalPrice: 800,
    discountedPrice: 650,
    link: '/services/new-sofa-restoration'
  },
  {
    id: 303,
    title: 'Custom Sofa Design',
    image: service7,
    rating: 4.9,
    reviews: 84,
    originalPrice: 1500,
    discountedPrice: 1200,
    link: '/services/new-custom-sofa'
  },
  {
    id: 304,
    title: 'Professional Sofa Repair',
    image: service8,
    rating: 4.8,
    reviews: 92,
    originalPrice: 1300,
    discountedPrice: 1100,
    link: '/services/new-sofa-repair'
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
