import { AboutPreview } from "@/components/home/AboutPreview";
import { CTA } from "@/components/home/CTA";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { Hero } from "@/components/home/Hero";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <AboutPreview />
      <CTA />
    </>
  );
}