import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const AllBuyers = () => {
    const { user } = useContext(AuthContext);

    const { data: buyersInDb = [], refetch } = useQuery({
        queryKey: ['buyer'],
        queryFn: async () => {
            const res = await fetch(`https://b612-used-products-resale-server-side-alamin-hosain.vercel.app/allbuyers?email=${user?.email}`, {
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('carToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })


    const handleDelete = buyer => {
        fetch(`https://b612-used-products-resale-server-side-alamin-hosain.vercel.app/allbuyers/${buyer?.email}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('carToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Deleted Successfully');
                    refetch();
                }
            })
    }



    return (
        <div className='mx-10'>
            <h3 className="text-3xl mb-6 mt-4">All Buyers</h3>


            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        buyersInDb?.map((buyer, i) =>
                            <tr key={i}>
                                <th>{i + 1}</th>
                                <td>{buyer.displayName}</td>
                                <td>{buyer.email}</td>
                                <td><button onClick={() => handleDelete(buyer)} className='btn bg-red-600 text-white border-none btn-xs'>Delete</button></td>

                            </tr>
                        )
                    }
                </tbody>

            </table>
        </div>
    )
}

export default AllBuyers