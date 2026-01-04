import React from "react";
import { ShieldCheck, TrendingUp, Wallet } from "lucide-react";

const About = () => {
  return (
    <section className="bg-base-200 min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About FinEase</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            FinEase is a modern personal finance management platform that helps
            you track income, manage expenses, and gain insights into your
            financial habits.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Our mission is to simplify personal finance for everyone. FinEase
              empowers users to make smarter financial decisions by providing
              clear insights, easy transaction tracking, and secure data
              management.
            </p>
          </div>

          <div className="bg-white dark:bg-[#1d232a] rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-semibold mb-4">Why FinEase?</h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li>✔ Easy transaction tracking</li>
              <li>✔ Clean and intuitive dashboard</li>
              <li>✔ Secure user authentication</li>
              <li>✔ Responsive on all devices</li>
            </ul>
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Key Features
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-[#1d232a] p-6 rounded-xl shadow-md text-center">
              <Wallet className="mx-auto mb-4 text-primary" size={36} />
              <h3 className="font-semibold text-lg mb-2">
                Transaction Management
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Add, update, and manage all your income and expenses in one
                place.
              </p>
            </div>

            <div className="bg-white dark:bg-[#1d232a] p-6 rounded-xl shadow-md text-center">
              <TrendingUp className="mx-auto mb-4 text-primary" size={36} />
              <h3 className="font-semibold text-lg mb-2">Smart Reports</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Visualize your spending habits and track financial growth with
                reports.
              </p>
            </div>

            <div className="bg-white dark:bg-[#1d232a] p-6 rounded-xl shadow-md text-center">
              <ShieldCheck className="mx-auto mb-4 text-primary" size={36} />
              <h3 className="font-semibold text-lg mb-2">Secure & Reliable</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Your data is protected with secure authentication and modern
                security practices.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <div className="text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} FinEase. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
