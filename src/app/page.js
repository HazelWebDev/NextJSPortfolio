import AboutSection from "../../components/AboutSection";
import HeroSection from "../../components/HeroSection";
import Gallery from "../../components/Gallery";
import ProjectSection from "../../components/ProjectSection";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <link rel="icon" href="/FlowerLogo3.png" sizes="any" />

      <div className="container mt-24 mx-auto p-3 py-4">
        <HeroSection />
        <AboutSection />
        <Gallery />
        <ProjectSection />
      </div>
      <Footer />
    </main>
  );
}
