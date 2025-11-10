import React from 'react';

const OverviewSection = () => {


         // data for overview
  const totalBalance = 5000;
  const totalIncome = 10000;
  const totalExpenses = 5000

    return (
        <div>
            <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Financial Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-green-600">${totalBalance}</h3>
              <p className="text-gray-600">Total Balance</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-blue-600">${totalIncome}</h3>
              <p className="text-gray-600">Total Income</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-red-600">${totalExpenses}</h3>
              <p className="text-gray-600">Total Expenses</p>
            </div>
          </div>
        </div>
      </section>
        </div>
    );
};

export default OverviewSection;