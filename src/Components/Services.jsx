import React from "react";

const Services = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-[#1d232a] p-6 rounded-xl shadow-md">
            <h3 className="font-semibold mb-2">Transaction Management</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Add, update, and monitor all your transactions easily.
            </p>
          </div>
          <div className="bg-white dark:bg-[#1d232a] p-6 rounded-xl shadow-md">
            <h3 className="font-semibold mb-2">Budgeting Tools</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Set monthly budgets and track spending limits.
            </p>
          </div>
          <div className="bg-white dark:bg-[#1d232a] p-6 rounded-xl shadow-md">
            <h3 className="font-semibold mb-2">Reports & Insights</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Visualize your financial growth with charts and analytics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
