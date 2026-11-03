import React, { useState, useRef } from 'react';
import { Header } from './components/Header';
import { HomeSection } from './components/HomeSection';
import { AboutSection } from './components/AboutSection';
import { PlatformSection } from './components/PlatformSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { MarketPricingSection } from './components/MarketPricingSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { PilotModal } from './components/PilotModal';
import { DemoPrivacyModal } from './components/DemoPrivacyModal';

export default function App() {
  const [isPilotModalOpen, setIsPilotModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  // References to restore focus to triggering buttons
  const pilotTriggerRef = useRef(null);
  const privacyTriggerRef = useRef(null);

  function handleOpenPilotModal(triggerElement) {
    if (triggerElement) {
      pilotTriggerRef.current = triggerElement;
    }
    setIsPilotModalOpen(true);
  }

  function handleClosePilotModal() {
    setIsPilotModalOpen(false);
  }

  function handleOpenPrivacyModal(triggerElement) {
    if (triggerElement) {
      privacyTriggerRef.current = triggerElement;
    }
    setIsPrivacyModalOpen(true);
  }

  function handleClosePrivacyModal() {
    setIsPrivacyModalOpen(false);
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-plum-900 selection:bg-sage-200 selection:text-plum-950 font-sans">
      {/* Sticky Navigation Header */}
      <Header onOpenPilotModal={handleOpenPilotModal} />

      {/* Main Content: 6 Core Sections in Exact Order */}
      <main id="main-content" className="flex-1">
        {/* 1. Home */}
        <HomeSection onOpenPilotModal={handleOpenPilotModal} />

        {/* 2. About */}
        <AboutSection />

        {/* 3. Platform */}
        <PlatformSection />

        {/* 4. How It Works */}
        <HowItWorksSection onOpenPilotModal={handleOpenPilotModal} />

        {/* 5. Market & Pricing */}
        <MarketPricingSection onOpenPilotModal={handleOpenPilotModal} />

        {/* 6. FAQ */}
        <FAQSection />
      </main>

      {/* 7. Footer */}
      <Footer
        onOpenPilotModal={handleOpenPilotModal}
        onOpenPrivacyModal={handleOpenPrivacyModal}
      />

      {/* Accessible Modals */}
      <PilotModal
        isOpen={isPilotModalOpen}
        onClose={handleClosePilotModal}
        triggerRef={pilotTriggerRef}
      />

      <DemoPrivacyModal
        isOpen={isPrivacyModalOpen}
        onClose={handleClosePrivacyModal}
        triggerRef={privacyTriggerRef}
      />
    </div>
  );
}
