"use client";

import { useState } from "react";

export default function InvoicePage() {
  const [customer, setCustomer] = useState({ name: "", contact: "" });
  const [items, setItems] = useState([
    { product: "", quantity: 1, price: 0, warranty: "" },
  ]);

  const addItem = () => {
    setItems([...items, { product: "", quantity: 1, price: 0, warranty: "" }]);
  };

  const updateItem = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  const total = items.reduce((sum, item) => sum + item.quantity * item.price, 0);

  const printInvoice = () => {
    window.print();
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center">Mobile Shop Invoice</h1>

      {/* Customer Details */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">Customer Details</h2>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Customer Name"
            className="p-2 border rounded"
            value={customer.name}
            onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Contact Number"
            className="p-2 border rounded"
            value={customer.contact}
            onChange={(e) =>
              setCustomer({ ...customer, contact: e.target.value })
            }
          />
        </div>
      </div>

      {/* Product Details */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Product Details</h2>
        {items.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-4 gap-4 mb-4 bg-gray-50 p-4 rounded-lg"
          >
            <input
              type="text"
              placeholder="Product Name"
              className="p-2 border rounded"
              value={item.product}
              onChange={(e) => updateItem(index, "product", e.target.value)}
            />
            <input
              type="number"
              placeholder="Quantity"
              className="p-2 border rounded"
              value={item.quantity}
              onChange={(e) =>
                updateItem(index, "quantity", Number(e.target.value))
              }
            />
            <input
              type="number"
              placeholder="Price"
              className="p-2 border rounded"
              value={item.price}
              onChange={(e) =>
                updateItem(index, "price", Number(e.target.value))
              }
            />
            <input
              type="text"
              placeholder="Warranty (e.g. 1 Year)"
              className="p-2 border rounded"
              value={item.warranty}
              onChange={(e) => updateItem(index, "warranty", e.target.value)}
            />
          </div>
        ))}

        <button
          onClick={addItem}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Add Product
        </button>
      </div>

      {/* Invoice Summary */}
      <div className="mt-6 p-6 bg-white rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Invoice Summary</h2>
        <p>
          <strong>Customer:</strong> {customer.name || "N/A"}
        </p>
        <p>
          <strong>Contact:</strong> {customer.contact || "N/A"}
        </p>

        <table className="w-full mt-4 border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Product</th>
              <th className="border p-2">Quantity</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Warranty</th>
              <th className="border p-2">Total</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index} className="text-center">
                <td className="border p-2">{item.product}</td>
                <td className="border p-2">{item.quantity}</td>
                <td className="border p-2">₹{item.price}</td>
                <td className="border p-2">{item.warranty}</td>
                <td className="border p-2">₹{item.quantity * item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 className="text-lg font-bold mt-4">Grand Total: ₹{total}</h3>

        <div className="mt-4 flex gap-4">
          <button
            onClick={printInvoice}
            className="px-4 py-2 bg-green-600 text-white rounded-lg"
          >
            Print Invoice
          </button>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg">
            Share Invoice
          </button>
        </div>
      </div>
    </div>
  );
}
