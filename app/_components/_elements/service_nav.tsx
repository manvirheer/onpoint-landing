// app/_components/_elements/service_nav.tsx

import React from "react";
import { ServiceNavProps } from "../_types/service";

const ServiceNav: React.FC<ServiceNavProps> = ({
  activeCategory,
  mobileMenuOpen,
  setMobileMenuOpen,
  scrollToCategory,
  services,
}) => {
  return (
    <div>
      {/* Mobile Navigation (full width on mobile) */}
      <div className="lg:hidden mb-8 relative px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl text-black font-host-grotesk font-semibold mb-4">
            Services
          </h2>
          <div className="w-40 h-1 bg-yellow-500 mx-auto mb-6"></div>
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="w-full bg-ter text-white py-3 px-4 rounded-lg flex justify-between items-center shadow-md"
        >
          <span className="font-medium">
            {activeCategory || "Select a Category"}
          </span>
          <svg
            className={`w-5 h-5 transition-transform ${
              mobileMenuOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {mobileMenuOpen && (
          <div className="absolute z-20 mt-2 w-full bg-ter rounded-lg shadow-xl">
            <ul className="py-2">
              {services.map((category) => {
                const id = category.category.replace(/\s+/g, "-").toLowerCase();
                const isActive = activeCategory === category.category;
                return (
                  <li key={id}>
                    <button
                      onClick={() => scrollToCategory(id)}
                      className={`w-full text-left py-2 px-4 ${
                        isActive ? "bg-yellow-500 text-white font-medium" : "text-white hover:bg-black/10"
                      }`}
                    >
                      {category.category}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>

      {/* Desktop Navigation (placed in left column) */}
      <div className="hidden lg:block">
        {/* Center-align the title */}
        <div className="mb-8 text-center">
          <h2 className="text-4xl md:text-5xl text-black font-host-grotesk font-semibold mb-4">
            Services
          </h2>
          <div className="w-40 h-1 bg-yellow-500 mx-auto mb-6"></div>
        </div>
        <div className="sticky top-24 bg-ter rounded-xl p-6 shadow-lg max-h-[calc(100vh-200px)] overflow-auto">
          <nav>
            <ul className="space-y-2">
              {services.map((category) => {
                const id = category.category.replace(/\s+/g, "-").toLowerCase();
                const isActive = activeCategory === category.category;
                return (
                  <li key={id} className="p-3">
                    <button
                      onClick={() => scrollToCategory(id)}
                      className={`w-full text-left py-2 px-3 rounded-lg transition-all duration-200 text-lg ${
                        isActive
                          ? "bg-yellow-500 text-white font-medium shadow-md"
                          : "text-white hover:bg-black/10"
                      }`}
                    >
                      {category.category}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ServiceNav;