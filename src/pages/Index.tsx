import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Inventory from "@/components/Inventory";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Set page title and meta description for SEO
    document.title = "Breisgau Automobile - Gebrauchtwagen Freiburg | Qualität & Service";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Breisgau Automobile - Ihr vertrauensvoller Partner für Gebrauchtwagen in Freiburg. Qualitätsgeprüfte Fahrzeuge, faire Preise und persönlicher Service.');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Inventory />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
