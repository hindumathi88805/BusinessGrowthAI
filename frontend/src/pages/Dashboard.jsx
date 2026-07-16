import { useEffect, useState } from "react";
import API from "../services/api";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardCard from "../components/DashboardCard";
import SalesChart from "../components/SalesChart";
import ExpenseChart from "../components/ExpenseChart";
import ProfitChart from "../components/ProfitChart";

function Dashboard() {

  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {

    try {

      const res = await API.get("/dashboard");

      setDashboard(res.data.dashboard);
      console.log(res.data.dashboard);

    } catch (error) {

      console.log(error);

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

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

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

                <DashboardCard
                  title="Business Health"
                  value={`${dashboard.healthScore}%`}
                  color="emerald"
                />

                <DashboardCard
                  title="Business Status"
                  value={dashboard.healthStatus}
                  color="orange"
                />

              </div>

              <SalesChart />

              <ExpenseChart />

              <ProfitChart dashboard={dashboard} />

              {/* AI Forecast */}

              <div className="bg-white rounded-xl shadow-lg p-6 mt-8">

                <h2 className="text-2xl font-bold mb-6">
                  🤖 AI Business Forecast
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                  <div className="bg-blue-100 p-5 rounded-xl">

                    <h3 className="text-blue-700 font-bold">
                      Predicted Revenue
                    </h3>

                    <p className="text-3xl font-bold mt-2">
                      ₹{dashboard.predictedRevenue}
                    </p>

                  </div>

                  <div className="bg-green-100 p-5 rounded-xl">

                    <h3 className="text-green-700 font-bold">
                      Predicted Profit
                    </h3>

                    <p className="text-3xl font-bold mt-2">
                      ₹{dashboard.predictedProfit}
                    </p>

                  </div>

                  <div className="bg-purple-100 p-5 rounded-xl">

                    <h3 className="text-purple-700 font-bold">
                      Expected Growth
                    </h3>

                    <p className="text-3xl font-bold mt-2">
                      {dashboard.expectedGrowth}
                    </p>

                  </div>

                </div>

                <div className="mt-6 p-5 bg-yellow-50 border-l-4 border-yellow-500 rounded">

                  <h3 className="font-bold text-lg mb-2">
                    💡 AI Recommendation
                  </h3>

                  <p>

                    Based on your current sales and expenses,
                    your business is expected to grow by
                    <b> {dashboard.expectedGrowth}</b> next month.
                    Continue focusing on your best-selling products,
                    keep expenses under control, and upload sales
                    reports regularly to improve AI predictions.

                  </p>

                </div>

              </div>

            </>

          )}

        </main>

      </div>

    </div>

  );

}

export default Dashboard;