import Navbar from "@/components/navbar/page";
import Footer from "@/components/footer/page";
import { CheckCircle, BarChart3, Users, Shield } from "lucide-react";
import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* SEO Meta Tags */}
      <Head>
        <title>Tradebook - Smart Billing Software for Retail Stores</title>
        <meta
          name="description"
          content="Tradebook is a simple and smart billing software for small retail businesses. Create invoices, manage customers, track payments, and grow your business effortlessly."
        />
        <meta name="keywords" content="billing software, invoice, GST, retail shop, small business, Tradebook" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main className="flex-1">
        <section className="flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-b from-white to-gray-100">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Welcome to <span className="text-blue-600">Tradebook</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mb-8 text-lg">
            Smart & easy billing software for retail businesses. Manage customers, invoices & payments — all in one simple platform.
          </p>
          <div className="flex gap-4">
            <a
              href="/login"
              className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition font-medium"
            >
              Get Started Free
            </a>
            <a
              href="/about"
              className="px-6 py-3 border border-gray-400 text-gray-700 rounded-xl hover:bg-gray-100 transition font-medium"
            >
              Learn More
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-6 py-16 bg-white">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose <span className="text-blue-600">Tradebook?</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition">
              <BarChart3 className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Smart Analytics</h3>
              <p className="text-gray-600">
                Get real-time insights into your sales, revenue, and expenses with easy-to-read dashboards.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition">
              <Users className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Customer Management</h3>
              <p className="text-gray-600">
                Manage all your customers in one place with easy invoicing & payment tracking.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition">
              <Shield className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
              <p className="text-gray-600">
                Enterprise-grade security ensures your business data is always safe & backed up.
              </p>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="px-6 py-16 bg-blue-50 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Billing Smarter Today</h2>
          <p className="text-gray-700 mb-6 max-w-xl mx-auto">
            Sign up for free and start generating professional invoices for your retail business instantly.
          </p>
          <a
            href="/signup"
            className="px-8 py-4 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition font-medium"
          >
            Create Free Account
          </a>
        </section>

        {/* Testimonials Section */}
        <section className="px-6 py-20 bg-gradient-to-r from-blue-50 to-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Trusted by <span className="text-blue-600">Growing Businesses</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-10">
            Join 10,000+ small & medium businesses using Tradebook to simplify billing and grow faster.
          </p>
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="p-4 bg-white rounded-xl shadow-md max-w-xs">
              <p className="text-gray-700 italic">"Tradebook made my billing effortless. Highly recommend!"</p>
              <p className="mt-3 font-semibold">— Ramesh, Shop Owner</p>
            </div>
            <div className="p-4 bg-white rounded-xl shadow-md max-w-xs">
              <p className="text-gray-700 italic">"Simple UI, powerful features. Perfect for small retail businesses."</p>
              <p className="mt-3 font-semibold">— Priya, Startup Founder</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
