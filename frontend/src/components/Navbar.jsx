import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/");

  };

  return (

    <div className="bg-white shadow flex justify-between items-center px-8 py-4">

      <h2 className="text-2xl font-bold">
        AI Business Growth Assistant
      </h2>

      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg"
      >
        Logout
      </button>

    </div>

  );

}

export default Navbar;