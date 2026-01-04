import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Banner = () => {
  return (
    <section className="w-full h-[70vh] relative bg-gradient-to-r from-[#e14eee] to-[#5337f5] flex items-center justify-center overflow-hidden">
      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl text-center px-6"
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6 text-white">
          Take Control of Your Finances
        </h1>

        <p className="text-xl sm:text-2xl opacity-90 mb-8">
          Manage your income, expenses, and savings with{" "}
          <span className="bg-gradient-to-r from-[#db28eb] to-[#e84646] text-transparent bg-clip-text font-bold">
            Ease
          </span>
        </p>

        {/* CTA Button */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#features"
          className="inline-block btn bg-white text-purple-700 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-purple-50 transition-colors"
        >
          Get Started
        </motion.a>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white opacity-80"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Banner;
