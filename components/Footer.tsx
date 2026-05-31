
export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 text-white">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Company */}
          <div>
            <h3 className="text-2xl font-bold">
              SecuraNet
            </h3>

            <p className="mt-4 text-slate-400">
              Professional CCTV installation, networking,
              access control and security solutions across Kenya.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">
              Services
            </h4>

            <ul className="space-y-3 text-slate-400">
              <li>CCTV Installation</li>
              <li>Network Setup</li>
              <li>Access Control</li>
              <li>Maintenance</li>
              <li>Remote Monitoring</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">
              Contact Us
            </h4>

            <div className="space-y-4 text-slate-400">

              <div>
                <p className="text-white font-medium">
                  Phone
                </p>
                <p>+254 115298656</p>
                <p>+254 717552773</p>
              </div>

              <div>
                <p className="text-white font-medium">
                  Email
                </p>
                <p>info@securanet.co.ke</p>
              </div>

            </div>
          </div>

          {/* Location */}
          <div>
          

            {/* Location */}
<div>
  <h4 className="font-semibold text-lg mb-4">
    Location
  </h4>

  <div className="text-slate-400">

    <div className="flex items-start gap-3">
      <span className="text-green-400 text-lg">📍</span>

      <div>
        <p className="text-slate-400">
  Ayden Plaza, 4th Floor
</p>
        <p>Nairobi, Kenya</p>
      </div>
    </div>

    <div className="mt-4 inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm">
      ● Available 24/7
    </div>

  </div>

            </div>
          </div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} SecureNet. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-slate-500 text-sm">
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

        </div>

      </div>

    </footer>
  );
}