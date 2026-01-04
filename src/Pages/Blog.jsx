import React from "react";
import { Calendar, User } from "lucide-react";

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "5 Tips to Manage Your Personal Finance",
    author: "Rupom PB",
    date: "2026-01-04",
    tags: ["Finance", "Savings", "Tips"],
    excerpt:
      "Learn how to manage your income and expenses efficiently to grow your savings...",
  },
  {
    id: 2,
    title: "Understanding Income vs Expenses",
    author: "Rupom PB",
    date: "2026-01-02",
    tags: ["Budget", "Income", "Expenses"],
    excerpt:
      "Knowing the difference between income and expenses is key to financial health...",
  },
  {
    id: 3,
    title: "How to Save Money Smartly",
    author: "Rupom PB",
    date: "2025-12-28",
    tags: ["Savings", "Smart Money", "Tips"],
    excerpt:
      "Saving money doesn’t have to be hard. Discover smart techniques to save without stress...",
  },
];

const Blog = () => {
  return (
    <section className="min-h-screen bg-base-200 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Read the latest tips, insights, and articles on personal finance.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white dark:bg-[#1d232a] rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col p-6"
            >
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h2 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                {post.title}
              </h2>

              {/* Excerpt */}
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm flex-1">
                {post.excerpt}
              </p>

              {/* Author & Date */}
              <div className="flex items-center justify-between text-gray-500 dark:text-gray-400 text-sm mb-4">
                <div className="flex items-center gap-1">
                  <User size={16} /> {post.author}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={16} /> {new Date(post.date).toLocaleDateString()}
                </div>
              </div>

              {/* Read More */}
              <button className="mt-auto btn bg-primary text-white hover:bg-primary/90 transition-colors">
                Read More
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 dark:text-gray-400 mt-16 text-sm">
          © {new Date().getFullYear()} FinEase. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Blog;
