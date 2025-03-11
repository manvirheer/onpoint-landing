// app/layout.tsx
import './globals.css';
import type { ReactNode } from 'react';
import MainLayout from './main_layout';
import { SITE_CONFIG } from '@/config/content';

export const metadata = {
  title: SITE_CONFIG.companyName,
  description: SITE_CONFIG.companySlogan,
  icons: {
    icon: '/favicon/favicon.png',
    apple: '/favicon/apple-touch-icon.png',
    other: [
      { rel: 'icon', url: '/favicon/favicon-16x16.png', sizes: '16x16' },
      { rel: 'icon', url: '/favicon/android-chrome-192x192.png', sizes: '192x192' },
      { rel: 'icon', url: '/favicon/android-chrome-512x512.png', sizes: '512x512' },
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
