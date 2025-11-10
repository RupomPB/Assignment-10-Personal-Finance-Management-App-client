import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';
import { TrendingDown, TrendingUp } from 'lucide-react';

const MyTransactions = () => {

    const {user} = use(AuthContext);
    const [transactions, setTransactions] =useState([]);



    // get transaction data 
    useEffect(()=>{
       fetch(`http://localhost:3000/transactions?email=${user.email}`)
       .then(res =>res.json())
       .then(data =>{
        setTransactions(data || []);
       })
       .catch(error =>{
        toast.error('error fetching transaction', error)
       })
    },[user])

    return (
         <section className="max-w-7xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">My Transactions</h2>
      	<p className="mb-8 text-center">View and manage all your transactions</p>
        <div className=" my-3 font-semibold">
						Showing {' '}
						<span className=" font-extrabold">
							{transactions.length}
						</span>{" "}
						transactions
					</div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {transactions.map((tx) => (
          <div key={tx._id} className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-between">
            <div className='flex items-center gap-2 mb-2'>

            <div className={`p-2 rounded-lg ${
            tx.type === 'income'? 'bg-green-100 text-green-600':'bg-red-100 text-red-500'}`}>
            {
                tx.type === 'income'?(
                    <TrendingUp />
                ):(
                  <TrendingDown size={20} />  
                )

            }
            </div>
            <span className={`${tx.type === 'income'?'bg-blue-200 text-blue-500': 'bg-red-100 text-red-500 p-1 rounded-lg' }`}>
                {tx.type}
            </span>
              
              
            </div>

            <p className=' font-bold'>{tx.category}</p>

              <p className={`font-bold text-xl mt-2 ${tx.type === 'income'? 'text-green-500': 'text-red-500'}`}> ${tx.amount}</p>

              <p className=' font-semibold mt-2'> {new Date(tx.date).toLocaleDateString()}</p>

            <div className="mt-4 flex justify-between">
             <button
                // onClick={() => navigate(`/transaction/${tx._id}`)}
                className="px-3 py-1 rounded "
              >
                View Details
              </button>

              <button
                // onClick={() => navigate(`/transaction/update/${tx._id}`)}
                className=" px-3 py-1 rounded "
              >
                Update
              </button>

              <button
                // onClick={() => handleDelete(tx._id)}
                className="px-3 py-1 rounded "
              >
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