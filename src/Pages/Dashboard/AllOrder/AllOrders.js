import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react'
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider'
import SingleOrder from './SingleOrder';

const AllOrders = () => {
    const { user } = useContext(AuthContext);

    const { data: booking = [], refetch } = useQuery({
        queryKey: ['booking'],
        queryFn: async () => {
            const res = await fetch(`https://b612-used-products-resale-server-side-alamin-hosain.vercel.app/booking?email=${user?.email}`, {
                headers: {
                    'Content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('carToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    const handleDelete = book => {
        fetch(`https://b612-used-products-resale-server-side-alamin-hosain.vercel.app/booking/${book?._id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    refetch();
                    toast.success('Deleted Successfully')
                }

            })
    }


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
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            booking?.map((book, i) => <SingleOrder key={book._id} book={book} idx={i} handleDelete={handleDelete} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllOrders