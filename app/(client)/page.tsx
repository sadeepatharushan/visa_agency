import AboutUs from "@/components/About";
import ConsultationForm from "@/components/ConsultationForm";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import VisaMap from "@/components/Visa-Map";

export default async function Home() {

  return (
    <main className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <div className="max-w-7xl mx-auto">
        <AboutUs />
        <Services />
        <VisaMap />
        <ConsultationForm />
        <Testimonials /> 
        <Faqs />  
      </div>
      <Footer />
    </main>
  );
}
