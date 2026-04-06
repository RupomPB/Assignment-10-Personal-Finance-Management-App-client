import React from "react";
import MonthlyChart from "../Components/MonthlyChart";
import CategoryChart from "../Components/CategoryChart";

const Reports = () => {
  return (
    <section className="py-20 px-10 my-5">
      <div className=" items-center">
        {/* Main Chart */}
        <div className="mb-12">
          <MonthlyChart />
        </div>

        {/* Optional Secondary */}
        <div>
          <CategoryChart />
        </div>
      </div>
    </section>
  );
};

export default Reports;
