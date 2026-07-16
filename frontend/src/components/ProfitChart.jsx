import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";


function ProfitChart({dashboard}){


  const data = [
    {
      name:"Business",
      Revenue: dashboard.totalSales,
      Expense: dashboard.totalExpenses,
      Profit: dashboard.profit
    }
  ];


  return (

    <div className="bg-white p-6 rounded-xl shadow mt-8">


      <h2 className="text-2xl font-bold mb-4">
        Profit & Loss Analysis
      </h2>


      <ResponsiveContainer width="100%" height={300}>

        <BarChart data={data}>


          <XAxis dataKey="name"/>

          <YAxis/>

          <Tooltip/>

          <Legend/>


          <Bar
  dataKey="Revenue"
  fill="#2563eb"
/>


<Bar
  dataKey="Expense"
  fill="#dc2626"
/>


<Bar
  dataKey="Profit"
  fill="#16a34a"
/>


        </BarChart>

      </ResponsiveContainer>


    </div>

  );

}


export default ProfitChart;