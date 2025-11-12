import React, { use } from 'react';
import { Link, Navigate, NavLink, } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';
import userimg from '../assets/user.png'


const Navbar = () => {
  const {user, logoutUser} = use(AuthContext);
  // const navigate = useNavigate();


  const handleLogout =()=>{
    logoutUser()
    .then(()=>{
        toast.success('sign-out successfully')
    })
    .catch((error)=>{
      toast.error(error.message)
    })
  }

    const links = (
    <>
      <NavLink className="ml-5 " to="/">
        <li>Home </li>
      </NavLink>
      <NavLink className="ml-5 " to="/add-transaction">
        <li>Add Transaction</li>
      </NavLink>
      <NavLink className="ml-5 " to="/my-transactions">
        <li>My Transactions</li>
      </NavLink>
      <NavLink className="ml-5 " to="/my-reports">
        <li>Reports</li>
      </NavLink>
            <NavLink className="ml-5 " to="/profile">
        <li>My Profile</li>
      </NavLink>
          


      {/* conditional if user unavailable */}
    {
      !user && (
        <>
          <NavLink className="ml-5 " to="/login">
            <li>Login </li>
          </NavLink>
          <NavLink className="ml-5 " to="/register">
            <li>Register </li>
          </NavLink>
        
        </>
      )
    }
     
        

   
    </>
  );

    return (
         <section className="w-full bg-base-100 shadow-sm py-3 border-2 ">
  <div className="container mx-auto flex justify-between items-center px-4">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div>
            <p className=' font-bold text-xl'>Fin <span className='bg-linear-to-r from-[#db28eb] to-[#e84646] text-transparent bg-clip-text'>Ease</span></p>
          </div>
          {/* {user && user.email} */}
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-2">{links}</ul>
        </div>

        {/* dropdown */}
        <div className="navbar-end">
  {user ? (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button">
        <img
          className="mr-3 w-11 h-11 rounded-full cursor-pointer"
          src={user.photoURL ? user.photoURL : userimg}
        />
      </div>

      <ul
        tabIndex={0}
        className="dropdown-content z-10 menu p-4 shadow bg-base-100 rounded-box w-fit"
      >
        <li className="flex flex-col items-start  border-b">
          <span className="font-semibold w-full">{user.displayName || "User"}</span>

          <span className="text-sm opacity-70">{user.email}</span>
        </li>

        <li className="mt-2">
          <button
            onClick={handleLogout}
            className="btn btn-outline btn-sm bg-linear-to-r from-[#db28eb] to-[#e84646]  text-white"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  ) : (
    <Link to="/login" className="btn bg-secondary text-base-100">
      Login
    </Link>
  )}
</div>
      </div>
    </section>
    );
};

export default Navbar;