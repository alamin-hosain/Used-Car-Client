import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react'
import { AuthContext } from '../../../contexts/AuthProvider'
import SingleOrder from './SingleOrder';

const AllOrders = () => {
    const { user } = useContext(AuthContext);

    const { data: booking = [], } = useQuery({
        queryKey: ['booking'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/booking?email=${user?.email}`, {
                headers: {
                    'Content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('carToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    console.log(booking)


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
                        {
                            booking?.map((book, i) => <SingleOrder key={book._id} book={book} idx={i} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllOrders