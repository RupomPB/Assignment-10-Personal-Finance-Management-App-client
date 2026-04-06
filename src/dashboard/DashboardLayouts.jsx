import { Link, NavLink, Outlet } from "react-router";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { 
  LayoutDashboard, 
  ArrowRightLeft, 
  PlusCircle, 
  History, 
  BarChart3, 
  User, 
  Home, 
  LogOut, 
  Menu,
  Bell,
  Search,
  Settings
} from "lucide-react";

const DashboardLayouts = () => {
  const { role, handleRoleChange } = useContext(AppContext);

  const navItem = "flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 group";
  const activeNav = "bg-primary text-primary-content shadow-sm";
  const inactiveNav = "text-base-content/70 hover:bg-base-200 hover:text-base-content";

  return (
    <div className="drawer lg:drawer-open min-h-screen bg-base-200">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      {/* ================= MAIN CONTENT ================= */}
      <div className="drawer-content flex flex-col">
        
        {/* Professional Top Navbar */}
        <div className="sticky top-0 z-30 navbar bg-base-100 border-b border-base-300 px-4 lg:px-8">
          <div className="flex-none lg:hidden">
            <label htmlFor="dashboard-drawer" className="btn btn-ghost btn-square">
              <Menu size={24} />
            </label>
          </div>
          
          <div className="flex-1 px-2 mx-2">
            <div className="hidden md:flex items-center bg-base-200 rounded-lg px-3 py-1.5 w-64 border border-transparent focus-within:border-primary/30 transition-all">
              <Search size={18} className="text-base-content/50" />
              <input type="text" placeholder="Search..." className="bg-transparent border-none outline-none text-sm ml-2 w-full" />
            </div>
          </div>

          <div className="flex-none gap-2">
            <button className="btn btn-ghost btn-circle btn-sm">
              <div className="indicator">
                <Bell size={20} />
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>

            {/* Profile Dropdown */}
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar border border-base-300">
                <div className="w-9 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  {role === 'admin' ? 'A' : 'U'}
                </div>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z- p-2 shadow-xl bg-base-100 rounded-box w-52 border border-base-200">
                <li className="menu-title"><span>Account</span></li>
                <li><Link to="/dashboard/profile"><User size={16} /> Profile</Link></li>
                <li><Link to="/settings"><Settings size={16} /> Settings</Link></li>
                <div className="divider my-1"></div>
                <li><button className="text-error font-medium"><LogOut size={16} /> Logout</button></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Dynamic Page Content */}
        <main className="p-4 lg:p-8 flex-1">
          <div className="max-w-6xl mx-auto">
             <Outlet />
          </div>
        </main>
      </div>

      {/* ================= SIDEBAR ================= */}
      <div className="drawer-side z-40">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        
        <aside className="w-72 bg-base-100 border-r border-base-300 min-h-screen flex flex-col">
          {/* Brand Logo */}
          <div className="p-6 border-b border-base-200 flex items-center gap-3">
            <div className="bg-primary p-2 rounded-xl">
               <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center font-black text-primary text-xs">FE</div>
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight text-base-content uppercase">FinEase</h2>
              <span className="text-[10px] bg-secondary/10 text-secondary font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">
                {role} mode
              </span>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto py-6 px-4 space-y-6">
            {/* Main Menu */}
            <section>
              <p className="text-[11px] font-bold text-base-content/40 uppercase tracking-widest px-4 mb-3">Main Menu</p>
              <ul className="space-y-1">
                <li>
                  <Link to="/" className={`${navItem} ${inactiveNav}`}>
                    <Home size={18} /> Home
                  </Link>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/DashboardOverView"
                    end
                    className={({ isActive }) => `${navItem} ${isActive ? activeNav : inactiveNav}`}
                  >
                    <LayoutDashboard size={18} /> Overview
                  </NavLink>
                </li>
              </ul>
            </section>

            {/* Transactions Section */}
            <section>
              <p className="text-[11px] font-bold text-base-content/40 uppercase tracking-widest px-4 mb-3">Finances</p>
              <div className="collapse collapse-arrow rounded-lg overflow-visible">
                <input type="checkbox" className="min-h-0 p-0" /> 
                <div className={`collapse-title min-h-0 p-0`}>
                   <div className={`${navItem} ${inactiveNav}`}>
                    <ArrowRightLeft size={18} /> Transactions
                   </div>
                </div>
                <div className="collapse-content p-0 pl-6 mt-1 border-l-2 border-base-200 ml-6 space-y-1">
                  <NavLink
                    to="/dashboard/add-transaction"
                    className={({ isActive }) => `${navItem} ${isActive ? activeNav : inactiveNav}`}
                  >
                    <PlusCircle size={16} /> Add New
                  </NavLink>
                  <NavLink
                    to="/dashboard/my-transactions"
                    className={({ isActive }) => `${navItem} ${isActive ? activeNav : inactiveNav}`}
                  >
                    <History size={16} /> History
                  </NavLink>
                </div>
              </div>
            </section>

            <section>
              <ul className="space-y-1">
                <li>
                  <NavLink
                    to="/dashboard/reports"
                    className={({ isActive }) => `${navItem} ${isActive ? activeNav : inactiveNav}`}
                  >
                    <BarChart3 size={18} /> Reports
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/profile"
                    className={({ isActive }) => `${navItem} ${isActive ? activeNav : inactiveNav}`}
                  >
                    <User size={18} /> My Profile
                  </NavLink>
                </li>
              </ul>
            </section>
          </div>

          {/* Sidebar Footer / Role Switcher */}
          <div className="p-4 border-t border-base-200 bg-base-200/50">
             <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-base-content/50 uppercase ml-1">Switch View</label>
                <select 
                  value={role} 
                  onChange={(e) => handleRoleChange(e.target.value)}
                  className="select select-sm select-bordered w-full bg-base-100 text-xs focus:ring-1 focus:ring-primary outline-none"
                >
                  <option value="viewer text-xs">Viewer Access</option>
                  <option value="admin text-xs">Administrator</option>
                </select>
             </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default DashboardLayouts;