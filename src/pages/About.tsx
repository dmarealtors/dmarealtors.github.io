import { FaBullseye, FaEye, FaUsers, FaAward, FaHandshake, FaCheckCircle } from 'react-icons/fa';

const About = () => {
  const stats = [
    { number: '100+', label: 'Happy Clients', icon: <FaUsers /> },
    { number: '50+', label: 'Properties Managed', icon: <FaAward /> },
    { number: '5+', label: 'Years Experience', icon: <FaHandshake /> },
    { number: '95%', label: 'Client Satisfaction', icon: <FaCheckCircle /> }
  ];

  const values = [
    {
      title: 'Transparency',
      description: 'We believe in honest communication and clear dealings at every step.',
      icon: '🔍'
    },
    {
      title: 'Professionalism',
      description: 'Expert guidance backed by industry knowledge and market experience.',
      icon: '💼'
    },
    {
      title: 'Customer First',
      description: 'Your satisfaction and success are at the heart of everything we do.',
      icon: '❤️'
    },
    {
      title: 'Integrity',
      description: 'Ethical practices and trustworthy service you can count on.',
      icon: '🤝'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop"
            alt="About Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        </div>
        <div className="relative z-10 container-custom text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            About <span className="text-accent">DMA Rentals</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Building trust through transparency, professionalism, and personalized service
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-lg text-neutral-700 leading-relaxed">
                <p>
                  <strong className="text-primary">DMA Rentals and Real Estate Services</strong> is dedicated to delivering dependable and customer-focused solutions in the real estate sector. With practical industry experience and a strong understanding of market dynamics, we help clients manage property needs efficiently and securely.
                </p>
                <p>
                  We believe in building long-term relationships through trust, ethical practices, and seamless service delivery. Whether you are looking to rent, buy, sell, or arrange financing, we ensure a smooth and hassle-free experience.
                </p>
                <p>
                  Our team combines local market expertise with a commitment to personalized service, ensuring that every client receives solutions tailored to their unique requirements.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop"
                alt="Real Estate Office"
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop"
                alt="Property"
                className="rounded-2xl shadow-lg w-full h-64 object-cover mt-12"
              />
              <img
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&h=400&fit=crop"
                alt="Happy Clients"
                className="rounded-2xl shadow-lg w-full h-64 object-cover -mt-12"
              />
              <img
                src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=600&h=400&fit=crop"
                alt="Property Keys"
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-r from-primary via-primary-light to-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-5xl mb-4 transform group-hover:scale-125 transition-transform duration-300">
                  {stat.icon}
                </div>
                <h3 className="text-4xl md:text-5xl font-bold mb-2 text-accent">
                  {stat.number}
                </h3>
                <p className="text-lg text-white/90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-gradient-to-br from-neutral-50 to-white p-12 rounded-2xl shadow-xl border border-neutral-200 hover:shadow-2xl transition-shadow duration-300">
              <div className="text-6xl mb-6">
                <FaBullseye className="text-accent" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-6">Our Mission</h3>
              <p className="text-lg text-neutral-700 leading-relaxed">
                To provide trustworthy and efficient real estate and financial facilitation services that simplify property decisions and create lasting value for our clients.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-neutral-50 to-white p-12 rounded-2xl shadow-xl border border-neutral-200 hover:shadow-2xl transition-shadow duration-300">
              <div className="text-6xl mb-6">
                <FaEye className="text-accent" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-6">Our Vision</h3>
              <p className="text-lg text-neutral-700 leading-relaxed">
                To be a preferred and dependable partner for property leasing, real estate services, and loan facilitation by consistently delivering professional and customer-centric solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-neutral-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="text-6xl mb-6">{value.icon}</div>
                <h3 className="text-2xl font-bold text-primary mb-4">{value.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Why Choose Us
              </h2>
              <p className="text-xl text-neutral-600">
                What sets DMA Rentals apart from the rest
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: 'End-to-End Property Solutions',
                  description: 'From finding the right property to securing financing, we handle every aspect of your real estate journey.'
                },
                {
                  title: 'Transparent and Ethical Practices',
                  description: 'No hidden fees, no surprises. We believe in clear communication and honest dealings at every step.'
                },
                {
                  title: 'Personalized Customer Support',
                  description: 'Every client is unique. We tailor our services to match your specific needs and preferences.'
                },
                {
                  title: 'Reliable Guidance Throughout the Process',
                  description: 'Our experienced team provides expert advice and support from initial inquiry to final transaction.'
                },
                {
                  title: 'One-Stop Assistance for Property and Financing Needs',
                  description: 'Save time and effort with our comprehensive services covering rentals, sales, and loan facilitation.'
                },
                {
                  title: 'Strong Local Market Understanding',
                  description: 'Deep knowledge of Bengaluru real estate market ensures you get the best deals and locations.'
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-6 bg-gradient-to-r from-neutral-50 to-white p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-2">{item.title}</h4>
                    <p className="text-neutral-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
