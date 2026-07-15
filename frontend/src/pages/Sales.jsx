import { useEffect, useState } from "react";
import API from "../services/api";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Sales() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    fetchSales();
  }, []);

  const fetchSales = async () => {
    try {
      const res = await API.get("/dashboard");
      setSales(res.data.sales);
    } catch (error) {
      console.log("Sales Error:", error);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-8">

          <h1 className="text-4xl font-bold mb-8">
            Sales Management
          </h1>

          <div className="bg-white rounded-xl shadow overflow-x-auto">

            <table className="w-full">

              <thead className="bg-slate-200">

                <tr>
                  <th className="p-4 text-left text-slate-700 font-semibold">
                    Product
                  </th>

                  <th className="p-4 text-left text-slate-700 font-semibold">
                    Quantity
                  </th>

                  <th className="p-4 text-left text-slate-700 font-semibold">
                    Price
                  </th>

                  <th className="p-4 text-left text-slate-700 font-semibold">
                    Total Amount
                  </th>

                  <th className="p-4 text-left text-slate-700 font-semibold">
                    Date
                  </th>
                </tr>

              </thead>

              <tbody>

                {sales.length === 0 ? (

                  <tr>
                    <td
                      colSpan="5"
                      className="text-center p-6 text-gray-500"
                    >
                      No sales found.
                    </td>
                  </tr>

                ) : (

                  sales.map((sale) => (

                    <tr
                      key={sale._id}
                      className="border-b hover:bg-gray-50"
                    >
                      <td className="p-4">
                        {sale.product}
                      </td>

                      <td className="p-4">
                        {sale.quantity}
                      </td>

                      <td className="p-4">
                        ₹{sale.price}
                      </td>

                      <td className="p-4 font-semibold">
                        ₹{sale.totalAmount}
                      </td>

                      <td className="p-4">
                        {new Date(sale.saleDate).toLocaleDateString()}
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

export default Sales;