import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Packages from './components/Packages';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-inter text-slate-800 bg-white">
      <Navbar />
      <main>
        <Hero />
        <Destinations />
        <Packages />
        <Contact />
      </main>
      <footer className="border-t border-slate-200 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} Travel Jogja. Semua hak dilindungi.</p>
          <div className="text-sm text-slate-600">
            Dibuat dengan cinta untuk menjelajah Yogyakarta.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
