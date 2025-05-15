import { createContext, useState, useContext } from 'react';
import ServiceDetailsModal from '../components/services/ServiceDetailsModal';

// Create the context
const ServiceContext = createContext(null);

// Custom hook to use the service context
export const useService = () => {
  const context = useContext(ServiceContext);
  if (!context) {
    throw new Error('useService must be used within a ServiceProvider');
  }
  return context;
};

// Service provider component
export const ServiceProvider = ({ children }) => {
  const [selectedServiceId, setSelectedServiceId] = useState(null);

  const openServiceDetails = (id) => {
    console.log('Opening service details for ID:', id);
    // Convert id to number if it's a string
    const numId = typeof id === 'string' ? parseInt(id) : id;
    setSelectedServiceId(numId);
  };

  const closeServiceDetails = () => {
    setSelectedServiceId(null);
  };

  // Create the context value
  const contextValue = {
    openServiceDetails,
    closeServiceDetails
  };

  return (
    <ServiceContext.Provider value={contextValue}>
      {children}
      {selectedServiceId && (
        <ServiceDetailsModal
          serviceId={selectedServiceId}
          onClose={closeServiceDetails}
        />
      )}
    </ServiceContext.Provider>
  );
};
