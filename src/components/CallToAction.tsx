
import React from 'react';
import { Button } from '@/components/ui/button';
import { Home, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CallToAction = () => {
  const navigate = useNavigate();

  const handleTenantClick = () => {
    navigate('/properties');
  };

  const handleLandlordClick = () => {
    navigate('/auth');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-orange-500 to-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Prêt à commencer votre recherche ?
          </h2>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Rejoignez des milliers d'utilisateurs qui font confiance à HomeLink 
            pour trouver leur logement idéal au Maroc
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center space-y-4">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
                <User className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Je cherche un logement</h3>
              <p className="text-orange-100">
                Trouvez votre prochaine maison parmi des centaines d'offres vérifiées
              </p>
              <Button onClick={handleTenantClick} className="bg-white text-orange-500 hover:bg-gray-100 w-full">
                Commencer ma recherche
              </Button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center space-y-4">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
                <Home className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Je suis propriétaire</h3>
              <p className="text-orange-100">
                Mettez votre bien en location et trouvez des locataires de qualité
              </p>
              <Button onClick={handleLandlordClick} className="bg-white text-orange-500 hover:bg-gray-100 w-full">
                Publier mon annonce
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
