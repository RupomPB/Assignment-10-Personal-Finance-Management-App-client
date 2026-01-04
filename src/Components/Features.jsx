import React from "react";
import { Wallet, TrendingUp, ShieldCheck } from "lucide-react";

const Features = () => {
  return (
    <section className="mb-16 max-w-7xl mx-auto px-4">
      <h2 className="text-2xl font-semibold text-center mb-8">
        Key Features
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Feature 1 */}
        <div className="bg-white dark:bg-[#1d232a] p-6 rounded-xl shadow-md text-center">
          <Wallet className="mx-auto mb-4 text-primary" size={36} />
          <h3 className="font-semibold text-lg mb-2">
            Transaction Management
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Add, update, and manage all your income and expenses in one place.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white dark:bg-[#1d232a] p-6 rounded-xl shadow-md text-center">
          <TrendingUp className="mx-auto mb-4 text-primary" size={36} />
          <h3 className="font-semibold text-lg mb-2">
            Smart Reports
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Visualize your spending habits and track financial growth with
            reports.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white dark:bg-[#1d232a] p-6 rounded-xl shadow-md text-center">
          <ShieldCheck className="mx-auto mb-4 text-primary" size={36} />
          <h3 className="font-semibold text-lg mb-2">
            Secure & Reliable
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Your data is protected with secure authentication and modern
            security practices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
