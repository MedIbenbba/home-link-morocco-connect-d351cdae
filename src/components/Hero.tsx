
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search, MapPin, Home } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [budget, setBudget] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchLocation) params.append('location', searchLocation);
    if (propertyType) params.append('type', propertyType);
    if (budget) params.append('budget', budget);
    
    navigate(`/properties?${params.toString()}`);
  };

  return (
    <div className="relative pt-16 bg-gradient-to-br from-orange-50 via-white to-red-50 moroccan-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
                Trouvez votre
                <span className="gradient-text block">maison idéale</span>
                au Maroc
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Connectez-vous avec des propriétaires de confiance et découvrez 
                des logements authentiques dans tout le Maroc. Simple, sécurisé, et transparent.
              </p>
            </div>

            {/* Search Box */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Localisation</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input 
                      placeholder="Casablanca, Rabat..."
                      value={searchLocation}
                      onChange={(e) => setSearchLocation(e.target.value)}
                      className="pl-10 border-gray-200 focus:border-orange-500"
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
                  <label className="text-sm font-medium text-gray-700">Budget (MAD)</label>
                  <select 
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full h-10 px-3 border border-gray-200 rounded-md focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  >
                    <option value="">Tous les prix</option>
                    <option value="3000">Moins de 3 000</option>
                    <option value="6000">3 000 - 6 000</option>
                    <option value="10000">6 000 - 10 000</option>
                    <option value="999999">Plus de 10 000</option>
                  </select>
                </div>
              </div>
              <Button onClick={handleSearch} className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white h-12">
                <Search className="h-4 w-4 mr-2" />
                Rechercher
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">500+</div>
                <div className="text-sm text-gray-600">Propriétés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">1000+</div>
                <div className="text-sm text-gray-600">Utilisateurs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">98%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-orange-400 to-red-500 p-8">
              <div className="w-full h-full bg-white rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                    <Home className="h-12 w-12 text-orange-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Votre nouvelle maison vous attend</h3>
                  <p className="text-gray-600">Des milliers de propriétés vérifiées</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Vérifié</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500">4.9★</div>
                <div className="text-xs text-gray-600">Note moyenne</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
