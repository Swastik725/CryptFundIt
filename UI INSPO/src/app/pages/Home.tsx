import React from 'react';
import { CrowdfundingHero } from '../components/CrowdfundingHero';
import { NgoRegistrationSection } from '../components/NgoRegistrationSection';

export function Home() {
  return (
    <div className="w-full">
      <CrowdfundingHero />
      <NgoRegistrationSection />
    </div>
  );
}
