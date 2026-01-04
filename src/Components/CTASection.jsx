import React from "react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#e14eee] to-[#5337f5] text-white text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6">Start Managing Your Finances Today!</h2>
        <p className="text-lg mb-8 opacity-90">
          Sign up and take control of your income, expenses, and savings effortlessly.
        </p>
        <a
          href="/register"
          className="btn bg-white text-purple-700 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-purple-50 transition-colors"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default CTASection;
