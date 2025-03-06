"use client";

import React from "react";
import ServiceCard from "./service_card";
import { SERVICES } from "@/config/content";
import { ServiceProps } from "../_types/service";

export default function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl text-black font-host-grotesk font-semibold mb-4">Services</h2>
          <div className="w-4/5 h-1 bg-yellow-500 mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service: ServiceProps) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
