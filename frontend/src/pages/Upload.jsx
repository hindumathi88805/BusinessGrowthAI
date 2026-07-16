import { useState } from "react";
import API from "../services/api";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";


function Upload(){

  const [file,setFile] = useState(null);
  const [report,setReport] = useState(null);


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
      formData,
      {
        headers:{
          "Content-Type":"multipart/form-data"
        }
      }
    );

    console.log("Response:", res.data);

    setReport(res.data.report);


  }catch(error){

    console.log("Upload Error:", error);

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


        </div>


      </div>


    </div>

  );

}


export default Upload;