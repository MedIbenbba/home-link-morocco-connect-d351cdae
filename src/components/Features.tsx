
import React from 'react';
import { Shield, Search, User, Settings, Bell, CreditCard } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Sécurité garantie",
      description: "Tous nos utilisateurs et propriétés sont vérifiés. Vos données sont protégées et vos transactions sécurisées."
    },
    {
      icon: Search,
      title: "Recherche intelligente",
      description: "Trouvez rapidement votre logement idéal grâce à nos filtres avancés et notre système de géolocalisation."
    },
    {
      icon: User,
      title: "Profils détaillés",
      description: "Consultez les profils complets des propriétaires et locataires avec avis et historique de location."
    },
    {
      icon: CreditCard,
      title: "Paiements simplifiés",
      description: "Gérez vos loyers et dépôts de garantie en ligne de façon sécurisée avec notre système de paiement intégré."
    },
    {
      icon: Bell,
      title: "Notifications temps réel",
      description: "Restez informé des nouvelles propriétés, demandes de visite et messages grâce à nos notifications."
    },
    {
      icon: Settings,
      title: "Gestion complète",
      description: "Tableau de bord intuitif pour gérer vos annonces, réservations et communications facilement."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Pourquoi choisir <span className="gradient-text">HomeLink</span> ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une plateforme moderne et sécurisée conçue spécialement pour le marché immobilier marocain
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto">
                  <feature.icon className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
