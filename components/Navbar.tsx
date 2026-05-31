"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar({ sendWhatsApp }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-4 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-white border border-slate-200 rounded-2xl px-6 py-3 flex justify-between items-center shadow-sm">

          {/* LOGO + BRAND */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="SecuraNet Logo"
              width={70}
              height={70}
              className="rounded-md"
            />

            <h1 className="text-slate-900 font-bold text-xl">
              SecuraNet
            </h1>
          </div>

          {/* NAV */}
          <nav className="hidden md:flex items-center gap-8 text-slate-600">
            <a href="#home" className="hover:text-green-500 transition">Home</a>
            <a href="#services" className="hover:text-green-500 transition">Services</a>
            <a href="#projects" className="hover:text-green-500 transition">Projects</a>
            <a href="#contact" className="hover:text-green-500 transition">Contact</a>
          </nav>

          {/* CTA */}
          <button
            onClick={() =>
              sendWhatsApp({
                name: "Website Visitor",
                phone: "",
                details: "I need a CCTV installation quote from navbar"
              })
            }
            className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-xl font-medium transition"
          >
            Get Quote
          </button>

        </div>
      </div>
    </header>
  );
}