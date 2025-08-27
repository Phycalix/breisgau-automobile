import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-automotive-black text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/049c8418-c2b5-4baa-8887-92e1fcbc507d.png" 
              alt="Breisgau Automobile Logo" 
              className="h-12 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-automotive-red transition-colors">
              Home
            </a>
            <a href="#inventory" className="text-white hover:text-automotive-red transition-colors">
              Fahrzeuge
            </a>
            <a href="#services" className="text-white hover:text-automotive-red transition-colors">
              Services
            </a>
            <a href="#about" className="text-white hover:text-automotive-red transition-colors">
              Über uns
            </a>
            <a href="#contact" className="text-white hover:text-automotive-red transition-colors">
              Kontakt
            </a>
          </nav>
          <Button variant="destructive" className="bg-automotive-red hover:bg-automotive-red/90">
            Jetzt anrufen
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;