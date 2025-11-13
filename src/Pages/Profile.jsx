import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import userimg from '../assets/user.png'
import { Link } from 'react-router';


const Profile = () => {

    const {user} =use(AuthContext);

    return (
            <div className="min-h-screen flex flex-col justify-center items-center bg-base-300 ">
        <div className="card bg-white dark:bg-[#1d232a] shadow-lg p-8 rounded-xl w-full max-w-md h-[450px] my-10">
          <img
            src={user?.photoURL || userimg}
            className="w-28 h-28 mx-auto rounded-full mb-4 border"
          />
          <h2 className="text-xl font-semibold text-center py-3">
            User Name: {user?.displayName || "No Name"}
          </h2>
          <p className="text-center text-gray-500 mt-2 dark:text-gray-300">
            {" "}
            User Email: {user?.email}
          </p>
          <Link to="/profile/update" className='text-center'>
            <button className=" btn bg-linear-to-r from-[#db28eb] to-[#e84646]  mt-5 ">Update Information</button>
          </Link>
        </div>
      </div>
    );
};

export default Profile;