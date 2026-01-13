import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, MapPin, Hash } from 'lucide-react';

export default function Impressum() {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
      {/* Header Bereich - Jetzt komplett zentriert */}
      <div className="border-b border-white/10 bg-slate-900/50 py-20 text-center">
        <div className="container mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-[#e63946] hover:gap-4 transition-all mb-8 font-bold uppercase text-sm tracking-widest">
            <ArrowLeft size={20} /> Zurück zur Startseite
          </Link>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Impressum</h1>
          <div className="w-24 h-1.5 bg-[#e63946] rounded-full mx-auto"></div>
        </div>
      </div>

      {/* Content Bereich - Alles mittig ausgerichtet */}
      <div className="container mx-auto px-6 py-20 flex-grow text-center">
        <div className="max-w-3xl mx-auto space-y-20">
          
          {/* Anbieter */}
          <section>
            <div className="flex justify-center text-[#e63946] mb-4">
              <MapPin size={24} />
            </div>
            <h2 className="text-[#e63946] font-bold uppercase tracking-widest text-sm mb-4">Anbieter (gemäß § 5 TMG)</h2>
            <div className="text-3xl font-bold mb-2">Breisgauer-Automobile</div>
            <p className="text-slate-400 text-lg leading-relaxed">
              Bundesstr. 2<br />
              79238 Ehrenkirchen<br />
              Deutschland
            </p>
          </section>

          {/* Kontakt */}
          <section>
            <div className="flex justify-center text-[#e63946] mb-4">
              <Phone size={24} />
            </div>
            <h2 className="text-[#e63946] font-bold uppercase tracking-widest text-sm mb-4">Kontakt</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Telefon: +49 176 70786623<br />
              E-Mail: Breisgauer-Automobile@web.de
            </p>
          </section>

          {/* Steuer-Info */}
          <section>
            <div className="flex justify-center text-[#e63946] mb-4">
              <Hash size={24} />
            </div>
            <h2 className="text-[#e63946] font-bold uppercase tracking-widest text-sm mb-4">Rechtliche Angaben</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              <span className="text-white font-medium">Inhaber:</span> Aiman Abdallah<br />
              <span className="text-white font-medium">USt-IdNr.:</span> DE346755725
            </p>
          </section>

          {/* Streitschlichtung */}
          <section className="pt-10 border-t border-white/5">
            <h2 className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-4">Streitschlichtung</h2>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xl mx-auto italic">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noreferrer" className="text-white hover:underline ml-1">https://ec.europa.eu/consumers/odr</a>.<br />
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>
      </div>

      {/* Minimaler Footer */}
      <footer className="py-10 border-t border-white/5 text-center text-slate-600 text-xs">
        &copy; {new Date().getFullYear()} Breisgauer-Automobile
      </footer>
    </div>
  );
}