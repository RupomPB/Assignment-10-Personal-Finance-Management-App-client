import React, { use, useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { TrendingDown, TrendingUp } from "lucide-react";
import { MdDeleteForever } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";
import { CiViewList } from "react-icons/ci";
import Swal from "sweetalert2";
import useAxios from "../hooks/useAxios";
import { Link } from "react-router";
import { AppContext } from "../Context/AppContext";

const MyTransactions = () => {
  const { user } = use(AuthContext);
  const [transactions, setTransactions] = useState([]);
  const axiosInstance = useAxios();
  const [sortBy, setSortBy] = useState("date");
  const { role } = useContext(AppContext);

  // delete transaction
  const handleDelete = (_id) => {
    if (role !== "admin") {
      return toast.error("Only Admin can delete it");
    }

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
        axiosInstance.delete(`/transactions/${_id}`).then((res) => {
          if (res.data.deletedCount) {
            Swal.fire("Deleted!", "Transaction removed.", "success");
            setTransactions((prev) => prev.filter((tx) => tx._id !== _id));
          }
        });
      }
    });
  };

  // fetch transactions
  useEffect(() => {
    if (!user?.email) return;

    fetch(
      `https://finease-server-psi.vercel.app/transactions?email=${user.email}&sort=${sortBy}`,
    )
      .then((res) => res.json())
      .then((data) => setTransactions(data || []))
      .catch(() => toast.error("Failed to load transactions"));
  }, [user, sortBy]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold">My Transactions</h2>
          <p className="text-gray-500 mt-1">
            Showing{" "}
            <span className="font-bold text-primary">
              {transactions.length}
            </span>{" "}
            transactions
          </p>
        </div>

        {/* Sort */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full md:w-56 border rounded-lg px-4 py-2 dark:bg-[#1d232a]"
        >
          <option value="date">Sort by Date</option>
          <option value="amount">Sort by Amount</option>
          <option value="none">No Sorting</option>
        </select>
      </div>

      {/* Transactions */}
      {transactions.length === 0 ? (
        <p className="text-center text-gray-500 mt-20">
          No transactions found.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {transactions.map((tx) => (
            <div
              key={tx._id}
              className="bg-white dark:bg-[#1d232a] rounded-xl shadow-md p-5 flex flex-col justify-between"
            >
              {/* Type */}
              <div className="flex items-center gap-3 mb-3">
                <div
                  className={`p-2 rounded-lg ${
                    tx.type === "income"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {tx.type === "income" ? <TrendingUp /> : <TrendingDown />}
                </div>
                <span
                  className={`text-sm font-medium px-2 py-1 rounded-md ${
                    tx.type === "income"
                      ? "bg-green-200 text-green-700"
                      : "bg-red-200 text-red-700"
                  }`}
                >
                  {tx.type}
                </span>
              </div>

              {/* Info */}
              <div className="space-y-1">
                <p className="font-semibold text-lg">{tx.category}</p>
                <p
                  className={`text-xl font-bold ${
                    tx.type === "income" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  ${tx.amount}
                </p>
                <p className="text-sm text-gray-500">
                  {new Date(tx.date).toLocaleDateString()}
                </p>
              </div>

              {/* Actions */}
              <div className="mt-5 flex flex-wrap gap-2">
                <Link
                  to={`/transaction/${tx._id}`}
                  className="flex-1 flex items-center justify-center gap-1 border rounded-lg py-2 text-sm hover:bg-base-200"
                >
                  <CiViewList /> View
                </Link>
                {/* edit button */}
                <Link
                  to={ role === 'admin' ? `/transaction/update/${tx._id}` : "#"}
                  onClick={(e)=>{
                    if(role !== "admin"){
                      e.preventDefault();
                      toast.error('Viewer cannot edit')
                    }
                  }}
                  className={`flex-1 flex items-center justify-center gap-1 rounded-lg py-2 text-sm 
                  ${role === 'admin' 
                  ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"} `}
                >
                  <GrDocumentUpdate /> Edit
                </Link>
                <button
                
                  onClick={() => handleDelete(tx._id)}
                  disabled={role !=="admin"}

                  className={`flex-1 flex items-center justify-center gap-1 rounded-lg py-2 text-sm 
                  ${role ==="admin"
                  ? "bg-red-100 text-red-600 hover:bg-red-200"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
                >
                  <MdDeleteForever size={18} /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default MyTransactions;
