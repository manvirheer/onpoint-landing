"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { SERVICES } from "@/config/content";

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState("");

  // Handle scroll and update active category
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset to trigger earlier

      // Find the current visible section
      SERVICES.forEach((category) => {
        const element = document.getElementById(
          `category-${category.category.replace(/\s+/g, "-").toLowerCase()}`
        );
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveCategory(category.category);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to category section when nav item is clicked
  const scrollToCategory = (categoryId: string) => {
    const element = document.getElementById(`category-${categoryId}`);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, // Offset for header
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative py-16 bg-sec">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-10 justify-items-center items-center"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.2\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: "60px 60px",
        }}
      ></div>
      <div className="flex justify-center">
        {/* Changed max width to span a wider area */}
        <div className="max-w-8/12 m-auto w-full px-2 md:px-6 relative z-10 text-gray-800">
          <div className="text-center mb-16 justify-center">
            <h2 className="text-5xl text-black font-host-grotesk font-semibold mb-4">
              Services
            </h2>
            <div className="w-60 h-1 bg-yellow-500 mx-auto mb-6"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 justify-center">
            {/* Side Navigation - Compact version */}
            <div className="hidden lg:block">
              <div className="sticky top-1/2 transform -translate-y-1/2 bg-ter rounded-xl p-4 shadow-lg max-h-96 overflow-auto">
                <nav>
                  <ul className="space-y-2">
                    {SERVICES.map((category) => {
                      const categoryId = category.category
                        .replace(/\s+/g, "-")
                        .toLowerCase();
                      const isActive = activeCategory === category.category;

                      return (
                        <li key={categoryId} className="p-4">
                          <button
                            onClick={() => scrollToCategory(categoryId)}
                            className={`w-full text-left py-2 px-3 rounded-lg transition-all duration-200 text-lg ${
                              isActive
                                ? "bg-yellow-500 text-white font-medium shadow-md "
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

            {/* Main Content - Now using full width */}
            <div className="flex-1 w-full">
              {SERVICES.map((category) => {
                const services = category.services;
                // Use 1 column for a single service, otherwise 2 columns
                const gridCols =
                  services.length === 1
                    ? "grid-cols-1 "
                    : "grid-cols-1 md:grid-cols-2";
                const categoryId = category.category
                  .replace(/\s+/g, "-")
                  .toLowerCase();

                return (
                  <div
                    id={`category-${categoryId}`}
                    key={category.category}
                    className="mb-24 last:mb-8 scroll-mt-24 max-w-9/12 m-auto"
                  >
                    <div className="text-center mb-12">
                      <h3 className="text-3xl font-bold text-black mb-4">
                        {category.category}
                      </h3>
                      <p className="text-gray-700 max-w-4xl mx-auto">
                        {category.categoryDescription}
                      </p>
                    </div>

                    <div className={`grid ${gridCols} gap-6`}>
                      {services.map((service, index) => (
                        <div
                          id={`service-${service.id}`}
                          key={service.id}
                          className={`border border-gray-200 rounded-lg p-6 transition-all duration-300 hover:shadow-lg ${
                            services.length === 3 && index === 0
                              ? "md:col-span-2"
                              : ""
                          }`}
                        >
                          <div className="relative w-full h-84 mb-6 overflow-hidden rounded-lg group">
                            <Image
                              src={service.image}
                              alt={service.title}
                              fill
                              sizes="(max-width: 768px) 100vw, 50vw"
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                          <h4 className="text-2xl font-bold mb-4">
                            {service.title}
                          </h4>
                          <p className="mb-6 text-gray-800">
                            {service.description}
                          </p>

                          {/* Detailed section if available */}
                          {service.detailed && service.detailed.length > 0 && (
                            <div className="mb-6 space-y-2">
                              {service.detailed.map((detail, idx) => (
                                <p key={idx} className="text-gray-700">
                                  {detail}
                                </p>
                              ))}
                            </div>
                          )}

                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {service.features?.map((feature, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="mr-2 text-yellow-500 font-bold">
                                  ✓
                                </span>
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
          </div>
        </div>
      </div>
    </section>
  );
}
