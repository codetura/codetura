import React from "react";
import Image from "next/image";
import {
  FaCashRegister,
  FaFileInvoiceDollar,
  FaProjectDiagram,
  FaDatabase,
  FaHandsHelping,
  FaTools,
} from "react-icons/fa";

// Define props type
type SolutionCardProps = {
  imgSrc: string;
  icon: React.ReactNode;
  title: string;
  description: string;
};

// Functional component with props typed
const SolutionCard: React.FC<SolutionCardProps> = ({ imgSrc, icon, title, description }) => (
  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-3 flex flex-col items-center text-center">
    <div className="w-[200px] h-[120px] relative mb-2">
      <Image
        src={imgSrc}
        alt={title}
        fill
        className="rounded-md object-cover"
        sizes="(max-width: 768px) 100vw, 200px"
      />
    </div>
    {icon}
    <h3 className="text-base font-semibold text-gray-900 mb-1">{title}</h3>
    <p className="text-gray-600 text-xs leading-tight">{description}</p>
  </div>
);

const Solutions: React.FC = () => {
  return (
    <section className="py-10 bg-code-gradient scroll-mt-8" id="solution">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-[#0c324f] mb-3">Our Solutions</h2>
        <p className="text-gray-700 mb-6 max-w-xl mx-auto text-xs">
          Discover how our powerful and flexible systems can transform your business processes.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <SolutionCard
            imgSrc="/billingsystem.png"
            icon={<FaCashRegister className="text-[#0c324f] text-xl mb-1" />}
            title="POS Systems"
            description="Streamline sales and inventory with robust POS solutions."
          />
          <SolutionCard
            imgSrc="/possystem.png"
            icon={<FaFileInvoiceDollar className="text-[#0c324f] text-xl mb-1" />}
            title="Billing Systems"
            description="Automate invoicing and manage subscriptions with ease."
          />
          <SolutionCard
            imgSrc="/ERP-system.jpeg"
            icon={<FaProjectDiagram className="text-[#0c324f] text-xl mb-1" />}
            title="ERP Systems"
            description="Integrate business processes for better efficiency."
          />
          <SolutionCard
            imgSrc="/datarecovery.jpg"
            icon={<FaDatabase className="text-[#0c324f] text-xl mb-1" />}
            title="Data Recovery"
            description="Recover lost or corrupted data efficiently."
          />
          <SolutionCard
            imgSrc="/ITconsultancy.jpg"
            icon={<FaHandsHelping className="text-[#0c324f] text-xl mb-1" />}
            title="IT Consultancy"
            description="Expert tech guidance aligned with business goals."
          />
          <SolutionCard
            imgSrc="/ITsolution.png"
            icon={<FaTools className="text-[#0c324f] text-xl mb-1" />}
            title="IT Solutions"
            description="Custom IT solutions to solve unique challenges."
          />
        </div>
      </div>
    </section>
  );
};

export default Solutions;
