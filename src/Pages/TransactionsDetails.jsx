import { Tag } from "lucide-react";
import React, { use } from "react";
import { BiCategory } from "react-icons/bi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { useLoaderData, useNavigate } from "react-router";
import { AuthContext } from './../Context/AuthContext';
import { IoIosArrowRoundBack } from "react-icons/io";

const TransactionsDetails = () => {
  const transaction = useLoaderData();
  const {user} =use(AuthContext);
  const navigate = useNavigate();

  return (
    <section className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg my-20 ">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Your Transaction Details
      </h2>
      <p className=" flex items-center gap-2 py-3 " onClick={()=>navigate(-1)}>
        <IoIosArrowRoundBack /> Back to Transactions
      </p>

      <div className="space-y-4 border-2 border-gray-200 rounded-lg p-5 min-h-screen ">
        <div className="flex justify-between items-center  pt-4 ">
          {/* Type and amount */}
          <div className="flex items-center gap-2">
            <div
              className={`font-bold ${
                transaction.type === "income"
                  ? "  text-blue-500 bg-blue-100 p-1 rounded-lg"
                  : "text-red-500 bg-red-100 p-1 rounded-lg"
              } `}
            >
              <FaArrowTrendUp size={20} />
            </div>
            <span
              className={`font-bold text-sm ${
                transaction.type === "income"
                  ? "  text-blue-700 bg-blue-100 p-1 rounded-lg"
                  : "text-red-500 bg-red-100 p-1 rounded-lg"
              }`}
            >
              {transaction.type}
            </span>
          </div>

          <div>
            <span className="font-semibold">Amount: </span>
            <span className="font-bold text-xl text-green-500">
              $ {transaction.amount}
            </span>
          </div>
        </div>

        {/* Category */}
        <div className="pt-3 pb-9 border-b-2 border-b-gray-200">
          <span className="font-semibold text-2xl ">
            {transaction.category}
          </span>
        </div>

        {/* middle section*/}
        <div className="flex items-center justify-center gap-72 pt-3 border-b-2 border-gray-200 pb-5">
         	<div className="flex items-start gap-2">
							<BiCategory size={18} className="text-gray-400 mt-0.5" />
							<div>
								<p>Category</p>
								<p className="font-semibold capitalize ">
									{transaction.category}
								</p>
							</div>
						</div>

          <div>
              <span className=" font-semibold flex items-center gap-2 text-gray-500">
              {" "}
              <BiCategory className="" />
              Date{" "}
            </span>
            <span className="font-semibold ml-6">
              {new Date(transaction.date).toLocaleDateString()}
            </span>
          </div>
        </div>

       

        {/* Description */}
        <div className="pt-3 pb-7 border-b-2 border-b-gray-200">
          <span className="font-semibold">Description: </span>
          <span className="font-bold">
            {transaction.description || "No description provided."}
          </span>
        </div>

        {/* Total Amount of Category */}
        <div className="mt-10 p-4 bg-blue-50 rounded-lg">
          <span className="font-semibold">
            Total Amount in "{transaction.category}" category:{" "}
          </span>
          <span className="font-bold text-blue-600">$</span>
        </div>

         {/*Created By Section */}
      <div className="mt-8 bg-gray-50 border-t border-gray-200 p-6 rounded-2xl flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-500">Created By</p>
          <p className="font-semibold text-gray-800">
            {user?.displayName || "Unknown User"}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Email</p>
          <p className="font-semibold text-gray-800">{user?.email || "-"}</p>
        </div>
      </div>
      {/* button */}
      
        <button onClick={()=>navigate(`/my-transactions`)} className="bg-linear-to-r from-[#db28eb] to-[#e84646] py-3 px-6 rounded-2xl font-semibold btn mt-5 ">
          View All
        </button>
   

      </div>


       
    </section>
  );
};

export default TransactionsDetails;
