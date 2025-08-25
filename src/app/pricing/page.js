export default function Pricing() {
  return (
    <div className="min-h-screen px-6 py-12 text-center">
      <h1 className="text-4xl font-bold mb-8">Pricing</h1>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="border p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">Starter</h2>
          <p className="text-gray-600 mb-4">For freelancers & small shops</p>
          <p className="text-3xl font-bold mb-4">₹499/mo</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Choose Plan
          </button>
        </div>
        <div className="border p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">Business</h2>
          <p className="text-gray-600 mb-4">For growing businesses</p>
          <p className="text-3xl font-bold mb-4">₹999/mo</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Choose Plan
          </button>
        </div>
        <div className="border p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">Enterprise</h2>
          <p className="text-gray-600 mb-4">Custom solutions for scale</p>
          <p className="text-3xl font-bold mb-4">Contact Us</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
}
