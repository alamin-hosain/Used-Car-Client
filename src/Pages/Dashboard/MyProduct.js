import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthProvider'

const MyProduct = () => {
    const { user } = useContext(AuthContext);

    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })



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
                            <th>Price</th>
                            <th>Advertise</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, i) =>
                                <tr key={i}>
                                    <th>{i + 1}</th>
                                    <td>{product.name}</td>
                                    <td>Unsold</td>
                                    <td>${product.resalePrice}</td>
                                    <td>
                                        <button className='btn btn-xs'>Click To Advertise</button>
                                    </td>
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