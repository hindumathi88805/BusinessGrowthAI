import { useEffect, useState } from "react";
import API from "../services/api";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Expenses() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const res = await API.get("/dashboard");
      setExpenses(res.data.expenses);
    } catch (error) {
      console.log("Expense Error:", error);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-8">

          <h1 className="text-4xl font-bold mb-8">
            Expense Management
          </h1>

          <div className="bg-white rounded-xl shadow overflow-x-auto">

            <table className="w-full">

              <thead className="bg-slate-200">

                <tr>

                  <th className="p-4 text-left text-slate-700 font-semibold">
                    Title
                  </th>

                  <th className="p-4 text-left text-slate-700 font-semibold">
                    Category
                  </th>

                  <th className="p-4 text-left text-slate-700 font-semibold">
                    Amount
                  </th>

                  <th className="p-4 text-left text-slate-700 font-semibold">
                    Date
                  </th>

                </tr>

              </thead>

              <tbody>

                {expenses.length === 0 ? (

                  <tr>
                    <td
                      colSpan="4"
                      className="text-center p-6 text-gray-500"
                    >
                      No expenses found.
                    </td>
                  </tr>

                ) : (

                  expenses.map((expense) => (

                    <tr
                      key={expense._id}
                      className="border-b hover:bg-gray-50"
                    >

                      <td className="p-4">
                        {expense.title}
                      </td>

                      <td className="p-4">
                        {expense.category}
                      </td>

                      <td className="p-4 font-semibold">
                        ₹{expense.amount}
                      </td>

                      <td className="p-4">
                        {new Date(expense.expenseDate).toLocaleDateString()}
                      </td>

                    </tr>

                  ))

                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Expenses;