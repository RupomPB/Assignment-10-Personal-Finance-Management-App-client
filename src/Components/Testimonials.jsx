import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Alice Johnson",
    feedback: "FinEase helped me track my expenses easily and save more each month!",
  },
  {
    id: 2,
    name: "Michael Smith",
    feedback: "The insights and reports are amazing. I now understand my spending better.",
  },
  {
    id: 3,
    name: "Sarah Williams",
    feedback: "User-friendly and secure. Highly recommend for personal finance management!",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white dark:bg-[#1d232a] p-6 rounded-xl shadow-md"
            >
              <p className="text-gray-600 dark:text-gray-300 mb-4">{t.feedback}</p>
              <p className="font-semibold text-primary">- {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
