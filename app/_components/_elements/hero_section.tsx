"use client";

import React, { useEffect, useState } from "react";
import { SITE_CONFIG } from "@/config/content";

export default function HeroSection() {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Handle scroll event to create parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate background position based on scroll
  const backgroundPositionY = `calc(50% + ${scrollPosition * 0.4}px)`;

  return (
    <section
      className="relative flex bg-cover bg-center bg-no-repeat h-[50vh] overflow-hidden"
      style={{ 
        backgroundImage: "url('/images/traffic-sign-outdoors.jpg')",
        backgroundPositionY
      }}
    >
      {/* Tint overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content container with more centered positioning */}
      <div className="relative z-10 flex items-center w-full">
        <div className="container mx-auto px-4 flex justify-end">
          <div className="w-full max-w-xl text-white  px-8 py-6 bg-black/40 backdrop-blur-sm rounded-lg">
            <h1 className="text-5xl font-host-grotesk font-semibold mb-2">{SITE_CONFIG.companyName}</h1>
            <p className="text-xl font-medium text-yellow-300 mb-4">
              {SITE_CONFIG.companySlogan}
            </p>
            <p className="mb-6 text-gray-100">
              {SITE_CONFIG.heroSectionDescription}
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-yellow-500 text-black font-medium rounded-md shadow-lg hover:bg-yellow-400 transition-colors duration-300"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}