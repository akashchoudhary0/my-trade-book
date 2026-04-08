import { CheckCircle, BarChart3, Users, Shield, FileText, CreditCard, Smartphone } from "lucide-react";
import Navbar from "@/components/navbar/page";
import Head from "next/head";

export default function Features() {
  const features = [
    {
      title: "Easy Invoice Creation",
      description: "Generate professional invoices in seconds with customizable templates, GST-ready calculations, and instant PDF download.",
      icon: <FileText className="h-10 w-10 text-blue-600" />
    },
    {
      title: "Smart Customer Management",
      description: "Keep track of all your customers, their purchase history, and outstanding payments in one easy dashboard.",
      icon: <Users className="h-10 w-10 text-blue-600" />
    },
    {
      title: "Secure Online Payments",
      description: "Accept UPI, card, or online payments directly from invoices. Safe, fast, and hassle-free.",
      icon: <CreditCard className="h-10 w-10 text-blue-600" />
    },
    {
      title: "Insightful Reports & Analytics",
      description: "Analyze sales trends, top-selling products, and customer insights with easy-to-read dashboards.",
      icon: <BarChart3 className="h-10 w-10 text-blue-600" />
    },
    {
      title: "Mobile & Desktop Ready",
      description: "Access your billing software from anywhere — desktop or mobile, online or offline.",
      icon: <Smartphone className="h-10 w-10 text-blue-600" />
    },
    {
      title: "Safe & Reliable",
      description: "Enterprise-grade security ensures your business data is always backed up and protected.",
      icon: <Shield className="h-10 w-10 text-blue-600" />
    }
  ];

  return (
   

    <div className="min-h-screen bg-gray-50">
      {/* SEO Meta Tags */}
      <Head>
        <title>Tradebook Features - Smart Billing Software for Retail Stores</title>
        <meta
          name="description"
          content="Explore Tradebook features: invoice creation, customer management, online payments, analytics, mobile access & secure data storage. Perfect for small retail businesses."
        />
        <meta name="keywords" content="billing software, invoice, GST, retail software, customer management, analytics, Tradebook" />
      </Head>
       {/* Navbar */}
    <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-16 bg-gradient-to-b from-white to-blue-50">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Powerful Features of <span className="text-blue-600">Tradebook</span></h1>
        <p className="text-gray-700 max-w-2xl text-lg">
          Everything your retail business needs to manage billing, customers, payments, and insights — all in one simple platform.
        </p>
      </section>

      {/* Features Grid */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, i) => (
            <div key={i} className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-1">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="px-6 py-16 bg-blue-50 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Simplify Your Billing?</h2>
        <p className="text-gray-700 mb-6 max-w-xl mx-auto">
          Sign up today and start generating invoices in seconds. Free trial available for all small retail businesses.
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
