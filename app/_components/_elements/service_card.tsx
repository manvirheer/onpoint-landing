"use client";

import React from "react";
import { Service } from "../_types/service";

export default function ServiceCard({ service }: { service: Service }) {
  const { title, description, image, link } = service;

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl h-full flex flex-col md:flex-row">
      {/* Image container - takes full width on mobile, 60% on md screens */}
      <div className="h-3/4 md:h-auto md:w-3/5 overflow-hidden relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none"></div>
      </div>
      
      {/* Content container */}
      <div className="p-6 flex flex-col flex-grow md:w-3/5 justify-center">
        <div className="border-l-4 border-yellow-500 pl-3 mb-4">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        <a 
          href={link}
          className="inline-flex items-center text-yellow-500 font-medium hover:text-yellow-600 transition-colors group"
        >
          <span>Learn more</span>
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
