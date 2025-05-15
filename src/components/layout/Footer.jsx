import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn, FaApple, FaGooglePlay } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      <div className="container mx-auto px-4">


        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div>
            <span className="text-2xl font-bold mb-4 flex items-center cursor-default hover:opacity-80 transition-opacity">
              <span className="text-primary">door</span>
              <span className="text-secondary">2</span>
              <span className="text-primary">day</span>
            </span>
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Download app</h4>
              <div className="flex space-x-2">
                <span className="text-gray-600 hover:text-primary cursor-default">
                  <span className="sr-only">iOS</span>
                  <FaApple className="w-5 h-5" />
                </span>
                <span className="text-gray-600 hover:text-primary cursor-default">
                  <span className="sr-only">Android</span>
                  <FaGooglePlay className="w-5 h-5" />
                </span>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Follow us on</h4>
              <div className="flex space-x-3">
                <span className="text-gray-600 hover:text-primary cursor-default">
                  <FaFacebookF />
                </span>
                <span className="text-gray-600 hover:text-primary cursor-default">
                  <FaTwitter />
                </span>
                <span className="text-gray-600 hover:text-primary cursor-default">
                  <FaInstagram />
                </span>
                <span className="text-gray-600 hover:text-primary cursor-default">
                  <FaYoutube />
                </span>
                <span className="text-gray-600 hover:text-primary cursor-default">
                  <FaLinkedinIn />
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-600 hover:text-primary cursor-default">Careers</span></li>
              <li><span className="text-gray-600 hover:text-primary cursor-default">Customer Support</span></li>
              <li><span className="text-gray-600 hover:text-primary cursor-default">Blog</span></li>
              <li><span className="text-gray-600 hover:text-primary cursor-default">Sitemap</span></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">For business</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-600 hover:text-primary cursor-default">For partners</span></li>
              <li><span className="text-gray-600 hover:text-primary cursor-default">Pricing</span></li>
              <li><span className="text-gray-600 hover:text-primary cursor-default">Support</span></li>
              <li><span className="text-gray-600 hover:text-primary cursor-default">Status</span></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-600 hover:text-primary cursor-default">Terms & Conditions</span></li>
              <li><span className="text-gray-600 hover:text-primary cursor-default">Privacy Policy</span></li>
              <li><span className="text-gray-600 hover:text-primary cursor-default">Cookie Policy</span></li>
              <li><span className="text-gray-600 hover:text-primary cursor-default">Questions & Answers</span></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Location</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-600 hover:text-primary cursor-default">Hair Salons in Brisbane</span></li>
              <li><span className="text-gray-600 hover:text-primary cursor-default">Nail Salons in Melbourne</span></li>
              <li><span className="text-gray-600 hover:text-primary cursor-default">Barbershops in Brisbane</span></li>
              <li><span className="text-gray-600 hover:text-primary cursor-default">Spas in Brisbane</span></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-6 text-center text-gray-500 text-sm">
          <p>© 2023 door2day.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
