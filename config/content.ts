// config/content.ts
"use client";

export const SITE_CONFIG = {
  companyName: "Trustworthy Traffic Control",
  companySlogan: "Safety is our top priority",
  // Map & Contact Section Details
  address: "13049 76 Ave Unit 201\nSurrey, BC V3W 2V7\nCanada",
  phone: "+1 (250) 228-5371",
  email: "info@onpointtrafffic.com",
  web3formsAccessKey : "c6cf84b4-a3fa-4334-9f93-f2cace46bfa4",
  mapEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5220.232320483546!2d-122.86131800000001!3d49.1414189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d97f91bfffff%3A0x4554c1c3e46d60dc!2s13049%2076%20Ave%20Unit%20201%2C%20Surrey%2C%20BC%20V3W%202V7!5e0!3m2!1sen!2sca!4v1741240519158!5m2!1sen!2sca",
  contactSectionTitle: "Get In Touch",
  contactSectionSubtitle:
    "We would love to hear from you and work with you. Please reach out to discuss your traffic management needs or any inquiries you may have.",
  contactSectionButtonText: "Contact Us",
  locationTitle: "Our Location",
  contactDetailsTitle: "Contact Details",
};

export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

export const BACKGROUND_PATTERN = {
  svgUrl:
    "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
  size: "60px 60px",
};

export const FOOTER_INFO = {
  copyright:
    `© 2025 On Point Traffic Services LTD. All rights reserved.`,

};

export const SERVICES = [
  {
    id: 1,
    title: "Traffic Control",
    description:
      "Our Traffic Control service provides professional traffic management solutions for construction sites, public events, and road works.",
    detailed:
      "We ensure the safe movement of vehicles and pedestrians by deploying certified traffic controllers and state-of-the-art safety equipment. Our team coordinates with local authorities to minimize disruption and maintain efficient traffic flow during high-demand periods.",
    image: "/images/traffic-1.jpg",
    link: "/services",
    features: [
      "Certified traffic controllers",
      "Real-time traffic monitoring",
      "Coordination with local authorities",
      "State-of-the-art safety equipment",
    ],
  },
  {
    id: 2,
    title: "Traffic Management Plans",
    description:
      "Our comprehensive plans optimize traffic flow during construction, events, or road closures.",
    detailed:
      "We develop customized traffic management strategies that include detailed layouts, risk assessments, and contingency measures. Our plans are designed to meet local safety regulations and ensure smooth operations, keeping your project on schedule and safe.",
    image: "/images/traffic-sign-outdoors.jpg",
    link: "/services",
    features: [
      "Customized traffic flow designs",
      "In-depth risk assessments",
      "Regulatory compliance",
      "Expert consultation",
    ],
  },
  {
    id: 3,
    title: "Equipment Rental",
    description:
      "Rent high-quality traffic signs, barriers, and signal systems for your projects.",
    detailed:
      "Our rental service provides access to the latest safety equipment maintained to the highest standards. Whether you need short-term or long-term solutions, our flexible rental options help you manage costs while ensuring reliable performance on your site.",
    image: "/images/traffic-2.jpg",
    link: "/services",
    features: [
      "Latest generation safety equipment",
      "Flexible rental periods",
      "Regular maintenance and support",
      "Cost-effective solutions",
    ],
  },
  {
    id: 4,
    title: "Traffic Control Training",
    description:
      "Accredited training programs to enhance your traffic control skills.",
    detailed:
      "Our training courses combine theoretical knowledge with hands-on practice, preparing participants for high-risk environments. As a WorkSafeBC approved certifier, our programs ensure that trainees are fully equipped with the latest safety protocols and industry best practices.",
    image: "/images/traffic-2.jpg",
    link: "/services",
    features: [
      "Accredited training programs",
      "Experienced instructors",
      "Hands-on practical sessions",
      "WorkSafeBC approved certification",
    ],
  },
];
