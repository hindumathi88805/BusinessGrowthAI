import { useEffect, useState } from "react";
import API from "../services/api";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardCard from "../components/DashboardCard";
import SalesChart from "../components/SalesChart";
import ExpenseChart from "../components/ExpenseChart";


function Dashboard() {

  const [dashboard, setDashboard] = useState(null);


  useEffect(() => {
    fetchDashboard();
  }, []);


  const fetchDashboard = async () => {
    try {

      const res = await API.get("/dashboard");

setDashboard(res.data.dashboard);

    } catch (error) {

      console.log("Dashboard Error:", error);

    }
  };


  return (

    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />


      <div className="flex-1">

        <Navbar />


        <main className="p-8">


          <div className="flex justify-between items-center mb-8">

  <h1 className="text-4xl font-bold">
    AI Business Growth Dashboard
  </h1>


  <button
    onClick={fetchDashboard}
    className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg"
  >
    Refresh
  </button>

</div>



          {!dashboard ? (

            <p className="text-xl">
              Loading Dashboard...
            </p>


          ) : (

            <>


              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">


                <DashboardCard
                  title="Total Sales"
                  value={`₹${dashboard.totalSales}`}
                  color="blue"
                />


                <DashboardCard
                  title="Total Expenses"
                  value={`₹${dashboard.totalExpenses}`}
                  color="red"
                />


                <DashboardCard
                  title="Net Profit"
                  value={`₹${dashboard.profit}`}
                  color="green"
                />


                <DashboardCard
                  title="Products Sold"
                  value={dashboard.totalProductsSold}
                  color="purple"
                />


              </div>



              <SalesChart />


              <ExpenseChart />


            </>

          )}


        </main>


      </div>


    </div>

  );
}


export default Dashboard;