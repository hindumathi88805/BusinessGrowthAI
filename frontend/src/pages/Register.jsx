import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";


function Register() {

  const { register } = useAuth();
  const navigate = useNavigate();


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const submitHandler = async (e) => {

    e.preventDefault();


    try {

      await register(name, email, password);

      alert("Registration Successful! Please Login");

      navigate("/");


    } catch(error) {

      alert(
        error.response?.data?.message ||
        "Registration Failed"
      );

    }

  };



  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">


      <div className="bg-white p-8 rounded-xl shadow-lg w-96">


        <h1 className="text-3xl font-bold mb-6 text-center">
          Create Account
        </h1>



        <form onSubmit={submitHandler}>


          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="w-full border p-3 rounded mb-4"
            required
          />


          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full border p-3 rounded mb-4"
            required
          />


          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full border p-3 rounded mb-6"
            required
          />



          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded"
          >
            Register
          </button>


        </form>



        <p className="mt-5 text-center">

          Already have an account?

          <Link 
            to="/"
            className="text-blue-500 ml-2"
          >
            Login
          </Link>

        </p>


      </div>


    </div>

  );

}


export default Register;