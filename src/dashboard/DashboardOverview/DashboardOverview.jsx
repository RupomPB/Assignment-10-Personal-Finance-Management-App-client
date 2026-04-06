import React, { use, useEffect, useState } from "react";
import axios from "axios";
import { FaArrowDown, FaArrowUp, FaWallet, FaChartPie, FaCalendarCheck, FaTags } from "react-icons/fa6";
import { AuthContext } from "../../Context/AuthContext";

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

          if (type === "income") income += amount;
          if (type === "expense") {
            expense += amount;
            categoryMap[t.category] = (categoryMap[t.category] || 0) + amount;
          }

          if (date.getMonth() === currentMonth) {
            if (type === "income") monthlyIncome += amount;
            if (type === "expense") monthlyExpense += amount;
          }
        });

        let topCategory = Object.keys(categoryMap).length
          ? Object.keys(categoryMap).reduce((a, b) =>
              categoryMap[a] > categoryMap[b] ? a : b,
            )
          : "N/A";

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

    if (user?.email) fetchData();
  }, [user?.email]);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
        <div>
          <h2 className="text-3xl font-black text-base-content tracking-tight">
            Financial Analytics
          </h2>
          <p className="text-sm text-base-content/50 font-medium">
            Welcome back, {user?.displayName || "User"}! Here's your real-time performance.
          </p>
        </div>
        
        {/* Quick Transaction Stats Badge */}
        <div className="stats shadow-sm bg-base-100 border border-base-300 rounded-2xl p-1">
          <div className="stat px-6 py-2 flex items-center gap-4">
            <div className="stat-figure text-primary opacity-20">
              <FaChartPie size={24} />
            </div>
            <div>
              <div className="stat-title text-[10px] uppercase font-black tracking-widest opacity-50">Total Events</div>
              <div className="stat-value text-lg text-primary">{overview.totalTransactions}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Total Balance Card - Premium Gradient */}
        <div className="relative overflow-hidden group bg-gradient-to-br from-primary to-primary-focus p-8 rounded-[2rem] shadow-2xl shadow-primary/20 transition-all duration-500 hover:-translate-y-1">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
             <FaWallet size={120} />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 text-primary-content/80 mb-6">
              <div className="p-2 bg-white/20 rounded-xl backdrop-blur-md">
                <FaWallet size={18} />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.2em]">Net Liquidity</span>
            </div>
            <h3 className={`text-4xl font-black text-primary-content tracking-tighter ${overview.totalBalance < 0 ? "opacity-90" : ""}`}>
              ${overview.totalBalance.toLocaleString()}
            </h3>
            <p className="text-primary-content/60 text-xs mt-4 font-semibold flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
               Updated just now
            </p>
          </div>
        </div>

        {/* Income Card */}
        <div className="bg-base-100 p-8 rounded-[2rem] border border-base-300 shadow-sm transition-all duration-500 hover:shadow-xl group">
           <div className="flex items-center justify-between mb-8">
              <div className="p-4 bg-success/10 text-success rounded-2xl group-hover:scale-110 transition-transform">
                <FaArrowDown size={22} />
              </div>
              <span className="text-[10px] font-black text-base-content/30 uppercase tracking-widest">Inflow</span>
           </div>
           <h3 className="text-3xl font-black text-base-content tracking-tight">
             ${overview.totalIncome.toLocaleString()}
           </h3>
           <p className="text-sm text-base-content/40 mt-2 font-medium">Lifetime Revenue</p>
        </div>

        {/* Expenses Card */}
        <div className="bg-base-100 p-8 rounded-[2rem] border border-base-300 shadow-sm transition-all duration-500 hover:shadow-xl group">
           <div className="flex items-center justify-between mb-8">
              <div className="p-4 bg-error/10 text-error rounded-2xl group-hover:scale-110 transition-transform">
                <FaArrowUp size={22} />
              </div>
              <span className="text-[10px] font-black text-base-content/30 uppercase tracking-widest">Outflow</span>
           </div>
           <h3 className="text-3xl font-black text-base-content tracking-tight">
             ${overview.totalExpenses.toLocaleString()}
           </h3>
           <p className="text-sm text-base-content/40 mt-2 font-medium">Lifetime Spend</p>
        </div>
      </div>

      {/* Insights Section - Glassmorphic Design */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-base-300/30 backdrop-blur-sm p-6 rounded-3xl border border-base-300 flex items-center gap-5 group hover:bg-base-100 transition-all duration-300">
           <div className="w-14 h-14 rounded-2xl bg-purple-500/10 text-purple-500 flex items-center justify-center">
              <FaTags size={20} />
           </div>
           <div>
              <p className="text-[10px] font-black text-base-content/40 uppercase tracking-widest">Top Burning Category</p>
              <h4 className="text-lg font-bold text-base-content group-hover:text-primary transition-colors">{insights.topCategory}</h4>
           </div>
        </div>

        <div className="bg-base-300/30 backdrop-blur-sm p-6 rounded-3xl border border-base-300 flex items-center gap-5 group hover:bg-base-100 transition-all duration-300">
           <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
              <FaCalendarCheck size={20} />
           </div>
           <div>
              <p className="text-[10px] font-black text-base-content/40 uppercase tracking-widest">Current Month Income</p>
              <h4 className="text-lg font-bold text-base-content">${insights.monthlyIncome.toLocaleString()}</h4>
           </div>
        </div>

        <div className="bg-base-300/30 backdrop-blur-sm p-6 rounded-3xl border border-base-300 flex items-center gap-5 group hover:bg-base-100 transition-all duration-300">
           <div className="w-14 h-14 rounded-2xl bg-pink-500/10 text-pink-500 flex items-center justify-center">
              <FaArrowUp size={20} />
           </div>
           <div>
              <p className="text-[10px] font-black text-base-content/40 uppercase tracking-widest">Current Month Spend</p>
              <h4 className="text-lg font-bold text-base-content">${insights.monthlyExpense.toLocaleString()}</h4>
           </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverView;