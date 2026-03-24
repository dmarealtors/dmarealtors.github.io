import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create WhatsApp message
    const message = `Hello DMA Rentals,\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`;
    const whatsappUrl = `https://wa.me/918618938686?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Office Address',
      content: 'Singapura, Bengaluru – 560097',
      link: 'https://maps.google.com/?q=Singapura,Bengaluru,560097'
    },
    {
      icon: <FaPhone />,
      title: 'Phone Number',
      content: '+91 86189 38686',
      link: 'tel:+918618938686'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email Address',
      content: 'info@dmarentals.com',
      link: 'mailto:info@dmarentals.com'
    },
    {
      icon: <FaClock />,
      title: 'Business Hours',
      content: 'Mon-Sat: 9:00 AM - 6:00 PM\nSunday: By Appointment',
      link: null
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=1080&fit=crop"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        </div>
        <div className="relative z-10 container-custom text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Get in <span className="text-accent">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            We're here to help with all your property and financing needs
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-32 relative z-20 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-neutral-100"
              >
                <div className="text-4xl text-accent mb-4">
                  {info.icon}
                </div>
                <h3 className="text-lg font-bold text-primary mb-3">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-neutral-700 hover:text-accent transition-colors duration-300 whitespace-pre-line"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-neutral-700 whitespace-pre-line">{info.content}</p>
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Send Us a Message
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-neutral-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a subject</option>
                    <option value="Property Rental">Property Rental Inquiry</option>
                    <option value="Property Purchase">Property Purchase Inquiry</option>
                    <option value="Property Sale">Property Sale Inquiry</option>
                    <option value="Home Loan">Home Loan Assistance</option>
                    <option value="Land Loan">Land Purchase Loan</option>
                    <option value="Vehicle Loan">Vehicle Loan</option>
                    <option value="Education Loan">Education Loan</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-accent hover:bg-accent-dark text-white font-bold rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Send Message via WhatsApp</span>
                  <FaPaperPlane />
                </button>

                <p className="text-sm text-neutral-600 text-center">
                  By submitting this form, you agree to be contacted by DMA Rentals
                </p>
              </form>
            </div>

            {/* Map and Quick Contact */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Visit Our Office
                </h2>
                <p className="text-lg text-neutral-600 mb-6">
                  Come visit us during business hours or schedule an appointment for personalized consultation
                </p>

                {/* Google Maps Embed */}
                <div className="rounded-2xl overflow-hidden shadow-xl h-96 mb-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8626!2d77.6947!3d12.9164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzU5LjAiTiA3N8KwNDEnNDEuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="DMA Rentals Office Location"
                  ></iframe>
                </div>
              </div>

              {/* Quick Contact Options */}
              <div className="bg-gradient-to-br from-primary to-primary-light text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  <a
                    href="tel:+918618938686"
                    className="flex items-center space-x-4 p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <FaPhone className="text-xl" />
                    </div>
                    <div>
                      <p className="text-sm opacity-90">Call Us Now</p>
                      <p className="font-bold text-lg">+91 86189 38686</p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/918618938686"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <FaWhatsapp className="text-xl" />
                    </div>
                    <div>
                      <p className="text-sm opacity-90">WhatsApp</p>
                      <p className="font-bold text-lg">Chat with Us</p>
                    </div>
                  </a>

                  <a
                    href="mailto:info@dmarentals.com"
                    className="flex items-center space-x-4 p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <FaEnvelope className="text-xl" />
                    </div>
                    <div>
                      <p className="text-sm opacity-90">Email Us</p>
                      <p className="font-bold text-lg">info@dmarentals.com</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
