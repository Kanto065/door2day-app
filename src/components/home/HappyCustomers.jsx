import React from 'react';
import LazyImage from '../common/LazyImage';
import happyCustomerImage from '../../assets/images/provider1.jpg';

const HappyCustomers = () => {
  const testimonials = [
    {
      id: 1,
      text: "Exceptional Service Experience! I needed a last-minute plumber and Door2Day delivered. The professional arrived within an hour, fixed the issue quickly, and charged exactly what was quoted. Their team was responsive and the app made booking super easy!",
      name: "Sarah M.",
      location: "Dubai"
    },
    {
      id: 2,
      text: "Door2Day transformed my home renovation project! Finding reliable contractors used to be a nightmare, but their platform connected me with top-rated professionals. The service was outstanding - from the initial consultation to the final touches. Highly recommended!",
      name: "Ahmed K.",
      location: "Abu Dhabi"
    }
  ];

  return (
    <div className="py-12 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Happy Customers</h2>

        <div className="text-center mb-8">
          <p className="text-gray-700 max-w-3xl mx-auto">
            These glowing reviews reflect our commitment to delivering the best service experience in the region.
            Join our growing list of satisfied clients - contact us today at <span className="font-semibold">+971 5555 1234</span>!
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/5 mb-8 md:mb-0 flex justify-center">
            <LazyImage
              src={happyCustomerImage}
              alt="Happy Door2Day Customer"
              className="rounded-lg shadow-lg max-w-xs md:max-w-sm"
            />
          </div>

          <div className="md:w-3/5 md:pl-12">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 rounded-lg shadow-md mb-6"
              >
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappyCustomers;
