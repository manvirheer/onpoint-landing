"use client";

import React from "react";
import ServiceCard from "./service_card";
import { SERVICES } from "@/config/content";
import { ServiceProps } from "../_types/service";

export default function ServicesSection() {
  return (
    <section className="relative py-8 bg-gray-50">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.2\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: "60px 60px",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl text-black font-host-grotesk font-semibold mb-4">
            Services
          </h2>
          <div className="w-4/5 h-1 bg-yellow-500 mx-auto mb-6"></div>
        </div>

        {SERVICES.map((category) => (
          <div key={category.category} className="mb-12 justify-items-center items-center">
            <div className="text-center mb-6">
              <h3 className="text-3xl font-semibold text-black font-host-grotesk">
                {category.category}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center">
              {category.services.map((service: ServiceProps) => (
                <div
                  id={`service-${service.id}`}
                  key={service.id}
                  className="w-fit"
                >
                  <ServiceCard service={service} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
