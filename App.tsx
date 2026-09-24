import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { TournamentShowcase } from './components/TournamentShowcase';
import { DownloadSection } from './components/DownloadSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PublishingGuideModal } from './components/PublishingGuideModal';

export default function App() {
  const [guideOpen, setGuideOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#060709] text-[#e2e8f0] flex flex-col font-sans selection:bg-red-600 selection:text-white">
      {/* Top Header */}
      <Header onOpenGuide={() => setGuideOpen(true)} />

      {/* Main Page Flow */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Features Section */}
        <Features />

        {/* 3. Esports Atmosphere Showcase */}
        <TournamentShowcase />

        {/* 4. Download Section & 4-Step Android Installation */}
        <DownloadSection onOpenGuide={() => setGuideOpen(true)} />

        {/* 5. FAQ Section */}
        <FAQSection />

        {/* 6. Official Contact & Support Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenGuide={() => setGuideOpen(true)} />

      {/* Mobile/Android Publishing & Configuration Guide Modal */}
      <PublishingGuideModal 
        isOpen={guideOpen} 
        onClose={() => setGuideOpen(false)} 
      />
    </div>
  );
}
