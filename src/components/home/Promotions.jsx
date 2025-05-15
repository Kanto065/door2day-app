import { useState, useRef, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import LazyImage from '../common/LazyImage';

// Import images
import provider1 from '../../assets/images/provider1.jpg';
import provider2 from '../../assets/images/provider2.jpg';
import provider3 from '../../assets/images/provider3.jpg';
import provider4 from '../../assets/images/provider4.jpg';

const PromotionCard = ({ color, title, image, link }) => {
  const bgColors = {
    orange: 'bg-primary',
    teal: 'bg-secondary',
    yellow: 'bg-yellow-500',
  };

  return (
    <div className={`${bgColors[color]} rounded-lg overflow-hidden shadow-md`}>
      <div className="p-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <p className="text-white text-sm font-medium mb-2">#promo4today</p>
          <h3 className="text-white text-xl font-bold mb-4">{title}</h3>
          <Link to="/contact" className="bg-black text-white px-4 py-2 rounded font-medium hover:bg-gray-800 transition inline-block">
            Book Now
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <LazyImage src={image} alt={title} className="h-48 w-full object-cover rounded" />
        </div>
      </div>
    </div>
  );
};

const Promotions = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);

  const promotions = [
    {
      id: 1,
      color: 'orange',
      title: 'Work with our best service provider',
      image: provider1,
      link: '/services/provider/1'
    },
    {
      id: 2,
      color: 'teal',
      title: 'Work with our best service provider',
      image: provider2,
      link: '/services/provider/2'
    },
    {
      id: 3,
      color: 'yellow',
      title: 'Work with our best service provider',
      image: provider3,
      link: '/services/provider/3'
    },
    {
      id: 4,
      color: 'orange',
      title: 'Work with our best service provider',
      image: provider4,
      link: '/services/provider/4'
    },
    {
      id: 5,
      color: 'teal',
      title: 'Premium salon services at home',
      image: provider2,
      link: '/services/provider/5'
    },
    {
      id: 6,
      color: 'yellow',
      title: 'Special discount on spa treatments',
      image: provider3,
      link: '/services/provider/6'
    },
    {
      id: 7,
      color: 'orange',
      title: 'Limited time offer on cleaning services',
      image: provider1,
      link: '/services/provider/7'
    }
  ];

  // Update visible cards based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(4);
      } else if (window.innerWidth >= 768) {
        setVisibleCards(3);
      } else if (window.innerWidth >= 640) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reset current index when number of promotions changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [promotions.length]);

  const scrollLeft = () => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.offsetWidth / visibleCards;
      sliderRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
      setCurrentIndex(Math.max(0, currentIndex - 1));
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.offsetWidth / visibleCards;
      sliderRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
      setCurrentIndex(Math.min(promotions.length - visibleCards, currentIndex + 1));
    }
  };

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const autoScroll = setInterval(() => {
      if (currentIndex < promotions.length - visibleCards) {
        scrollRight();
      } else {
        // Reset to beginning when reaching the end
        if (sliderRef.current) {
          sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          setCurrentIndex(0);
        }
      }
    }, 5000);

    return () => clearInterval(autoScroll);
  }, [currentIndex, visibleCards, promotions.length]);

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Promotion for today</h2>

        <div className="relative">
          <div
            ref={sliderRef}
            className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {promotions.map((promo) => (
              <div key={promo.id} className="flex-shrink-0 w-full md:w-1/3 lg:w-1/4 transition-transform duration-300">
                <PromotionCard
                  color={promo.color}
                  title={promo.title}
                  image={promo.image}
                  link={promo.link}
                />
              </div>
            ))}
          </div>

          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md z-10 hover:bg-gray-100 transition-colors"
            disabled={currentIndex === 0}
            aria-label="Previous promotion"
          >
            <FaChevronLeft className={currentIndex === 0 ? "text-gray-300" : "text-gray-700"} />
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md z-10 hover:bg-gray-100 transition-colors"
            disabled={currentIndex === promotions.length - visibleCards}
            aria-label="Next promotion"
          >
            <FaChevronRight className={currentIndex === promotions.length - visibleCards ? "text-gray-300" : "text-gray-700"} />
          </button>

          {/* Pagination dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: promotions.length - visibleCards + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (sliderRef.current) {
                    const cardWidth = sliderRef.current.offsetWidth / visibleCards;
                    sliderRef.current.scrollTo({ left: cardWidth * index, behavior: 'smooth' });
                    setCurrentIndex(index);
                  }
                }}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === index ? 'w-4 bg-primary' : 'w-2 bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
