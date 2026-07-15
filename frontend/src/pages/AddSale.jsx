import { useState } from "react";
import API from "../services/api";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function AddSale() {

  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post("/sales", {
  product,
  quantity: Number(quantity),
  price: Number(price),
  totalAmount: Number(quantity) * Number(price)
});

      alert("Sale Added Successfully!");

      setProduct("");
      setQuantity("");
      setPrice("");

    } catch (error) {

  console.log(error);

  console.log(error.response?.data);

  alert(error.response?.data?.message || "Failed to add sale");

}

  };

  return (

    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-8">

          <h1 className="text-4xl font-bold mb-8">
            Add Sale
          </h1>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow max-w-lg"
          >

            <input
              type="text"
              placeholder="Product Name"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              className="w-full border p-3 rounded mb-4"
              required
            />

            <input
              type="number"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full border p-3 rounded mb-4"
              required
            />

            <input
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full border p-3 rounded mb-6"
              required
            />

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
            >
              Add Sale
            </button>

          </form>

        </div>

      </div>

    </div>

  );

}

export default AddSale;