
import React from 'react';
import { Home, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Home className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold">HomeLink</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              La plateforme de référence pour la location immobilière au Maroc. 
              Connectez-vous avec des propriétaires de confiance.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                <span className="text-sm">f</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                <span className="text-sm">in</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                <span className="text-sm">ig</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Liens rapides</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Rechercher</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Publier une annonce</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Comment ça marche</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Tarifs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Centre d'aide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Signaler un problème</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Politique de confidentialité</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Conditions d'utilisation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Sécurité</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500" />
                <span className="text-gray-400">contact@homelink.ma</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500" />
                <span className="text-gray-400">+212 5 20 00 00 00</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-orange-500" />
                <span className="text-gray-400">Casablanca, Maroc</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 HomeLink. Tous droits réservés. Fait avec ❤️ au Maroc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
