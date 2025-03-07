import '../globals.css';
import DetailedServicesSection from '../_components/_elements/detailed_services';

export const metadata = {
  title: 'Traffic Control Service Provider',
  description: 'A website for a traffic control service provider built with Next.js and TypeScript',
};

export default function RootLayout() {
  return (
        <>
          <DetailedServicesSection />
        </>
  );
}
