const services = [
  {
    title: "CCTV Installation",
    desc: "HD, IP and wireless surveillance systems."
  },
  {
    title: "Networking",
    desc: "LAN, WAN, Wi-Fi and structured cabling."
  },
  {
    title: "Access Control",
    desc: "Biometric and smart access solutions."
  },
  {
    title: "Maintenance",
    desc: "Repairs, upgrades and support."
  }
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-8 rounded-2xl shadow"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}