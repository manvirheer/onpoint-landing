"use client";

import React, { useState, useEffect } from 'react';
import Header from './_components/_elements/main_header';
import Footer from './_components/_elements/main_footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Optionally, delay render until client-side code is ready.
  if (!mounted) return null;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-sec">{children}</main>
      <Footer />
    </div>
  );
};

export default React.memo(MainLayout);
