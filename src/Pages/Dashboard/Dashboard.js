import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    {/* <!-- Page content here --> */}
                    <h2 className="text-2xl text-green-500 font-bold ">Welcome to Your Dashboard</h2>
                    <Outlet></Outlet>
                   

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to="/dashboard">My Order</Link></li>
                        <li><NavLink to="/dashboard/review">Review </NavLink></li>
                        <li><NavLink to="/dashboard/profile">My Profile</NavLink></li>
                        <li><NavLink to="/dashboard/allOrders">Manage All Orders</NavLink></li>
                        <li><NavLink to="/dashboard/allUsers">ALL Users</NavLink></li>
                        
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashBoard;