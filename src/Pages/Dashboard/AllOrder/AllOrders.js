import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../../contexts/AuthProvider'

const AllOrders = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className='mx-4'>
            <h3 className="text-3xl ml-4 mb-6">Your All Orders</h3>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Car Image</th>
                            <th>Car Name</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <th>1</th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                            </td>
                            <td>Purple</td>
                            <th>
                                <button className="btn text-white btn-xs">Pay</button>
                            </th>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllOrders