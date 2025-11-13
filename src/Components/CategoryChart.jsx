import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const COLORS = [
  "#4F46E5", // Indigo (trustworthy, finance-style)
  "#10B981", // Emerald green (growth/income)
  "#F59E0B", // Amber (highlight, neutral)
  "#EF4444", // Red (expense/warning)
  "#3B82F6", // Blue (info)
  "#8B5CF6", // Violet (creative)
  "#EC4899", // Pink (personal/lifestyle)
  "#14B8A6", // Teal (balance)
  "#F97316", // Orange (energy)
  "#22C55E"  // Bright green (profit/success)
];
const CategoryChart = () => {
  const { user } = use(AuthContext);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    axios
      .get(`https://finease-server-psi.vercel.app/report-data?email=${user?.email}`)
      .then((res) => {
        const data = res.data;

        const categoryTotals = {};
        data.forEach((item) => {
          const amount = Number(item.amount);
          const type = item.type.toLowerCase();
          const key = `${type}-${item.category}`;

          if (!categoryTotals[key]) {
            categoryTotals[key] = {
              name: `${item.category} (${type})`,
              value: 0,
            };
          }
          categoryTotals[key].value += amount;
          
        });
        setChartData(Object.values(categoryTotals));
      })

      .catch((error) => {
        toast.error(error.message);
      });
  }, [user]);

  return (
    <div className="w-full min-h-[400px] bg-white rounded-2xl  p-4 py-10 my-10">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Category-wise Transactions
      </h2>
      <ResponsiveContainer className='' width="100%" aspect={2}>
        <PieChart>
          <Pie
            data={chartData}
            labelLine={false}
            fill="#8884d8"
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `$${value}`}></Tooltip>
          <Legend></Legend>
        </PieChart>
      </ResponsiveContainer>
      
    </div>
  );
};

export default CategoryChart;
