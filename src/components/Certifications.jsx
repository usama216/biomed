import React from 'react';

const Certifications = () => {
  // Base certificates - 4 unique certificates
  const baseCertificates = [
    '/assets/certificates/certificate-1.png',
    '/assets/certificates/certificate-2.png',
    '/assets/certificates/certificate-3.png',
    '/assets/certificates/certificate-4.png',
  ];

  // Duplicate certificates to create 20+ items for smooth marquee
  const certificates = [
    ...baseCertificates,
    ...baseCertificates,
    ...baseCertificates,
    ...baseCertificates,
    ...baseCertificates,
  ];

  return (
    <section className="bg-biomed-navy py-6 md:py-12 overflow-hidden">
      <div className="max-w-full mx-auto px-4">
        <h2 className="text-white text-center text-xl md:text-2xl font-semibold mb-8">
          Certificates From Global Regulatory Authorities
        </h2>
        
        {/* Marquee Container */}
        <div className="relative">
          {/* Marquee Content - Duplicate for seamless loop */}
          <div className="flex animate-marquee-slow hover:pause-marquee">
            {/* First Set */}
            {certificates.map((cert, idx) => (
              <div key={`cert-1-${idx}`} className="flex-shrink-0 mx-4">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-white rounded-lg flex items-center justify-center shadow-lg p-2 transition-transform hover:scale-110">
                  <img 
                    src={cert} 
                    alt={`Certificate ${(idx % 4) + 1}`} 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            ))}
            {/* Second Set for seamless loop */}
            {certificates.map((cert, idx) => (
              <div key={`cert-2-${idx}`} className="flex-shrink-0 mx-4">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-white rounded-lg flex items-center justify-center shadow-lg p-2 transition-transform hover:scale-110">
                  <img 
                    src={cert} 
                    alt={`Certificate ${(idx % 4) + 1}`} 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;

