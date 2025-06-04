
import React from 'react';
import PropertyCard from './PropertyCard';
import { Button } from '@/components/ui/button';

const FeaturedProperties = () => {
  const properties = [
    {
      id: '1',
      title: 'Appartement moderne à Gueliz',
      location: 'Gueliz, Marrakech',
      price: 4500,
      type: 'Appartement',
      bedrooms: 2,
      bathrooms: 1,
      area: 85,
      rating: 4.8,
      imageUrl: '/api/placeholder/400/300',
      landlord: 'Ahmed Bennani',
      isVerified: true
    },
    {
      id: '2',
      title: 'Villa avec piscine à Souissi',
      location: 'Souissi, Rabat',
      price: 12000,
      type: 'Villa',
      bedrooms: 4,
      bathrooms: 3,
      area: 250,
      rating: 4.9,
      imageUrl: '/api/placeholder/400/300',
      landlord: 'Fatima El Alami',
      isVerified: true
    },
    {
      id: '3',
      title: 'Studio étudiant à Agdal',
      location: 'Agdal, Rabat',
      price: 2800,
      type: 'Studio',
      bedrooms: 1,
      bathrooms: 1,
      area: 35,
      rating: 4.6,
      imageUrl: '/api/placeholder/400/300',
      landlord: 'Youssef Talbi',
      isVerified: false
    },
    {
      id: '4',
      title: 'Riad traditionnel rénové',
      location: 'Médina, Fès',
      price: 8500,
      type: 'Riad',
      bedrooms: 3,
      bathrooms: 2,
      area: 180,
      rating: 4.7,
      imageUrl: '/api/placeholder/400/300',
      landlord: 'Khadija Fassi',
      isVerified: true
    },
    {
      id: '5',
      title: 'Appartement face à la mer',
      location: 'Corniche, Casablanca',
      price: 6200,
      type: 'Appartement',
      bedrooms: 3,
      bathrooms: 2,
      area: 120,
      rating: 4.9,
      imageUrl: '/api/placeholder/400/300',
      landlord: 'Omar Berrada',
      isVerified: true
    },
    {
      id: '6',
      title: 'Maison traditionnelle',
      location: 'Ancienne Médina, Salé',
      price: 3500,
      type: 'Maison',
      bedrooms: 2,
      bathrooms: 1,
      area: 95,
      rating: 4.4,
      imageUrl: '/api/placeholder/400/300',
      landlord: 'Aicha Slaoui',
      isVerified: false
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Propriétés <span className="gradient-text">recommandées</span>
          </h2>
          <p className="text-xl text-gray-600">
            Découvrez une sélection de nos meilleures propriétés disponibles
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
            Voir toutes les propriétés
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
