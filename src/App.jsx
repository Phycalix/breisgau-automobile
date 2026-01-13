import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Hier laden wir die Seiten "lazy" (erst beim Klick)
const Home = lazy(() => import('./HomeContent')); // Wir schieben dein aktuelles Design in HomeContent
const Impressum = lazy(() => import('./Impressum'));
const Datenschutz = lazy(() => import('./Datenschutz'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="text-white p-10">Lädt...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;