"use client";

import React, { useState } from "react";
import { ServiceProps } from "../_types/service";

export default function ServiceCard({ service }: { service: ServiceProps }) {
  const { title, image, description, detailed, features } = service;
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl flex flex-col text-gray-800">
      {/* Image and Title Header */}
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <h3 className="text-2xl font-bold text-white p-6">{title}</h3>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 flex-grow text-gray-800">
        <p className="text-gray-600">{description}</p>
        <button 
          onClick={() => setExpanded(!expanded)}
          className="mt-4 text-yellow-500 font-medium"
        >
          {expanded ? "Show Less" : "Read More"}
        </button>
        {expanded && (
          <div className="mt-4">
            <p className="text-gray-600">{detailed}</p>
            {features && (
              <ul className="list-disc list-inside text-gray-600 ml-2 mt-2">
                {features.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
      
      {/* Call to Action */}
      <div className="p-6 pt-0">
        <a 
          href={`services#service-${service.id}`}
          className="inline-flex items-center text-yellow-500 font-medium hover:text-yellow-600 transition-colors group"
        >
          <span>Learn more about {title}</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 ml-1 transform transition-transform group-hover:translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}
