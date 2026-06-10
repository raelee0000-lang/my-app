"use client";

import { AchievementsSection } from "./AchievementsSection";
import { BusinessSection } from "./BusinessSection";
import { CaseStudiesSection } from "./CaseStudiesSection";
import { ContactSection } from "./ContactSection";
import { GlobalPresenceSection } from "./GlobalPresenceSection";
import { HeroSection } from "./HeroSection";
import { SupplyChainSection } from "./SupplyChainSection";
import { WhyChooseUsSection } from "./WhyChooseUsSection";

export function PresentationPage() {
  return (
    <main className="presentation-scroll relative bg-black">
      <HeroSection />
      <AchievementsSection />
      <BusinessSection />
      <SupplyChainSection />
      <CaseStudiesSection />
      <GlobalPresenceSection />
      <WhyChooseUsSection />
      <ContactSection />
    </main>
  );
}
