import { Link, NavLink, Outlet } from "react-router";
import DashboardOverView from "./DashboardOverview/DashboardOverview";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const DashboardLayouts = () => {
  const navItem =
    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all";
  const activeNav = "bg-primary text-white shadow-md";
  const inactiveNav = "text-base-content hover:bg-base-300";

    const { role, handleRoleChange } = useContext(AppContext)

  return (
    <div className="drawer lg:drawer-open max-w-7xl mx-auto min-h-screen">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      {/* ================= CONTENT ================= */}
      <div className="drawer-content flex flex-col">
        {/* Top Navbar */}
        <div className="sticky top-0 z-30 navbar bg-base-100 border-b">
          <label
            htmlFor="dashboard-drawer"
            className="btn btn-ghost btn-square lg:hidden"
          >
            ☰
          </label>

          <h1 className="text-lg font-semibold px-2">FinEase Dashboard</h1>

          {/* Profile Dropdown */}
          <div className="ml-auto dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-8 rounded-full bg-primary text-white flex items-center justify-center">
                U
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40"
            >
              <li>
                <Link to="/dashboard/profile">Profile</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <button className="text-error">Logout</button>
              </li>
            </ul>
          </div>
        </div>

        {/* Page Content */}
        <div className="p-6 bg-base-200 min-h-screen space-y-6">
          <div className="bg-base-100 rounded-xl shadow p-6">
            <Outlet />
          </div>
        </div>
      </div>

      {/* ================= SIDEBAR ================= */}
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

        <aside className="w-64 bg-base-100 border-r min-h-screen px-4 py-6">
          {/* Brand */}
          <div className="mb-6 text-center">
            <h2 className="text-xl font-bold">FinEase</h2>
            <p className="text-xs text-gray-500">Personal Finance Manager</p>
          </div>

          <ul className="space-y-1">
            {/* Public Home */}
            <li>
              <Link to="/" className={`${navItem} ${inactiveNav}`}>
                🏠 Home
              </Link>
            </li>

            <div className="divider my-3"></div>

            {/* Dashboard Section */}
            <p className="text-xs uppercase text-gray-400 px-2 mb-2">
              Dashboard
            </p>

            <li>
              <NavLink
                to="/dashboard/DashboardOverView"
                end
                className={({ isActive }) =>
                  `${navItem} ${isActive ? activeNav : inactiveNav}`
                }
              >
                📊 Overview
              </NavLink>
            </li>

            <li className="collapse collapse-arrow bg-base-100 rounded-lg">
              <input type="checkbox" />

              {/* Parent */}
              <div className={`${navItem} ${inactiveNav} collapse-title`}>
                💰 Transactions
              </div>

              {/* Dropdown Items */}
              <div className="collapse-content pl-4 space-y-1">
                <NavLink
                  to="/dashboard/add-transaction"
                  className={({ isActive }) =>
                    `${navItem} ${isActive ? activeNav : inactiveNav}`
                  }
                >
                  ➕ Add Transaction
                </NavLink>

                <NavLink
                  to="/dashboard/my-transactions"
                  className={({ isActive }) =>
                    `${navItem} ${isActive ? activeNav : inactiveNav}`
                  }
                >
                  📄 My Transactions
                </NavLink>
              </div>
            </li>

            <li>
              <NavLink
                to="/dashboard/reports"
                className={({ isActive }) =>
                  `${navItem} ${isActive ? activeNav : inactiveNav}`
                }
              >
                📈 Reports
              </NavLink>
            </li>

            <li>
              <div>
                {/* Role Switch */}
                <select
                  value={role}
                  onChange={(e)=>{
                    handleRoleChange(e.target.value);

                  }}
                  className="select select-bordered select-sm"
                >
                  <option value="viewer">Viewer</option>
                  <option value="admin">Admin</option>
                </select>
              </div>

              <NavLink
                to="/dashboard/profile"
                className={({ isActive }) =>
                  `${navItem} ${isActive ? activeNav : inactiveNav}`
                }
              >
                👤 Profile
              </NavLink>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default DashboardLayouts;
