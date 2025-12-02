import React from 'react';
import { Award, Shield, Star, Globe, CheckCircle, Factory, Microscope, FileCheck, PackageCheck, Warehouse } from 'lucide-react';

const AboutPage = () => {
  const certifications = [
    { name: 'GMP', color: 'bg-blue-100 text-blue-600' },
    { name: 'HACCP', color: 'bg-green-100 text-green-600' },
    { name: 'ISO', color: 'bg-purple-100 text-purple-600' },
    { name: 'FDA', color: 'bg-red-100 text-red-600' },
    { name: 'USA', color: 'bg-blue-100 text-blue-600' },
    { name: 'DRAP', color: 'bg-teal-100 text-teal-600' },
    { name: 'HALAL', color: 'bg-green-100 text-green-600' }
  ];

  const processSteps = [
    {
      icon: Microscope,
      title: 'Research & Development',
      description: 'Our team of experts research & verify natural ingredients to find innovative formulation.'
    },
    {
      icon: Globe,
      title: 'Global Sourcing',
      description: 'We source premium quality ingredients from the certified suppliers around the globe.'
    },
    {
      icon: FileCheck,
      title: 'Quality Control',
      description: 'Raw materials are accepted only if they meet qualification conditions for quality & safety.'
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'We manufacture all products according to the cGMP and ISO standards.'
    },
    {
      icon: PackageCheck,
      title: 'Final Testing',
      description: 'Finished product undergoes final testing to ensure safety, efficacy, and quality standards.'
    },
    {
      icon: Warehouse,
      title: 'Storage',
      description: 'Finished products are kept at controlled climate conditions in our warehouse.'
    }
  ];

  const priorities = [
    {
      title: 'SUPERIOR MANUFACTURING',
      description: 'BIOMED maintains high-quality manufacturing standards and has complete control over the production process. We ensure that each product is manufactured under strict supervision adhering to cGMP standards.'
    },
    {
      title: 'RESEARCH & DEVELOPMENT',
      description: 'Our team of experts focuses on the latest findings and natural ingredients. We conduct extensive scientific research to support our health claims and product formulations.'
    },
    {
      title: 'CURRENT HEALTH CONCERNS',
      description: 'We address consumer health issues by developing high-quality products. Our formulations target modern health challenges with evidence-based solutions.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/assets/hero-section-banner/banner-image-2.webp" 
            alt="Manufacturing Facility"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Manufacturing Facility */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-biomed-navy mb-8">
            REGION'S LARGEST PHARMACEUTICAL MANUFACTURING FACILITY
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1 grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img src="/assets/products/product-1.webp" alt="Manufacturing 1" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <img src="/assets/products/product-2.webp" alt="Manufacturing 2" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <img src="/assets/products/product-3.webp" alt="Manufacturing 3" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <img src="/assets/products/product-4.webp" alt="Manufacturing 4" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="md:col-span-2 flex items-center">
              <p className="text-lg text-gray-700 leading-relaxed">
                With decades of experience and expertise, BIOMED has invested significantly in state-of-the-art manufacturing equipment and warehousing facilities. Our advanced facility ensures the highest standards of quality, safety, and efficiency in pharmaceutical production. We maintain strict adherence to international manufacturing protocols and continuously upgrade our technology to meet evolving industry standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Backed By Science */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-biomed-navy mb-6">WE ARE BACKED BY SCIENCE</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our carefully crafted formulations are prepared in a controlled environment under strict supervision of our healthcare experts. We adhere to international standards including GMP, HACCP, ISO 14001, 22000, and 45001, ensuring every product meets the highest quality benchmarks.
              </p>
              <div className="flex flex-wrap gap-4">
                {certifications.map((cert, idx) => (
                  <div key={idx} className={`${cert.color} w-16 h-16 rounded-full flex items-center justify-center font-bold text-xs`}>
                    {cert.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="text-8xl">🔬👨‍🔬</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why BIOMED */}
      <section className="py-16 bg-biomed-teal/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-biomed-navy mb-6">WHY BIOMED!</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-4xl">
            At BIOMED, we believe in transparency and traceability from sustainable sourcing to final delivery. Our commitment to integrity and innovation helps bridge the gap between consumers and pharmaceutical science, ensuring you receive products you can trust.
          </p>
          <div className="flex gap-6 overflow-x-auto pb-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <div key={num} className="min-w-[180px] flex-shrink-0">
                <img 
                  src={`/assets/products/product-${num}.webp`} 
                  alt={`Product ${num}`}
                  className="w-full h-64 object-contain bg-gray-50 rounded-lg p-4"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* From Nature To You */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-biomed-navy text-center mb-12">FROM NATURE TO YOU</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
              {processSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx} className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-biomed-navy rounded-full flex items-center justify-center mb-4">
                      <Icon className="text-white" size={32} />
                    </div>
                    <h3 className="font-bold text-sm mb-2">{step.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{step.description}</p>
                    {idx < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-biomed-teal/30"></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Your Health Our Priority */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-biomed-navy mb-12">YOUR HEALTH, OUR PRIORITY</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              {priorities.map((priority, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-bold text-biomed-navy mb-3">{priority.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{priority.description}</p>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img src="/assets/products/product-5.webp" alt="Lab Equipment 1" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <img src="/assets/products/product-6.webp" alt="Lab Equipment 2" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <img src="/assets/products/product-7.webp" alt="Lab Equipment 3" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Office */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <h2 className="text-4xl font-bold text-biomed-navy mb-4">BIOMED'S CORPORATE OFFICE</h2>
            <button className="bg-biomed-teal text-white px-4 py-2 rounded-lg font-semibold text-sm flex items-center gap-2">
              <span>🌳</span>
              INNOVATION CENTER
            </button>
          </div>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl leading-relaxed">
            Our globally designed corporate space embodies sustainability and eco-friendliness at its core. The Innovation Center reflects BIOMED's commitment to future generations, combining modern architecture with environmental responsibility.
          </p>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/assets/hero-section-banner/banner-image--3.webp" 
              alt="BIOMED Corporate Office"
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Worldwide Footprints */}
      <section className="py-16 bg-biomed-navy text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">OUR WORLDWIDE FOOTPRINTS</h2>
              <div className="flex gap-6 mb-8">
                <div className="bg-biomed-teal text-white p-6 rounded-xl">
                  <p className="text-5xl font-bold mb-2">60+</p>
                  <p className="text-lg">COUNTRIES</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <p className="text-4xl font-bold mb-2">100+</p>
                  <p className="text-sm">Distribution Centers</p>
                </div>
              </div>
              <button className="bg-biomed-teal hover:bg-biomed-teal/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                SHOW MORE
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">🗺️</div>
                <p className="text-lg font-semibold">Global Distribution Network</p>
                <div className="flex justify-center gap-2 mt-4">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-biomed-teal rounded-full"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-biomed-teal/10 to-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-biomed-navy mb-4">
            ADD THE FACTOR OF NUTRITION TO YOUR LIFE
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Where Quality, Safety, and Efficacy meet. Your Most Trusted Pharmaceutical Brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-biomed-navy hover:bg-biomed-navy/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              SEE OUR PRODUCT RANGE
            </button>
            <button className="bg-white border-2 border-biomed-navy hover:bg-gray-50 text-biomed-navy px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              HELP ME CHOOSE
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

