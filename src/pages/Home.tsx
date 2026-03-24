import { Link } from 'react-router-dom';
import { FaHome, FaHandshake, FaMoneyBillWave, FaCheckCircle, FaArrowRight, FaStar } from 'react-icons/fa';
import PropertyCard from '../components/PropertyCard';
import { properties, testimonials } from '../data/properties';

const Home = () => {
  const featuredProperties = properties.filter(p => p.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&h=1080&fit=crop"
            alt="Luxury Real Estate"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container-custom text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight">
              From Finding Spaces<br />
              <span className="text-accent">to Funding Dreams</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-light">
              Your reliable partner in property rentals, real estate transactions, and loan facilitation
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/properties"
                className="px-8 py-4 bg-accent hover:bg-accent-dark text-white font-bold rounded-full transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center space-x-2"
              >
                <span>Explore Properties</span>
                <FaArrowRight />
              </Link>
              <a
                href="tel:+918618938686"
                className="px-8 py-4 bg-white hover:bg-neutral-100 text-primary font-bold rounded-full transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                Contact Us Today
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Comprehensive real estate and financial solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group bg-gradient-to-br from-neutral-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral-200 hover:border-accent transform hover:-translate-y-2">
              <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <FaHome className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Property Rentals</h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Well-maintained residential and commercial properties for lease. Houses, apartments, and shops in prime locations across Bengaluru.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center text-accent font-semibold group-hover:underline"
              >
                Learn More <FaArrowRight className="ml-2" />
              </Link>
            </div>

            {/* Service 2 */}
            <div className="group bg-gradient-to-br from-neutral-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral-200 hover:border-accent transform hover:-translate-y-2">
              <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <FaHandshake className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Buy & Sell Services</h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Complete facilitation for property transactions. We connect buyers and sellers, ensuring smooth and transparent dealings.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center text-accent font-semibold group-hover:underline"
              >
                Learn More <FaArrowRight className="ml-2" />
              </Link>
            </div>

            {/* Service 3 */}
            <div className="group bg-gradient-to-br from-neutral-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral-200 hover:border-accent transform hover:-translate-y-2">
              <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <FaMoneyBillWave className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Loan Assistance</h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Expert guidance for home loans, land purchase loans, vehicle loans, and education loans through authorized financial institutions.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center text-accent font-semibold group-hover:underline"
              >
                Learn More <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Featured Properties
            </h2>
            <p className="text-xl text-neutral-600">
              Handpicked premium properties available for rent and sale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/properties"
              className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              View All Properties <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
                Why Choose<br />
                <span className="text-accent">DMA Rentals?</span>
              </h2>
              <div className="space-y-6">
                {[
                  'End-to-End Property Solutions',
                  'Transparent and Ethical Practices',
                  'Personalized Customer Support',
                  'Reliable Guidance Throughout',
                  'One-Stop Assistance for Property & Financing',
                  'Strong Local Market Understanding'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="mt-1">
                      <FaCheckCircle className="text-accent text-2xl group-hover:scale-125 transition-transform duration-300" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-1">{benefit}</h4>
                      <div className="w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-500"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=1000&fit=crop"
                alt="Modern Property"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-8 -left-8 bg-accent text-white p-8 rounded-2xl shadow-xl">
                <p className="text-5xl font-bold mb-2">100+</p>
                <p className="text-lg">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-neutral-600">
              Real experiences from real people
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-accent text-xl" />
                  ))}
                </div>
                <p className="text-neutral-700 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full"
                  />
                  <div>
                    <h4 className="font-bold text-primary">{testimonial.name}</h4>
                    <p className="text-sm text-neutral-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary via-primary-light to-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let us help you find the perfect space or secure the right financing for your needs
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-accent hover:bg-accent-dark text-white font-bold rounded-full transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              Get in Touch Today
            </Link>
            <a
              href="tel:+918618938686"
              className="px-8 py-4 bg-white hover:bg-neutral-100 text-primary font-bold rounded-full transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              Call +91 86189 38686
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
