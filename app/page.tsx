import Hero from "@/components/Hero";
import AboutUs from "@/components/About";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Faqs from "@/components/Faqs";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <div className="max-w-7xl mx-auto">
        <AboutUs />
        <Services />
        <Faqs />
      </div>
      <Footer />
    </main>
  );
}
