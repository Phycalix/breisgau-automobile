import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import carInventory from "@/assets/car-inventory.jpg";

const Inventory = () => {
  const featuredVehicles = [
    {
      id: 1,
      brand: "BMW",
      model: "3er",
      year: 2020,
      mileage: "45.000 km",
      fuel: "Diesel",
      price: "€28.900",
      image: carInventory
    },
    {
      id: 2,
      brand: "Mercedes",
      model: "C-Klasse",
      year: 2019,
      mileage: "52.000 km",
      fuel: "Benzin",
      price: "€31.500",
      image: carInventory
    },
    {
      id: 3,
      brand: "Audi",
      model: "A4",
      year: 2021,
      mileage: "38.000 km",
      fuel: "Hybrid",
      price: "€34.200",
      image: carInventory
    }
  ];

  return (
    <section id="inventory" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Fahrzeuge
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-automotive-black mb-6">
            Aktuelle Fahrzeuge
          </h2>
          <p className="text-xl text-automotive-gray max-w-3xl mx-auto">
            Entdecken Sie unsere sorgfältig ausgewählten Gebrauchtwagen. 
            Jedes Fahrzeug wird vor dem Verkauf gründlich geprüft.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredVehicles.map((vehicle) => (
            <Card key={vehicle.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={vehicle.image} 
                  alt={`${vehicle.brand} ${vehicle.model}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-automotive-red">
                  Geprüft
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-automotive-black mb-2">
                  {vehicle.brand} {vehicle.model}
                </h3>
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-automotive-gray">
                  <div>Baujahr: {vehicle.year}</div>
                  <div>Kraftstoff: {vehicle.fuel}</div>
                  <div>Kilometerstand: {vehicle.mileage}</div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-automotive-red">
                    {vehicle.price}
                  </span>
                  <Button variant="outline" className="border-automotive-black text-automotive-black hover:bg-automotive-black hover:text-white">
                    Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>


        <div className="text-center space-y-8">
          <Button 
            size="lg"
            className="bg-automotive-red hover:bg-automotive-red/90 text-white px-8 py-4 mr-4"
          >
            Alle Fahrzeuge anzeigen
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="border-automotive-black text-automotive-black hover:bg-automotive-black hover:text-white px-8 py-4"
            onClick={() => window.open('https://home.mobile.de/BREISGAUERAUTOMOBILE#ses', '_blank')}
          >
            Zu mobile.de
          </Button>
        </div>

        {/* Mobile.de Iframe Integration */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-automotive-black mb-4">
              Aktuelle Angebote von mobile.de
            </h3>
            <p className="text-lg text-automotive-gray">
              Sehen Sie hier unsere komplette Fahrzeugauswahl direkt von mobile.de
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://home.mobile.de/BREISGAUERAUTOMOBILE#ses"
              width="100%"
              height="800"
              frameBorder="0"
              className="w-full min-h-[800px]"
              title="Breisgau Automobile Fahrzeuge auf mobile.de"
              loading="lazy"
            />
          </div>
          
          <div className="text-center mt-6">
            <p className="text-sm text-automotive-gray">
              Powered by mobile.de - Alle Preise verstehen sich als Endpreise
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inventory;