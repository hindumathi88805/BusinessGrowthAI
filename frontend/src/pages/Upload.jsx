import { useState, useEffect } from "react";
import API from "../services/api";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";


function Upload(){

  const [file,setFile] = useState(null);
  const [report,setReport] = useState(null);
  const [uploads,setUploads] = useState([]);



  useEffect(()=>{

    fetchUploads();

  },[]);



  const fetchUploads = async()=>{

    try{

      const res = await API.get("/uploads");

      setUploads(res.data.uploads);

    }catch(error){

      console.log(
        "History Error:",
        error.response?.data || error.message
      );

    }

  };



  const uploadFile = async()=>{

    if(!file){
      alert("Please select a file first");
      return;
    }


    try{

      const formData = new FormData();

      formData.append("file", file);


      console.log("Uploading:", file.name);


      const res = await API.post(
        "/upload",
        formData
      );


      console.log("Response:", res.data);


      setReport(res.data.report);


      // Refresh upload history
      fetchUploads();


    }catch(error){

      console.log(
        "Upload Error:",
        error.response?.data || error.message
      );

    }

  };



  const deleteUpload = async(id)=>{

    try{

      await API.delete(`/uploads/${id}`);


      alert("Upload deleted successfully");


      fetchUploads();


    }catch(error){

      console.log(
        "Delete Error:",
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


          <h1 className="text-4xl font-bold mb-6">
            Upload File 📂
          </h1>



          <div className="bg-white p-4 rounded-xl shadow flex items-center gap-4">


            <input
              type="file"
              accept=".xlsx,.xls,.csv"
              onChange={(e)=>setFile(e.target.files[0])}
              className="border p-2 rounded-lg flex-1"
            />


            <button

              onClick={uploadFile}

              className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg"

            >

              Upload & Analyze

            </button>


          </div>





          {report && (

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">


              <div className="bg-white p-6 rounded-xl shadow">

                <h2 className="font-bold">
                  Revenue
                </h2>

                <p className="text-3xl">
                  ₹{report.revenue}
                </p>

              </div>



              <div className="bg-white p-6 rounded-xl shadow">

                <h2 className="font-bold">
                  Products
                </h2>

                <p className="text-3xl">
                  {report.products}
                </p>

              </div>




              <div className="bg-white p-6 rounded-xl shadow">

                <h2 className="font-bold">
                  Profit
                </h2>

                <p className="text-3xl">
                  ₹{report.profit}
                </p>

              </div>


            </div>

          )}






          <div className="bg-white rounded-xl shadow mt-8 overflow-x-auto">


            <h2 className="text-2xl font-bold p-6">
              Previous Uploads
            </h2>



            <table className="w-full">


              <thead className="bg-slate-200">

                <tr>

                  <th className="p-4 text-left">
                    File Name
                  </th>


                  <th className="p-4 text-left">
                    Revenue
                  </th>


                  <th className="p-4 text-left">
                    Profit
                  </th>


                  <th className="p-4 text-left">
                    Date
                  </th>


                  <th className="p-4 text-left">
                    Action
                  </th>


                </tr>

              </thead>



              <tbody>


                {uploads.length === 0 ? (

                  <tr>

                    <td
                      colSpan="5"
                      className="text-center p-6 text-gray-500"
                    >

                      No uploads found

                    </td>

                  </tr>


                ) : (


                  uploads.map((upload)=>(


                    <tr
                      key={upload._id}
                      className="border-b"
                    >


                      <td className="p-4">

                        {upload.fileName}

                      </td>



                      <td className="p-4">

                        ₹{upload.revenue}

                      </td>



                      <td className="p-4">

                        ₹{upload.profit}

                      </td>



                      <td className="p-4">

                        {new Date(
                          upload.createdAt
                        ).toLocaleDateString()}

                      </td>



                      <td className="p-4">


                        <button

                          onClick={()=>deleteUpload(upload._id)}

                          className="bg-red-500 text-white px-4 py-2 rounded-lg"

                        >

                          Delete

                        </button>


                      </td>


                    </tr>


                  ))

                )}


              </tbody>


            </table>


          </div>



        </div>


      </div>


    </div>

  );

}


export default Upload;