"use client";

import { useState } from "react";

export default function InvoicePage() {
  const [invoice, setInvoice] = useState({
    number: "47",
    date: new Date().toLocaleDateString(),
    customer: { name: "", address: "", phone: "", gstin: "", place: "" },
    items: [
      { name: "", hsn: "", qty: 1, rate: "", gst: 18 }
    ],
  });

  const handleItemChange = (index, field, value) => {
    const updated = [...invoice.items];
    updated[index][field] = value;
    setInvoice({ ...invoice, items: updated });
  };

  const addItem = () => {
    setInvoice({
      ...invoice,
      items: [...invoice.items, { name: "", hsn: "", qty: 1, rate: "", gst: 18 }]
    });
  };

  // Calculation
  const subtotal = invoice.items.reduce((sum, item) => {
    return sum + (Number(item.rate) || 0) * (Number(item.qty) || 1);
  }, 0);

  const gstAmount = invoice.items.reduce((sum, item) => {
    const base = (Number(item.rate) || 0) * (Number(item.qty) || 1);
    return sum + (base * (Number(item.gst) || 0)) / 100;
  }, 0);

  const total = subtotal + gstAmount;

  const numberToWords = (num) => {
    const a = [
      "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
      "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen",
      "Eighteen", "Nineteen"
    ];
    const b = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    if (num === 0) return "Zero";
    if (num < 20) return a[num];
    if (num < 100) return b[Math.floor(num / 10)] + " " + a[num % 10];
    if (num < 1000) return a[Math.floor(num / 100)] + " Hundred " + numberToWords(num % 100);
    if (num < 100000) return numberToWords(Math.floor(num / 1000)) + " Thousand " + numberToWords(num % 1000);
    if (num < 10000000) return numberToWords(Math.floor(num / 100000)) + " Lakh " + numberToWords(num % 100000);
    return num;
  };

  return (
    <div className="p-6 max-w-5xl mx-auto bg-white border border-blue-600 shadow">
      {/* Shop Header */}
      <div className="flex justify-between items-center border-b pb-3 mb-4">
        <div>
          <h1 className="text-2xl font-bold text-blue-700">Gada Electronics</h1>
          <p>123 Market Road, Indore, MP</p>
          <p>GSTIN: 22AAAAA0000A1Z5</p>
          <p>Phone: +91 9876543210</p>
        </div>
        <img src="/logo.png" alt="Shop Logo" className="w-30 h-30 object-contain" />
      </div>

      {/* Invoice Info */}
      <div className="flex justify-between border mb-4">
        <div className="w-3/4 border-r p-3">
          <h2 className="font-semibold border-b mb-2">Customer Detail</h2>
          <div className="flex justify-center">
            <label
                  className="w-1/4 block  text-sm font-medium text-black mb-2" htmlFor="name">
                  Name :
            </label>
            <input
            type="text"
            placeholder="Customer Name"
            className="w-3/4 border-b p-1 mb-1"
            value={invoice.customer.name}
            onChange={(e) => setInvoice({ ...invoice, customer: { ...invoice.customer, name: e.target.value } })}
            />
          </div>
          
           <div className="flex justify-center">
            <label
                  className="w-1/4 block text-sm font-medium text-black mb-2" htmlFor="name">
                  Customer Address :
            </label>
            <input
            type="text"
            placeholder="Address"
            className="w-3/4 border-b p-1 mb-1"
            value={invoice.customer.address}
            onChange={(e) => setInvoice({ ...invoice, customer: { ...invoice.customer, address: e.target.value } })}
            />
          </div>
          
          <div className="flex justify-center">
            <label
                  className="w-1/4 block text-sm font-medium text-black mb-2" htmlFor="name">
                  contact number :
            </label>
            <input
            type="text"
            placeholder="Phone"
            className="w-3/4 border-b p-1 mb-1"
            value={invoice.customer.phone}
            onChange={(e) => setInvoice({ ...invoice, customer: { ...invoice.customer, phone: e.target.value } })}
            />
          </div>
          
          <div className="flex justify-center">
            <label
                  className="w-1/4 block text-sm font-medium text-black mb-2" htmlFor="name">
                  GSTIN :
            </label>
            <input
            type="text"
            placeholder="GSTIN"
            className="w-3/4 border-b p-1 mb-1"
            value={invoice.customer.gstin}
            onChange={(e) => setInvoice({ ...invoice, customer: { ...invoice.customer, gstin: e.target.value } })}
            />
          </div>
          

          <div className="flex justify-center">
            <label
                  className="w-1/4 block text-sm font-medium text-black mb-2" htmlFor="name">
                  Place of supply 
            </label>
            <input
            type="text"
            placeholder="Place of Supply"
            className="w-3/4 border-b p-1"
            value={invoice.customer.place}
            onChange={(e) => setInvoice({ ...invoice, customer: { ...invoice.customer, place: e.target.value } })}
            />
          </div>
        </div>
        <div className="w-1/4 p-4 ">
          <p>Invoice No:  {invoice.number}</p>
          <p>Date: {invoice.date}</p>
        </div>
      </div>

      {/* Items Table */}
      <table className="w-full border mb-4">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Sr. No</th>
            <th className="border p-2">Product</th>
            <th className="border p-2">HSN</th>
            <th className="border p-2">Qty</th>
            <th className="border p-2">Rate</th>
            <th className="border p-2">Taxable Value</th>
            <th className="border p-2">GST %</th>
            <th className="border p-2">GST Amt</th>
            <th className="border p-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {invoice.items.map((item, i) => {
            const taxable = (Number(item.rate) || 0) * (Number(item.qty) || 1);
            const gstAmt = (taxable * (Number(item.gst) || 0)) / 100;
            const totalAmt = taxable + gstAmt;
            return (
              <tr key={i}>
                <td className="border p-2">{i + 1}</td>
                <td className="border p-2">
                  <input
                    type="text"
                    className="w-full border p-1"
                    value={item.name}
                    onChange={(e) => handleItemChange(i, "name", e.target.value)}
                  />
                </td>
                <td className="border p-2">
                  <input
                    type="text"
                    className="w-full border p-1"
                    value={item.hsn}
                    onChange={(e) => handleItemChange(i, "hsn", e.target.value)}
                  />
                </td>
                <td className="border p-2">
                  <input
                    type="number"
                    className="w-full border p-1"
                    value={item.qty}
                    onChange={(e) => handleItemChange(i, "qty", e.target.value)}
                  />
                </td>
                <td className="border p-2">
                  <input
                    type="number"
                    className="w-full border p-1"
                    value={item.rate}
                    onChange={(e) => handleItemChange(i, "rate", e.target.value)}
                  />
                </td>
                <td className="border p-2 text-right">₹{taxable.toFixed(2)}</td>
                <td className="border p-2">
                  <input
                    type="number"
                    className="w-full border p-1"
                    value={item.gst}
                    onChange={(e) => handleItemChange(i, "gst", e.target.value)}
                  />
                </td>
                <td className="border p-2 text-right">₹{gstAmt.toFixed(2)}</td>
                <td className="border p-2 text-right">₹{totalAmt.toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={addItem} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">+ Add Item</button>

      {/* Totals */}
      <div className="border-t pt-3 text-right">
        <p>Taxable Amount: ₹{subtotal.toFixed(2)}</p>
        <p>Add: GST: ₹{gstAmount.toFixed(2)}</p>
        <h2 className="text-lg font-bold">Grand Total: ₹{total.toFixed(2)}</h2>
        <p className="italic">In Words: {numberToWords(Math.round(total))} Only</p>
      </div>

      {/* Bank Details */}
      <div className="mt-6 border p-3">
        <h2 className="font-semibold">Bank Details</h2>
        <p>Name: ICICI</p>
        <p>Branch: Surat</p>
        <p>Acc No: 2715500356</p>
        <p>IFSC: ICIC045F</p>
        <p>UPI: ifox@icici</p>
      </div>

      {/* Terms */}
      <div className="mt-4 text-sm text-gray-600">
        <p>Subject to Indore Jurisdiction.</p>
        <p>Goods once sold will not be taken back.</p>
        <p>Delivery Ex-Premises.</p>
      </div>

      {/* Print */}
      <div className="mt-6 text-center">
        <button
          onClick={() => window.print()}
          className="bg-green-600 text-white px-6 py-2 rounded shadow"
        >
          Print / Download Invoice
        </button>
      </div>
    </div>
  );
}
