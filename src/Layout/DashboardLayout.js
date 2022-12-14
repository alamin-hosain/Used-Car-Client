import { useQuery } from '@tanstack/react-query'
import React, { useContext, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthProvider'
import Navbar from '../Pages/Shared/Navbar'

const DashboardLayout = () => {
    const { user: loggedUser } = useContext(AuthContext);

    const { data: user = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`https://b612-used-products-resale-server-side-alamin-hosain.vercel.app/users?email=${loggedUser?.email}`);
            const data = await res.json();
            return data;
        }
    })

    const role = user[0]?.role;

    console.log(loggedUser.photoURL);
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
                        <div className='flex flex-col justify-center items-center border-b-2 p-4 mt-10'>
                            <div className="avatar">
                                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={loggedUser?.photoURL} alt='' />
                                </div>
                            </div>
                            <h3 className="text-xl mt-4 mb-2">{loggedUser?.displayName}</h3>
                            <h3 className='bg-primary text-white px-10 rounded-md'>{user[0]?.role}</h3>
                        </div>

                        {
                            role === 'Buyer' && <li><Link to='/dashboard/allorders' className='mt-4 mb-2'> My Orders</Link></li>
                        }


                        {
                            role === 'Seller' && <>
                                <li><Link to='/dashboard/myproduct' className='mb-2 mt-2'>My Product</Link></li>
                                <li><Link to='/dashboard/addaproduct' className='mb-2 '>Add a Product</Link></li>
                                <li><Link to='/dashboard/advertisement' className='mb-2 '>My Advertised Product</Link></li>

                            </>
                        }

                        {
                            role === 'Admin' && <>
                                <li><Link to='/dashboard/allsellers' className='mb-2 mt-2'>All Sellers</Link></li>
                                <li><Link to='/dashboard/allbuyers' className='mb-2'>All Buyers</Link></li>
                                <li><Link to='/dashboard/reporteditems'>Reported Items
                                </Link></li>
                            </>
                        }


                    </ul>



                </div>
            </div>
        </div>
    )
}

export default DashboardLayout