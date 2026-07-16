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

      const res = await API.get("/reports");

      setReport(res.data.report);

    } catch (error) {

      console.log(
        "Report Error:",
        error.response?.data || error.message
      );

    }

  };


  const downloadPDF = async () => {

    try {

      const response = await API.get(
        "/reports/pdf",
        {
          responseType: "blob"
        }
      );

      const url = window.URL.createObjectURL(
        new Blob([response.data])
      );

      const link = document.createElement("a");

      link.href = url;

      link.download = "Business_Report.pdf";

      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);

      window.URL.revokeObjectURL(url);

    } catch (error) {

      console.log(
        "PDF Error:",
        error.response?.data || error.message
      );

      alert("Failed to download PDF.");

    }

  };


  const downloadExcel = async () => {

    try {

      const response = await API.get(
        "/reports/excel",
        {
          responseType: "blob"
        }
      );

      const url = window.URL.createObjectURL(
        new Blob([response.data])
      );

      const link = document.createElement("a");

      link.href = url;

      link.download = "Business_Report.xlsx";

      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);

      window.URL.revokeObjectURL(url);

    } catch (error) {

      console.log(
        "Excel Error:",
        error.response?.data || error.message
      );

      alert("Failed to download Excel.");

    }

  };


  return (

    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-8">

          <h1 className="text-4xl font-bold mb-8">
            Business Reports 📄
          </h1>

          {!report ? (

            <p className="text-xl">
              Loading Report...
            </p>

          ) : (

            <>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-5 mb-8">

                <div className="bg-white p-5 rounded-xl shadow">
                  <h2 className="font-bold">
                    Revenue
                  </h2>
                  <p className="text-3xl text-blue-600">
                    ₹{report.totalRevenue}
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl shadow">
                  <h2 className="font-bold">
                    Expense
                  </h2>
                  <p className="text-3xl text-red-600">
                    ₹{report.totalExpense}
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl shadow">
                  <h2 className="font-bold">
                    Profit
                  </h2>
                  <p className="text-3xl text-green-600">
                    ₹{report.profit}
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl shadow">
                  <h2 className="font-bold">
                    Sales
                  </h2>
                  <p className="text-3xl">
                    {report.salesCount}
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl shadow">
                  <h2 className="font-bold">
                    Expenses
                  </h2>
                  <p className="text-3xl">
                    {report.expenseCount}
                  </p>
                </div>

              </div>

              <div className="flex gap-4">

                <button
                  onClick={downloadPDF}
                  className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg"
                >
                  📄 Download PDF
                </button>

                <button
                  onClick={downloadExcel}
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg"
                >
                  📗 Download Excel
                </button>

              </div>

            </>

          )}

        </div>

      </div>

    </div>

  );

}

export default Reports;