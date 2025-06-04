
import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import PropertyCard from '@/components/PropertyCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Property {
  id: string;
  title: string;
  address: string;
  city: string;
  price_per_month: number;
  property_type: string;
  bedrooms: number;
  bathrooms: number;
  area_sqm: number;
  is_verified: boolean;
  images: string[];
  landlord_id: string;
  profiles?: {
    first_name: string;
    last_name: string;
  };
}

const Properties = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchLocation, setSearchLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const { toast } = useToast();

  const fetchProperties = async () => {
    try {
      let query = supabase
        .from('properties')
        .select(`
          *,
          profiles:landlord_id (
            first_name,
            last_name
          )
        `)
        .eq('is_available', true);

      if (searchLocation) {
        query = query.or(`city.ilike.%${searchLocation}%,address.ilike.%${searchLocation}%`);
      }

      if (propertyType) {
        query = query.eq('property_type', propertyType);
      }

      if (maxPrice) {
        query = query.lte('price_per_month', parseFloat(maxPrice));
      }

      const { data, error } = await query.order('created_at', { ascending: false });

      if (error) {
        toast({
          title: "Erreur",
          description: "Impossible de charger les propriétés",
          variant: "destructive",
        });
        return;
      }

      setProperties(data || []);
    } catch (error) {
      console.error('Error fetching properties:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, [searchLocation, propertyType, maxPrice]);

  const handleSearch = () => {
    fetchProperties();
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-16 bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Chargement des propriétés...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Filters */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Localisation</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Ville ou adresse..."
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Type de bien</label>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full h-10 px-3 border border-gray-200 rounded-md focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
              >
                <option value="">Tous les types</option>
                <option value="apartment">Appartement</option>
                <option value="house">Maison</option>
                <option value="studio">Studio</option>
                <option value="villa">Villa</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Prix max (MAD)</label>
              <Input
                type="number"
                placeholder="Prix maximum"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">&nbsp;</label>
              <Button onClick={handleSearch} className="w-full bg-orange-500 hover:bg-orange-600">
                <Search className="h-4 w-4 mr-2" />
                Rechercher
              </Button>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            {properties.length} propriété{properties.length !== 1 ? 's' : ''} trouvée{properties.length !== 1 ? 's' : ''}
          </h1>
        </div>

        {properties.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🏠</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Aucune propriété trouvée</h3>
            <p className="text-gray-600">Essayez de modifier vos critères de recherche.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <PropertyCard
                key={property.id}
                id={property.id}
                title={property.title}
                location={`${property.address}, ${property.city}`}
                price={property.price_per_month}
                type={property.property_type}
                bedrooms={property.bedrooms}
                bathrooms={property.bathrooms}
                area={property.area_sqm || 0}
                rating={4.5} // We'll implement reviews later
                imageUrl=""
                landlord={property.profiles ? `${property.profiles.first_name} ${property.profiles.last_name}` : 'Propriétaire'}
                isVerified={property.is_verified}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Properties;
