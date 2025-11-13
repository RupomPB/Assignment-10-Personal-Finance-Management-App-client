import React from "react";
import { FaRegLightbulb, FaChartLine, FaBullseye } from "react-icons/fa";

const TipsSection = () => {
  return (
    <section className=" py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900 dark:text-white">
          Budgeting Tips
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Tip 1 */}
          <div className="bg-white dark:bg-gray-600 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-left">
            <div className="text-indigo-500 text-4xl mb-4">
              <FaRegLightbulb />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
              50/30/20 Rule
            </h3>
            <p className="text-gray-600 dark:text-white">
              Allocate 50% of income to needs, 30% to wants, and 20% to savings
              and debt repayment for balanced finances.
            </p>
          </div>

          {/* Tip 2 */}
          <div className="bg-white dark:bg-gray-600  p-8 rounded-xl shadow-lg hover:shadow-xl  text-left transition-shadow duration-300">
            <div className="text-green-500 text-4xl mb-4">
              <FaChartLine />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
              Track Your Spending
            </h3>
            <p className="text-gray-600 dark:text-white">
              Keep a record of all your expenses to understand where your money
              is going and optimize your spending habits.
            </p>
          </div>

          {/* Tip 3 */}
          <div className="bg-white dark:bg-gray-600  p-8 rounded-xl shadow-lg hover:shadow-xl text-left transition-shadow duration-300">
            <div className="text-yellow-500 text-4xl mb-4">
              <FaBullseye />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
              Set Realistic Goals
            </h3>
            <p className="text-gray-600 dark:text-white">
              Define clear and achievable financial goals to stay motivated and
              measure progress effectively.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TipsSection;
