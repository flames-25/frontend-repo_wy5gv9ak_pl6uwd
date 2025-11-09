import React from 'react';
import { MapPin, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 bg-gradient-to-b from-emerald-50 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Jelajah Pesona Jogja bersama Travel Terpercaya
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              Nikmati liburan tanpa ribet: paket lengkap, destinasi hits, dan layanan ramah. Kami siap mengantar Anda ke pengalaman tak terlupakan di Yogyakarta.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#packages" className="inline-flex justify-center items-center rounded-full bg-emerald-600 text-white px-6 py-3 font-medium hover:bg-emerald-700 transition-colors">
                Lihat Paket
              </a>
              <a href="#destinations" className="inline-flex justify-center items-center rounded-full border border-slate-300 px-6 py-3 font-medium text-slate-700 hover:border-slate-400">
                Destinasi Populer
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-500" /> 4.9/5 rating
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-600" /> 50+ spot wisata
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-emerald-100">
              <img
                src="https://images.unsplash.com/photo-1588612322353-2feb99f5f1ab?q=80&w=1600&auto=format&fit=crop"
                alt="Candi Prambanan, Yogyakarta"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-slate-100 hidden sm:block">
              <p className="text-sm font-semibold text-slate-700">Private Tour</p>
              <p className="text-xs text-slate-500">Mobil nyaman + Driver ramah</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
