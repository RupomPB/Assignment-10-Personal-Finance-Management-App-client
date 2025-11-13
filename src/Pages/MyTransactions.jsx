import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { TrendingDown, TrendingUp } from "lucide-react";
import { MdDeleteForever } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";
import { CiViewList } from "react-icons/ci";
import Swal from "sweetalert2";
import useAxios from "../hooks/useAxios";
import { Link } from "react-router";

const MyTransactions = () => {
  const { user } = use(AuthContext);
  const [transactions, setTransactions] = useState([]);
  const axiosInstance = useAxios();
  const [sortBy, setSortBy] = useState("date");

  // delete functions
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("delete");

        axiosInstance.delete(`/transactions/${_id}`).then((data) => {
          if (data.data.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Your transaction has been deleted.",
              icon: "success",
            });


            const remainingTransactions =transactions.filter(tx =>tx._id !== _id);
            setTransactions(remainingTransactions)

          }
        });
      }
    });
  };

  // get transaction data
  useEffect(() => {
    fetch(
      `http://localhost:3000/transactions?email=${user.email}&sort=${sortBy}`
    )
      .then((res) => res.json())
      .then((data) => {
        setTransactions(data || []);
      })
      .catch((error) => {
        toast.error("error fetching transaction", error);
      });
  }, [user, sortBy]);

  return (
    <section className="max-w-7xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">My Transactions</h2>
      <p className="mb-8 text-center">View and manage all your transactions</p>

      <div className="flex justify-between items-center">
        <div className=" my-3 font-semibold">
          Showing <span className=" font-extrabold">{transactions.length}</span>{" "}
          transactions
        </div>

        {/* Sort Dropdown */}
        <div className="flex justify-center mb-6">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 dark:bg-[#1d232a] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="date">Sort by Date</option>
            <option value="amount">Sort by Amount</option>
            <option value="none">none</option>
          </select>
        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {transactions.map((tx) => (
          <div
            key={tx._id}
            className="bg-white border border-gray-100 dark:bg-[#1d232a] p-6 rounded-xl shadow-md flex flex-col justify-between"
          >
            <div className="flex items-center gap-2 mb-2">
              <div
                className={`p-2 rounded-lg ${
                  tx.type === "income"
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-500"
                }`}
              >
                {tx.type === "income" ? (
                  <TrendingUp />
                ) : (
                  <TrendingDown size={20} />
                )}
              </div>
              <span
                className={`${
                  tx.type === "income"
                    ? "bg-blue-200 text-blue-700 rounded-lg px-2"
                    : "bg-red-100 text-red-700 px-2 rounded-lg"
                }`}
              >
                {tx.type}
              </span>
            </div>

            <p className=" font-bold">{tx.category}</p>

            <p
              className={`font-bold text-xl mt-2 ${
                tx.type === "income" ? "text-green-500" : "text-red-500"
              }`}
            >
              {" "}
              ${tx.amount}
            </p>

            <p className=" font-semibold mt-2">
              {" "}
              {new Date(tx.date).toLocaleDateString()}
            </p>

            <div className="mt-4 flex justify-between ">
              <Link
                to={`/transaction/${tx._id}`} 
                className="px-3 py-1 rounded-lg flex items-center border border-gray-300 "
              >
                <CiViewList />
                View Details
              </Link>

              <Link
               to={`/transaction/update/${tx._id}`}
                className=" px-3 py-1 rounded-lg flex items-center text-yellow-600 bg-yellow-100"
              >
                <GrDocumentUpdate />
                Update
              </Link>

              <button
                onClick={() => handleDelete(tx._id)}
                className="px-3 py-1 rounded-lg flex items-center text-red-500 bg-red-100 "
              >
                <MdDeleteForever size={20} />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyTransactions;
