import FeaturedCourses from "@/components/FeaturedCourses";
import GridSection from "@/components/GridSection";
import HeroSection from "@/components/HeroSection";
import UpcomingWave from "@/components/UpcomingWave";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#e1a0b9]/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection></HeroSection>
      <FeaturedCourses></FeaturedCourses>
      <GridSection></GridSection>
      <UpcomingWave></UpcomingWave>
    </main>
  );
}
