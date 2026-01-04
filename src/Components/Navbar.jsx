import React, { use, useEffect, useState } from "react";

import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import userimg from "../assets/user.png";


import { Link, Navigate, NavLink } from "react-router";




const Navbar = () => {
  const { user, logoutUser } = use(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  const handleLogout = () => {
    logoutUser()
      .then(() => toast.success("Logged out successfully"))
      .catch((err) => toast.error(err.message));
  };

  const links = (
    <>
      <NavLink to="/" className={({ isActive }) =>
        `ml-5 ${isActive ? "text-primary font-bold border-b-2" : "text-base-content"}`
      }>
        <li>Home</li>
      </NavLink>

      <NavLink to="/about" className={({ isActive }) =>
        `ml-5 ${isActive ? "text-primary font-bold border-b-2" : "text-base-content"}`
      }>
        <li>About</li>
      </NavLink>

      <NavLink to="/contact" className={({ isActive }) =>
        `ml-5 ${isActive ? "text-primary font-bold border-b-2" : "text-base-content"}`
      }>
        <li>Contact</li>
      </NavLink>

      {user && (
        <>
          
        <NavLink to="/dashboard" className={({ isActive }) =>
          `ml-5 ${isActive ? "text-primary font-bold border-b-2" : "text-base-content"}`
        }>
          <li>Dashboard</li>
        </NavLink>

        <NavLink to="/blog" className={({ isActive }) =>
        `ml-5 ${isActive ? "text-primary font-bold border-b-2" : "text-base-content"}`
      }>
        <li>Blog</li>
      </NavLink>
        </>
      )}
    </>
  );

  return (
    <section className="w-full bg-base-100 shadow-sm">
      <div className="container mx-auto navbar px-4">
        {/* Left */}
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost">
              ☰
            </label>
            <ul tabIndex={0} className="menu dropdown-content bg-base-100 p-2 shadow rounded-box w-52">
              {links}
            </ul>
          </div>

          <Link to="/" className="text-xl font-bold">
            Fin<span className="text-primary">Ease</span>
          </Link>
        </div>

        {/* Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">{links}</ul>
        </div>

        {/* Right */}
        <div className="navbar-end gap-3">
          <input
            type="checkbox"
            className="toggle"
            onChange={(e) => handleTheme(e.target.checked)}
            defaultChecked={theme === "dark"}
          />

          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0}>
                <img
                  src={user.photoURL || userimg}
                  className="w-10 h-10 rounded-full cursor-pointer"
                />
              </label>
              <ul className="dropdown-content menu p-3 shadow bg-base-100 rounded-box w-48">
                <li className="border-b pb-2">
                  <span className="font-semibold">
                    {user.displayName || "User"}
                  </span>
                  <span className="text-xs opacity-70">{user.email}</span>
                </li>
                <li className="mt-2">
                  <button onClick={handleLogout} className="btn btn-sm btn-outline">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login" className="btn btn-primary btn-sm">
              Login
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
