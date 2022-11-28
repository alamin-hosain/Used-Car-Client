import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react'
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';
import Spinner from '../../utils/Spinner';

const Advertisement = () => {
    const { user } = useContext(AuthContext);

    const { data: advertiseProducts = [], refetch, isLoading } = useQuery({
        queryKey: ['advertisement'],
        queryFn: async () => {
            const res = await fetch(`https://b612-used-products-resale-server-side-alamin-hosain.vercel.app/advertisement?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('carToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })


    const handleDelete = (product) => {
        fetch(`https://b612-used-products-resale-server-side-alamin-hosain.vercel.app/advertisement/${product?._id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Advertised Item deleted Successfully');
                    refetch()
                }
            })
    }

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div>
            <div>
                <h3 className="text-3xl mb-6 mt-4 ml-10">My Advertised Products</h3>
                <div className="overflow-x-auto mx-10">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                advertiseProducts.length !== '' &&
                                advertiseProducts?.map((product, i) =>
                                    <tr key={i}>
                                        <th>{i + 1}</th>
                                        <td>{product.name}</td>
                                        <td>${product.resalePrice}</td>
                                        <td>
                                            <button onClick={() => handleDelete(product)} className='btn btn-xs bg-red-600 border-0 text-white'>Product Sold? Delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    )
}

export default Advertisement