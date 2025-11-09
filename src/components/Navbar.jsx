import React from 'react';
import { Plane, Phone, Menu } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  const links = [
    { href: '#destinations', label: 'Destinasi' },
    { href: '#packages', label: 'Paket' },
    { href: '#contact', label: 'Kontak' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold text-slate-800">
            <Plane className="w-6 h-6 text-emerald-600" />
            Travel Jogja
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-emerald-600 transition-colors">
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-emerald-600 text-white rounded-full px-4 py-2 hover:bg-emerald-700 transition-colors"
            >
              <Phone className="w-4 h-4" /> Pesan
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-slate-200 text-slate-700"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-3 text-slate-700">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-2 border-b border-slate-100"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 bg-emerald-600 text-white rounded-full px-4 py-2 w-max"
              >
                <Phone className="w-4 h-4" /> Pesan
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
