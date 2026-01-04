import React from "react";

const Newsletter = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-[#6a11cb] to-[#2575fc] text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-lg mb-8 opacity-90">
          Get the latest tips, news, and updates on personal finance delivered directly to your inbox.
        </p>

        {/* Form */}
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:flex-1 px-5 py-4 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-white transition-all"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#2575fc] font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Subscribe
          </button>
        </form>

        {/* Optional small text */}
        <p className="mt-4 text-sm opacity-70">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
