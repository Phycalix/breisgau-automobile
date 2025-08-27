import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-automotive-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Kontakt
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-automotive-black mb-6">
            Besuchen Sie uns
          </h2>
          <p className="text-xl text-automotive-gray max-w-3xl mx-auto">
            Wir freuen uns auf Ihren Besuch in unserem Autohaus. 
            Vereinbaren Sie gerne einen Termin für eine persönliche Beratung.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-automotive-black mb-6">
                Kontaktinformationen
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-automotive-red rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold text-automotive-black">Adresse</h4>
                    <p className="text-automotive-gray">
                      Musterstraße 123<br />
                      79100 Freiburg im Breisgau
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-automotive-red rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold text-automotive-black">Telefon</h4>
                    <p className="text-automotive-gray">
                      +49 761 123456789
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-automotive-red rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold text-automotive-black">E-Mail</h4>
                    <p className="text-automotive-gray">
                      info@breisgau-automobile.de
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-automotive-red rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold text-automotive-black">Öffnungszeiten</h4>
                    <div className="text-automotive-gray">
                      <p>Mo - Fr: 08:00 - 18:00 Uhr</p>
                      <p>Sa: 09:00 - 16:00 Uhr</p>
                      <p>So: Geschlossen</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button 
                  size="lg"
                  className="w-full bg-automotive-red hover:bg-automotive-red/90 text-white"
                >
                  Termin vereinbaren
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-automotive-black mb-6">
                Standort
              </h3>
              <div className="bg-automotive-light-gray rounded-lg h-80 flex items-center justify-center">
                <p className="text-automotive-gray text-center">
                  [Hier würde normalerweise eine interaktive Karte angezeigt]<br />
                  Musterstraße 123, 79100 Freiburg im Breisgau
                </p>
              </div>
              
              <div className="mt-6 text-center">
                <Button 
                  variant="outline"
                  className="border-automotive-black text-automotive-black hover:bg-automotive-black hover:text-white"
                >
                  Route planen
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;