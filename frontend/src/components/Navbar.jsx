import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


function Navbar(){

  const navigate = useNavigate();

  const [user,setUser] = useState(null);


  useEffect(()=>{

    const userData = localStorage.getItem("user");

    if(userData){

      setUser(JSON.parse(userData));

    }

  },[]);



  const logout = ()=>{

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    navigate("/login");

  };



  return(

    <nav className="bg-white shadow p-5 flex justify-between items-center">


      <h2 className="text-2xl font-bold text-blue-600">

        BusinessAI 🚀

      </h2>



      <div className="flex items-center gap-5">


        <p className="font-semibold text-gray-700">

          Welcome, {user?.name || "User"} 👋

        </p>



        <button

          onClick={logout}

          className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg"

        >

          Logout

        </button>


      </div>


    </nav>

  );

}


export default Navbar;