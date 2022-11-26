import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import { async } from '@firebase/util';

const AllSellers = () => {
    const { user, loading, setLoading } = useContext(AuthContext);
    const [refresh, setRefresh] = useState(false);

    const { data: sellersInDb = [], refetch } = useQuery({
        queryKey: ['seller'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allsellers');
            const data = await res.json();
            return data;
        }
    })


    const handleDelete = seller => {

        fetch(`http://localhost:5000/allsellers/${seller?.email}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
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


    const handleVerify = seller => {
        console.log(seller)
        const userStatus = {
            status: 'Verified'
        };
        fetch(`http://localhost:5000/allsellers?email=${seller?.email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userStatus),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.acknowledged) {
                    toast.success('Verified Successfully');
                    refetch();
                }
            })
    }

    console.log(sellersInDb);

    return (
        <div className='mx-10'>
            <h3 className="text-3xl mb-6 mt-4">All Sellers</h3>

            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                        <th>Verify</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sellersInDb?.map((seller, i) =>
                            <tr key={i}>
                                <th>{i + 1}</th>
                                <td>{seller.displayName}</td>
                                <td>{seller.email}</td>
                                <td><button onClick={() => handleDelete(seller)} className='btn bg-red-600 text-white border-none btn-xs'>Delete</button></td>
                                <td>
                                    {
                                        seller?.status === 'Verified' ? <label className='btn bg-green-600 text-white border-none btn-xs'>Verified</label> :
                                            <button onClick={() => handleVerify(seller)} className='btn bg-red-600 text-white border-none btn-xs'>Click To Verify</button>
                                    }
                                </td>
                            </tr>
                        )
                    }
                </tbody>

            </table>
        </div>
    )
}

export default AllSellers