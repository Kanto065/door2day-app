import { useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { FaTimes } from 'react-icons/fa';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const AuthModal = () => {
  const { showAuthModal, closeAuthModal, authMode } = useAuth();

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeAuthModal();
      }
    };

    if (showAuthModal) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto'; // Re-enable scrolling when modal is closed
    };
  }, [showAuthModal, closeAuthModal]);

  if (!showAuthModal) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div 
          className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
          onClick={closeAuthModal}
          aria-hidden="true"
        ></div>

        {/* Modal panel */}
        <div className="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
            <div className="absolute top-0 right-0 pt-4 pr-4">
              <button
                type="button"
                onClick={closeAuthModal}
                className="text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none"
              >
                <span className="sr-only">Close</span>
                <FaTimes className="w-6 h-6" />
              </button>
            </div>
            
            <div className="mt-3 sm:mt-0">
              {authMode === 'login' ? <LoginForm /> : <RegisterForm />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
