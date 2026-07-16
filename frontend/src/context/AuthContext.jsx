import { createContext, useContext, useState } from "react";
import API from "../services/api";

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {


  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );



  const login = async (email, password) => {

    try {


      const res = await API.post("/auth/login", {

        email,

        password,

      });



      console.log("Login API Response:", res.data);



      if (res.data.token) {


        localStorage.setItem(
          "token",
          res.data.token
        );


        console.log("Token Saved Successfully");


      } else {


        console.log("No token received from backend");


      }




      if (res.data.user) {


        setUser(res.data.user);



        localStorage.setItem(

          "user",

          JSON.stringify(res.data.user)

        );


      }



      return res.data;



    } catch(error) {


      console.log(
        "Login Error:",
        error.response?.data || error.message
      );


      throw error;


    }

  };





  const register = async (name, email, password) => {


    try {


      const res = await API.post("/auth/register", {


        name,

        email,

        password,


      });



      return res.data;



    } catch(error) {


      console.log(
        "Register Error:",
        error.response?.data || error.message
      );


      throw error;


    }


  };






  const logout = () => {


    localStorage.removeItem("token");

    localStorage.removeItem("user");


    setUser(null);


  };






  return (

    <AuthContext.Provider

      value={{

        user,

        login,

        register,

        logout,

      }}

    >

      {children}

    </AuthContext.Provider>

  );


};




export const useAuth = () => useContext(AuthContext);