import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content ">
                    {/* <!-- Page content here --> */}
                    <h2 className="text-2xl text-green-500 font-bold ">Welcome to Your Dashboard</h2>
                    <Outlet></Outlet>
                   

                </div>
                <div class="drawer-side">
                    <label for="dashboard-sidebar" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to="/dashboard">My Order</Link></li>
                        <li><NavLink to="/dashboard/review">Review </NavLink></li>
                        <li><NavLink to="/dashboard/profile">My Profile</NavLink></li>
                        
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashBoard;