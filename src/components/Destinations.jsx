import React from 'react';
import { Camera, Sun, Landmark } from 'lucide-react';

const items = [
  {
    title: 'Candi Prambanan',
    img: 'https://images.unsplash.com/photo-1580135908198-c6b7e5b78204?q=80&w=1600&auto=format&fit=crop',
    tag: 'Sejarah',
  },
  {
    title: 'Taman Sari',
    img: 'https://images.unsplash.com/photo-1587061950630-8c88825710fd?q=80&w=1600&auto=format&fit=crop',
    tag: 'Heritage',
  },
  {
    title: 'Pantai Sadranan',
    img: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?q=80&w=1600&auto=format&fit=crop',
    tag: 'Pantai',
  },
  {
    title: 'Merapi Lava Tour',
    img: 'https://images.unsplash.com/photo-1565716749519-37f5bd6e7f1e?q=80&w=1600&auto=format&fit=crop',
    tag: 'Petualangan',
  },
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Destinasi Populer</h2>
            <p className="text-slate-600 mt-1">Spot wisata favorit wisatawan saat berkunjung ke Jogja.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-emerald-700 font-medium">
            <Camera className="w-4 h-4" /> Ajak kami hunting foto terbaik Anda
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="group rounded-xl overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={it.img} alt={it.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
              </div>
              <div className="p-4">
                <span className="inline-block text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">{it.tag}</span>
                <h3 className="mt-2 font-semibold text-slate-800">{it.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
