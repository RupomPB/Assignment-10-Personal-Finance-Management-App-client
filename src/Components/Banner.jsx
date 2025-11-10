import React from 'react';

const Banner = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#e14eee] to-[#5337f5] text-white py-24 flex items-center justify-center">
      <div className="max-w-3xl text-center px-6">
        <h1 className="text-5xl font-extrabold leading-tight mb-6">
          Take Control of Your Finances
        </h1>

        <p className="text-xl opacity-90">
          Manage your income, expenses, and savings with 
          <span className="bg-gradient-to-r from-[#db28eb] to-[#e84646] text-transparent bg-clip-text font-bold"> Ease</span>.
        </p>
      </div>
    </section>
  );
};

export default Banner;
