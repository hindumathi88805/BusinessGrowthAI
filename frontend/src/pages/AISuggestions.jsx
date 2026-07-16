import { useEffect, useState } from "react";
import API from "../services/api";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";


function AISuggestions() {


  const [analysis,setAnalysis] = useState(null);
  const [suggestions,setSuggestions] = useState([]);



  useEffect(()=>{

    fetchSuggestions();

  },[]);




  const fetchSuggestions = async()=>{

    try{


      const res = await API.get(
        "/ai/suggestions"
      );


      setAnalysis(
        res.data.analysis
      );


      setSuggestions(
        res.data.suggestions
      );


    }catch(error){


      console.log(
        "AI Error:",
        error.response?.data || error.message
      );


    }

  };




  return (

    <div className="flex min-h-screen bg-gray-100">


      <Sidebar />


      <div className="flex-1">


        <Navbar />


        <div className="p-8">


          <h1 className="text-4xl font-bold mb-8">

            AI Business Suggestions 🤖

          </h1>




          {!analysis ? (

            <p className="text-xl">
              Loading AI Analysis...
            </p>


          ) : (


            <>


              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">


                <div className="bg-white p-5 rounded-xl shadow">

                  <h2 className="font-bold">
                    Revenue
                  </h2>

                  <p className="text-3xl text-blue-600">
                    ₹{analysis.totalSales}
                  </p>

                </div>



                <div className="bg-white p-5 rounded-xl shadow">

                  <h2 className="font-bold">
                    Expenses
                  </h2>

                  <p className="text-3xl text-red-600">
                    ₹{analysis.totalExpenses}
                  </p>

                </div>



                <div className="bg-white p-5 rounded-xl shadow">

                  <h2 className="font-bold">
                    Profit
                  </h2>

                  <p className="text-3xl text-green-600">
                    ₹{analysis.profit}
                  </p>

                </div>



                <div className="bg-white p-5 rounded-xl shadow">

                  <h2 className="font-bold">
                    Profit Margin
                  </h2>

                  <p className="text-3xl text-purple-600">
                    {analysis.profitMargin}%
                  </p>

                </div>


              </div>





              <h2 className="text-2xl font-bold mb-4">

                AI Recommendations

              </h2>




              <div className="grid gap-5">


                {suggestions.map((item,index)=>(


                  <div

                    key={index}

                    className="bg-white p-5 rounded-xl shadow border-l-4 border-blue-500"

                  >

                    🤖 {item}


                  </div>


                ))}


              </div>



            </>


          )}



        </div>


      </div>


    </div>

  );

}


export default AISuggestions;