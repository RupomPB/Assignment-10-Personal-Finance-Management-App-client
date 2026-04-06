import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import userimg from "../assets/user.png";
import { Link, NavLink } from "react-router";
import { 
  Sun, 
  Moon, 
  LogOut, 
  User as UserIcon, 
  LayoutDashboard, 
  Menu, 
  X 
} from "lucide-react";

const Navbar = () => {
  const { user, logoutUser } = use(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll logic for glass effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleLogout = () => {
    logoutUser()
      .then(() => toast.success("Logged out successfully"))
      .catch((err) => toast.error(err.message));
  };

  const navLinkStyle = ({ isActive }) => 
    `relative px-3 py-2 transition-all duration-300 font-semibold text-sm tracking-wide hover:text-primary ${
      isActive ? "text-primary" : "text-base-content/70"
    }`;

  const links = (
    <>
      <li><NavLink to="/" className={navLinkStyle}>Home</NavLink></li>
      <li><NavLink to="/about" className={navLinkStyle}>About</NavLink></li>
      <li><NavLink to="/contact" className={navLinkStyle}>Contact</NavLink></li>
      {user && (
        <>
          <li><NavLink to="/dashboard" className={navLinkStyle}>Dashboard</NavLink></li>
          <li><NavLink to="/blog" className={navLinkStyle}>Blog</NavLink></li>
        </>
      )}
    </>
  );

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-base-100/70 backdrop-blur-md border-b border-base-300 py-2 shadow-lg" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="navbar p-0 min-h-0">
          {/* Mobile Menu */}
          <div className="navbar-start">
            <div className="dropdown lg:hidden">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <Menu size={24} />
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z- p-4 shadow-2xl bg-base-100 rounded-3xl w-64 border border-base-200">
                {links}
              </ul>
            </div>

            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-2 group transition-transform hover:scale-105">
              <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
                <span className="text-white font-black text-xl italic">F</span>
              </div>
              <span className="text-xl font-black tracking-tighter text-base-content">
                Fin<span className="text-primary">Ease</span>
              </span>
            </Link>
          </div>

          {/* Center Links */}
          <div className="navbar-center hidden lg:flex">
            <ul className="flex items-center gap-2">
              {links}
            </ul>
          </div>

          {/* Right Section */}
          <div className="navbar-end gap-2 md:gap-4">
            {/* Theme Toggle */}
            <button 
              onClick={handleTheme}
              className="btn btn-ghost btn-circle bg-base-200/50 hover:bg-primary/10 transition-colors"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} className="text-yellow-500" />}
            </button>

            {user ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar ring-2 ring-offset-2 ring-primary/20 hover:ring-primary transition-all p-0">
                  <div className="w-10 rounded-full border border-base-300 overflow-hidden">
                    <img src={user.photoURL || userimg} alt="profile" />
                  </div>
                </label>
                <ul tabIndex={0} className="dropdown-content menu mt-4 z- p-3 shadow-2xl bg-base-100 rounded-2xl w-64 border border-base-200 animate-in slide-in-from-top-2">
                  <div className="px-4 py-4 border-b border-base-200 mb-2">
                    <p className="text-sm font-bold text-base-content truncate">{user.displayName || "FinEase User"}</p>
                    <p className="text-[10px] font-semibold text-base-content/50 uppercase tracking-widest">{user.email}</p>
                  </div>
                  
                  <li>
                    <Link to="/dashboard" className="flex items-center gap-3 py-3 rounded-xl hover:bg-primary/10 hover:text-primary transition-colors">
                      <LayoutDashboard size={18} /> Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/profile" className="flex items-center gap-3 py-3 rounded-xl hover:bg-primary/10 hover:text-primary transition-colors">
                      <UserIcon size={18} /> Profile Setting
                    </Link>
                  </li>
                  
                  <div className="divider my-1 opacity-50"></div>
                  
                  <li>
                    <button 
                      onClick={handleLogout} 
                      className="flex items-center gap-3 py-3 text-error font-bold rounded-xl hover:bg-error/10 transition-colors"
                    >
                      <LogOut size={18} /> Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link 
                to="/login" 
                className="btn btn-primary px-8 rounded-full font-bold shadow-lg shadow-primary/30 border-none hover:scale-105 transition-transform"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;