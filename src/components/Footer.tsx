const Footer = () => {
  return (
    <footer className="bg-automotive-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="mb-6">
              <img 
                src="/lovable-uploads/049c8418-c2b5-4baa-8887-92e1fcbc507d.png" 
                alt="Breisgau Automobile" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Ihr vertrauensvoller Partner für Gebrauchtwagen im Breisgau. 
              Qualität, Service und faire Preise seit vielen Jahren.
            </p>
            <p className="text-sm text-gray-400">
              Ihr Wohl ist unsere Zufriedenheit
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Schnelllinks</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#home" className="hover:text-automotive-red transition-colors">Home</a></li>
              <li><a href="#inventory" className="hover:text-automotive-red transition-colors">Fahrzeuge</a></li>
              <li><a href="#services" className="hover:text-automotive-red transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-automotive-red transition-colors">Über uns</a></li>
              <li><a href="#contact" className="hover:text-automotive-red transition-colors">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <div className="space-y-2 text-gray-300">
              <p>📍 Musterstraße 123, 79100 Freiburg</p>
              <p>📞 +49 761 123456789</p>
              <p>✉️ info@breisgau-automobile.de</p>
            </div>
          </div>
        </div>

        <div className="border-t border-automotive-gray mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Breisgau Automobile. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;