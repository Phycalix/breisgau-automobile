import React, { useState } from 'react';
import { Car, Phone, Search, Star, ShieldCheck, Handshake, MessageCircle, RefreshCw } from 'lucide-react';

export default function App() {
  // Logik für die Drehung der Karten
  const [flippedCards, setFlippedCards] = useState({});

  const toggleCard = (index) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Die Daten für deine Services
  const services = [
    {
      title: "Finanzierung & Ankauf",
      text: "Wir bieten Ihnen faire Konditionen beim Ankauf Ihres Gebrauchten und vermitteln maßgeschneiderte Finanzierungslösungen.",
      icon: <Handshake className="w-6 h-6" />,
      img: "/finanzierung.avif"
    },
    {
      title: "Vermittlung & Beratung",
      text: "Sie möchten Ihren Wagen verkaufen? Wir übernehmen die professionelle Vermittlung und finden den passenden Käufer.",
      icon: <Car className="w-6 h-6" />,
      img: "/vermittlung.avif"
    },
    {
      title: "Netzwerk-Suche",
      text: "Ihr Wunschauto ist nicht im Bestand? Wir suchen in unserem exklusiven Händlernetzwerk gezielt nach Ihrem Traumfahrzeug.",
      icon: <Search className="w-6 h-6" />,
      img: "/netzwerk.avif"
    },
    {
      title: "Rundum-Service",
      text: "Auch nach dem Kauf sind wir für Sie da: Unterstützung bei Wartung, TÜV und Aufbereitung gehören zu unserem Standard.",
      icon: <ShieldCheck className="w-6 h-6" />,
      img: "/service.avif"
    }
  ];
  const testimonials = [
    {
      name: "Ursula Nachbarin",
      text: "Ich bin wirklich begeistert von der Umsetzung. Innerhalb kürzester Zeit hatte ich mehrere Autos zur Auswahl, bis ich das passende gekauft habe. Kompetent, freundlich und zuverlässig – besser geht es nicht.",
      rating: 5
    },
    {
      name: "Ceanu Schulz",
      text: "Habe hier vor kurzem meinen Erstwagen gekauft und bin sehr zufrieden. Herr Abdallah war aufgeschlossen, seriös und keineswegs drängend. Alles zügig und unkompliziert. Absolut empfehlenswert!",
      rating: 5
    },
    {
      name: "Kerem Kulu",
      text: "Ich habe mein Auto verkauft und war absolut begeistert! Freundliche, hochprofessionelle Abwicklung, Telefonate wurden sofort beantwortet. Uneingeschränkt empfehlenswert!",
      rating: 5
    }
  ];
  return (
    <div className="font-sans text-slate-900 bg-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black shadow-lg border-b border-white/10">
  <div className="container mx-auto px-6 py-4 flex justify-between items-center">
    
    {/* LOGO & SLOGAN BEREICH */}
    <a href="/" className="flex items-center gap-6 group text-white">
      {/* Dein Logo-Bild */}
      <img 
        src="/logo.svg" 
        alt="Breisgau Automobile" 
        className="h-10 md:h-14 w-auto object-contain transition-transform group-hover:scale-105" 
      />
      
      {/* Vertikale Trennlinie (optional für extra Eleganz) */}
      <div className="hidden md:block w-px h-8 bg-white/20"></div>

      {/* Slogan */}
      <div className="hidden sm:block">
        <span className="text-xs md:text-sm text-slate-300 font-light tracking-[0.15em] uppercase italic opacity-90">
          Ihr Wohl ist unsere Zufriedenheit
        </span>
      </div>
    </a>

    {/* CTA Button */}
    <a href="https://home.mobile.de/BREISGAUERAUTOMOBILE#ses" target="_blank" className="bg-[#e63946] text-white px-6 py-2.5 rounded-full text-sm font-bold tracking-wide hover:bg-white hover:text-black transition duration-300 shadow-lg shadow-red-900/20">
      Fahrzeugbestand
    </a>
  </div>
</nav>

      {/* Hero */}
  <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-black">
  {/* Hintergrundbild-Ebene */}
  <div 
    className="absolute inset-0 z-0 opacity-60 bg-cover bg-center"
    style={{ backgroundImage: "url('/header-bg.jpg')" }}
  ></div>

  {/* Der Inhalt (z-10 sorgt dafür, dass er über dem Bild liegt) */}
  <div className="container mx-auto px-6 relative z-10 text-center md:text-left text-white">
    <span className="inline-block px-4 py-1 bg-[#e63946] text-white rounded-full text-sm font-bold mb-6 shadow-lg">
      Ihr Partner in Ehrenkirchen
    </span>
    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-md">
      Qualität erfahren, <br />
      <span className="text-[#e63946]">Vertrauen</span> kaufen.
    </h1>
    <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-10">
      <a href="https://home.mobile.de/BREISGAUERAUTOMOBILE#ses" target="_blank" className="bg-[#e63946] text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-black transition shadow-xl">
        Mobile.de Bestand
      </a>
      <a href="tel:+4917670786623" className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-black transition shadow-lg">
        <Phone size={20} /> Anrufen
      </a>
    </div>
  </div>
  </header>

      {/* Services Sektion */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Unsere <span className="text-[#e63946]">Services</span> für Sie
            </h2>
            <div className="w-24 h-1.5 bg-[#e63946] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s, i) => (
              <div 
                key={i} 
                className="relative h-96 w-full perspective-1000 group cursor-pointer"
                onClick={() => toggleCard(i)}
              >
                <div className={`relative w-full h-full transition-transform duration-700 preserve-3d ${flippedCards[i] ? 'rotate-y-180' : ''}`}>
                  
                  {/* VORDERSEITE */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rounded-3xl overflow-hidden shadow-lg border border-slate-100">
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white text-xl font-bold pr-12">
                      {s.title}
                    </div>
                    <div className="absolute bottom-4 right-4 bg-[#e63946] text-white p-3 rounded-full shadow-xl">
                      <RefreshCw size={20} className={flippedCards[i] ? 'animate-spin' : ''} />
                    </div>
                  </div>

                  {/* RÜCKSEITE */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-slate-900 rounded-3xl p-8 flex flex-col justify-center items-center text-center border-2 border-[#e63946]">
                    <div className="bg-[#e63946]/10 p-4 rounded-full mb-6 text-[#e63946]">
                      {s.icon}
                    </div>
                    <h3 className="text-white text-xl font-bold mb-4">{s.title}</h3>
                    <p className="text-slate-300 leading-relaxed text-sm">
                      {s.text}
                    </p>
                    <div className="mt-8 text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                      Klicken zum Wenden
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kundenstimmen / Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 italic text-slate-800">Was unsere Kunden sagen</h2>
            <div className="flex justify-center gap-1 text-[#e63946]">
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-md transition">
                <div>
                  <div className="text-[#e63946] mb-4">
                    <MessageCircle size={32} fill="currentColor" className="opacity-10" />
                  </div>
                  <p className="text-slate-600 leading-relaxed italic">„{t.text}“</p>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-50">
                  <p className="font-bold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-400 uppercase tracking-widest">Verifizierte Bewertung</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a 
              href="https://www.google.com/search?q=rezensionen+f%C3%BCr+breisgauer+automobile" 
              target="_blank" 
              className="inline-flex items-center gap-2 text-[#e63946] font-bold hover:gap-4 transition-all uppercase text-sm tracking-widest"
            >
              Alle Google-Bewertungen lesen <span className="text-xl">→</span>
            </a>
          </div>
        </div>
      </section>

      <section id="ueber-uns" className="py-24 bg-slate-900 text-white overflow-hidden relative">
  {/* Hintergrund-Akzent */}
  <div className="absolute top-0 right-0 w-1/3 h-full bg-[#e63946]/5 -skew-x-12 translate-x-20"></div>

  <div className="container mx-auto px-6 relative z-10">
    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
      
      {/* BILD-BEREICH */}
      <div className="relative group">
        <div className="absolute -inset-4 bg-[#e63946]/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <img 
            src="/aimann.avif" 
            alt="Aimann Abdallah" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-1000 scale-105 group-hover:scale-100"
          />
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent">
            <p className="text-2xl font-bold tracking-tight">Aimann Abdallah</p>
            <p className="text-[#e63946] font-semibold tracking-widest uppercase text-xs">Inhaber & Gründer</p>
          </div>
        </div>
      </div>

      {/* TEXT-BEREICH */}
      <div>
        <span className="inline-block text-[#e63946] font-bold tracking-[0.2em] uppercase text-sm mb-4">
          Ihr Ansprechpartner
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
          „Es macht mich glücklich, einen <span className="text-[#e63946]">zufriedenen Kunden</span> mit seinem neuen Auto davonfahren zu sehen.“
        </h2>
        
        <div className="space-y-6 text-slate-300 text-lg leading-relaxed font-light">
          <p>
            Schon seit meiner Kindheit habe ich meinem Vater im Autohandel für den Export über die Schulter geschaut und tatkräftig unterstützt. Aus dieser frühen Prägung entwickelte sich eine immense Leidenschaft für Automobile – und der Traum vom eigenen Autohandel wurde Realität.
          </p>
          <p>
            Für mich geht es nicht nur darum, ein Fahrzeug zu verkaufen. Es geht darum, <span className="text-white font-medium">Sicherheit zu geben</span>, ehrlich zu beraten und das Wohlergehen der Menschen, die zu mir kommen, in den Mittelpunkt zu stellen.
          </p>
          <p className="text-xl font-normal text-white italic">
            „Ihr Wohl ist unsere Zufriedenheit“ – das war von Anfang an mein Motto und das wird es bei <span className="text-[#e63946] font-bold not-italic">Breisgauer Automobile</span> immer bleiben.
          </p>
        </div>

        {/* Unterschrift-Element mit Telefonnummer */}
        <div className="mt-10 pt-10 border-t border-white/10">
          <div className="flex items-start gap-5">
            {/* Initialen-Icon */}
            <div className="w-14 h-14 rounded-2xl bg-[#e63946] flex items-center justify-center font-bold text-xl shadow-lg shadow-red-900/20">
              AA
            </div>
            
            <div className="flex flex-col">
              <p className="font-bold text-white text-lg leading-none mb-1">Aimann Abdallah</p>
              <p className="text-sm text-[#e63946] font-medium mb-3 italic">Persönlich für Sie da</p>
              
              <a 
                href="tel:+4917670786623" 
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors group/phone"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover/phone:bg-[#e63946] transition-colors">
                  <Phone size={14} className="text-[#e63946] group-hover/phone:text-white" />
                </div>
                <span className="text-sm font-medium tracking-wider">+49 (0) 176 70786623</span>
              </a>
            </div>
          </div>
        </div>
      </div> {/* Dies schließt den Text-Bereich */}
    </div> {/* Dies schließt das Grid */}
  </div> {/* Dies schließt den Container */}
</section>

      {/* WhatsApp Link */}
      <a href="https://wa.me/4917670786623" target="_blank" className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform">
        <MessageCircle size={32} />
      </a>
    </div>
  );
}