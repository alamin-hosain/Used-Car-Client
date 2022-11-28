import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider'

const MyProduct = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const { data: products = [], refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`https://b612-used-products-resale-server-side-alamin-hosain.vercel.app/products?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

    console.log(products)

    const handleAdvertise = product => {
        fetch('https://b612-used-products-resale-server-side-alamin-hosain.vercel.app/advertisement', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Advertisement Successfull');
                    refetch()
                    navigate('/dashboard/advertisement')
                }
            })
    }


    const handleDelete = (product) => {
        fetch(`https://b612-used-products-resale-server-side-alamin-hosain.vercel.app/products/${product?._id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success(`Car ${product.name} deleted Successfully`);
                    refetch()
                }
            })
    }


    return (
        <div>
            <h3 className="text-3xl mb-6 mt-4 ml-10">My Products</h3>
            <div className="overflow-x-auto mx-10">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Sales Status</th>
                            <th>Action</th>
                            <th>Advertise</th>

                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map((product, i) =>
                                <tr key={i}>
                                    <th>{i + 1}</th>
                                    <td>{product.name}</td>
                                    <td>Unsold</td>
                                    <td>
                                        <button onClick={() => handleDelete(product)} className='btn btn-xs bg-red-600 border-0 text-white 	'>Delete</button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleAdvertise(product)} className='btn btn-xs 	'>Click To Advertise</button>
                                    </td>

                                    <td>${product.resalePrice}</td>
                                </tr>
                            )
                        }
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default MyProduct