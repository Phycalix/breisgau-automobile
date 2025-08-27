import { Button } from "@/components/ui/button";
import showroomHero from "@/assets/showroom-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${showroomHero})` }}
      >
        <div className="absolute inset-0 bg-automotive-black/70"></div>
      </div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/049c8418-c2b5-4baa-8887-92e1fcbc507d.png" 
            alt="Breisgau Automobile" 
            className="h-24 md:h-32 w-auto mx-auto mb-6"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Ihr Traumauto wartet
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          Qualitätsgeprüfte Gebrauchtwagen mit Garantie und fairem Service
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-automotive-red hover:bg-automotive-red/90 text-white px-8 py-4 text-lg"
          >
            Fahrzeuge ansehen
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-automotive-black px-8 py-4 text-lg font-semibold"
          >
            Beratung vereinbaren
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;