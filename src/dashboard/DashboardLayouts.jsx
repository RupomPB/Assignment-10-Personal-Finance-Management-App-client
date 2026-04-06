import { Link, NavLink, Outlet, useLocation } from "react-router";
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
  Settings,
  ChevronRight,
  Zap
} from "lucide-react";

const DashboardLayouts = () => {
  const { role, handleRoleChange } = useContext(AppContext);
  const location = useLocation();

  // Page title generator based on path
  const getPageTitle = () => {
    const path = location.pathname.split("/").pop();
    if (!path || path === "dashboard") return "Overview";
    return path.charAt(0).toUpperCase() + path.slice(1).replace("-", " ");
  };

  const navItem = "flex items-center gap-3 rounded-2xl px-4 py-3.5 text-sm font-semibold transition-all duration-300 group";
  const activeNav = "bg-primary text-primary-content shadow-xl shadow-primary/30 translate-x-1";
  const inactiveNav = "text-base-content/60 hover:bg-base-300/50 hover:text-primary hover:translate-x-1";

  return (
    <div className="drawer lg:drawer-open min-h-screen bg-base-200/50">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      {/* ================= MAIN CONTENT ================= */}
      <div className="drawer-content flex flex-col">
        
        {/* Superior Glass Header */}
        <header className="sticky top-0 z-30 navbar bg-base-100/60 backdrop-blur-xl border-b border-base-300 px-6 lg:px-10 h-20">
          <div className="flex-none lg:hidden">
            <label htmlFor="dashboard-drawer" className="btn btn-ghost btn-square text-base-content">
              <Menu size={24} />
            </label>
          </div>
          
          <div className="flex-1 flex items-center gap-4">
            <div className="hidden lg:block">
               <h1 className="text-xl font-extrabold text-base-content tracking-tight">{getPageTitle()}</h1>
               <p className="text-[10px] text-base-content/40 font-medium uppercase tracking-widest">Dashboard / {getPageTitle()}</p>
            </div>
            
            <div className="hidden md:flex items-center bg-base-300/40 rounded-2xl px-4 py-2.5 w-72 group focus-within:w-80 focus-within:bg-base-100 border border-transparent focus-within:border-primary/30 transition-all duration-500">
              <Search size={18} className="text-base-content/30 group-focus-within:text-primary" />
              <input type="text" placeholder="Quick search..." className="bg-transparent border-none outline-none text-sm ml-3 w-full text-base-content placeholder:text-base-content/30" />
            </div>
          </div>

          <div className="flex-none gap-3 md:gap-5">
            {/* Quick Stats/Alerts */}
            <div className="hidden sm:flex items-center gap-2 bg-success/10 text-success px-3 py-1.5 rounded-full border border-success/20">
               <Zap size={14} fill="currentColor" />
               <span className="text-[10px] font-bold uppercase tracking-wider">Live</span>
            </div>

            <button className="btn btn-ghost btn-circle relative bg-base-300/30 hover:bg-primary/10 hover:text-primary transition-colors">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-primary rounded-full border-2 border-base-100 animate-pulse"></span>
            </button>

            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar ring-2 ring-offset-2 ring-primary/20 hover:ring-primary transition-all p-0">
                <div className="w-10 rounded-full bg-gradient-to-br from-primary to-accent text-primary-content flex items-center justify-center font-black text-lg shadow-inner">
                  {role ? role.toUpperCase() : 'U'}
                </div>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-4 z-50 p-3 shadow-2xl bg-base-100 rounded-3xl w-64 border border-base-300 animate-in slide-in-from-top-2">
                <div className="flex items-center gap-3 px-3 py-4 border-b border-base-200 mb-2">
                   <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">R</div>
                   <div>
                      <p className="text-sm font-bold text-base-content">Rupom</p>
                      <p className="text-[10px] text-base-content/50 truncate">rupom@developer.com</p>
                   </div>
                </div>
                <li><Link to="/dashboard/profile" className="py-3 rounded-xl hover:bg-primary/5 hover:text-primary transition-colors"><User size={18} /> View Profile</Link></li>
                <li><Link to="/settings" className="py-3 rounded-xl hover:bg-primary/5 hover:text-primary transition-colors"><Settings size={18} /> Account Settings</Link></li>
                <div className="divider my-1 opacity-50"></div>
                <li><button className="text-error font-bold py-3 rounded-xl hover:bg-error/10 transition-colors"><LogOut size={18} /> Sign Out</button></li>
              </ul>
            </div>
          </div>
        </header>

        {/* Dynamic Canvas Area */}
        <main className="p-6 lg:p-10 flex-1 overflow-x-hidden">
          <div className="max-w-[1600px] mx-auto min-h-[calc(100vh-180px)]">
             <Outlet />
          </div>
        </main>
      </div>

      {/* ================= SIDEBAR ================= */}
      <div className="drawer-side z-40">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        
        <aside className="w-80 bg-base-100 border-r border-base-300 min-h-screen flex flex-col shadow-2xl lg:shadow-none">
          {/* Enhanced Brand Identity */}
          <div className="px-8 h-24 flex items-center border-b border-base-300/50 mb-6 bg-base-200/20">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-primary rounded-[18px] flex items-center justify-center shadow-2xl shadow-primary/40 group-hover:rotate-[10deg] transition-all duration-500">
                <span className="text-primary-content font-black text-2xl tracking-tighter italic">F</span>
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl font-black tracking-tight text-base-content leading-none">FinEase</h2>
                <span className="text-[9px] font-black text-primary uppercase tracking-[0.3em] mt-1">Intelligent Finance</span>
              </div>
            </Link>
          </div>

          <nav className="flex-1 px-5 space-y-10 overflow-y-auto pb-10">
            {/* General Navigation */}
            <div>
              <p className="text-[10px] font-bold text-base-content/30 uppercase tracking-[0.2em] px-4 mb-5">Main Dashboard</p>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className={`${navItem} ${inactiveNav}`}>
                    <Home size={20} strokeWidth={2.5} /> <span>Home Portal</span>
                  </Link>
                </li>
                <li>
                  <NavLink
                    to="/dashboard"
                    end
                    className={({ isActive }) => `${navItem} ${isActive ? activeNav : inactiveNav}`}
                  >
                    <LayoutDashboard size={20} strokeWidth={2.5} /> <span>Insights Overview</span>
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* Core Features */}
            <div>
              <p className="text-[10px] font-bold text-base-content/30 uppercase tracking-[0.2em] px-4 mb-5">Ledger & Activity</p>
              <div className="collapse collapse-arrow rounded-3xl transition-all duration-300">
                <input type="checkbox" className="min-h-0" /> 
                <div className="collapse-title p-0 min-h-0">
                  <div className={`${navItem} ${inactiveNav}`}>
                    <ArrowRightLeft size={20} strokeWidth={2.5} /> <span>Transaction Hub</span>
                  </div>
                </div>
                <div className="collapse-content p-0 pl-12 mt-1 space-y-1">
                  <NavLink to="/dashboard/add-transaction" className={({ isActive }) => `flex items-center gap-3 py-3 text-sm font-semibold transition-all ${isActive ? 'text-primary' : 'text-base-content/50 hover:text-primary'}`}>
                      <div className="w-1.5 h-1.5 rounded-full bg-current opacity-40"></div> Create Entry
                  </NavLink>
                  <NavLink to="/dashboard/my-transactions" className={({ isActive }) => `flex items-center gap-3 py-3 text-sm font-semibold transition-all ${isActive ? 'text-primary' : 'text-base-content/50 hover:text-primary'}`}>
                      <div className="w-1.5 h-1.5 rounded-full bg-current opacity-40"></div> View History
                  </NavLink>
                </div>
              </div>
              <NavLink to="/dashboard/reports" className={({ isActive }) => `${navItem} ${isActive ? activeNav : inactiveNav} mt-2`}>
                <BarChart3 size={20} strokeWidth={2.5} /> <span>Financial Analytics</span>
              </NavLink>
            </div>
          </nav>

          {/* Luxury Switcher Area */}
          <div className="p-6 mt-auto">
             <div className="bg-gradient-to-tr from-base-300/40 to-base-200/50 p-5 rounded-[28px] border border-base-300">
                <div className="flex items-center gap-3 mb-4">
                   <div className={`w-3 h-3 rounded-full ${role === 'admin' ? 'bg-primary animate-pulse' : 'bg-success'}`}></div>
                   <span className="text-[11px] font-bold text-base-content/60 uppercase">System Status</span>
                </div>
                <select 
                  value={role} 
                  onChange={(e) => handleRoleChange(e.target.value)}
                  className="select select-sm w-full bg-base-100 rounded-xl border-none focus:ring-2 focus:ring-primary/20 font-bold text-xs text-base-content shadow-sm"
                >
                  <option value="viewer">Standard View</option>
                  <option value="admin">Administrator</option>
                </select>
             </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default DashboardLayouts;