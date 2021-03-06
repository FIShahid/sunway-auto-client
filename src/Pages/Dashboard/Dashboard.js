import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const DashBoard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
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
                    <label for="dashboard-sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        { <li><Link to="/dashboard">Welcome</Link></li>}
                        { !admin && <li><Link to="/dashboard/myorder">My Order</Link></li>}
                        { !admin && <li><NavLink to="/dashboard/review">Review </NavLink></li>}
                        { <li><NavLink to="/dashboard/profile">My Profile</NavLink></li>}
                        { <li><NavLink to="/dashboard/seeProfile">See Profile</NavLink></li>}
                        { <li><NavLink to="/dashboard/updateProfile">Update Profile</NavLink></li>}
                        { admin && <li><NavLink to="/dashboard/allOrders">Manage All Orders</NavLink></li>}
                        { admin && <li><NavLink to="/dashboard/allUsers">Make Admin</NavLink></li>}
                        { admin && <li><NavLink to="/dashboard/addProduct">Add a Product</NavLink></li>}
                        { admin && <li><NavLink to="/dashboard/manageProduct">Manage Product</NavLink></li>}
                        
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashBoard;