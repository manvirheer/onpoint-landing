// app/_components/_elements/detailed_services.tsx

"use client";

import React, { useState, useEffect } from "react";
import ServiceNav from "./service_nav";
import ServicesContent from "./service_content";
import { SERVICES } from "@/config/content";
import { Category } from "../_types/service";

const ServicesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const scrollToCategory = (categoryId: string) => {
    const element = document.getElementById(`category-${categoryId}`);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      SERVICES.forEach((category: Category) => {
        const id = category.category.replace(/\s+/g, "-").toLowerCase();
        const element = document.getElementById(`category-${id}`);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveCategory(category.category);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative py-8 md:py-16 bg-sec text-gray-800">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.2\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: "60px 60px",
        }}
      ></div>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          {/* Left Column: Navigation */}
          <div className="w-full lg:w-1/4 lg:sticky lg:self-start lg:top-24">
            <ServiceNav
              activeCategory={activeCategory}
              mobileMenuOpen={mobileMenuOpen}
              setMobileMenuOpen={setMobileMenuOpen}
              scrollToCategory={scrollToCategory}
              services={SERVICES}
            />
          </div>
          {/* Right Column: Content */}
          <div className="flex-1">
            <ServicesContent services={SERVICES} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;