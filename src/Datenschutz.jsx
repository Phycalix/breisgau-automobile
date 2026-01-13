import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Server, MessageCircle, Lock, MousePointerClick } from 'lucide-react';

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
      {/* Header Bereich - Zentriert */}
      <div className="border-b border-white/10 bg-slate-900/50 py-20 text-center">
        <div className="container mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-[#e63946] hover:gap-4 transition-all mb-8 font-bold uppercase text-sm tracking-widest">
            <ArrowLeft size={20} /> Zurück zur Startseite
          </Link>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Datenschutzerklärung</h1>
          <div className="w-24 h-1.5 bg-[#e63946] rounded-full mx-auto"></div>
        </div>
      </div>

      {/* Content Bereich - Alles mittig */}
      <div className="container mx-auto px-6 py-20 flex-grow text-center">
        <div className="max-w-3xl mx-auto space-y-20">
          
          {/* 1. Einleitung & Verantwortlicher */}
          <section>
            <div className="flex justify-center text-[#e63946] mb-4">
              <Shield size={24} />
            </div>
            <h2 className="text-[#e63946] font-bold uppercase tracking-widest text-sm mb-4">1. Datenschutz auf einen Blick</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Wir freuen uns über Ihr Interesse an unserer Website. Der Schutz Ihrer Daten ist uns wichtig. Nachfolgend informieren wir Sie ausführlich über den Umgang mit Ihren Daten.
            </p>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="font-bold text-white mb-2">Verantwortlicher für die Datenverarbeitung:</h3>
              <p className="text-slate-300">
                Breisgauer-Automobile<br />
                Aiman Abdallah<br />
                Bundesstr. 2, 79238 Ehrenkirchen<br />
                E-Mail: Breisgauer-Automobile@web.de
              </p>
            </div>
          </section>

          {/* 2. Hosting durch Vercel */}
          <section>
            <div className="flex justify-center text-[#e63946] mb-4">
              <Server size={24} />
            </div>
            <h2 className="text-[#e63946] font-bold uppercase tracking-widest text-sm mb-4">2. Hosting & Server-Log-Dateien</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              Wir hosten unsere Website bei dem externen Dienstleister <strong>Vercel Inc.</strong> (340 S Lemon Ave #4133, Walnut, CA 91789, USA).
            </p>
            <p className="text-slate-400 leading-relaxed text-sm">
              Um diese Webseite sicher und effizient bereitstellen zu können, erfasst der Provider automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="text-slate-500 text-sm mt-4 space-y-1 italic">
              <li>– Browsertyp und Browserversion</li>
              <li>– Verwendetes Betriebssystem</li>
              <li>– Referrer URL (die zuvor besuchte Seite)</li>
              <li>– IP-Adresse des zugreifenden Rechners</li>
              <li>– Uhrzeit der Serveranfrage</li>
            </ul>
            <p className="text-slate-400 text-sm mt-4">
              Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO (Berechtigtes Interesse an einer technisch fehlerfreien Darstellung und Sicherheit der Website).
            </p>
          </section>

          {/* 3. WhatsApp & Kontakt */}
          <section>
            <div className="flex justify-center text-[#e63946] mb-4">
              <MessageCircle size={24} />
            </div>
            <h2 className="text-[#e63946] font-bold uppercase tracking-widest text-sm mb-4">3. Kontakt & WhatsApp</h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              Wenn Sie uns per E-Mail, Telefon oder über den WhatsApp-Button kontaktieren, werden Ihre Anfrage und die daraus resultierenden Daten zwecks Bearbeitung Ihres Anliegens bei uns gespeichert. Wir geben diese Daten nicht ohne Ihre Einwilligung weiter.
            </p>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-left">
              <h3 className="font-bold text-white text-center mb-2 text-sm uppercase">Hinweis zu WhatsApp</h3>
              <p className="text-slate-400 text-sm leading-relaxed text-center">
                Wir verlinken auf unserer Seite auf den Dienst WhatsApp. Es handelt sich hierbei um einen normalen Link. Erst wenn Sie den Button aktiv anklicken, werden Sie zu WhatsApp weitergeleitet. Ab diesem Zeitpunkt gelten die Datenschutzbestimmungen von WhatsApp (Meta Platforms Ireland Ltd.).
              </p>
            </div>
          </section>

          {/* 4. Externe Links (Mobile.de) */}
          <section>
            <div className="flex justify-center text-[#e63946] mb-4">
              <MousePointerClick size={24} />
            </div>
            <h2 className="text-[#e63946] font-bold uppercase tracking-widest text-sm mb-4">4. Externe Links</h2>
            <p className="text-slate-400 leading-relaxed">
              Unsere Website enthält Links zu externen Webseiten Dritter (z. B. Mobile.de), auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte und die Datenschutzpraxis der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </section>

          {/* 5. Deine Rechte */}
          <section className="pt-10 border-t border-white/5">
            <div className="flex justify-center text-[#e63946] mb-4">
              <Lock size={24} />
            </div>
            <h2 className="text-[#e63946] font-bold uppercase tracking-widest text-sm mb-4">5. Ihre Rechte</h2>
            <p className="text-slate-500 text-sm leading-relaxed max-w-2xl mx-auto">
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
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