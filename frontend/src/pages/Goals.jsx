import { useEffect, useState } from "react";
import API from "../services/api";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";


function Goals(){

  const [goal,setGoal] = useState({

    revenueGoal:"",
    expenseLimit:"",
    salesTarget:""

  });


  const [message,setMessage] = useState("");



  useEffect(()=>{

    fetchGoal();

  },[]);




  const fetchGoal = async()=>{

    try{

      const res = await API.get("/goals");

      if(res.data.goal){

        setGoal({

          revenueGoal: res.data.goal.revenueGoal,

          expenseLimit: res.data.goal.expenseLimit,

          salesTarget: res.data.goal.salesTarget

        });

      }


    }catch(error){

      console.log(error);

    }

  };





  const handleChange=(e)=>{

    setGoal({

      ...goal,

      [e.target.name]: e.target.value

    });

  };






  const saveGoal = async()=>{

    try{


      await API.post("/goals",goal);


      setMessage(
        "Business goal saved successfully ✅"
      );


    }catch(error){

      console.log(error);

      setMessage(
        "Failed to save goal"
      );

    }

  };




  return(

    <div className="flex min-h-screen bg-gray-100">


      <Sidebar />


      <div className="flex-1">


        <Navbar />



        <div className="p-8">


          <h1 className="text-4xl font-bold mb-8">

            🎯 Business Goals

          </h1>




          <div className="bg-white shadow-lg rounded-xl p-8 max-w-xl">



            <label className="font-bold">
              Revenue Goal
            </label>

            <input

              type="number"

              name="revenueGoal"

              value={goal.revenueGoal}

              onChange={handleChange}

              className="w-full border p-3 rounded-lg mb-5"

              placeholder="Enter revenue target"

            />




            <label className="font-bold">
              Expense Limit
            </label>


            <input

              type="number"

              name="expenseLimit"

              value={goal.expenseLimit}

              onChange={handleChange}

              className="w-full border p-3 rounded-lg mb-5"

              placeholder="Enter expense limit"

            />




            <label className="font-bold">
              Sales Target
            </label>


            <input

              type="number"

              name="salesTarget"

              value={goal.salesTarget}

              onChange={handleChange}

              className="w-full border p-3 rounded-lg mb-5"

              placeholder="Enter sales target"

            />





            <button

              onClick={saveGoal}

              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"

            >

              Save Goal

            </button>




            {message && (

              <p className="mt-5 text-green-600 font-bold">

                {message}

              </p>

            )}



          </div>


        </div>


      </div>


    </div>


  );

}


export default Goals;