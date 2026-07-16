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



  const formatNumber = (num) => {

    if(num >= 1000000)
      return `₹${(num / 1000000).toFixed(2)}M`;

    if(num >= 1000)
      return `₹${(num / 1000).toFixed(1)}K`;

    return `₹${num}`;

  };



  return (

    <div className="flex min-h-screen bg-gray-100">


      <Sidebar />


      <div className="flex-1">


        <Navbar />


        <main className="p-8">


          <div className="flex justify-between items-center mb-8">


            <h1 className="text-4xl font-bold">
              AI Business Growth Dashboard 🚀
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


              {/* Dashboard Cards */}

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">


                <DashboardCard
                  title="💰 Total Sales"
                  value={formatNumber(dashboard.totalSales)}
                  color="blue"
                />


                <DashboardCard
                  title="💳 Total Expenses"
                  value={formatNumber(dashboard.totalExpenses)}
                  color="red"
                />


                <DashboardCard
                  title="📈 Net Profit"
                  value={formatNumber(dashboard.profit)}
                  color="green"
                />


                <DashboardCard
                  title="📦 Products Sold"
                  value={dashboard.totalProductsSold}
                  color="purple"
                />


                <DashboardCard
                  title="❤️ Business Health"
                  value={`${dashboard.healthScore}%`}
                  color="emerald"
                />


                <DashboardCard
                  title="🏆 Business Status"
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

                    <h3 className="font-bold text-blue-700">
                      Predicted Revenue
                    </h3>

                    <p className="text-3xl font-bold mt-2">

                      {dashboard.predictedRevenue
                      ? formatNumber(dashboard.predictedRevenue)
                      : "₹0"}

                    </p>

                  </div>




                  <div className="bg-green-100 p-5 rounded-xl">

                    <h3 className="font-bold text-green-700">
                      Predicted Profit
                    </h3>

                    <p className="text-3xl font-bold mt-2">

                      {dashboard.predictedProfit
                      ? formatNumber(dashboard.predictedProfit)
                      : "₹0"}

                    </p>

                  </div>




                  <div className="bg-purple-100 p-5 rounded-xl">

                    <h3 className="font-bold text-purple-700">
                      Expected Growth
                    </h3>

                    <p className="text-3xl font-bold mt-2">

                      {dashboard.expectedGrowth || "5%"}

                    </p>

                  </div>



                </div>




                <div className="mt-6 p-5 bg-yellow-50 border-l-4 border-yellow-500 rounded">


                  <h3 className="font-bold text-lg mb-2">
                    💡 AI Recommendation
                  </h3>


                  <p>

                    Based on your current sales and expenses,
                    your business is expected to grow next month.
                    Continue focusing on your best-selling products,
                    control unnecessary expenses and upload sales
                    reports regularly for better AI predictions.

                  </p>


                </div>


              </div>







              {/* Business Summary */}

              <div className="bg-white rounded-xl shadow-lg p-6 mt-8">


                <h2 className="text-2xl font-bold mb-6">
                  📋 Business Summary
                </h2>



                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">



                  <div className="space-y-5">


                    <div className="flex gap-4">

                      <span className="text-3xl">
                        💰
                      </span>

                      <div>

                        <h3 className="font-bold">
                          Total Revenue
                        </h3>

                        <p>
                          {formatNumber(dashboard.totalSales)}
                        </p>

                      </div>

                    </div>



                    <div className="flex gap-4">

                      <span className="text-3xl">
                        💳
                      </span>

                      <div>

                        <h3 className="font-bold">
                          Total Expenses
                        </h3>

                        <p>
                          {formatNumber(dashboard.totalExpenses)}
                        </p>

                      </div>

                    </div>




                    <div className="flex gap-4">

                      <span className="text-3xl">
                        📦
                      </span>

                      <div>

                        <h3 className="font-bold">
                          Products Sold
                        </h3>

                        <p>
                          {dashboard.totalProductsSold}
                        </p>

                      </div>

                    </div>


                  </div>





                  <div className="space-y-5">


                    <div className="flex gap-4">

                      <span className="text-3xl">
                        🏆
                      </span>

                      <div>

                        <h3 className="font-bold">
                          Business Status
                        </h3>

                        <p>
                          {dashboard.healthStatus}
                        </p>

                      </div>

                    </div>




                    <div className="flex gap-4">

                      <span className="text-3xl">
                        ❤️
                      </span>

                      <div>

                        <h3 className="font-bold">
                          Health Score
                        </h3>

                        <p>
                          {dashboard.healthScore}%
                        </p>

                      </div>

                    </div>




                    <div className="flex gap-4">

                      <span className="text-3xl">
                        💡
                      </span>

                      <div>

                        <h3 className="font-bold">
                          Recommendation
                        </h3>

                        <p className="text-gray-600">

                          Maintain sales growth and control expenses
                          to improve business performance.

                        </p>

                      </div>

                    </div>



                  </div>



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