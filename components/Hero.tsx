"use client";
import Image from "next/image";
import { WhatsAppData } from "@/types/whatsapp";

type HeroProps = {
  sendWhatsApp: (data: WhatsAppData) => void;
};

export default function Hero({ sendWhatsApp }: HeroProps) {
  return (
    <section id="home" className="bg-slate-900 text-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span className="bg-green-500/20 border border-green-400 text-green-300 px-4 py-2 rounded-full text-sm">
            CCTV • Networking • Security Systems
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mt-6 leading-tight">
            Secure Your Property with <br />
            <span className="text-green-400">Smart Surveillance</span>
          </h1>

          <p className="text-gray-300 mt-6 text-lg">
            Professional CCTV installation, networking, and security solutions
            across Kenya for homes and businesses.
          </p>

          <div className="flex gap-4 mt-8 flex-wrap">

            {/* GET QUOTE → WHATSAPP */}
            <button
              onClick={() =>
                sendWhatsApp({
                  name: "Website Visitor",
                  phone: "",
                  details: "I want a CCTV installation quote"
                })
              }
              className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl font-semibold transition"
            >
              Get Free Quote
            </button>

            {/* SERVICES */}
            <a
              href="#services"
              className="border border-white/30 px-6 py-3 rounded-xl inline-block hover:bg-white/10 transition"
            >
              Our Services
            </a>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-[400px] md:h-[500px]">
          <Image
            src="/projects/office.jpg"
            alt="CCTV Security System"
            fill
            className="object-cover rounded-2xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}