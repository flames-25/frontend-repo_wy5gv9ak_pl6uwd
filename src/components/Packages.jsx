import React from 'react';
import { CheckCircle, Clock, Users } from 'lucide-react';

const packages = [
  {
    name: 'City Tour Hemat',
    price: 'Rp 450.000',
    duration: '8 jam',
    includes: ['Mobil + BBM', 'Driver & Guide', 'Air Mineral'],
  },
  {
    name: 'Explore Merapi',
    price: 'Rp 650.000',
    duration: '10 jam',
    includes: ['Mobil + BBM', 'Jeep Lava Tour', 'Dokumentasi'],
  },
  {
    name: 'Paket Premium',
    price: 'Rp 1.200.000',
    duration: 'Full day',
    includes: ['Mobil Premium', 'Restaurant Lunch', 'Asuransi Wisata'],
  },
];

export default function Packages() {
  return (
    <section id="packages" className="py-16 bg-emerald-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Pilihan Paket</h2>
          <p className="text-slate-600 mt-2">Pilih paket sesuai kebutuhan Anda. Semua sudah termasuk fasilitas utama.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((p) => (
            <div key={p.name} className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg text-slate-800">{p.name}</h3>
              <div className="mt-2 flex items-center gap-2 text-slate-600 text-sm">
                <Clock className="w-4 h-4" /> {p.duration}
              </div>
              <div className="mt-4 text-3xl font-extrabold text-emerald-700">{p.price}</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {p.includes.map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" /> {i}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full rounded-full bg-emerald-600 text-white py-2.5 font-medium hover:bg-emerald-700">Pesan Sekarang</button>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-slate-600 text-sm">
          <Users className="w-4 h-4" />
          Custom rombongan? Hubungi kami untuk penawaran khusus.
        </div>
      </div>
    </section>
  );
}
