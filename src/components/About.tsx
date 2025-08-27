import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const features = [
    {
      title: "Qualitätsgarantie",
      description: "Alle Fahrzeuge werden von unseren Experten geprüft"
    },
    {
      title: "Faire Preise",
      description: "Transparente Preisgestaltung ohne versteckte Kosten"
    },
    {
      title: "Persönlicher Service",
      description: "Individuelle Beratung für Ihren perfekten Autokauf"
    },
    {
      title: "Lokaler Partner",
      description: "Ihr vertrauensvoller Autohaus im Breisgau"
    }
  ];

  return (
    <section id="about" className="py-20 bg-automotive-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Über uns
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-automotive-black mb-6">
            Ihr Wohl ist unsere Zufriedenheit
          </h2>
          <p className="text-xl text-automotive-gray max-w-3xl mx-auto">
            Bei Breisgau Automobile stehen Sie im Mittelpunkt. Mit jahrelanger Erfahrung 
            und Leidenschaft für Automobile bieten wir Ihnen den besten Service in der Region.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-automotive-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-automotive-red rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-automotive-black mb-3">
                  {feature.title}
                </h3>
                <p className="text-automotive-gray">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;