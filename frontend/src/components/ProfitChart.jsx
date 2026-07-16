import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

function ProfitChart({ dashboard }) {

  const data = [
    {
      name: "Business",
      Revenue: dashboard.totalSales,
      Expense: dashboard.totalExpenses,
      Profit: dashboard.profit
    }
  ];

  return (

    <div className="bg-gray-200 p-5 rounded-xl shadow mt-8 w-full lg:w-2/3">

      <h2 className="text-lg font-bold mb-4">
        Profit & Loss Analysis
      </h2>

      <div className="h-64">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 20,
              left: 40,
              bottom: 10
            }}
          >

            <XAxis
              dataKey="name"
              tick={{ fontSize: 12 }}
            />

            <YAxis
              width={90}
              tick={{ fontSize: 12 }}
            />

            <Tooltip />

            <Legend />

            <Bar
              dataKey="Revenue"
              fill="#2563eb"
              radius={[5, 5, 0, 0]}
            />

            <Bar
              dataKey="Expense"
              fill="#dc2626"
              radius={[5, 5, 0, 0]}
            />

            <Bar
              dataKey="Profit"
              fill="#16a34a"
              radius={[5, 5, 0, 0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>

  );

}

export default ProfitChart;