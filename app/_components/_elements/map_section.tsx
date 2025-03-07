"use client";

import { useEffect, useState, useRef } from "react";
import { SITE_CONFIG } from "@/config/content";

export default function MapSection() {
  const [mounted, setMounted] = useState(false);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    // Simple parallax effect
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const scrollPosition = window.scrollY;
      parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.05}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative py-12 bg-gray-50 overflow-hidden"> 
      {/* Parallax Background Elements */}
      <div 
        ref={parallaxRef} 
        className="absolute inset-0 z-0 opacity-10"
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.2\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '60px 60px',
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Title Section */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">{SITE_CONFIG.contactSectionTitle}</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            {SITE_CONFIG.contactSectionSubtitle}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch gap-6">
          {/* Left column: Map */}
          <div className="w-full lg:w-3/5">
            <div className="overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-xl bg-white">
              <iframe
                src={SITE_CONFIG.mapEmbedSrc}
                width="600"
                height="450"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-96"
              ></iframe>
            </div>
          </div>
          
          {/* Right column: Compact Contact Information and Button */}
          <div className="w-full lg:w-2/5 flex flex-col">
            <div className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col">
              <div className="flex-1">
                <div className="mb-4">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">{SITE_CONFIG.locationTitle}</h3>
                  <p className="text-gray-600 text-md whitespace-pre-line">
                    {SITE_CONFIG.address}
                  </p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">{SITE_CONFIG.contactDetailsTitle}</h3>
                  <p className="text-gray-600 text-md whitespace-pre-line">
                    {SITE_CONFIG.phone} <br />
                    {SITE_CONFIG.email}
                  </p>
                </div>
              </div>
              
              <a
                href="/contact"
                className="inline-block w-full text-center px-6 py-3 bg-yellow-500 text-black font-medium rounded-md shadow hover:bg-yellow-400 transition-all duration-300"
              >
                {SITE_CONFIG.contactSectionButtonText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
