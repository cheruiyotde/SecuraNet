"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import Hero from "@/components/Hero";
import CallButton from "@/components/CallButton";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import { WhatsAppData } from "@/types/whatsapp";

export default function Home() {
  const [open, setOpen] = useState(false);

  // ✅ FIXED WhatsApp function
  const sendWhatsApp = (data: WhatsAppData) => {
    const message =
      `🔐 *NEW CCTV QUOTE REQUEST*%0A%0A` +
      `👤 Name: ${data.name || "Not provided"}%0A` +
      `📞 Phone: ${data.phone || "Not provided"}%0A` +
      `📍 Location: ${data.location || "Not provided"}%0A` +
      `🏢 Service Needed: ${data.service || "CCTV Installation"}%0A` +
      `📝 Details: ${data.details || "Not provided"}%0A%0A` +
      `— Sent from SecuraNet Website`;

    const whatsappNumber = "254717552773";

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <main className="bg-white text-slate-900">

      {/* NAV */}
      <Navbar sendWhatsApp={sendWhatsApp} />

      {/* FLOATING ACTIONS */}
      <WhatsAppButton />
      <CallButton />

      {/* HERO */}
      <Hero sendWhatsApp={sendWhatsApp} />

      {/* TRUST STRIP */}
      <section className="py-10 bg-slate-50 border-y">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm font-medium text-slate-600">
          <div>✔ Certified Technicians</div>
          <div>✔ 24/7 Support</div>
          <div>✔ Kenya-Wide Installation</div>
          <div>✔ Warranty Included</div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Professional Security Solutions
          </h2>

          <p className="text-center text-slate-500 mt-3">
            End-to-end CCTV and security installation services
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">

            {[
              {
                title: "CCTV Installation",
                desc: "HD & IP surveillance systems for homes, businesses and industries."
              },
              {
                title: "Network Setup",
                desc: "LAN, WAN, structured cabling and reliable WiFi solutions."
              },
              {
                title: "Access Control",
                desc: "Biometric systems, smart locks and secure entry management."
              },
              {
                title: "Maintenance",
                desc: "Repairs, upgrades and full system health checks."
              },
              {
                title: "Remote Monitoring",
                desc: "View your CCTV anywhere via mobile and cloud systems."
              },
              {
                title: "Consultation",
                desc: "Security audits and professional site assessments."
              }
            ].map((s) => (
              <div
                key={s.title}
                className="p-6 rounded-2xl border hover:shadow-xl transition bg-white"
              >
                <h3 className="font-semibold text-xl">{s.title}</h3>
                <p className="text-slate-500 mt-2">{s.desc}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h2 className="text-4xl font-bold">Why Choose Us</h2>

            <p className="text-slate-300 mt-4">
              We deliver reliable and scalable security systems tailored for homes,
              offices, warehouses, and commercial buildings.
            </p>

            <ul className="mt-6 space-y-3 text-slate-200">
              <li>✔ High-quality CCTV brands (Hikvision, Dahua)</li>
              <li>✔ Fast installation & support</li>
              <li>✔ Affordable pricing</li>
              <li>✔ Experienced technicians</li>
            </ul>
          </div>

          <div className="bg-slate-800 p-8 rounded-2xl">
            <p className="text-lg">
              “We secure what matters most — your home, your business, your peace of mind.”
            </p>
            <span className="block mt-4 text-green-400 font-semibold">
              — Security Team
            </span>
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <Projects />

      {/* CTA SECTION */}
      <section className="py-20 bg-green-600 text-white text-center">

        <h2 className="text-4xl font-bold">
          Ready to Secure Your Property?
        </h2>

        <p className="mt-4 text-white/80">
          Get a free CCTV installation quote today
        </p>

        <button
          onClick={() =>
            sendWhatsApp({
              name: "Website Visitor",
              phone: "",
              location: "",
              service: "CCTV Installation",
              details: "I want a CCTV installation quote"
            })
          }
          className="mt-8 bg-white text-green-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition"
        >
          Get Quote
        </button>

      </section>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

          <div className="bg-white w-full max-w-md p-6 rounded-2xl">

            <div className="flex justify-between mb-4">
              <h2 className="font-bold text-lg">Request Quote</h2>
              <button onClick={() => setOpen(false)}>✕</button>
            </div>

            <p className="text-sm text-slate-500">
              Modal currently not used (you are using direct WhatsApp flow).
            </p>

          </div>

        </div>
      )}

      {/* FOOTER */}
      <Footer />

    </main>
  );
}