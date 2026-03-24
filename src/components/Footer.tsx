import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Properties', path: '/properties' },
    { name: 'Contact', path: '/contact' }
  ];

  const services = [
    'Rental Properties',
    'Buy & Sell Services',
    'Home Loans',
    'Land Purchase Loans',
    'Vehicle Loans',
    'Education Loans'
  ];

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="text-4xl">🏢</div>
              <div>
                <h3 className="text-2xl font-bold">DMA Rentals</h3>
                <p className="text-accent text-sm">Spaces to Dreams</p>
              </div>
            </div>
            <p className="text-neutral-300 leading-relaxed">
              Your reliable partner for property leasing, real estate transactions, and loan facilitation in Bengaluru.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-accent/20 hover:bg-accent rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <FaFacebookF />
              </a>
              <a href="#" className="w-10 h-10 bg-accent/20 hover:bg-accent rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 bg-accent/20 hover:bg-accent rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <FaLinkedinIn />
              </a>
              <a href="https://wa.me/918618938686" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-accent/20 hover:bg-accent rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-accent">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-neutral-300 hover:text-accent transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <span className="w-0 h-0.5 bg-accent group-hover:w-4 transition-all duration-300"></span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-accent">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-neutral-300 text-sm flex items-start space-x-2">
                  <span className="text-accent mt-1">▸</span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-accent">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-neutral-300">
                <FaMapMarkerAlt className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Office Address</p>
                  <p className="text-sm">Singapura, Bengaluru – 560097</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 text-neutral-300">
                <FaPhone className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <a href="tel:+918618938686" className="text-sm hover:text-accent transition-colors">
                    +91 86189 38686
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3 text-neutral-300">
                <FaEnvelope className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <a href="mailto:info@dmarentals.com" className="text-sm hover:text-accent transition-colors">
                    info@dmarentals.com
                  </a>
                </div>
              </div>
              <div className="pt-4">
                <p className="text-sm font-semibold text-white mb-2">Business Hours</p>
                <p className="text-neutral-300 text-sm">Mon - Sat: 9:00 AM - 6:00 PM</p>
                <p className="text-neutral-300 text-sm">Sunday: By Appointment</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral-400 text-sm text-center md:text-left">
              © {currentYear} DMA Rentals and Real Estate Services. All rights reserved.
            </p>
            <p className="text-neutral-400 text-sm">
              Developed with ❤️ by <span className="text-accent">Vishal</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
