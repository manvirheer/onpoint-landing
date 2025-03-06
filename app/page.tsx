import './globals.css';
import type { ReactNode } from 'react';
import MainLayout from './_components/_layouts/main_layout';
import Header from './_components/_elements/main_header';
import ServiceList from './_components/_elements/service_list';
import HeroSection from './_components/_elements/hero_section';

export const metadata = {
  title: 'Traffic Control Service Provider',
  description: 'A website for a traffic control service provider built with Next.js and TypeScript',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MainLayout><HeroSection/><ServiceList/></MainLayout>
      </body>
    </html>
  );
}
