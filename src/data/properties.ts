export interface Property {
  id: number;
  title: string;
  type: 'rental' | 'sale';
  category: 'residential' | 'commercial';
  propertyType: string;
  price: string;
  location: string;
  area: string;
  bedrooms?: number;
  bathrooms?: number;
  image: string;
  featured: boolean;
  description: string;
  amenities: string[];
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Modern 3BHK Apartment",
    type: "rental",
    category: "residential",
    propertyType: "Apartment",
    price: "₹25,000/month",
    location: "Singapura, Bengaluru",
    area: "1,450 sq.ft",
    bedrooms: 3,
    bathrooms: 2,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
    featured: true,
    description: "Spacious 3BHK apartment with modern amenities in a prime location. Perfect for families.",
    amenities: ["Parking", "24/7 Security", "Power Backup", "Water Supply", "Park Nearby"]
  },
  {
    id: 2,
    title: "Premium Commercial Shop",
    type: "rental",
    category: "commercial",
    propertyType: "Shop",
    price: "₹45,000/month",
    location: "HSR Layout, Bengaluru",
    area: "850 sq.ft",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    featured: true,
    description: "Well-located commercial shop space ideal for retail business. High footfall area.",
    amenities: ["Prime Location", "24/7 Access", "Parking Available", "CCTV", "Display Windows"]
  },
  {
    id: 3,
    title: "Luxury Villa for Sale",
    type: "sale",
    category: "residential",
    propertyType: "Villa",
    price: "₹1.85 Cr",
    location: "Whitefield, Bengaluru",
    area: "3,200 sq.ft",
    bedrooms: 4,
    bathrooms: 4,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    featured: true,
    description: "Stunning 4BHK villa with private garden and modern architecture. Premium gated community.",
    amenities: ["Gated Community", "Swimming Pool", "Gym", "Club House", "Children's Play Area", "Garden"]
  },
  {
    id: 4,
    title: "Cozy 2BHK House",
    type: "rental",
    category: "residential",
    propertyType: "Independent House",
    price: "₹18,000/month",
    location: "Bommanahalli, Bengaluru",
    area: "1,100 sq.ft",
    bedrooms: 2,
    bathrooms: 2,
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop",
    featured: false,
    description: "Independent 2BHK house with separate entrance. Quiet residential area.",
    amenities: ["Independent Entry", "Parking", "Semi-Furnished", "Good Ventilation"]
  },
  {
    id: 5,
    title: "Commercial Office Space",
    type: "sale",
    category: "commercial",
    propertyType: "Office",
    price: "₹95 Lakhs",
    location: "Electronic City, Bengaluru",
    area: "1,800 sq.ft",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop",
    featured: false,
    description: "Ready-to-move office space in IT hub. Ideal for startups and small businesses.",
    amenities: ["AC", "Power Backup", "Elevator", "Parking", "Cafeteria", "Conference Room"]
  },
  {
    id: 6,
    title: "Spacious 1BHK Flat",
    type: "rental",
    category: "residential",
    propertyType: "Apartment",
    price: "₹12,000/month",
    location: "BTM Layout, Bengaluru",
    area: "650 sq.ft",
    bedrooms: 1,
    bathrooms: 1,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
    featured: false,
    description: "Well-maintained 1BHK flat perfect for working professionals and students.",
    amenities: ["Lift", "Security", "Covered Parking", "Modular Kitchen", "Balcony"]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Home Buyer",
    content: "DMA Rentals helped me find my dream home and even assisted with the home loan process. Very professional service!",
    rating: 5,
    image: "https://ui-avatars.com/api/?name=Rajesh+Kumar&background=c8a875&color=fff&size=100"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Tenant",
    content: "Found the perfect rental property through DMA. The team was responsive and made the entire process smooth and hassle-free.",
    rating: 5,
    image: "https://ui-avatars.com/api/?name=Priya+Sharma&background=c8a875&color=fff&size=100"
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Business Owner",
    content: "Rented a commercial space for my shop. Great location and the loan assistance for initial setup was a huge help!",
    rating: 5,
    image: "https://ui-avatars.com/api/?name=Amit+Patel&background=c8a875&color=fff&size=100"
  }
];

export const loanTypes = [
  {
    id: 1,
    name: "Home Loans",
    description: "Competitive rates for purchasing your dream home. Get expert guidance from application to approval.",
    icon: "🏠",
    features: ["Up to 90% financing", "Flexible tenure", "Quick approval", "Minimal documentation"]
  },
  {
    id: 2,
    name: "Land Purchase Loans",
    description: "Secure financing for residential or commercial land purchases with attractive terms.",
    icon: "🌾",
    features: ["Flexible repayment", "Competitive interest", "Fast processing", "Expert guidance"]
  },
  {
    id: 3,
    name: "Vehicle Loans",
    description: "Drive your dream car or bike home with easy financing options and simple procedures.",
    icon: "🚗",
    features: ["New & used vehicles", "Low interest rates", "Quick disbursal", "Minimal down payment"]
  },
  {
    id: 4,
    name: "Education Loans",
    description: "Invest in your future with education loans for domestic and international studies.",
    icon: "🎓",
    features: ["Study abroad covered", "Moratorium period", "Covers full fees", "Parent co-applicant"]
  }
];
