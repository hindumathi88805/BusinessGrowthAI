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
  className="flex items-center gap-3 hover:bg-gray-700 p-3 rounded-lg transition"
>
  📊 Dashboard
</Link>


<Link
  to="/about"
  className="flex items-center gap-3 hover:bg-gray-700 p-3 rounded-lg transition"
>
  ℹ️ About
</Link>

<Link
  to="/goals"
  className="flex items-center gap-3 hover:bg-gray-700 p-3 rounded-lg transition"
>
  🎯 Business Goals
</Link>


<Link 
  to="/sales"
  className="flex items-center gap-3 hover:bg-gray-700 p-3 rounded-lg transition"
>
  💰 Sales
</Link>


<Link 
  to="/add-sale"
  className="flex items-center gap-3 hover:bg-gray-700 p-3 rounded-lg transition"
>
  ➕ Add Sale
</Link>


<Link 
  to="/expenses"
  className="flex items-center gap-3 hover:bg-gray-700 p-3 rounded-lg transition"
>
  💳 Expenses
</Link>


<Link 
  to="/add-expense"
  className="flex items-center gap-3 hover:bg-gray-700 p-3 rounded-lg transition"
>
  ➕ Add Expense
</Link>


<Link 
  to="/reports"
  className="flex items-center gap-3 hover:bg-gray-700 p-3 rounded-lg transition"
>
  📈 Reports
</Link>


<Link
  to="/upload"
  className="flex items-center gap-3 hover:bg-gray-700 p-3 rounded-lg transition"
>
  📂 Upload File
</Link>


<Link 
  to="/ai-suggestions"
  className="flex items-center gap-3 hover:bg-gray-700 p-3 rounded-lg transition"
>
  🤖 AI Suggestions
</Link>


<Link 
  to="/ai-chat"
  className="flex items-center gap-3 hover:bg-gray-700 p-3 rounded-lg transition"
>
  💬 AI Chat Assistant
</Link>


<Link 
  to="/profile"
  className="flex items-center gap-3 hover:bg-gray-700 p-3 rounded-lg transition"
>
  👤 Profile
</Link>



      </nav>


    </div>

  );

}

export default Sidebar;