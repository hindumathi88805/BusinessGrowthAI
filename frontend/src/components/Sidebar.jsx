import { Link } from "react-router-dom";

function Sidebar() {

  return (

    <div className="w-64 min-h-screen bg-gray-900 text-white p-6">


      <h2 className="text-2xl font-bold mb-8">
        🚀 BusinessAI
      </h2>



      <nav className="space-y-2">


        <Link 
          to="/dashboard"
          className="block hover:bg-gray-700 p-3 rounded-lg"
        >
          📊 Dashboard
        </Link>

<Link
  to="/about"
  className="block hover:bg-gray-700 p-3 rounded-lg"
>
  ℹ️ About
</Link>

        <Link 
          to="/sales"
          className="block hover:bg-gray-700 p-3 rounded-lg"
        >
          💰 Sales
        </Link>



        <Link 
          to="/add-sale"
          className="block hover:bg-gray-700 p-3 rounded-lg"
        >
          ➕ Add Sale
        </Link>



        <Link 
          to="/expenses"
          className="block hover:bg-gray-700 p-3 rounded-lg"
        >
          💳 Expenses
        </Link>



        <Link 
          to="/add-expense"
          className="block hover:bg-gray-700 p-3 rounded-lg"
        >
          ➕ Add Expense
        </Link>



        <Link 
          to="/reports"
          className="block hover:bg-gray-700 p-3 rounded-lg"
        >
          📈 Reports
        </Link>



        <Link
          to="/upload"
          className="block hover:bg-gray-700 p-3 rounded-lg"
        >
          📂 Upload File
        </Link>



        <Link 
          to="/ai-suggestions"
          className="block hover:bg-gray-700 p-3 rounded-lg"
        >
          🤖 AI Suggestions
        </Link>



        <Link 
          to="/ai-chat"
          className="block hover:bg-gray-700 p-3 rounded-lg"
        >
          💬 AI Chat Assistant
        </Link>



        <Link 
          to="/profile"
          className="block hover:bg-gray-700 p-3 rounded-lg"
        >
          👤 Profile
        </Link>



      </nav>


    </div>

  );

}

export default Sidebar;