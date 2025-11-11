import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router";
import useAxios from "../hooks/useAxios";
import Swal from "sweetalert2";

const UpdateTransaction = () => {
  const transaction = useLoaderData();
  const [type, setType] = useState(transaction.type);
  const [category, setCategory] = useState(transaction.category);
  const navigate = useNavigate();
  const axiosInstance= useAxios();

  const incomeCategory = [
    "Salary",
    "Freelance",
    "Investment",
    "Business",
    "Other Income",
  ];

  const expenseCategory = [
    "Food",
    "Transport",
    "Shopping",
    "Bills",
    "Entertainment",
    "Healthcare",
    "Education",
    "Other",
  ];

  const handleUpdate = (e) => {
    e.preventDefault();

    const type = e.target.type.value;
    const category = e.target.category.value;
    const amount= e.target.amount.value;
    const description = e.target.description.value;
    const date  = e.target.date.value;
    console.log(type, category, amount, description, date)

    const updateInfo ={
        type,
        category,
        amount,
        description,
        date,
    }

    axiosInstance.patch(`/transactions/${transaction._id}`, updateInfo)
    .then(data=>{
        console.log('after update',data)
        if(data.data.modifiedCount){
           Swal.fire({
						position: "center",
						icon: "success",
						title: "Your transaction has been updated",
						showConfirmButton: false,
						timer: 1500,
					});
					navigate(`/transaction/${transaction._id}`); 
        }
    })

  };



  return (
    <section className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Update Transaction
      </h2>

      {/* form starts */}
      <form onSubmit={handleUpdate} className="space-y-4">
        {/* Type */}
        <div>
          <label className="block font-semibold mb-1">Type</label>
          <select
            name="type"
            defaultValue={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          >
            <option value="income">Income</option>
            <option value="expanse">Expense</option>
          </select>
        </div>

        {/* Category */}
        <div>
          <label className="block font-semibold mb-1">Category</label>

          <select
            defaultValue={category}
            onChange={(e) => setCategory(e.target.value)}
            name="category"
            className="w-full border px-3 py-2 rounded"
          >
            {type === "income" &&
              incomeCategory.map((cat) => (
                <option key={cat} value={cat.toLocaleLowerCase()}>
                  {cat}
                </option>
              ))}

            {type === "expanse" &&
              expenseCategory.map((cat) => (
                <option key={cat} value={cat.toLocaleLowerCase()}>
                  {cat}
                </option>
              ))}
          </select>
        </div>

        {/* Amount */}
        <div>
          <label className="block font-semibold mb-1"> Amount ($)</label>
          <input
            type="number"
            name="amount"
            defaultValue={transaction.amount}
            // onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            placeholder="Enter amount"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-semibold mb-1">Description</label>
          <textarea
            name="description"
            defaultValue={transaction.description}
            // onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            placeholder="Enter description"
          ></textarea>
        </div>

        {/* Date */}
        <div>
          <label className="block font-semibold mb-1">Date</label>
          <input
            type="date"
            name="date"
            // value={transaction.date}
            // onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-between items-center pt-3">
          <button
            type="submit"
            className="flex items-center 
            px-2.5
            justify-center gap-3 bg-linear-to-r from-[#db28eb] to-[#e84646]  text-white py-2 rounded-lg hover:bg-pink-400 transition"
          >
            <FaEdit />
            Update Transaction
          </button>
          <button
            onClick={() => navigate(-1)}
            type="button"
            className="border border-gray-300 px-5 py-2 rounded-lg hover:bg-gray-50 transition-all"
          >
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
};

export default UpdateTransaction;
