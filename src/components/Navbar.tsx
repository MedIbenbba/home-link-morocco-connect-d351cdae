
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Home, User, Search, Settings } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Home className="h-8 w-8 text-orange-500" />
            <span className="text-2xl font-bold gradient-text">HomeLink</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">Rechercher</a>
            <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">Publier</a>
            <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">À propos</a>
            <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">Contact</a>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
              Connexion
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Inscription
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">Rechercher</a>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">Publier</a>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">À propos</a>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">Contact</a>
            <div className="px-4 pt-4 space-y-2">
              <Button variant="outline" className="w-full border-orange-500 text-orange-500">
                Connexion
              </Button>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                Inscription
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
