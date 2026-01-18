import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import RenewableEnergy from '@/components/sections/renewable-energy';
import Calibration from '@/components/sections/calibration';
import OtherVentures from '@/components/sections/other-ventures';
import Contact from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <RenewableEnergy />
        <Calibration />
        <OtherVentures />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
