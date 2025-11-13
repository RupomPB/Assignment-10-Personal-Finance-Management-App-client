import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import axios from 'axios';
import { FaArrowDown, FaArrowUp, FaWallet } from 'react-icons/fa6';



const OverviewSection = () => {

  const {user} = use(AuthContext);

  const [overview , setOverview] = useState({

    totalBalance: 0,
    totalIncome: 0,
    totalExpenses: 0,

  });

  useEffect(()=>{
    
    const fetchData= async()=>{
      try{
        const res = await axios.get(
          `http://localhost:3000/transactions?email=${user?.email}`
        );

        const transactions = res.data;
        console.log(transactions)
        
        let income = 0;
        let expense =0;

        transactions.forEach((t)=>{

          const type = t.type.trim().toLowerCase();

          if(type === "income"){
            income += Number(t.amount);
          }
          if(type === 'expense'){
            expense += Number(t.amount);
          }

        });

        setOverview({
          totalIncome: income,
          totalExpenses: expense,
          totalBalance: income - expense,
        })

      }
      catch(error){
        console.log(error.message)
      }
    }

    fetchData();

  },[user?.email])



    return (
        <div>
             <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Financial Overview
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Total Balance Card */}
          <div className="bg-gradient-to-r from-green-100 to-green-200 flex flex-col items-center p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <FaWallet className="text-green-600 text-3xl mb-4" />
            <h3 className="text-2xl font-bold text-gray-800">${overview.totalBalance}</h3>
            <p className="text-gray-600 mt-2">Total Balance</p>
          </div>

          {/* Total Income Card */}
          <div className="bg-gradient-to-r from-blue-100 to-blue-200 flex flex-col items-center p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <FaArrowDown className="text-blue-600 text-3xl mb-4" />
            <h3 className="text-2xl font-bold text-gray-800">${overview.totalIncome}</h3>
            <p className="text-gray-600 mt-2">Total Income</p>
          </div>

          {/* Total Expenses Card */}
          <div className="bg-linear-to-r from-red-100 to-red-200 flex flex-col items-center p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <FaArrowUp className="text-red-600 text-3xl mb-4" />
            <h3 className="text-2xl font-bold text-gray-800">${overview.totalExpenses}</h3>
            <p className="text-gray-600 mt-2">Total Expenses</p>
          </div>
        </div>
      </div>
    </section>
        </div>
    );
};

export default OverviewSection;