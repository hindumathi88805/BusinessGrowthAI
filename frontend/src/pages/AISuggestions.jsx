import { useEffect, useState } from "react";
import API from "../services/api";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";


function AISuggestions() {

  const [dashboard, setDashboard] = useState(null);
  const [suggestions, setSuggestions] = useState([]);


  useEffect(() => {

    fetchData();

  }, []);



  const fetchData = async () => {

    try {

      const res = await API.get("/dashboard");

      const data = res.data.dashboard;

      setDashboard(data);


      generateSuggestions(data);


    } catch(error) {

      console.log("AI Error:", error);

    }

  };



  const generateSuggestions = (data) => {

    let advice = [];


    if(data.profit > 50000){

      advice.push(
        "🎉 Your profit is high. Consider expanding your business."
      );

    }
    else{

      advice.push(
        "📈 Focus on increasing sales to improve profit."
      );

    }



    if(data.totalExpenses > data.totalSales * 0.5){

      advice.push(
        "⚠️ Expenses are high. Try reducing unnecessary costs."
      );

    }
    else{

      advice.push(
        "✅ Your expense management is good."
      );

    }



    if(data.totalProductsSold < 10){

      advice.push(
        "🚀 Promote your products to increase sales."
      );

    }
    else{

      advice.push(
        "🔥 Product sales are performing well."
      );

    }


    advice.push(
      "💡 Track your monthly revenue regularly for better decisions."
    );


    setSuggestions(advice);

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



          {!dashboard ? (

            <p>
              Loading AI Analysis...
            </p>

          ) : (

            <div className="grid gap-5">


              {suggestions.map((item,index)=>(

                <div
                  key={index}
                  className="bg-white p-5 rounded-xl shadow"
                >

                  {item}

                </div>

              ))}


            </div>

          )}


        </div>


      </div>


    </div>

  );

}


export default AISuggestions;