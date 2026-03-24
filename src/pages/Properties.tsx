import { useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import { properties } from '../data/properties';
import { FaFilter, FaTimes } from 'react-icons/fa';

const Properties = () => {
  const [filterType, setFilterType] = useState<'all' | 'rental' | 'sale'>('all');
  const [filterCategory, setFilterCategory] = useState<'all' | 'residential' | 'commercial'>('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProperties = properties.filter((property) => {
    const matchesType = filterType === 'all' || property.type === filterType;
    const matchesCategory = filterCategory === 'all' || property.category === filterCategory;
    return matchesType && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&h=1080&fit=crop"
            alt="Properties"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        </div>
        <div className="relative z-10 container-custom text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Browse Our <span className="text-accent">Properties</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Find your perfect space from our curated collection of properties
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-white border-b border-neutral-200 sticky top-0 z-40 shadow-md">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-full font-semibold"
              >
                <FaFilter />
                <span>Filters</span>
              </button>
              <p className="text-neutral-700">
                Showing <strong className="text-primary">{filteredProperties.length}</strong> {filteredProperties.length === 1 ? 'property' : 'properties'}
              </p>
            </div>

            {/* Desktop Filters */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <label className="text-sm font-semibold text-neutral-700">Type:</label>
                <div className="flex space-x-2">
                  {['all', 'rental', 'sale'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setFilterType(type as typeof filterType)}
                      className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                        filterType === type
                          ? 'bg-accent text-white shadow-lg'
                          : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                      }`}
                    >
                      {type === 'all' ? 'All' : type === 'rental' ? 'For Rent' : 'For Sale'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="w-px h-8 bg-neutral-300"></div>

              <div className="flex items-center space-x-2">
                <label className="text-sm font-semibold text-neutral-700">Category:</label>
                <div className="flex space-x-2">
                  {['all', 'residential', 'commercial'].map((category) => (
                    <button
                      key={category}
                      onClick={() => setFilterCategory(category as typeof filterCategory)}
                      className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                        filterCategory === category
                          ? 'bg-primary text-white shadow-lg'
                          : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                      }`}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="md:hidden mt-4 p-6 bg-neutral-50 rounded-xl space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-primary">Filters</h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="text-neutral-600 hover:text-primary"
                >
                  <FaTimes />
                </button>
              </div>

              <div>
                <label className="text-sm font-semibold text-neutral-700 mb-2 block">Property Type</label>
                <div className="grid grid-cols-3 gap-2">
                  {['all', 'rental', 'sale'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setFilterType(type as typeof filterType)}
                      className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                        filterType === type
                          ? 'bg-accent text-white shadow-lg'
                          : 'bg-white text-neutral-700 hover:bg-neutral-100'
                      }`}
                    >
                      {type === 'all' ? 'All' : type === 'rental' ? 'Rent' : 'Sale'}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-neutral-700 mb-2 block">Category</label>
                <div className="grid grid-cols-3 gap-2">
                  {['all', 'residential', 'commercial'].map((category) => (
                    <button
                      key={category}
                      onClick={() => setFilterCategory(category as typeof filterCategory)}
                      className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                        filterCategory === category
                          ? 'bg-primary text-white shadow-lg'
                          : 'bg-white text-neutral-700 hover:bg-neutral-100'
                      }`}
                    >
                      {category === 'all' ? 'All' : category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Properties Grid */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-6">🏘️</div>
              <h3 className="text-2xl font-bold text-primary mb-4">No Properties Found</h3>
              <p className="text-neutral-600 mb-6">
                Try adjusting your filters to see more properties
              </p>
              <button
                onClick={() => {
                  setFilterType('all');
                  setFilterCategory('all');
                }}
                className="px-6 py-3 bg-accent hover:bg-accent-dark text-white font-semibold rounded-full transition-all duration-300"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary via-primary-light to-primary text-white p-12 md:p-16 rounded-2xl shadow-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Didn't Find What You're Looking For?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              We have more properties coming soon. Contact us with your requirements and we'll help you find the perfect match.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+918618938686"
                className="px-8 py-4 bg-accent hover:bg-accent-dark text-white font-bold rounded-full transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                Call Us Now
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
        </div>
      </section>
    </div>
  );
};

export default Properties;
