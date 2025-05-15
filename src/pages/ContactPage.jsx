import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendarCheck, FaWhatsapp } from 'react-icons/fa';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    serviceName: '',
    additionalInfo: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // In a real app, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Simulate successful submission
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        serviceName: '',
        additionalInfo: ''
      });
    } catch (error) {
      setSubmitError('An error occurred. Please try again.');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-8">Book a Service</h1>

            {/* WhatsApp Information */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <FaWhatsapp className="text-green-500 text-3xl mr-3" />
                <p className="text-gray-700">You can also book a service by directly calling or messaging on WhatsApp</p>
              </div>
              <p className="text-primary text-2xl font-bold">+1 (555) 123-4567</p>
            </div>

            {/* Booking Form */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="grid md:grid-cols-3">
                {/* Contact Information */}
                <div className="bg-primary text-white p-8">
                  <h2 className="text-xl font-semibold mb-6">Booking Information</h2>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <FaMapMarkerAlt className="mt-1 mr-3" />
                      <p>123 Door2Day Street, Suite 456<br />New York, NY 10001</p>
                    </div>
                    <div className="flex items-center">
                      <FaPhone className="mr-3" />
                      <p>+1 (555) 123-4567</p>
                    </div>
                    <div className="flex items-center">
                      <FaEnvelope className="mr-3" />
                      <p>bookings@door2day.com</p>
                    </div>
                  </div>

                  <div className="mt-12">
                    <h3 className="text-lg font-medium mb-4">Service Hours</h3>
                    <ul className="space-y-2">
                      <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                      <li>Saturday: 10:00 AM - 4:00 PM</li>
                      <li>Sunday: Closed</li>
                    </ul>
                  </div>
                </div>

                {/* Booking Form */}
                <div className="p-8 md:col-span-2">
                  <h2 className="text-xl font-semibold mb-6">Book Your Service</h2>

                  {submitSuccess ? (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                      <p>Thank you for booking a service! We'll contact you shortly to confirm your appointment.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {submitError && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                          {submitError}
                        </div>
                      )}

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-gray-700 mb-1">Your Name</label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-gray-700 mb-1">Your Email</label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-gray-700 mb-1">Phone Number</label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                        />
                      </div>

                      <div>
                        <label htmlFor="address" className="block text-gray-700 mb-1">Your Address</label>
                        <input
                          id="address"
                          name="address"
                          type="text"
                          value={formData.address || ''}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                        />
                      </div>

                      <div>
                        <label htmlFor="serviceName" className="block text-gray-700 mb-1">Service Name</label>
                        <input
                          id="serviceName"
                          name="serviceName"
                          type="text"
                          value={formData.serviceName}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                        />
                      </div>

                      <div>
                        <label htmlFor="additionalInfo" className="block text-gray-700 mb-1">Additional Information</label>
                        <textarea
                          id="additionalInfo"
                          name="additionalInfo"
                          rows="5"
                          value={formData.additionalInfo}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition flex items-center justify-center disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </>
                        ) : (
                          <>
                            <FaCalendarCheck className="mr-2" />
                            Book Service
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
