import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white px-6 md:px-16 lg:px-32 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
        
        {/* Brand & Social */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Fama Barber</h2>
          <p className="text-gray-400 mb-4">Classic cuts with modern style</p>
          <div className="flex gap-4">
            <a href="#" className="bg-yellow-700 p-3 rounded-full text-white hover:bg-yellow-600 transition">
              <FaInstagram />
            </a>
            <a href="#" className="bg-yellow-700 p-3 rounded-full text-white hover:bg-yellow-600 transition">
              <FaFacebookF />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">Gallery</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
          <div className="flex items-start gap-2 text-gray-400 mb-2">
            <FaLocationDot className="mt-1" />
            <p>500 N Bell Ave #109, Denton, TX 76209, United States</p>
          </div>
          <p className="text-gray-400 mt-2">+1 940-612-9127</p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
          <p className="text-gray-400 mb-4">Subscribe to our newsletter to receive updates and news.</p>
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-4 py-2 bg-transparent border border-gray-400 rounded-md text-white mb-4 focus:outline-none focus:border-yellow-500"
          />
          <button className="bg-yellow-500 text-black font-semibold w-full py-2 rounded-md hover:bg-yellow-400 transition">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center pt-6 text-sm text-gray-400 gap-4">
        <p>© 2023 PMC Barbershop. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white">Home</a>
          <a href="#" className="hover:text-white">About</a>
          <a href="#" className="hover:text-white">Services</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
