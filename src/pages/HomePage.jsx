import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Certifications from '../components/Certifications';
import HealthCategories from '../components/HealthCategories';
import TrendingProducts from '../components/TrendingProducts';
import HealthConcerns from '../components/HealthConcerns';
import Mission from '../components/Mission';
import Science from '../components/Science';
import LatestOffers from '../components/LatestOffers';
import WorldwideFootprint from '../components/WorldwideFootprint';
import VideoSection from '../components/VideoSection';

const HomePage = ({ addToCart }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <Certifications />
      <HealthCategories />
      <TrendingProducts addToCart={addToCart} />
      <HealthConcerns />
      <Mission />
      {/* <Science /> */}
      {/* <LatestOffers addToCart={addToCart} /> */}
      {/* <WorldwideFootprint /> */}
      <VideoSection />
    </>
  );
};

export default HomePage;

