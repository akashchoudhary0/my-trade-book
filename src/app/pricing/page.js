import Navbar from "@/components/navbar/page";
import Head from "next/head";
import { CheckCircle } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      description: "For freelancers & small shops",
      price: "₹499/mo",
      features: [
        "Up to 50 invoices/month",
        "Customer & product management",
        "Basic analytics dashboard",
        "PDF & WhatsApp invoice sharing"
      ],
      buttonText: "Choose Plan"
    },
    {
      name: "Business",
      description: "For growing businesses",
      price: "₹999/mo",
      features: [
        "Unlimited invoices",
        "Advanced analytics & reports",
        "Team access & multi-user support",
        "Custom invoice templates & branding",
        "Online payment integration"
      ],
      buttonText: "Choose Plan"
    },
    {
      name: "Enterprise",
      description: "Custom solutions for scale",
      price: "Contact Us",
      features: [
        "Dedicated account manager",
        "Custom integrations & APIs",
        "Priority support",
        "Advanced security & backup"
      ],
      buttonText: "Contact Sales"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO Meta Tags */}
      <Head>
        <title>Tradebook Pricing - Choose Your Billing Plan</title>
        <meta
          name="description"
          content="Explore Tradebook pricing plans for freelancers, small shops, and enterprises. Choose the perfect billing software plan for your business."
        />
        <meta name="keywords" content="Tradebook pricing, billing software, invoice software, GST billing, small business software" />
      </Head>

       {/* Navbar */}
            <Navbar />
      

      {/* Hero Section */}
      <section className="text-center px-6 py-16 bg-gradient-to-b from-white to-blue-50">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Pricing Plans</h1>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          Simple and transparent pricing for every type of retail business. Start with free trial or choose a plan that suits your growth.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="px-6 py-12 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`border p-8 rounded-2xl shadow hover:shadow-xl transition transform hover:-translate-y-1 bg-white ${
              plan.name === "Business" ? "border-blue-600" : ""
            }`}
          >
            <h2 className="text-2xl font-semibold mb-2">{plan.name}</h2>
            <p className="text-gray-600 mb-4">{plan.description}</p>
            <p className="text-3xl font-bold mb-6">{plan.price}</p>
            <ul className="text-gray-700 mb-6 space-y-2">
              {plan.features.map((f, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle className="text-blue-600 h-5 w-5" />
                  {f}
                </li>
              ))}
            </ul>
            <button
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition"
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </section>

      {/* Call-to-Action */}
      <section className="text-center px-6 py-16 bg-blue-50">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Free Trial Today</h2>
        <p className="text-gray-700 mb-6 max-w-xl mx-auto">
          No credit card required. Sign up instantly and start generating invoices for your retail business.
        </p>
        <a
          href="/signup"
          className="px-8 py-4 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition font-medium"
        >
          Create Free Account
        </a>
      </section>
    </div>
  );
}
