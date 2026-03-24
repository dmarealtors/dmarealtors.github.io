import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaPhone, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Properties', path: '/properties' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
              🏢
            </div>
            <div>
              <h1 className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${
                scrolled ? 'text-primary' : 'text-white'
              }`}>
                DMA Rentals
              </h1>
              <p className={`text-xs transition-colors duration-300 ${
                scrolled ? 'text-accent' : 'text-white/90'
              }`}>
                From Spaces to Dreams
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium text-sm uppercase tracking-wider transition-all duration-300 hover:text-accent relative group ${
                  location.pathname === link.path
                    ? 'text-accent'
                    : scrolled
                    ? 'text-neutral-700'
                    : 'text-white'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
                  location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="tel:+918618938686"
            className="hidden lg:flex items-center space-x-2 bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            <FaPhone className="text-sm" />
            <span>+91 86189 38686</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden text-2xl transition-colors duration-300 ${
              scrolled ? 'text-primary' : 'text-white'
            }`}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute left-0 w-full bg-white shadow-2xl transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-96 mt-6' : 'max-h-0'
          }`}
        >
          <div className="py-6 px-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block text-lg font-medium transition-colors duration-300 hover:text-accent ${
                  location.pathname === link.path
                    ? 'text-accent'
                    : 'text-neutral-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:+918618938686"
              className="flex items-center justify-center space-x-2 bg-accent text-white px-6 py-3 rounded-full font-semibold w-full hover:bg-accent-dark transition-colors duration-300"
            >
              <FaPhone />
              <span>+91 86189 38686</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
