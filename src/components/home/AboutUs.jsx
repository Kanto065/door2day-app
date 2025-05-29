import React from 'react';
import { Link } from 'react-router-dom';
import LazyImage from '../common/LazyImage';
import aboutUsImage from '../../assets/images/service7.jpeg'; // Reusing the hero image or use a new one

const AboutUs = () => {
  return (
    <div className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <LazyImage
            src={aboutUsImage}
            alt="About Us"
            className="rounded-lg shadow-lg max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-sm font-semibold text-indigo-600 mb-2">With 7+ Years of Experience</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Your Sofa Doctor, #1 Rated Best Sofa<br />Upholstery Service Provider in Doha, Qatar
          </h2>
          <div className="w-16 border-b-4 border-primary mb-6 mx-auto md:mx-0"></div> {/* Orange underline */}
          <p className="text-gray-700 mb-6">
            The Qatarsofaupholstery.com is the ultimate name in providing reliable and trustworthy
            upholstery services in Doha, Qatar and has consistently maintained its position in being
            the most proficient service provider ever since its inception in 20116. We are proud in
            having a wide number of satisfied customers who have expressed their gratitude by
            writing down some of their nicest and satisfactory…
          </p>
          <Link
            to="https://wa.me/97470777467"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-primary-dark transition duration-300"
          >
            Call Now &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
