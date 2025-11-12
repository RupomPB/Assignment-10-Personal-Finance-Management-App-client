import axios from "axios";
import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import {

  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const MonthlyChart = () => {
  const { user } = use(AuthContext);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/report-data?email=${user?.email}`)
      .then((res) => {
        const data = res.data;
        const monthlyTotals = {};
        data.forEach((item) => {
          const date = new Date(item.date);
          const month = date.toLocaleDateString("en-US", { month: "short" });

          const amount = Number(item.amount);

          if (!monthlyTotals[month]) {
            monthlyTotals[month] = { month, income: 0, expense: 0 };
          }
          if (item.type.toLowerCase() === "income") {
            monthlyTotals[month].income += amount;
          }
          if (item.type.toLowerCase()  === "expense") {
            monthlyTotals[month].expense += amount;
          }
        });

        const months = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];

        const formatting = Object.values(monthlyTotals).sort(
          (a, b) => months.indexOf(a.month) - months.indexOf(b.month)
        );
        setChartData(formatting);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }, [user]);

  return (
    <div className="w-full h-[450px] rounded-2xl">
      <h2 className="text-2xl font-semibold text-center ">
        Here is your <span>Monthly Income vs Expense</span>
      </h2>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          
          margin={{ top: 20, right: 30, left: 10, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Bar dataKey="income" fill="#44f295" />
          <Bar dataKey="expense" fill="#eb3b49" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyChart;
