import { useState } from "react";
import API from "../services/api";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function AddExpense() {

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");


  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post("/expenses", {
        title,
        category,
        amount: Number(amount)
      });


      alert("Expense Added Successfully!");

      setTitle("");
      setCategory("");
      setAmount("");


    } catch(error) {

      console.log("Expense Error:", error.response?.data || error.message);

      alert(
        error.response?.data?.message || 
        "Failed to add expense"
      );

    }

  };


  return (

    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />


      <div className="flex-1">

        <Navbar />


        <div className="p-8">


          <h1 className="text-4xl font-bold mb-8">
            Add Expense
          </h1>


          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow max-w-lg"
          >


            <input
              type="text"
              placeholder="Expense Title"
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
              className="w-full border p-3 rounded mb-4"
              required
            />


            <input
              type="text"
              placeholder="Category"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
              className="w-full border p-3 rounded mb-4"
              required
            />


            <input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e)=>setAmount(e.target.value)}
              className="w-full border p-3 rounded mb-6"
              required
            />


            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg"
            >
              Add Expense
            </button>


          </form>


        </div>


      </div>


    </div>

  );

}


export default AddExpense;