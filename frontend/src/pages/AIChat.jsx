import { useState } from "react";
import API from "../services/api";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";


function AIChat(){

  const [question,setQuestion] = useState("");
  const [messages,setMessages] = useState([]);



  const sendMessage = async()=>{

    if(!question){
      return;
    }


    const userMessage = {
      type:"user",
      text:question
    };


    setMessages((prev)=>[
      ...prev,
      userMessage
    ]);



    try{


      const res = await API.post(
        "/chat",
        {
          question
        }
      );



      const aiMessage = {

        type:"ai",

        text:res.data.answer

      };



      setMessages((prev)=>[
        ...prev,
        aiMessage
      ]);



    }catch(error){


      console.log(
        "Chat Error:",
        error.response?.data || error.message
      );


    }



    setQuestion("");

  };




  return(

    <div className="flex min-h-screen bg-gray-100">


      <Sidebar />


      <div className="flex-1">


        <Navbar />


        <div className="p-8">


          <h1 className="text-4xl font-bold mb-8">

            AI Business Chat Assistant 🤖

          </h1>




          <div className="bg-white rounded-xl shadow p-6">


            <div className="h-96 overflow-y-auto mb-5 space-y-4">


              {messages.length === 0 && (

                <p className="text-gray-500">

                  Ask anything about your business...

                </p>

              )}



              {messages.map((msg,index)=>(


                <div

                  key={index}

                  className={`p-4 rounded-lg max-w-xl ${
                    
                    msg.type==="user"

                    ? "bg-blue-500 text-white ml-auto"

                    : "bg-gray-200"

                  }`}

                >

                  {msg.type==="user"
                  ? "You: "
                  : "AI: "
                  }

                  {msg.text}


                </div>


              ))}


            </div>





            <div className="flex gap-3">


              <input

                type="text"

                value={question}

                onChange={(e)=>setQuestion(e.target.value)}

                onKeyDown={(e)=>{

                  if(e.key==="Enter")
                    sendMessage();

                }}

                placeholder="Ask about profit, sales, expenses..."

                className="flex-1 border p-3 rounded-lg"

              />



              <button

                onClick={sendMessage}

                className="bg-blue-500 hover:bg-blue-600 text-white px-6 rounded-lg"

              >

                Send

              </button>


            </div>


          </div>



        </div>


      </div>


    </div>


  );

}


export default AIChat;