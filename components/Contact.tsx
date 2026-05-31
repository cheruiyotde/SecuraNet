export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-blue-900 text-white"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8">
          Get a Free Quote
        </h2>

        <form className="grid gap-4">
          <input
            placeholder="Full Name"
            className="p-4 rounded text-black"
          />

          <input
            placeholder="Email"
            className="p-4 rounded text-black"
          />

          <input
            placeholder="Phone Number"
            className="p-4 rounded text-black"
          />

          <textarea
            placeholder="Tell us about your project"
            className="p-4 rounded text-black h-40"
          />

          <button className="bg-yellow-500 py-4 rounded-lg">
            Send Request
          </button>
        </form>
      </div>
    </section>
  );
}