// Import images
import service1 from '../assets/images/service1.jpeg';
import service2 from '../assets/images/service2.jpeg';
import service3 from '../assets/images/service3.jpeg';
import service4 from '../assets/images/service4.jpeg';
import service5 from '../assets/images/service5.jpeg';
import service6 from '../assets/images/service6.jpeg';
import service7 from '../assets/images/service7.jpeg';

export const mockServices = [
  {
    id: 1,
    title: 'Sofa Repair and Upholstery',
    image: service1,
    description: 'Professional sofa repair and upholstery services for your home or office furniture.',
    category: 'Furniture',
    duration: '2-3 days',
    location: 'At your location',
    professionals: ['Expert Upholsterers', 'Furniture Specialists'],
    includes: [
      'Fabric replacement',
      'Frame repair',
      'Spring replacement',
      'Cushion restoration'
    ],
    excludes: [
      'Furniture moving',
      'Custom design',
      'Antique restoration'
    ],
    originalPrice: 299,
    discountedPrice: 249,
    rating: 4.5,
    reviews: 50,
    availability: {
      Monday: { open: true, hours: '9:00 AM - 6:00 PM' },
      Tuesday: { open: true, hours: '9:00 AM - 6:00 PM' },
      Wednesday: { open: true, hours: '9:00 AM - 6:00 PM' },
      Thursday: { open: true, hours: '9:00 AM - 6:00 PM' },
      Friday: { open: true, hours: '9:00 AM - 6:00 PM' },
      Saturday: { open: true, hours: '9:00 AM - 6:00 PM' },
      Sunday: { open: false, hours: null }
    }
  },
  {
    id: 2,
    title: 'Chair Upholstery',
    image: service2,
    description: 'Expert chair upholstery services to give your chairs a new look.',
    category: 'Furniture',
    duration: '1-2 days',
    location: 'At your location',
    professionals: ['Chair Specialists', 'Upholstery Experts'],
    includes: [
      'Fabric replacement',
      'Frame repair',
      'Cushion restoration'
    ],
    excludes: [
      'Furniture moving',
      'Custom design'
    ],
    originalPrice: 199,
    discountedPrice: 169,
    rating: 4.3,
    reviews: 35,
    availability: {
      Monday: { open: true, hours: '9:00 AM - 6:00 PM' },
      Tuesday: { open: true, hours: '9:00 AM - 6:00 PM' },
      Wednesday: { open: true, hours: '9:00 AM - 6:00 PM' },
      Thursday: { open: true, hours: '9:00 AM - 6:00 PM' },
      Friday: { open: true, hours: '9:00 AM - 6:00 PM' },
      Saturday: { open: true, hours: '9:00 AM - 6:00 PM' },
      Sunday: { open: false, hours: null }
    }
  },
  {
    id: 3,
    title: 'Furniture Upholstery Services',
    image: service3,
    description: 'Comprehensive furniture upholstery services for all types of furniture.',
    category: 'Furniture',
    duration: '2-4 days',
    location: 'At your location',
    professionals: ['Furniture Experts', 'Upholstery Specialists'],
    includes: [
      'Fabric replacement',
      'Frame repair',
      'Spring replacement',
      'Cushion restoration',
      'Custom design consultation'
    ],
    excludes: [
      'Furniture moving',
      'Antique restoration'
    ],
    originalPrice: 399,
    discountedPrice: 349,
    rating: 4.7,
    reviews: 42,
    availability: {
      Monday: { open: true, hours: '9:00 AM - 6:00 PM' },
      Tuesday: { open: true, hours: '9:00 AM - 6:00 PM' },
      Wednesday: { open: true, hours: '9:00 AM - 6:00 PM' },
      Thursday: { open: true, hours: '9:00 AM - 6:00 PM' },
      Friday: { open: true, hours: '9:00 AM - 6:00 PM' },
      Saturday: { open: true, hours: '9:00 AM - 6:00 PM' },
      Sunday: { open: false, hours: null }
    }
  },
  {
    id: 4,
    title: 'Curtains Sales and Installation',
    image: service4,
    description: 'Professional curtain sales and installation services for your home or office.',
    category: 'Home Decor',
    duration: '1 day',
    location: 'At your location',
    professionals: ['Interior Designers', 'Installation Experts'],
    includes: [
      'Custom measurements',
      'Professional installation',
      'Quality materials'
    ],
    excludes: [
      'Custom design',
      'Window treatments'
    ],
    originalPrice: 199,
    discountedPrice: 169,
    rating: 4.4,
    reviews: 28,
    availability: {
      Monday: { open: true, hours: '9:00 AM - 6:00 PM' },
      Tuesday: { open: true, hours: '9:00 AM - 6:00 PM' },
      Wednesday: { open: true, hours: '9:00 AM - 6:00 PM' },
      Thursday: { open: true, hours: '9:00 AM - 6:00 PM' },
      Friday: { open: true, hours: '9:00 AM - 6:00 PM' },
      Saturday: { open: true, hours: '9:00 AM - 6:00 PM' },
      Sunday: { open: false, hours: null }
    }
  }
]; 