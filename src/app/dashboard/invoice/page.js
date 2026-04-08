"use client";
import { useState } from "react";
import { PlusCircle, Trash2 } from "lucide-react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function InvoicePage() {
  const [items, setItems] = useState([{ description: "", qty: 1, price: 0 }]);
  const [invoiceInfo, setInvoiceInfo] = useState({
    buyerName: "",
    buyerAddress: "",
    invoiceNumber: "INV-" + Date.now(),
    date: new Date().toLocaleDateString(),
  });

  // 👉 Sample Business Data (later load from user profile)
  const businessProfile = {
    logo: "/logo.png", // Replace or dynamically use user logo URL
    name: "My TradeBook Pvt. Ltd.",
    address: "A/E 733 Housing Board Colony, Pithampur, Dhar (MP)",
    contact: "8109335351",
    gst: "23ABCDE1234Z5X",
  };

  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  const addItem = () => setItems([...items, { description: "", qty: 1, price: 0 }]);
  const removeItem = (index) => setItems(items.filter((_, i) => i !== index));

  const total = items.reduce((sum, i) => sum + i.qty * i.price, 0);

  const generatePDF = () => {
    const doc = new jsPDF();

    // ✅ Add Business Logo
    if (businessProfile.logo) {
      doc.addImage(businessProfile.logo, "PNG", 15, 10, 25, 25);
    }

    // ✅ Business Header
    doc.setFontSize(16);
    doc.text(businessProfile.name, 45, 18);
    doc.setFontSize(10);
    doc.text(businessProfile.address, 45, 24);
    doc.text(`Contact: ${businessProfile.contact}`, 45, 30);
    if (businessProfile.gst) doc.text(`GSTIN: ${businessProfile.gst}`, 45, 36);

    // ✅ Invoice Header
    doc.setFontSize(14);
    doc.text("Invoice", 160, 20);
    doc.setFontSize(10);
    doc.text(`Invoice No: ${invoiceInfo.invoiceNumber}`, 160, 26);
    doc.text(`Date: ${invoiceInfo.date}`, 160, 32);

    // ✅ Buyer Info
    doc.text("Bill To:", 15, 50);
    doc.text(invoiceInfo.buyerName || "__________________", 15, 56);
    doc.text(invoiceInfo.buyerAddress || "__________________", 15, 62);

    // ✅ Items Table
    const tableData = items.map((item, i) => [
      i + 1,
      item.description,
      item.qty,
      item.price,
      (item.qty * item.price).toFixed(2),
    ]);

    autoTable(doc, {
      startY: 70,
      head: [["#", "Description", "Qty", "Price", "Amount"]],
      body: tableData,
    });

    // ✅ Total
    const finalY = doc.lastAutoTable.finalY + 10;
    doc.setFontSize(12);
    doc.text(`Total: ₹${total.toFixed(2)}`, 150, finalY);

    doc.save(`${invoiceInfo.invoiceNumber}.pdf`);
  };

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold mb-2">Create Invoice</h1>

      {/* Buyer Info */}
      <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
        <h2 className="text-lg font-medium text-gray-700">Buyer Details</h2>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Buyer Name"
            value={invoiceInfo.buyerName}
            onChange={(e) => setInvoiceInfo({ ...invoiceInfo, buyerName: e.target.value })}
            className="border rounded-lg px-4 py-2 w-full"
          />
          <input
            type="text"
            placeholder="Buyer Address"
            value={invoiceInfo.buyerAddress}
            onChange={(e) => setInvoiceInfo({ ...invoiceInfo, buyerAddress: e.target.value })}
            className="border rounded-lg px-4 py-2 w-full"
          />
        </div>
      </div>

      {/* Items Section */}
      <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
        <h2 className="text-lg font-medium text-gray-700">Invoice Items</h2>
        {items.map((item, index) => (
          <div key={index} className="grid grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Description"
              value={item.description}
              onChange={(e) => handleItemChange(index, "description", e.target.value)}
              className="border rounded-lg px-4 py-2"
            />
            <input
              type="number"
              placeholder="Qty"
              value={item.qty}
              onChange={(e) => handleItemChange(index, "qty", parseInt(e.target.value) || 0)}
              className="border rounded-lg px-4 py-2"
            />
            <input
              type="number"
              placeholder="Price"
              value={item.price}
              onChange={(e) => handleItemChange(index, "price", parseFloat(e.target.value) || 0)}
              className="border rounded-lg px-4 py-2"
            />
            <button
              type="button"
              onClick={() => removeItem(index)}
              className="bg-red-500 text-white px-3 rounded-lg hover:bg-red-600 flex items-center justify-center"
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={addItem}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <PlusCircle size={18} /> Add Item
        </button>
      </div>

      {/* Total + Generate PDF */}
      <div className="bg-white p-6 rounded-xl shadow-md flex justify-between items-center">
        <h2 className="text-xl font-semibold">Total: ₹{total.toFixed(2)}</h2>
        <button
          onClick={generatePDF}
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
        >
          Generate PDF Invoice
        </button>
      </div>
    </div>
  );
}
