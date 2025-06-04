
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import FeaturedProperties from '@/components/FeaturedProperties';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <FeaturedProperties />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
