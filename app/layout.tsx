// app/layout.tsx
import './globals.css';
import type { ReactNode } from 'react';
import MainLayout from './main_layout';

export const metadata = {
  title: 'Traffic Control Service Provider',
  description: 'A website for a traffic control service provider built with Next.js and TypeScript',
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
