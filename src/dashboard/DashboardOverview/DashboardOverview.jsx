import React, { use, useEffect, useState } from "react";
import axios from "axios";
import { FaArrowDown, FaArrowUp, FaWallet } from "react-icons/fa6";
import { AuthContext } from "../../Context/AuthContext";
import { object } from "framer-motion/client";

const DashboardOverView = () => {
  const { user } = use(AuthContext);

  const [overview, setOverview] = useState({
    totalBalance: 0,
    totalIncome: 0,
    totalExpenses: 0,
    totalTransactions: 0,
  });

  const [insights, setInsights] = useState({
    topCategory: "",
    monthlyIncome: 0,
    monthlyExpense: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://finease-server-psi.vercel.app/transactions?email=${user?.email}`,
        );

        const transactions = res.data;
        console.log(transactions);

        let income = 0;
        let expense = 0;

        let categoryMap = {};

        let currentMonth = new Date().getMonth();
        let monthlyIncome = 0;
        let monthlyExpense = 0;

        transactions.forEach((t) => {
          const type = t.type?.trim().toLowerCase();
          const amount = Number(t.amount);
          const date = new Date(t.date);

          if (type === "income") {
            income += amount;
          }
          if (type === "expense") {
            expense += amount;
          }

          // category count
          if (type === "expense") {
            categoryMap[t.category] = (categoryMap[t.category] || 0) + amount;
          }

          // monthly
          if (date.getMonth() === currentMonth) {
            if (type === "income") monthlyIncome += amount;
            if (type === "expense") monthlyExpense += amount;
          }
        });

        // top category
        let topCategory = Object.keys(categoryMap).length
          ? Object.keys(categoryMap).reduce((a, b) =>
              categoryMap[a] > categoryMap[b] ? a : b,
            )
          : "";

        setOverview({
          totalIncome: income,
          totalExpenses: expense,
          totalBalance: income - expense,
          totalTransactions: transactions.length,
        });

        setInsights({
          topCategory,
          monthlyIncome,
          monthlyExpense,
        });
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [user?.email]);

  return (
    <div>
      <section className="py-12 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-80 dark:text-white">
            Financial Overview
          </h2>

          {/* Total Transactions */}
          <div className="bg-purple-100 p-6 rounded-xl shadow text-center my-5">
            <h3 className="text-xl font-bold">{overview.totalTransactions}</h3>
            <p>Total Transactions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Total Balance Card */}
            <div className=" bg-linear-to-r from-green-100 to-green-200  flex flex-col items-center p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <FaWallet className="text-green-600 text-3xl mb-4" />

              <h3
                className={`text-2xl font-bold 
            ${overview.totalBalance < 0 ? "text-red-600" : "text-gray-800"}`}
              >
                ${overview.totalBalance.toLocaleString()}
              </h3>
              <p className="text-gray-600 mt-2">Total Balance</p>
            </div>

            {/* Total Income Card */}
            <div className="bg-linear-to-r from-blue-100 to-blue-200 flex flex-col items-center p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <FaArrowDown className="text-blue-600 text-3xl mb-4" />
              <h3 className="text-2xl font-bold text-gray-800">
                ${overview.totalIncome}
              </h3>
              <p className="text-gray-600 mt-2">Total Income</p>
            </div>

            {/* Total Expenses Card */}
            <div className="bg-linear-to-r from-red-100 to-red-200 flex flex-col items-center p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <FaArrowUp className="text-red-600 text-3xl mb-4" />
              <h3 className="text-2xl font-bold text-gray-800">
                ${overview.totalExpenses}
              </h3>
              <p className="text-gray-600 mt-2">Total Expenses</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="bg-purple-100 p-6 rounded-xl text-center">
              <h3 className="text-xl font-bold">
                {insights.topCategory || "N/A"}
              </h3>
              <p className="text-gray-600">Top Spending Category</p>
            </div>

            <div className="bg-yellow-100 p-6 rounded-xl text-center">
              <h3 className="text-xl font-bold">${insights.monthlyIncome}</h3>
              <p className="text-gray-600">This Month Income</p>
            </div>

            <div className="bg-pink-100 p-6 rounded-xl text-center">
              <h3 className="text-xl font-bold">${insights.monthlyExpense}</h3>
              <p className="text-gray-600">This Month Expense</p>
            </div>
          </div>

          
        </div>
      </section>
    </div>
  );
};

export default DashboardOverView;
