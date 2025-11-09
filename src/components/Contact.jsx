import React from 'react';
import { Phone, MessageSquare, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Kontak & Reservasi</h2>
            <p className="text-slate-600 mt-2">Siap bantu atur perjalanan Anda di Jogja. Kami responsif dan ramah.</p>
            <div className="mt-6 space-y-4 text-slate-700">
              <a href="tel:+6281234567890" className="flex items-center gap-3 p-4 border rounded-xl hover:bg-emerald-50/50">
                <Phone className="w-5 h-5 text-emerald-700" /> +62 812-3456-7890
              </a>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 border rounded-xl hover:bg-emerald-50/50">
                <MessageSquare className="w-5 h-5 text-emerald-700" /> WhatsApp Fast Response
              </a>
              <a href="mailto:halo@traveljogja.id" className="flex items-center gap-3 p-4 border rounded-xl hover:bg-emerald-50/50">
                <Mail className="w-5 h-5 text-emerald-700" /> halo@traveljogja.id
              </a>
              <div className="flex items-start gap-3 p-4 border rounded-xl">
                <MapPin className="w-5 h-5 text-emerald-700 mt-1" />
                <div>
                  <p>Jl. Malioboro No. 10, Yogyakarta</p>
                  <p className="text-sm text-slate-500">Buka setiap hari 08.00 - 21.00 WIB</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50/50 rounded-2xl p-6 border border-emerald-100">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Nama</label>
                <input type="text" className="mt-1 w-full rounded-lg border-slate-300 focus:border-emerald-500 focus:ring-emerald-500" placeholder="Nama lengkap" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Email</label>
                  <input type="email" className="mt-1 w-full rounded-lg border-slate-300 focus:border-emerald-500 focus:ring-emerald-500" placeholder="email@contoh.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">No. WhatsApp</label>
                  <input type="tel" className="mt-1 w-full rounded-lg border-slate-300 focus:border-emerald-500 focus:ring-emerald-500" placeholder="08xx" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Pesan</label>
                <textarea rows="4" className="mt-1 w-full rounded-lg border-slate-300 focus:border-emerald-500 focus:ring-emerald-500" placeholder="Ceritakan rencana perjalanan Anda..." />
              </div>
              <button type="button" className="w-full rounded-full bg-emerald-600 text-white py-2.5 font-medium hover:bg-emerald-700">
                Kirim Permintaan
              </button>
              <p className="text-xs text-slate-500 text-center">Dengan menekan tombol ini Anda setuju dihubungi via WhatsApp atau email.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
