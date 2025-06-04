
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, User, Star } from 'lucide-react';

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: number;
  type: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  rating: number;
  imageUrl: string;
  landlord: string;
  isVerified?: boolean;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  title,
  location,
  price,
  type,
  bedrooms,
  bathrooms,
  area,
  rating,
  imageUrl,
  landlord,
  isVerified = false
}) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
      <div className="relative">
        <div className="aspect-video bg-gradient-to-br from-orange-200 to-red-200 flex items-center justify-center">
          <div className="text-center text-gray-600">
            <div className="text-4xl mb-2">🏠</div>
            <div className="text-sm">Photo de la propriété</div>
          </div>
        </div>
        {isVerified && (
          <Badge className="absolute top-3 left-3 bg-green-500 hover:bg-green-600">
            Vérifié
          </Badge>
        )}
        <Badge className="absolute top-3 right-3 bg-white text-gray-900">
          {type}
        </Badge>
      </div>
      
      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <div className="flex items-center text-gray-600 mb-2">
              <MapPin className="h-4 w-4 mr-1" />
              <span className="text-sm">{location}</span>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <span>{bedrooms} chambres</span>
              <span>•</span>
              <span>{bathrooms} SDB</span>
              <span>•</span>
              <span>{area} m²</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-orange-500">
                {price.toLocaleString()} MAD
              </div>
              <div className="text-sm text-gray-600">par mois</div>
            </div>
            <div className="text-right">
              <div className="flex items-center mb-1">
                <Star className="h-4 w-4 text-yellow-400 mr-1" />
                <span className="text-sm font-medium">{rating}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <User className="h-3 w-3 mr-1" />
                <span className="text-xs">{landlord}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
