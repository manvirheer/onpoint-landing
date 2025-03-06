"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { NAV_LINKS, SITE_CONFIG } from '@/config/content';

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Until the component is mounted, don't render anything
  if (!mounted) return null;

  return (
    <header className="bg-sec text-gray-900">
      <div className="max-w-7/12 mx-auto px-2 sm:px-6 lg:px-4">
        <div className="flex justify-between items-center h-36">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
              <img src="/images/logo.png" alt="logo" className="h-32 w-32" />
            </Link>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:bg-pr hover:text-white hover:shadow px-3 py-2 rounded-md text-md font-medium relative ${
                  pathname === link.href
                    ? "after:content-[''] after:block after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-8 after:h-1 after:bg-ter after:rounded-full"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:bg-pr hover:text-white block px-3 py-2 rounded-md text-base font-medium relative ${
                  pathname === link.href
                    ? "after:content-[''] after:block after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-8 after:h-1 after:bg-ter after:rounded-full"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
