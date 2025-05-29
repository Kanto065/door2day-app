import { useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import Service1 from '../../assets/images/service1.jpeg';
import Service2 from '../../assets/images/service2.jpeg';
import Service3 from '../../assets/images/service3.jpeg';
import Service4 from '../../assets/images/service4.jpeg';
import Service5 from '../../assets/images/service5.jpeg';
import Service6 from '../../assets/images/service6.jpeg';
import Service7 from '../../assets/images/service7.jpeg';
import Service8 from '../../assets/images/service8.jpeg';
import Service9 from '../../assets/images/service9.jpeg';
import Service10 from '../../assets/images/service10.jpeg';
import Service11 from '../../assets/images/service11.jpeg';

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  const services = [
    {
      id: 1,
      image: Service1,
    },
    {
      id: 2,
      image: Service2,
    },
    {
      id: 3,
      image: Service3,
    },
    {
      id: 4,
      image: Service4,
    },
    {
      id: 5,
      image: Service5,
    },
    {
      id: 6,
      image: Service6,
    },
    {
      id: 7,
      image: Service7,
    },
    {
      id: 8,
      image: Service8,
    },
    {
      id: 9,
      image: Service9,
    },  
    {
      id: 10,
      image: Service10,
    },
    {
      id: 11, 
      image: Service11,
    }
  ];

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
        onClick={onClick}
      >
        <FaChevronRight className="text-gray-800 w-6 h-6" />
      </div>
    );
  }

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
        onClick={onClick}
      >
        <FaChevronLeft className="text-gray-800 w-6 h-6" />
      </div>
    );
  }

  return (
    <div className="relative">
      <Slider {...settings}>
        {services.map((service) => (
          <div key={service.id} className="relative h-[400px]">
            <img
              src={service.image}
              alt="Service"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
