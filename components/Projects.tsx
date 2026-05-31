export default function Projects() {
  const projects = [
    {
      title: "Office CCTV Installation",
      location: "Nairobi CBD",
      image: "/projects/office.jpg",
    },
    {
      title: "Warehouse Security System",
      location: "Industrial Area, Nairobi",
      image: "/projects/warehouse.jpg",
    },
    {
      title: "Residential Smart CCTV",
      location: "Karen, Nairobi",
      image: "/projects/home.jpg",
    },
    {
      title: "Retail Shop Monitoring",
      location: "Westlands, Nairobi",
      image: "/projects/shop.jpg",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Our Recent Projects
        </h2>

        <p className="text-center text-gray-500 mt-3">
          CCTV installations across Nairobi and Kenya
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

          {projects.map((p) => (
            <div
              key={p.title}
              className="group relative rounded-2xl overflow-hidden shadow-lg bg-white"
            >

              {/* Image */}
              <div className="h-52 bg-gray-200 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Overlay */}
              <div className="p-4">
                <h3 className="font-bold text-lg">{p.title}</h3>
                <p className="text-sm text-gray-500">
                  {p.location}
                </p>
              </div>

            

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}