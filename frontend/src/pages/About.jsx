import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function About() {

  const features = [
    {
      icon: "🔐",
      title: "Authentication",
      color: "bg-blue-500",
      description:
        "Provides secure user registration and login using JWT authentication. Each user can safely access only their own business information, ensuring privacy and secure account management."
    },
    {
      icon: "📊",
      title: "Dashboard",
      color: "bg-green-500",
      description:
        "The dashboard provides a complete overview of business performance by displaying total sales, expenses, net profit, products sold, business health score and AI forecast in one place."
    },
    {
      icon: "💰",
      title: "Sales Management",
      color: "bg-indigo-500",
      description:
        "Users can add, update and manage sales records with product details, quantity, price and total amount. Every sale automatically updates reports and business analytics."
    },
    {
      icon: "💳",
      title: "Expense Management",
      color: "bg-red-500",
      description:
        "Track all business expenses such as electricity, rent, transport and other operational costs. Expenses are automatically used to calculate the net profit."
    },
    {
      icon: "📂",
      title: "Upload & Analysis",
      color: "bg-amber-500",
      description:
        "Upload Excel or CSV files containing sales data. The system automatically analyzes the uploaded file, calculates revenue, counts products sold and saves the upload history."
    },
    {
      icon: "📈",
      title: "Reports",
      color: "bg-purple-500",
      description:
        "Generate complete business reports including revenue, expenses and profit. Reports can be downloaded as PDF or Excel files for future reference and business analysis."
    },
    {
      icon: "🤖",
      title: "AI Suggestions",
      color: "bg-pink-500",
      description:
        "The application analyzes your business performance and provides AI-based suggestions to improve sales, reduce expenses and increase overall profitability."
    },
    {
      icon: "💬",
      title: "AI Chat Assistant",
      color: "bg-cyan-500",
      description:
        "An intelligent chatbot that answers business-related questions and provides useful guidance to help users make better business decisions."
    },
    {
      icon: "❤️",
      title: "Business Health",
      color: "bg-emerald-500",
      description:
        "Calculates an overall business health score based on financial performance and displays the current business status such as Good, Excellent or Outstanding."
    },
    {
      icon: "🔮",
      title: "AI Business Forecast",
      color: "bg-violet-500",
      description:
        "Predicts future revenue, expected profit and business growth using current sales and expense information. This helps users plan future business strategies."
    },
    {
      icon: "📜",
      title: "Upload History",
      color: "bg-teal-500",
      description:
        "Stores all uploaded files with their details and analysis results. Users can review previous uploads or delete unnecessary upload records whenever required."
    },
    {
      icon: "👤",
      title: "User Profile",
      color: "bg-slate-600",
      description:
        "Displays the logged-in user's personal information and account details. Users can verify their account information from this section."
    }
  ];

  return (

    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-8">

          <h1 className="text-4xl font-bold mb-2">
            About AI Business Growth Assistant 🚀
          </h1>

          <p className="text-gray-600 text-lg mb-10">
            AI Business Growth Assistant is a smart business management platform
            that helps users manage sales, expenses, reports and AI-powered
            business insights through a simple and interactive dashboard.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {features.map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition duration-300"
              >

                <div className={`${item.color} text-white px-6 py-4 rounded-t-xl`}>

                  <h2 className="text-2xl font-bold">
                    {item.icon} {item.title}
                  </h2>

                </div>

                <div className="p-6 min-h-[190px]">

                  <p className="text-gray-700 text-justify leading-8">
                    {item.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mt-10">

            <h2 className="text-3xl font-bold mb-6">
              🛠 Technologies Used
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

              <div className="bg-blue-100 rounded-lg p-5 text-center font-bold">
                React.js
              </div>

              <div className="bg-green-100 rounded-lg p-5 text-center font-bold">
                Node.js
              </div>

              <div className="bg-yellow-100 rounded-lg p-5 text-center font-bold">
                Express.js
              </div>

              <div className="bg-purple-100 rounded-lg p-5 text-center font-bold">
                MongoDB
              </div>

              <div className="bg-red-100 rounded-lg p-5 text-center font-bold">
                JWT
              </div>

              <div className="bg-cyan-100 rounded-lg p-5 text-center font-bold">
                Tailwind CSS
              </div>

              <div className="bg-pink-100 rounded-lg p-5 text-center font-bold">
                Chart.js
              </div>

              <div className="bg-orange-100 rounded-lg p-5 text-center font-bold">
                Render Cloud
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default About;