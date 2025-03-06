// config/content.ts
"use client";

export const SITE_CONFIG = {
  companyName: 'On Point Traffic Services LTD.',
  companyDescription:
    'Your reliable partner for effective traffic management solutions. We provide top-notch services to ensure safe and efficient road operations.',
  companySlogan: 'Pointing you in the right direction',
};

export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

export const FOOTER_INFO = {
  copyright:
    `© 2025 On Point Traffic Services LTD. All rights reserved.`,

};

export const SERVICES = [
  {
    id: 1,
    title: "Traffic Control",
    description:
      "Professional traffic management for construction sites, events, and road works with certified controllers.",
    image: "/images/traffic-sign-outdoors.jpg",
    link: "/services/traffic-control",
  },
  {
    id: 2,
    title: "Traffic Management Plans",
    description:
      "Custom traffic management plans designed to meet safety regulations and optimize traffic flow.",
    image: "/images/traffic-sign-outdoors.jpg",
    link: "/services/management-plans",
  },
  {
    id: 3,
    title: "Equipment Rental",
    description:
      "High-quality traffic signs, barriers, and safety equipment available for short or long-term rental.",
    image: "/images/traffic-sign-outdoors.jpg",
    link: "/services/equipment-rental",
  },
];
