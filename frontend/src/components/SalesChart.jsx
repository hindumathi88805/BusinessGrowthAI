import { useEffect, useState } from "react";
import API from "../services/api";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from "chart.js";

import { Line } from "react-chartjs-2";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);


function SalesChart() {

  const [sales, setSales] = useState([]);


  useEffect(() => {
    fetchSales();
  }, []);


  const fetchSales = async () => {
    try {

      const res = await API.get("/sales");

      setSales(res.data.sales);

    } catch (error) {

      console.log("Sales Chart Error:", error);

    }
  };


  const data = {

    labels: sales.map((sale) =>
      new Date(sale.saleDate).toLocaleDateString()
    ),

    datasets: [
  {
    label: "Revenue",
    data: sales.map(
      (sale) => sale.totalAmount
    ),

    borderColor: "blue",
    backgroundColor: "rgba(0, 123, 255, 0.2)",

    tension: 0.4
  }
]

  };


  return (

    <div className="bg-gray-200 p-5 rounded-xl shadow mt-8 w-full lg:w-2/3">

      <h2 className="text-lg font-bold mb-4">
        Sales Revenue
      </h2>


      <div className="h-64">

        <Line
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


export default SalesChart;