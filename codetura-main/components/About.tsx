import React from "react";
import {
  FaLightbulb,
  FaUserFriends,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";

const About = () => {
  return (
    <section className="py-16 bg-code-gradient scroll-mt-15" id="about">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-[#0c324f] mb-4">
          Why Choose CodeTura?
        </h2>
        <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
          Experience the difference with a partner dedicated to your success.
        </p>

        {/* Two per row layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Custom Solutions */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-xl transition-shadow">
            <FaLightbulb className="text-[#0c324f] text-3xl mb-4 mx-auto" />
            <h3 className="text-md font-semibold text-gray-800 mb-2">
              Custom Solutions
            </h3>
            <p className="text-sm text-gray-600">
              Tailored software designed to meet your unique business needs and workflows.
            </p>
          </div>

          {/* Expert Support */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-xl transition-shadow">
            <FaUserFriends className="text-[#0c324f] text-3xl mb-4 mx-auto" />
            <h3 className="text-md font-semibold text-gray-800 mb-2">
              Expert Support
            </h3>
            <p className="text-sm text-gray-600">
              Receive dedicated support from experienced professionals whenever you need it.
            </p>
          </div>

          {/* Scalable Technology */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-xl transition-shadow">
            <FaChartLine className="text-[#0c324f] text-3xl mb-4 mx-auto" />
            <h3 className="text-md font-semibold text-gray-800 mb-2">
              Scalable Technology
            </h3>
            <p className="text-sm text-gray-600">
              Our systems grow with your business, handling increasing complexity and volume.
            </p>
          </div>

          {/* Data Security */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-xl transition-shadow">
            <FaShieldAlt className="text-[#0c324f] text-3xl mb-4 mx-auto" />
            <h3 className="text-md font-semibold text-gray-800 mb-2">
              Data Security
            </h3>
            <p className="text-sm text-gray-600">
              Robust security measures to protect your sensitive business and customer data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
