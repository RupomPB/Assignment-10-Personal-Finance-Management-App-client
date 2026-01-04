import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="min-h-screen bg-base-200 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have questions, feedback, or need support?  
            Feel free to reach out to us anytime.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-[#1d232a] p-6 rounded-xl shadow-md flex items-center gap-4">
              <Mail className="text-primary" size={28} />
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  rupombadhan111@gmail.com
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-[#1d232a] p-6 rounded-xl shadow-md flex items-center gap-4">
              <Phone className="text-primary" size={28} />
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  +880 1568-115886
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-[#1d232a] p-6 rounded-xl shadow-md flex items-center gap-4">
              <MapPin className="text-primary" size={28} />
              <div>
                <h3 className="font-semibold text-lg">Address</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-[#1d232a] p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border rounded-lg px-4 py-2 dark:bg-[#1d232a]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full border rounded-lg px-4 py-2 dark:bg-[#1d232a]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full border rounded-lg px-4 py-2 dark:bg-[#1d232a]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn bg-primary text-white"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 dark:text-gray-400 mt-16 text-sm">
          © {new Date().getFullYear()} FinEase. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
