import React from 'react';

const Intro = () => {
  return (
    
    <div className="relative min-h-screen" id='home'>
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/backgroundOriginal.jpg"
          alt="Background"
          className="w-full h-full object-cover blur-[2px] brightness-95"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/70 backdrop-blur-sm"></div>
      </div>
        <br /><br /><br /><br /><br /><br /><br /><br />
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl space-y-6">
          <h1 className="text-[#0c324f] text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
            Empowering Businesses with Digital Solutions
          </h1>
          <p className="text-lg text-[#0c324f] md:text-xl">
            CodeTura delivers modern POS, Billing, and ERP systems that help optimize your workflow, improve productivity, and accelerate growth.
          </p>
          <div className="mt-6">
            <a
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none"
              href="#"
              style={{
                background: 'linear-gradient(90deg, #061b3a 0%, #0c324f 50%, #0b6149 100%)'
              }}
            >
              Contact Us
              
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
