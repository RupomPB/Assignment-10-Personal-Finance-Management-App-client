import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const MonthlyChart = () => {
  const { user } = useContext(AuthContext);
  const [chartData, setChartData] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth()); // 0 = Jan

  useEffect(() => {
    if (!user?.email) return;

    axios
      .get(`https://finease-server-psi.vercel.app/report-data?email=${user.email}`)
      .then((res) => {
        const data = res.data;
        const currentYear = new Date().getFullYear();

        const dailyTotals = {};
        const daysInMonth = new Date(currentYear, selectedMonth + 1, 0).getDate();

        // Initialize each day
        for (let i = 1; i <= daysInMonth; i++) {
          dailyTotals[i] = { day: i, income: 0, expense: 0 };
        }

        // Aggregate income/expense by day
        data.forEach((item) => {
          const date = new Date(item.date);
          if (
            date.getMonth() !== selectedMonth ||
            date.getFullYear() !== currentYear
          )
            return;

          const day = date.getDate();
          const amount = Number(item.amount) || 0;
          const type = item.type?.toLowerCase();

          if (type === "income") dailyTotals[day].income += amount;
          if (type === "expense") dailyTotals[day].expense += amount;
        });

        // Convert to array for chart
        setChartData(Object.values(dailyTotals));
      })
      .catch((error) => toast.error(error.message));
  }, [user?.email, selectedMonth]);

  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  return (
    <div className="w-full bg-base-100 shadow-xl rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-center mb-4">
        📈 Daily Financial Trend
      </h2>

      {/* Month Selector */}
      <div className="flex justify-center mb-6">
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(Number(e.target.value))}
          className="border rounded p-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        >
          {monthNames.map((name, idx) => (
            <option key={idx} value={idx}>
              {name}
            </option>
          ))}
        </select>
      </div>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />

          <XAxis dataKey="day" label={{ value: "Day", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Amount ($)", angle: -90, position: "insideLeft" }} />

          <Tooltip
            contentStyle={{
              backgroundColor: "#1d232a",
              borderRadius: "10px",
              border: "none",
              color: "#fff",
            }}
            formatter={(value) => `$${value}`}
          />

          <Legend />

          <Line
            type="monotone"
            dataKey="income"
            stroke="#22c55e"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 7 }}
          />

          <Line
            type="monotone"
            dataKey="expense"
            stroke="#ef4444"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyChart;