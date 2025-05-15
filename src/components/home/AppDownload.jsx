import { Link } from 'react-router-dom';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import LazyImage from '../common/LazyImage';
import mobileMockup from '../../assets/images/mobile-mockup.png.png';
import appStoreBadge from '../../assets/images/app-store-badge.png';
import googlePlayBadge from '../../assets/images/google-play-badge.png';

const AppDownload = () => {
  return (
    <div className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-2/5 mb-8 md:mb-0 text-center md:text-left md:pr-8">
            <h3 className="text-3xl font-bold text-white mb-4">Download for the door2day app</h3>
            <p className="text-white/80 mb-6">Book unforgettable beauty and wellness experiences with the Door2Day mobile app!</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="#"
                className="bg-black text-white px-6 py-3 rounded-md flex items-center justify-center hover:bg-gray-900 transition"
                aria-label="Download on the App Store"
              >
                <LazyImage
                  src={appStoreBadge}
                  alt="App Store"
                  className="h-8"
                />
              </Link>

              <Link
                to="#"
                className="bg-black text-white px-6 py-3 rounded-md flex items-center justify-center hover:bg-gray-900 transition"
                aria-label="Get it on Google Play"
              >
                <LazyImage
                  src={googlePlayBadge}
                  alt="Google Play"
                  className="h-8"
                />
              </Link>
            </div>
          </div>

          <div className="md:w-2/5 flex justify-center">
            <LazyImage
              src={mobileMockup}
              alt="Door2Day Mobile App"
              className="max-w-xs md:max-w-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
