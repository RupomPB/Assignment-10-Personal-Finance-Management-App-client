import React, { use, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import useAxios from "../hooks/useAxios";
import { useNavigate } from "react-router";
import MyTransactions from './MyTransactions';
import { toast } from "react-toastify";

const AddTransaction = () => {
  const { user } = use(AuthContext);
  const axiosInstance = useAxios();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    type: "income",
    category: "",
    amount: "",
    description: "",
    date: "",
  });

  const categories = [
    "Salary",
    "Food",
    "Shopping",
    "Entertainment",
    "Transport",
    "Health",
    "Other",
  ];

  const handleChange=(e)=>{
    
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const handleSubmit =  (e) => {
    e.preventDefault();

    if(!formData.amount || !formData.category || !formData.date){
        return toast.error('please fill all required fields!')
    }


    const newTransaction ={
        ...formData,
        email: user.email,
        name: user.displayName,
        date: new Date(formData.date),
    }

    // posting data to DB
   axiosInstance.post('/transactions', newTransaction)
    .then((data)=>{
        if(data.data.insertedId){
            e.target.reset();
            navigate('/myTransactions');
              toast.success("Transaction added successfully!");

        }
    })
    .catch(error=>{
        toast.error(error.message)
    });

  };

  return (
    <section className="max-w-3xl mx-auto py-12 px-4 ">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Add New Transaction
      </h2>
      <p>Record your income or expense</p>

      <form
        onSubmit={handleSubmit}
        className="bg-base-100 p-8 rounded-xl shadow-md space-y-6"
      >
        <div>
          <label className="block mb-1 font-semibold">Transaction Type <span className="text-red-500">*</span></label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
          >
            <option value="Income">Income </option>
            <option value="Expense">Expense</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-semibold">Category <span className="text-red-500">*</span></label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

                {/* amount */}
        <div>
          <label className="block mb-1 font-semibold">Amount <span className="text-red-500">*</span></label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Enter amount"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Description</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Optional description"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Date <span className="text-red-500">*</span></label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">User Email</label>
          <input
            type="email"
            value={user.email}
            readOnly
            className="w-full border border-gray-300 rounded p-2 bg-gray-100"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">User Name</label>
          <input
            type="text"
            value={user.displayName}
            readOnly
            className="w-full border border-gray-300 rounded p-2 bg-gray-100"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Add Transaction
        </button>
      </form>
    </section>
  );
};

export default AddTransaction;
