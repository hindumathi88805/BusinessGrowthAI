import { useEffect, useState } from "react";
import API from "../services/api";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";


function Reports() {

  const [report, setReport] = useState(null);


  useEffect(() => {

    fetchReport();

  }, []);



  const fetchReport = async () => {

    try {

      const res = await API.get("/dashboard");

      setReport(res.data.dashboard);


    } catch(error) {

      console.log("Report Error:", error);

    }

  };



  return (

    <div className="flex min-h-screen bg-gray-100">


      <Sidebar />


      <div className="flex-1">


        <Navbar />


        <div className="p-8">


          <h1 className="text-4xl font-bold mb-8">
            Business Reports 📊
          </h1>



          {!report ? (

            <p>
              Loading Reports...
            </p>


          ) : (


            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">



              <div className="bg-white p-6 rounded-xl shadow">

                <h2 className="text-xl font-bold">
                  Total Revenue
                </h2>

                <p className="text-3xl mt-3">
                  ₹{report.totalSales}
                </p>

              </div>




              <div className="bg-white p-6 rounded-xl shadow">

                <h2 className="text-xl font-bold">
                  Total Expenses
                </h2>

                <p className="text-3xl mt-3">
                  ₹{report.totalExpenses}
                </p>

              </div>




              <div className="bg-white p-6 rounded-xl shadow">

                <h2 className="text-xl font-bold">
                  Net Profit
                </h2>

                <p className="text-3xl mt-3">
                  ₹{report.profit}
                </p>

              </div>




              <div className="bg-white p-6 rounded-xl shadow">

                <h2 className="text-xl font-bold">
                  Products Sold
                </h2>

                <p className="text-3xl mt-3">
                  {report.totalProductsSold}
                </p>

              </div>



            </div>

          )}



        </div>


      </div>


    </div>

  );

}


export default Reports;