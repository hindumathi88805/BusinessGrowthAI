import { useAuth } from "../context/AuthContext";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";


function Profile() {

  const { user, logout } = useAuth();


  return (

    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />


      <div className="flex-1">

        <Navbar />


        <div className="p-8">


          <h1 className="text-4xl font-bold mb-8">
            Profile
          </h1>



          <div className="bg-white shadow rounded-xl p-8 max-w-lg">


            <h2 className="text-2xl font-bold mb-6">
              User Information
            </h2>


            {user ? (

              <>

                <p className="text-lg mb-3">
                  <b>Name:</b> {user.name}
                </p>


                <p className="text-lg mb-6">
                  <b>Email:</b> {user.email}
                </p>


                <button
                  onClick={logout}
                  className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg"
                >
                  Logout
                </button>

              </>


            ) : (

              <p>
                No user data found
              </p>

            )}


          </div>


        </div>


      </div>


    </div>

  );

}


export default Profile;