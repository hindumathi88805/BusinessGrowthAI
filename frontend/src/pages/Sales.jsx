import { useEffect, useState } from "react";
import API from "../services/api";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Sales() {
  const [sales, setSales] = useState([]);
const [editingSale, setEditingSale] = useState(null);

  useEffect(() => {
    fetchSales();
  }, []);

  const fetchSales = async () => {
    try {
      const res = await API.get("/sales");
setSales(res.data.sales);
    } catch (error) {
      console.log("Sales Error:", error);
    }
  };
  const deleteSale = async (id) => {
  try {

    await API.delete(`/sales/${id}`);

    alert("Sale deleted successfully");

    fetchSales();

  } catch(error) {

    console.log("Delete Error:", error);

  }
};
const updateSale = async () => {
  try {

    await API.put(
      `/sales/${editingSale._id}`,
      editingSale
    );

    alert("Sale updated successfully");

    setEditingSale(null);

    fetchSales();

  } catch(error) {

    console.log("Update Error:", error);

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
{editingSale && (

<div className="bg-white p-6 rounded-xl shadow mb-6">

<h2 className="text-2xl font-bold mb-4">
Edit Sale
</h2>


<input
className="border p-2 mr-3"
value={editingSale.product}
onChange={(e)=>
setEditingSale({
...editingSale,
product:e.target.value
})
}
/>


<input
className="border p-2 mr-3"
type="number"
value={editingSale.quantity}
onChange={(e)=>
setEditingSale({
...editingSale,
quantity:Number(e.target.value)
})
}
/>


<input
className="border p-2 mr-3"
type="number"
value={editingSale.price}
onChange={(e)=>
setEditingSale({
...editingSale,
price:Number(e.target.value)
})
}
/>


<button
onClick={updateSale}
className="bg-green-500 text-white px-5 py-2 rounded-lg"
>
Update
</button>


</div>

)}
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

<th className="p-4 text-left text-slate-700 font-semibold">
  Actions
</th>
                </tr>

              </thead>

              <tbody>

                {sales.length === 0 ? (

                  <tr>
                    <td
                      colSpan="6"
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

<td className="p-4 flex gap-2">

<button
  onClick={() => setEditingSale(sale)}
  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
>
  Edit
</button>


<button
  onClick={() => deleteSale(sale._id)}
  className="bg-red-500 text-white px-4 py-2 rounded-lg"
>
  Delete
</button>

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