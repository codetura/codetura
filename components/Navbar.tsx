'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'solution', 'about', 'contact'];
    const sectionElements = sections.map((id) => document.getElementById(id));
    const visibilityMap = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibilityMap.set(entry.target.id, entry.intersectionRatio);
        });

        let mostVisibleSection = 'home';
        let maxRatio = 0;

        visibilityMap.forEach((ratio, id) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            mostVisibleSection = id;
          }
        });

        setActiveSection(mostVisibleSection);
      },
      {
        threshold: Array.from({ length: 11 }, (_, i) => i * 0.1),
      }
    );

    sectionElements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      sectionElements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const navLinks = ['Home', 'Solution', 'About', 'Contact'];

  return (
    <header
      className="fixed top-0 left-0 w-full shadow-sm z-50"
      style={{
        background: 'linear-gradient(90deg, #061b3a 0%, #0c324f 50%, #0b6149 100%)',
      }}
    >
      <nav className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home">
              <Image src="/codetura.png" alt="Codetura Logo" width={120} height={80} />
            </a>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 rounded-md focus:outline-none transition"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((item) => {
              const id = item.toLowerCase();
              const isActive = activeSection === id;

              return (
                <a
                  key={item}
                  href={`#${id}`}
                  className={`text-white text-sm font-medium px-2 py-1 rounded-full transition-all duration-300
                    ${isActive ? 'underline underline-offset-4' : 'hover:bg-white/10'}
                  `}
                >
                  {item}
                </a>
              );
            })}
            <a
              href="#"
              className="ml-4 inline-block px-5 py-2 text-sm font-medium text-white border border-white rounded-lg hover:bg-white hover:text-[#0c324f] transition-all duration-200 ease-in-out"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-2 pb-4 transition-all duration-300">
            {navLinks.map((item) => {
              const id = item.toLowerCase();
              const isActive = activeSection === id;

              return (
                <a
                  key={item}
                  href={`#${id}`}
                  className={`block text-white px-4 py-2 rounded-md text-sm transition-all duration-200 ease-in-out ${
                    isActive
                      ? 'underline underline-offset-4'
                      : 'hover:bg-white hover:text-[#0c324f] hover:shadow-md'
                  }`}
                >
                  {item}
                </a>
              );
            })}
            <a
              href="#"
              className="block w-full text-center px-4 py-2 mt-2 text-sm font-medium text-white border border-white rounded-lg hover:bg-white hover:text-[#0c324f] transition-all duration-200 ease-in-out"
            >
              Get in touch
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
