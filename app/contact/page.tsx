import '../globals.css';
import type { ReactNode } from 'react';
import MainLayout from '../layout';
import Header from '../_components/_elements/main_header';
import ServiceList from '../_components/_elements/service_list';
import HeroSection from '../_components/_elements/hero_section';
import MapSection from '../_components/_elements/map_section';
import ContactForm from '../_components/_elements/contact';

export const metadata = {
  title: 'Traffic Control Service Provider',
  description: 'A website for a traffic control service provider built with Next.js and TypeScript',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
        <>
          <ContactForm />
        </>
  );
}
