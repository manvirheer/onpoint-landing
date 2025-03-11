// app/_components/_elements/service_content.tsx

import React from "react";
import Image from "next/image";
import { ServicesContentProps } from "../_types/service";

const ServicesContent: React.FC<ServicesContentProps> = ({ services }) => {
  return (
    <div className="px-4 lg:px-6">
      {services.map((category) => {
        const id = category.category.replace(/\s+/g, "-").toLowerCase();
        const gridCols = category.services.length === 1 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2";
        return (
          <div key={category.category} id={`category-${id}`} className="mb-12 md:mb-24 last:mb-8 scroll-mt-24">
            <div className="text-center mb-6 md:mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-2 md:mb-4">
                {category.category}
              </h3>
              <p className="text-gray-700 max-w-4xl mx-auto px-2">
                {category.categoryDescription}
              </p>
            </div>
            <div className={`grid ${gridCols} gap-4 md:gap-6`}>
              {category.services.map((service, index) => (
                <div
                  key={service.id}
                  id={`service-${service.id}`}
                  className={`border border-gray-200 rounded-lg p-4 md:p-6 transition-all duration-300 hover:shadow-lg ${
                    category.services.length === 3 && index === 0 ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="relative w-full h-56 md:h-72 mb-4 md:mb-6 overflow-hidden rounded-lg group">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">
                    {service.title}
                  </h4>
                  <p className="mb-4 md:mb-6 text-gray-800">
                    {service.description}
                  </p>
                  {service.detailed && service.detailed.length > 0 && (
                    <div className="mb-4 md:mb-6 space-y-2">
                      {service.detailed.map((detail, idx) => (
                        <p key={idx} className="text-gray-700">
                          {detail}
                        </p>
                      ))}
                    </div>
                  )}
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                    {service.features?.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-2 text-yellow-500 font-bold">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesContent;