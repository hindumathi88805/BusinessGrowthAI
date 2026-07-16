import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AISuggestions from "./pages/AISuggestions";
import Sales from "./pages/Sales";
import Expenses from "./pages/Expenses";
import Reports from "./pages/Reports";
import Profile from "./pages/Profile";
import AddSale from "./pages/AddSale";
import AddExpense from "./pages/AddExpense";
import Register from "./pages/Register";
import Upload from "./pages/Upload";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {

  return (

    <Routes>

      {/* Public Route */}
      <Route 
        path="/" 
        element={<Login />} 
      />


      {/* Protected Routes */}

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />


      <Route
        path="/ai-suggestions"
        element={
          <ProtectedRoute>
            <AISuggestions />
          </ProtectedRoute>
        }
      />


      <Route
        path="/sales"
        element={
          <ProtectedRoute>
            <Sales />
          </ProtectedRoute>
        }
      />


      <Route
        path="/expenses"
        element={
          <ProtectedRoute>
            <Expenses />
          </ProtectedRoute>
        }
      />


      <Route
        path="/add-sale"
        element={
          <ProtectedRoute>
            <AddSale />
          </ProtectedRoute>
        }
      />


      <Route
        path="/add-expense"
        element={
          <ProtectedRoute>
            <AddExpense />
          </ProtectedRoute>
        }
      />
<Route path="/upload" element={<Upload />} />

      <Route
        path="/reports"
        element={
          <ProtectedRoute>
            <Reports />
          </ProtectedRoute>
        }
      />

<Route
 path="/register"
 element={<Register />}
/>
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />


    </Routes>

  );

}

export default App;