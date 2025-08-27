import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Services = () => {
  const services = [
    {
      title: "An- und Verkauf",
      description: "Professioneller Ankauf und Verkauf von Gebrauchtwagen zu fairen Preisen",
      icon: "🚗"
    },
    {
      title: "Vermittlung",
      description: "Vermittlung von Fahrzeugen nach Ihren individuellen Wünschen",
      icon: "🤝"
    },
    {
      title: "Werkstattbesuche",
      description: "Koordination und Begleitung bei notwendigen Werkstattbesuchen",
      icon: "🔧"
    },
    {
      title: "Aufbereitung",
      description: "Professionelle Fahrzeugaufbereitung innen und außen",
      icon: "✨"
    },
    {
      title: "TÜV Übernahme",
      description: "Komplette Abwicklung der TÜV-Prüfung für Ihr Fahrzeug",
      icon: "📋"
    },
    {
      title: "Fahrzeug Überführung",
      description: "Sichere Überführung Ihres Fahrzeugs zu Ihrem Wunschort",
      icon: "🚛"
    }
  ];

  return (
    <section id="services" className="py-20 bg-automotive-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-automotive-red text-white">
            Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Unsere Leistungen
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Von der Beratung bis zur Wartung - wir bieten Ihnen einen 
            kompletten Service rund um Ihr Fahrzeug.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-automotive-gray/20 border-automotive-gray hover:bg-automotive-gray/30 transition-colors duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;