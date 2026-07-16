import { Link } from "react-router-dom";


function Home(){

  const features = [
    {
      icon:"📊",
      title:"Smart Dashboard",
      desc:"Monitor sales, expenses, profit and business health in one place."
    },
    {
      icon:"💰",
      title:"Sales Tracking",
      desc:"Add and manage sales data to understand business performance."
    },
    {
      icon:"📈",
      title:"Reports & Analytics",
      desc:"Generate PDF and Excel reports with detailed business analysis."
    },
    {
      icon:"🤖",
      title:"AI Suggestions",
      desc:"Get intelligent recommendations to improve business growth."
    },
    {
      icon:"📂",
      title:"File Analysis",
      desc:"Upload Excel files and automatically analyze your business data."
    },
    {
      icon:"💬",
      title:"AI Chat Assistant",
      desc:"Ask questions and receive instant business guidance."
    }
  ];


  return(

    <div className="min-h-screen bg-gray-100">


      {/* Hero Section */}

      <div className="bg-blue-600 text-white p-10">


        <div className="max-w-5xl mx-auto text-center">


          <h1 className="text-5xl font-bold mb-5">

            AI Business Growth Assistant 🚀

          </h1>


          <p className="text-xl mb-8">

            Smart platform to track your business,
            analyze performance and get AI-powered
            growth recommendations.

          </p>



          <Link to="/login">

            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:scale-105 transition">

              Get Started

            </button>

          </Link>


        </div>


      </div>



      {/* Features */}


      <div className="p-10">


        <h2 className="text-3xl font-bold text-center mb-8">

          Powerful Features

        </h2>



        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


        {features.map((item,index)=>(


          <div
          key={index}
          className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
          >


            <h3 className="text-xl font-bold mb-3">

              {item.icon} {item.title}

            </h3>


            <p className="text-gray-600">

              {item.desc}

            </p>


          </div>


        ))}


        </div>


      </div>



      {/* How it works */}


      <div className="bg-white p-10">


        <h2 className="text-3xl font-bold text-center mb-8">

          How It Works

        </h2>


        <div className="grid md:grid-cols-3 gap-6">


          <div className="p-6 text-center">

            <h3 className="text-2xl">1️⃣</h3>

            <p>
              Upload your sales and expense data
            </p>

          </div>



          <div className="p-6 text-center">

            <h3 className="text-2xl">2️⃣</h3>

            <p>
              AI analyzes your business performance
            </p>

          </div>



          <div className="p-6 text-center">

            <h3 className="text-2xl">3️⃣</h3>

            <p>
              Receive insights and growth strategies
            </p>

          </div>


        </div>


      </div>



      {/* Footer */}

      <div className="bg-gray-900 text-white text-center p-5">

        © 2026 AI Business Growth Assistant
        <br/>
        Built with MERN Stack

      </div>


    </div>

  );

}


export default Home;