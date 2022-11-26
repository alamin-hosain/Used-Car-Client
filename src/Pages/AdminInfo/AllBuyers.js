import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/AuthProvider';

const AllBuyers = () => {
    const { user } = useContext(AuthContext);
    const [buyersInDb, setBuyersInDb] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/allbuyers')
            .then((res) => setBuyersInDb(res.data))
            .catch(e => console.error(e))
    }, [])


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
                                <td><button className='btn bg-red-600 text-white border-none btn-xs'>Delete</button></td>

                            </tr>
                        )
                    }
                </tbody>

            </table>
        </div>
    )
}

export default AllBuyers