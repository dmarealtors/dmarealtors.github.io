import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt } from 'react-icons/fa';
import { Property } from '../data/properties';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <span className={`px-4 py-1.5 rounded-full text-xs font-bold text-white ${
            property.type === 'rental' ? 'bg-primary' : 'bg-accent'
          }`}>
            {property.type === 'rental' ? 'For Rent' : 'For Sale'}
          </span>
          <span className="px-4 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-primary">
            {property.propertyType}
          </span>
        </div>
        {property.featured && (
          <div className="absolute top-4 right-4">
            <span className="px-4 py-1.5 bg-accent text-white rounded-full text-xs font-bold">
              ⭐ Featured
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
            {property.title}
          </h3>
          <div className="flex items-center text-neutral-600 text-sm">
            <FaMapMarkerAlt className="mr-2 text-accent" />
            <span>{property.location}</span>
          </div>
        </div>

        <p className="text-neutral-600 text-sm line-clamp-2">
          {property.description}
        </p>

        {/* Property Stats */}
        <div className="flex items-center gap-4 text-sm text-neutral-700">
          {property.bedrooms && (
            <div className="flex items-center">
              <FaBed className="mr-1.5 text-accent" />
              <span>{property.bedrooms} Beds</span>
            </div>
          )}
          {property.bathrooms && (
            <div className="flex items-center">
              <FaBath className="mr-1.5 text-accent" />
              <span>{property.bathrooms} Baths</span>
            </div>
          )}
          <div className="flex items-center">
            <FaRulerCombined className="mr-1.5 text-accent" />
            <span>{property.area}</span>
          </div>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2">
          {property.amenities.slice(0, 3).map((amenity, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-xs"
            >
              {amenity}
            </span>
          ))}
          {property.amenities.length > 3 && (
            <span className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-xs">
              +{property.amenities.length - 3} more
            </span>
          )}
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
          <div>
            <p className="text-xs text-neutral-500 uppercase">Price</p>
            <p className="text-2xl font-bold text-primary">{property.price}</p>
          </div>
          <a
            href="tel:+918618938686"
            className="px-6 py-3 bg-accent hover:bg-accent-dark text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Inquire Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
