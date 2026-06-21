"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function CreateInvoice() {
  const [profile, setProfile] = useState(null);

  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [gstPercent, setGstPercent] = useState(18);

  const [products, setProducts] = useState([
    {
      name: "",
      quantity: 1,
      price: 0,
    },
  ]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (!userId) return;

    const fetchProfile = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/auth/${userId}`
        );

        if (res.data.success) {
          setProfile(res.data.profile);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchProfile();
  }, []);

  const addProduct = () => {
    setProducts([
      ...products,
      {
        name: "",
        quantity: 1,
        price: 0,
      },
    ]);
  };

  const removeProduct = (index) => {
    const updated = [...products];
    updated.splice(index, 1);
    setProducts(updated);
  };

  const handleProductChange = (index, field, value) => {
    const updated = [...products];
    updated[index][field] = value;
    setProducts(updated);
  };

  const subtotal = products.reduce(
    (sum, item) =>
      sum +
      Number(item.quantity || 0) *
        Number(item.price || 0),
    0
  );

  const gstAmount =
    subtotal * (Number(gstPercent) / 100);

  const grandTotal = subtotal + gstAmount;

  const generatePDF = async () => {
    try {
      const doc = new jsPDF();

      const invoiceNo = `INV-${Date.now()}`;

      doc.setFontSize(20);
      doc.text(
        profile?.businessName || "TradeBook",
        14,
        20
      );

      doc.setFontSize(10);

      doc.text(
        `GST: ${profile?.gst || "N/A"}`,
        14,
        28
      );

      doc.text(
        `Phone: ${profile?.phoneNumber || ""}`,
        14,
        34
      );

      doc.text(
        `Address: ${
          profile?.address?.street || ""
        }, ${profile?.address?.city || ""}`,
        14,
        40
      );

      doc.text(
        `Invoice No: ${invoiceNo}`,
        140,
        20
      );

      doc.text(
        `Date: ${new Date().toLocaleDateString()}`,
        140,
        28
      );

      doc.setFontSize(12);

      doc.text(
        `Customer: ${customerName}`,
        14,
        55
      );

      doc.text(
        `Contact: ${customerPhone}`,
        14,
        62
      );

      autoTable(doc, {
        startY: 75,
        head: [
          [
            "Product",
            "Qty",
            "Price",
            "Amount",
          ],
        ],
        body: products.map((item) => [
          item.name,
          item.quantity,
          `₹${item.price}`,
          `₹${
            Number(item.quantity) *
            Number(item.price)
          }`,
        ]),
      });

      const finalY =
        doc.lastAutoTable.finalY + 15;

      doc.text(
        `Subtotal : ₹${subtotal.toFixed(2)}`,
        140,
        finalY
      );

      doc.text(
        `GST (${gstPercent}%): ₹${gstAmount.toFixed(
          2
        )}`,
        140,
        finalY + 8
      );

      doc.setFontSize(14);

      doc.text(
        `Total : ₹${grandTotal.toFixed(2)}`,
        140,
        finalY + 18
      );

      doc.save(`${invoiceNo}.pdf`);

      const userId = localStorage.getItem(
        "userId"
      );

      if (userId && profile) {
        await axios.put(
          `http://localhost:5000/api/auth/${userId}`,
          {
            totalInvoice:
              Number(profile.totalInvoice || 0) + 1,
          }
        );
      }

      alert("Invoice Generated Successfully");
    } catch (error) {
      console.log(error);
      alert("Failed to generate invoice");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-7xl mx-auto">

        <div className="bg-white rounded-3xl shadow-lg p-8">

          <h1 className="text-3xl font-bold text-slate-900 mb-8">
            Create Invoice
          </h1>

          {/* Business Details */}

          <div className="grid md:grid-cols-2 gap-6 mb-8">

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Business Name
              </label>

              <input
                value={
                  profile?.businessName || ""
                }
                readOnly
                className="w-full border border-slate-300 rounded-xl px-4 py-3 bg-slate-50 text-slate-900"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                GST Number
              </label>

              <input
                value={profile?.gst || ""}
                readOnly
                className="w-full border border-slate-300 rounded-xl px-4 py-3 bg-slate-50 text-slate-900"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Contact
              </label>

              <input
                value={
                  profile?.phoneNumber || ""
                }
                readOnly
                className="w-full border border-slate-300 rounded-xl px-4 py-3 bg-slate-50 text-slate-900"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Address
              </label>

              <input
                value={`${profile?.address?.street || ""}, ${
                  profile?.address?.city || ""
                }`}
                readOnly
                className="w-full border border-slate-300 rounded-xl px-4 py-3 bg-slate-50 text-slate-900"
              />
            </div>
          </div>

          {/* Customer */}

          <div className="grid md:grid-cols-2 gap-6 mb-8">

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Customer Name
              </label>

              <input
                value={customerName}
                onChange={(e) =>
                  setCustomerName(
                    e.target.value
                  )
                }
                className="w-full border border-slate-300 rounded-xl px-4 py-3 text-slate-900"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Customer Contact
              </label>

              <input
                value={customerPhone}
                onChange={(e) =>
                  setCustomerPhone(
                    e.target.value
                  )
                }
                className="w-full border border-slate-300 rounded-xl px-4 py-3 text-slate-900"
              />
            </div>
          </div>

          {/* Products */}

          <div className="space-y-4">

            {products.map((item, index) => (
              <div
                key={index}
                className="grid md:grid-cols-4 gap-4"
              >
                <input
                  placeholder="Product Name"
                  value={item.name}
                  onChange={(e) =>
                    handleProductChange(
                      index,
                      "name",
                      e.target.value
                    )
                  }
                  className="border border-slate-300 rounded-xl px-4 py-3 text-slate-900"
                />

                <input
                  type="number"
                  placeholder="Qty"
                  value={item.quantity}
                  onChange={(e) =>
                    handleProductChange(
                      index,
                      "quantity",
                      e.target.value
                    )
                  }
                  className="border border-slate-300 rounded-xl px-4 py-3 text-slate-900"
                />

                <input
                  type="number"
                  placeholder="Price"
                  value={item.price}
                  onChange={(e) =>
                    handleProductChange(
                      index,
                      "price",
                      e.target.value
                    )
                  }
                  className="border border-slate-300 rounded-xl px-4 py-3 text-slate-900"
                />

                <button
                  type="button"
                  onClick={() =>
                    removeProduct(index)
                  }
                  className="bg-red-500 hover:bg-red-600 text-white rounded-xl"
                >
                  Remove
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={addProduct}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
            >
              Add Product
            </button>
          </div>

          {/* GST */}

          <div className="mt-8">
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              GST Percentage
            </label>

            <input
              type="number"
              value={gstPercent}
              onChange={(e) =>
                setGstPercent(
                  e.target.value
                )
              }
              className="w-40 border border-slate-300 rounded-xl px-4 py-3 text-slate-900"
            />
          </div>

          {/* Summary */}

          <div className="mt-10 bg-slate-50 rounded-2xl p-6">

            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Invoice Summary
            </h2>

            <div className="space-y-2 text-slate-800">
              <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
              <p>GST: ₹{gstAmount.toFixed(2)}</p>
              <p className="text-2xl font-bold">
                Total: ₹{grandTotal.toFixed(2)}
              </p>
            </div>

            <button
              onClick={generatePDF}
              className="mt-6 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold"
            >
              Generate Invoice PDF
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}