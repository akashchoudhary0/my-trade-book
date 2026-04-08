"use client";
import { useState } from "react";

export default function AddProductPage() {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    description: "",
  });

  const [productList, setProductList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!product.name || !product.price) {
      alert("Please fill product name and price.");
      return;
    }
    setProductList([...productList, product]);
    setProduct({ name: "", category: "", price: "", stock: "", description: "" });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Add Product</h1>

      <div className="bg-white p-6 rounded-xl shadow-md mb-6">
        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 mb-1">Product Name</label>
              <input
                type="text"
                name="name"
                value={product.name}
                onChange={handleChange}
                className="border p-2 rounded w-full"
                placeholder="Enter product name"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Category</label>
              <input
                type="text"
                name="category"
                value={product.category}
                onChange={handleChange}
                className="border p-2 rounded w-full"
                placeholder="e.g., Electronics, Dairy"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 mb-1">Price (₹)</label>
              <input
                type="number"
                name="price"
                value={product.price}
                onChange={handleChange}
                className="border p-2 rounded w-full"
                placeholder="Enter price"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Stock Quantity</label>
              <input
                type="number"
                name="stock"
                value={product.stock}
                onChange={handleChange}
                className="border p-2 rounded w-full"
                placeholder="Enter stock quantity"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Description</label>
            <textarea
              name="description"
              value={product.description}
              onChange={handleChange}
              className="border p-2 rounded w-full"
              placeholder="Write a short description"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
          >
            Add Product
          </button>
        </form>
      </div>

      {productList.length > 0 && (
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-4">Product List</h2>
          <table className="w-full border">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Category</th>
                <th className="p-2 border">Price (₹)</th>
                <th className="p-2 border">Stock</th>
                <th className="p-2 border">Description</th>
              </tr>
            </thead>
            <tbody>
              {productList.map((item, index) => (
                <tr key={index}>
                  <td className="p-2 border">{item.name}</td>
                  <td className="p-2 border">{item.category}</td>
                  <td className="p-2 border">{item.price}</td>
                  <td className="p-2 border">{item.stock}</td>
                  <td className="p-2 border">{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
