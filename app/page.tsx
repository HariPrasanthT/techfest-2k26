'use client';
import HeroSection from '@/components/HeroSection';
import MissionTimeline from '@/components/MissionTimeline';
import EventGrid from '@/components/EventGrid';
import WorkshopSpotlight from '@/components/WorkshopSpotlight';
import RegistrationModal from '@/components/RegistrationModal';
import Footer from '@/components/Footer';
import SplitLine from '@/components/SplitLine';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyber-green selection:text-black">
      <HeroSection />
      <MissionTimeline />
      <SplitLine />
      <EventGrid />
      <SplitLine />
      <WorkshopSpotlight />
      <SplitLine />
      <Footer />
      <RegistrationModal />
    </main>
  );
}
