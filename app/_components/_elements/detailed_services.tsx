"use client";

import { useEffect, useRef } from "react";
import { SERVICES } from "@/config/content";
import { ServiceProps } from "../_types/service";
import Link from "next/link";
import Image from "next/image";

export default function DetailedServicesSection() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.05}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative py-16 bg-gray-50 overflow-hidden text-gray-800">
      {/* Parallax Background Pattern */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.2\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: "60px 60px",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Our Services</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Explore our comprehensive range of traffic management services designed to keep your projects running safely and efficiently.
          </p>

        </div>

        <div className="space-y-12">
          {SERVICES.map((service: ServiceProps, index: number) => (
            <div
              key={service.id}
              className={`flex flex-col lg:flex-row gap-8 items-center bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-2/5 h-auto lg:h-96 relative">
                <div className="w-full h-full relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transform transition-transform duration-500 hover:scale-105"
                  />

                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-3/5 p-8">
                <div className={`w-12 h-1 bg-yellow-500 mb-4 ${index % 2 === 1 ? "lg:ml-auto" : ""}`}></div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <p className="text-gray-600 mb-4">{service.detailed}</p>

                {/* Features List */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features?.map((feature: string, i: number) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-yellow-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
