import { useEffect, useState } from "react";
import API from "../services/api";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

import { Pie } from "react-chartjs-2";


ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);


function ExpenseChart() {

  const [expenses, setExpenses] = useState([]);


  useEffect(() => {
    fetchExpenses();
  }, []);


  const fetchExpenses = async () => {

    try {

      const res = await API.get("/dashboard");

      setExpenses(res.data.expenses);

    } catch(error) {

      console.log("Expense Chart Error:", error);

    }

  };


  const data = {

    labels: expenses.map(
      (expense) => expense.category
    ),

    datasets: [
  {
    label: "Expenses",

    data: expenses.map(
      (expense) => expense.amount
    ),

    backgroundColor: [
      "#93c5fd",
      "#86efac",
      "#fca5a5",
      "#d8b4fe"
    ]
  }
]

  };


  return (

    <div className="bg-gray-200 p-5 rounded-xl shadow mt-8 w-full lg:w-96">

      <h2 className="text-lg font-bold mb-4">
        Expense Distribution
      </h2>


      <div className="h-64">

        <Pie
          data={data}
          options={{
            responsive: true,
            maintainAspectRatio: false
          }}
        />

      </div>


    </div>

  );

}


export default ExpenseChart;