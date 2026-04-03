import { BusinessModel } from "@/components/BusinessModel";
import { CompetitiveLandscape } from "@/components/CompetitiveLandscape";
import { ContactForm } from "@/components/ContactForm";
import { FullVision } from "@/components/FullVision";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { LoyaltyEngine } from "@/components/LoyaltyEngine";
import { MarketOpportunity } from "@/components/MarketOpportunity";
import { MerchantROI } from "@/components/MerchantROI";
import { Problem } from "@/components/Problem";
import { Roadmap } from "@/components/Roadmap";
import { Solution } from "@/components/Solution";
import { Team } from "@/components/Team";
import { TheAsk } from "@/components/TheAsk";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Problem />
      <Solution />
      <FullVision />
      <HowItWorks />
      <LoyaltyEngine />
      <MarketOpportunity />
      <BusinessModel />
      <MerchantROI />
      <CompetitiveLandscape />
      <Roadmap />
      <Team />
      <TheAsk />
      <ContactForm />
    </main>
  );
}
