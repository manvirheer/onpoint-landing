// app/page.tsx
import HeroSection from './_components/_elements/hero_section';
import ServiceList from './_components/_elements/service_list';
import MapSection from './_components/_elements/map_section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServiceList />
      <MapSection />
    </>
  );
}
