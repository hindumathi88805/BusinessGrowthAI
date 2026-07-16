import { useEffect, useState } from "react";
import API from "../services/api";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";


function Profile(){

  const [user,setUser] = useState(null);


  useEffect(()=>{

    fetchUser();

  },[]);



  const fetchUser = async()=>{

    try{

      const res = await API.get("/auth/profile");

console.log("PROFILE DATA:", res.data);

setUser(res.data.user);


    }catch(error){

      console.log(
        "Profile Error:",
        error.response?.data || error.message
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
            👤 User Information
          </h1>



          {!user ? (

            <div className="bg-white p-6 rounded-xl shadow">

              <p className="text-gray-500">
                Loading user information...
              </p>

            </div>


          ):(


            <div className="bg-white rounded-xl shadow-lg p-8 max-w-xl">


              <div className="text-center mb-6">

                <div className="w-24 h-24 bg-blue-500 text-white rounded-full flex items-center justify-center text-4xl mx-auto">

                  👤

                </div>


              </div>




              <div className="space-y-5">


                <div>

                  <h3 className="font-bold text-gray-600">
                    Name
                  </h3>

                  <p className="text-xl">
                    {user.name}
                  </p>

                </div>



                <div>

                  <h3 className="font-bold text-gray-600">
                    Email
                  </h3>

                  <p className="text-xl">
                    {user.email}
                  </p>

                </div>



                <div>

                  <h3 className="font-bold text-gray-600">
                    Account Type
                  </h3>

                  <p className="text-xl">
                    Business User
                  </p>

                </div>



              </div>



            </div>


          )}



        </div>


      </div>


    </div>


  );

}


export default Profile;