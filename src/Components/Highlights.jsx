import React from "react";

const Highlights = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Why FinEase Stands Out</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-[#1d232a] p-6 rounded-xl shadow-md">
            <h3 className="font-semibold mb-2">Easy to Use</h3>
          </div>
          <div className="bg-white dark:bg-[#1d232a] p-6 rounded-xl shadow-md">
            <h3 className="font-semibold mb-2">Secure</h3>
          </div>
          <div className="bg-white dark:bg-[#1d232a] p-6 rounded-xl shadow-md">
            <h3 className="font-semibold mb-2">Insightful Reports</h3>
          </div>
          <div className="bg-white dark:bg-[#1d232a] p-6 rounded-xl shadow-md">
            <h3 className="font-semibold mb-2">24/7 Support</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
