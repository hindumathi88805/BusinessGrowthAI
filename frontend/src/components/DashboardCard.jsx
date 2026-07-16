function DashboardCard({ title, value, color }) {

  const colors = {
    blue: "bg-blue-600",
    red: "bg-red-500",
    green: "bg-green-600",
    purple: "bg-purple-600",
    emerald: "bg-emerald-600",
    orange: "bg-orange-500"
  };

  return (

    <div
      className={`${colors[color]} text-white rounded-xl shadow-lg p-6 hover:scale-105 transition duration-300`}
    >

      <p className="text-lg font-medium">
        {title}
      </p>

      <h2 className="text-3xl font-bold mt-3 break-words">
        {value}
      </h2>

    </div>

  );

}

export default DashboardCard;