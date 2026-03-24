import { FaHome, FaHandshake, FaMoneyBillWave, FaBuilding, FaKey, FaFileContract, FaUsers, FaShieldAlt, FaPhoneAlt } from 'react-icons/fa';
import { loanTypes } from '../data/properties';

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1920&h=1080&fit=crop"
            alt="Our Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        </div>
        <div className="relative z-10 container-custom text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Our <span className="text-accent">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Comprehensive solutions for all your property and financial needs
          </p>
        </div>
      </section>

      {/* Property Leasing & Rental */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-6xl">
                  <FaHome className="text-accent" />
                </div>
                <h2 className="text-4xl font-bold text-primary">
                  Property Leasing &<br />Rental Management
                </h2>
              </div>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                We lease our owned residential and commercial properties, including houses and shops, offering well-maintained spaces in suitable locations.
              </p>
              <div className="space-y-4">
                {[
                  'Residential and commercial property leasing',
                  'Tenant coordination and documentation',
                  'Ongoing property oversight',
                  'Structured rental management'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <p className="text-neutral-700">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-lg text-neutral-700 mt-6 italic">
                We ensure a professional and reliable experience for both tenants and property stakeholders.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-primary to-primary-light p-8 rounded-2xl text-white text-center transform hover:scale-105 transition-transform duration-300">
                <FaBuilding className="text-5xl mx-auto mb-4" />
                <h4 className="text-2xl font-bold mb-2">Houses</h4>
                <p className="text-sm opacity-90">Independent & Apartments</p>
              </div>
              <div className="bg-gradient-to-br from-accent to-accent-dark p-8 rounded-2xl text-white text-center transform hover:scale-105 transition-transform duration-300 mt-8">
                <FaKey className="text-5xl mx-auto mb-4" />
                <p className="text-2xl font-bold mb-2">Shops</p>
                <p className="text-sm opacity-90">Commercial Spaces</p>
              </div>
              <div className="bg-gradient-to-br from-accent-dark to-accent p-8 rounded-2xl text-white text-center transform hover:scale-105 transition-transform duration-300 -mt-8">
                <FaFileContract className="text-5xl mx-auto mb-4" />
                <h4 className="text-2xl font-bold mb-2">Easy Process</h4>
                <p className="text-sm opacity-90">Quick Documentation</p>
              </div>
              <div className="bg-gradient-to-br from-primary-light to-primary p-8 rounded-2xl text-white text-center transform hover:scale-105 transition-transform duration-300">
                <FaShieldAlt className="text-5xl mx-auto mb-4" />
                <h4 className="text-2xl font-bold mb-2">Verified</h4>
                <p className="text-sm opacity-90">Quality Properties</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Estate Facilitation */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop"
                alt="Real Estate Services"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-6xl">
                  <FaHandshake className="text-accent" />
                </div>
                <h2 className="text-4xl font-bold text-primary">
                  Real Estate Facilitation<br />
                  <span className="text-accent">(Buy & Sell Services)</span>
                </h2>
              </div>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                We assist clients in the purchase and sale of residential and commercial properties by providing complete facilitation support.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: 'Understanding Requirements',
                    description: 'We identify suitable properties based on your specific needs and preferences'
                  },
                  {
                    title: 'Buyer-Seller Coordination',
                    description: 'Seamless communication between all parties involved in the transaction'
                  },
                  {
                    title: 'Documentation Assistance',
                    description: 'Expert help with paperwork and legal formalities for smooth transactions'
                  },
                  {
                    title: 'Transparent Dealings',
                    description: 'Clear communication and honest guidance throughout the process'
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                    <h4 className="text-xl font-bold text-primary mb-2">{item.title}</h4>
                    <p className="text-neutral-600">{item.description}</p>
                  </div>
                ))}
              </div>
              <p className="text-lg text-primary mt-6 font-semibold">
                Our objective is to make property transactions simple, secure, and efficient.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Facilitation */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <FaMoneyBillWave className="text-6xl text-accent" />
              <h2 className="text-4xl md:text-5xl font-bold text-primary">
                Loan Facilitation &<br />Advisory Services
              </h2>
            </div>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We help customers access financial products through authorized financial institutions, guiding them from application to approval
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {loanTypes.map((loan) => (
              <div
                key={loan.id}
                className="bg-gradient-to-br from-neutral-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-neutral-200 hover:border-accent"
              >
                <div className="text-6xl mb-6">{loan.icon}</div>
                <h3 className="text-2xl font-bold text-primary mb-4">{loan.name}</h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">{loan.description}</p>
                <ul className="space-y-2">
                  {loan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-neutral-700">
                      <span className="text-accent mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary to-primary-light text-white p-12 rounded-2xl shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <FaUsers className="text-5xl mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">Expert Guidance</h4>
                <p className="text-sm opacity-90">Professional loan advisors to help you</p>
              </div>
              <div className="text-center">
                <FaFileContract className="text-5xl mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">Documentation Support</h4>
                <p className="text-sm opacity-90">Help with all required paperwork</p>
              </div>
              <div className="text-center">
                <FaShieldAlt className="text-5xl mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">Authorized Partners</h4>
                <p className="text-sm opacity-90">Tie-ups with leading financial institutions</p>
              </div>
            </div>
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">How We Help</h3>
            <div className="space-y-4">
              {[
                'Understanding eligibility criteria for different loan products',
                'Preparing and organizing required documentation',
                'Coordinating with lenders for timely processing',
                'Following up on application status',
                'Explaining loan terms and conditions clearly',
                'Negotiating for better interest rates and terms'
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 bg-neutral-50 p-4 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <p className="text-neutral-700 pt-1">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary via-primary-light to-primary text-white">
        <div className="container-custom text-center">
          <FaPhoneAlt className="text-6xl mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us today to discuss your property or financing needs. Our team is ready to help you find the perfect solution.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+918618938686"
              className="px-8 py-4 bg-accent hover:bg-accent-dark text-white font-bold rounded-full transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center space-x-2"
            >
              <FaPhoneAlt />
              <span>Call +91 86189 38686</span>
            </a>
            <a
              href="https://wa.me/918618938686"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white hover:bg-neutral-100 text-primary font-bold rounded-full transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
