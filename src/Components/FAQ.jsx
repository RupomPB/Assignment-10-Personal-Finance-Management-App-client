import React, { useState } from "react";

const faqData = [
  {
    question: "Is FinEase secure?",
    answer: "Yes! We use modern security practices to protect your data.",
  },
  {
    question: "Can I track both income and expenses?",
    answer: "Absolutely, FinEase allows you to manage all types of transactions.",
  },
  {
    question: "Do you provide reports?",
    answer: "Yes, you can generate insightful reports to understand your finances.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-base-200">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#1d232a] p-6 rounded-xl shadow-md cursor-pointer"
              onClick={() => toggleIndex(index)}
            >
              <h3 className="font-semibold">{faq.question}</h3>
              {openIndex === index && (
                <p className="text-gray-600 dark:text-gray-300 mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
