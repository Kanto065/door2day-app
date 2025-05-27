import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = ({ phoneNumber }) => {
  // Format the phone number for WhatsApp API
  // Remove any non-digit characters
  const formattedNumber = phoneNumber.replace(/\D/g, '');

  // WhatsApp API URL
  const whatsappUrl = `https://wa.me/${formattedNumber}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Pulse animation - more subtle with custom sizing */}
      <div className="absolute inset-0 w-16 h-16 rounded-full bg-green-500 opacity-30 animate-ping"
           style={{ animationDuration: '3s' }}></div>

      {/* Tooltip that appears on hover */}
      <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none transform translate-y-0 group-hover:-translate-y-1 transition-transform">
        <div className="bg-white text-green-600 px-3 py-1.5 rounded-lg shadow-md text-sm font-bold whitespace-nowrap">
          WhatsApp us
          {/* Triangle pointer */}
          <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-3 h-3 bg-white"></div>
        </div>
      </div>

      <a
        href={whatsappUrl}
        className="relative bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 transition-all hover:scale-110 flex items-center justify-center w-16 h-16"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-4xl" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
