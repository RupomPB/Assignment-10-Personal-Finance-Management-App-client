import React from 'react';
import { FaRegChartBar, FaPiggyBank, FaWallet } from 'react-icons/fa';

const FinancialPlanning = () => {
  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold  mb-12 ">
          Why Financial Planning Matters
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-left">
            <div className="text-indigo-500 text-4xl mb-4">
              <FaRegChartBar />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Set Clear Goals</h3>
            <p className="text-gray-600 dark:text-white">
              Financial planning helps you define your short-term and long-term goals, so you know exactly where your money should go.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-left">
            <div className="text-green-500 text-4xl mb-4">
              <FaPiggyBank />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Save & Invest Wisely</h3>
            <p className="text-gray-600 dark:text-white">
              Planning ensures that you are consistently saving for emergencies and investing for long-term growth, building wealth over time.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-left">
            <div className="text-yellow-500 text-4xl mb-4">
              <FaWallet />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Avoid Financial Stress</h3>
            <p className="text-gray-600 dark:text-white">
              With a proper plan, you can manage debt, track expenses, and reduce uncertainty, making your financial future stress-free.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialPlanning;
