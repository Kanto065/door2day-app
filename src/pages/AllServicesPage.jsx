import { useState, useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import LazyImage from '../components/common/LazyImage';
import { FaStar } from 'react-icons/fa';
import apiService from '../services/api';
import { useService } from '../context/ServiceContext';
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

const ServiceCard = ({ id, title, image, rating, reviews, originalPrice, discountedPrice, link }) => {
  const { openServiceDetails } = useService();

  const handleClick = () => {
    // Directly open service details without navigation
    openServiceDetails(id);
  };

  return (
    <div
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer"
      onClick={handleClick}
    >
      <div className="aspect-w-16 aspect-h-9">
        <LazyImage
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium text-gray-800 mb-2">{title}</h3>
        {rating && (
          <div className="flex items-center mb-2">
            <div className="flex items-center text-yellow-400 mr-1">
              <FaStar />
            </div>
            <span className="text-sm text-gray-600">{rating} • {reviews} reviews</span>
          </div>
        )}
        <div className="flex items-center justify-between">
          <div>
            {originalPrice && (
              <>
                <span className="text-gray-500 line-through text-sm mr-2">${originalPrice}</span>
                <span className="text-primary font-semibold">${discountedPrice}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const AllServicesPage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllServices = async () => {
      setLoading(true);
      try {
        // In a real app, we would fetch all services from the API
        // For now, we'll combine the services from different categories
        // Exclude basic services (Top Service section)
        const topPicks = await apiService.services.getTopPicks();
        const trending = await apiService.services.getTrending();
        const newServices = await apiService.services.getNew();

        // Combine all services and remove duplicates based on id
        const allServices = [...topPicks, ...trending, ...newServices];
        const uniqueServices = Array.from(new Map(allServices.map(item => [item.id, item])).values());

        setServices(uniqueServices);
      } catch (error) {
        console.error('Error fetching services:', error);
        // Use fallback data if API fails
        setServices(getFallbackServices());
      } finally {
        setLoading(false);
      }
    };

    fetchAllServices();
  }, []);

  // Fallback data in case API fails
  const getFallbackServices = () => {
    return [
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
      },
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
      },
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
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">All Services</h1>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
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
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  id={service.id}
                  title={service.title}
                  image={service.image}
                  rating={service.rating}
                  reviews={service.reviews}
                  originalPrice={service.originalPrice}
                  discountedPrice={service.discountedPrice}
                  link={service.link}
                />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AllServicesPage;
