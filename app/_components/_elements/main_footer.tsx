"use client";

import { FOOTER_INFO, SITE_CONFIG } from '@/config/content'
import { useEffect, useState } from 'react';

export default function Footer() {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  
  return (
    <footer className="bg-sec shadow p-4 text-center" suppressHydrationWarning={true}>
      <p className="text-sm text-gray-600">{FOOTER_INFO.copyright}</p>
    </footer>
  );
}
