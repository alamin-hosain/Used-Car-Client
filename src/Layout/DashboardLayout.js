import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthProvider'
import Navbar from '../Pages/Shared/Navbar'

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);

    console.log(user)


    return (
        <div className='lg:w-[1140px] mx-auto'>
            <Navbar />
            <div className="drawer drawer-mobile mt-10">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet />
                </div>
                <div className="drawer-side border shadow-sm">


                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <div className='flex flex-col justify-center items-center space-y-6 border-b-2 p-4 mt-10'>
                            <div className="avatar">
                                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </div>
                            <h3 className="text-xl">{user.displayName}</h3>
                            <h3>Admin</h3>
                        </div>

                        <li><Link to='/'> My Orders</Link></li>

                        <li><Link to='/'>Add a Product</Link></li>
                        <li><Link to='/'>My Product</Link></li>
                        <li><Link to='/'>My Buyers</Link></li>

                        <li><Link to='/'>All Sellers</Link></li>
                        <li><Link to='/'>All Buyers</Link></li>


                    </ul>



                </div>
            </div>
        </div>
    )
}

export default DashboardLayout