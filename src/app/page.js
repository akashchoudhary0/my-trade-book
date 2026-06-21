import Navbar from "@/components/navbar/page";
import Footer from "@/components/footer/page";
import { BarChart3, Users, Shield, CheckCircle } from "lucide-react";
import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      {/* SEO Meta Tags */}
      <Head>
        <title>Tradebook - Smart Billing Software for Retail Stores</title>

        <meta
          name="description"
          content="Tradebook is a simple and smart billing software for small retail businesses. Create invoices, manage customers, track payments, and grow your business effortlessly."
        />

        <meta
          name="keywords"
          content="billing software, invoice, GST, retail shop, small business, Tradebook"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50 to-gray-100 py-24 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <CheckCircle className="w-4 h-4" />
              Trusted by Growing Retail Businesses
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Smart Billing Made Simple with{" "}
              <span className="text-blue-600">Tradebook</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
              Manage invoices, customers, GST billing, inventory, and payments
              with one powerful yet simple billing platform designed for small
              businesses and retail stores.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/signup"
                className="px-8 py-4 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-300 font-semibold"
              >
                Get Started Free
              </a>

              <a
                href="/about"
                className="px-8 py-4 border border-gray-300 bg-white text-gray-900 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-4xl font-bold mb-4">
                Why Choose{" "}
                <span className="text-blue-600">Tradebook?</span>
              </h2>

              <p className="text-gray-700 max-w-2xl mx-auto text-lg">
                Everything you need to manage your retail business in one
                modern, secure, and easy-to-use platform.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 flex items-center justify-center bg-blue-100 rounded-xl mb-5">
                  <BarChart3 className="w-7 h-7 text-blue-600" />
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  Smart Analytics
                </h3>

                <p className="text-gray-700 leading-relaxed">
                  Monitor sales, revenue, and expenses with beautiful dashboards
                  and real-time business insights.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 flex items-center justify-center bg-blue-100 rounded-xl mb-5">
                  <Users className="w-7 h-7 text-blue-600" />
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  Customer Management
                </h3>

                <p className="text-gray-700 leading-relaxed">
                  Store customer records, manage invoices, and track payments
                  easily from one dashboard.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 flex items-center justify-center bg-blue-100 rounded-xl mb-5">
                  <Shield className="w-7 h-7 text-blue-600" />
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  Secure & Reliable
                </h3>

                <p className="text-gray-700 leading-relaxed">
                  Your business data stays protected with secure authentication,
                  reliable storage, and regular backups.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-6 bg-blue-50">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-blue-600 mb-2">10K+</h3>
              <p className="text-gray-700">Businesses</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-blue-600 mb-2">50K+</h3>
              <p className="text-gray-700">Invoices Generated</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-blue-600 mb-2">99.9%</h3>
              <p className="text-gray-700">System Uptime</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-blue-600 mb-2">24/7</h3>
              <p className="text-gray-700">Support</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 bg-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Start Billing Smarter Today
            </h2>

            <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
              Join thousands of retail businesses using Tradebook to simplify
              billing, manage inventory, and grow faster.
            </p>

            <a
              href="/signup"
              className="inline-block px-10 py-4 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-300 font-semibold text-lg"
            >
              Create Free Account
            </a>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-6 bg-gradient-to-r from-blue-50 to-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">
              Trusted by{" "}
              <span className="text-blue-600">
                Growing Businesses
              </span>
            </h2>

            <p className="text-gray-700 max-w-2xl mx-auto mb-12 text-lg">
              Businesses across India use Tradebook to improve billing and
              simplify operations.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md">
                <p className="text-gray-800 italic text-lg leading-relaxed">
                  "Tradebook made billing incredibly simple for my shop. GST
                  invoices are generated instantly and inventory tracking saves
                  me hours every week."
                </p>

                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900">
                    Ramesh Sharma
                  </h4>

                  <p className="text-gray-600 text-sm">
                    Grocery Store Owner
                  </p>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md">
                <p className="text-gray-800 italic text-lg leading-relaxed">
                  "Simple UI with powerful features. Tradebook helped us manage
                  customers, payments, and reports without needing expensive
                  software."
                </p>

                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900">
                    Priya Verma
                  </h4>

                  <p className="text-gray-600 text-sm">
                    Retail Business Owner
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}