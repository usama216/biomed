import React from 'react';
import { CheckCircle, Shield, Award, Globe } from 'lucide-react';

const VideoSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Video Section - Left */}
          <div className="w-full">
            <div className="rounded-2xl overflow-hidden shadow-xl h-auto">
              <video 
                src="/assets/biomed-new-video.mp4" 
                type="video/mp4" 
                autoPlay 
                muted 
                loop 
                className="w-full h-auto object-cover"
                playsInline
              />
            </div>
          </div>

          {/* Biomed Intro - Right */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-biomed-navy mb-4">
                Welcome to <span className="text-biomed-teal">BIOMED</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                BIOMED Innovation Pharmaceuticals is your trusted health care partner, dedicated to providing high-quality pharmaceutical products and innovative health solutions. With decades of experience, we combine cutting-edge research with superior manufacturing standards to deliver products that support your wellness journey.
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-biomed-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="text-biomed-teal" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-biomed-navy mb-1">Quality Assured</h3>
                  <p className="text-gray-600 text-sm">Manufactured under strict cGMP and ISO standards for safety and efficacy</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-biomed-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="text-biomed-teal" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-biomed-navy mb-1">Research-Driven</h3>
                  <p className="text-gray-600 text-sm">Backed by extensive scientific research and natural ingredient innovation</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-biomed-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="text-biomed-teal" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-biomed-navy mb-1">Global Reach</h3>
                  <p className="text-gray-600 text-sm">Serving customers worldwide with trusted pharmaceutical solutions</p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="pt-4">
              <p className="text-gray-600 text-sm italic">
                "Your Health Care Partner - Innovation in Pharmaceuticals for Better Health!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

