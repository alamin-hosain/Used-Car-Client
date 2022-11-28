import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../contexts/AuthProvider';
import Spinner from '../../utils/Spinner';
import SingleAdvertiseProduct from './SingleAdvertiseProduct';

const Advertise = () => {
    const { user } = useContext(AuthContext);

    const { data: advertiseProducts = [], isLoading } = useQuery({
        queryKey: ['advertisement'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/advertise');
            const data = await res.json();
            return data;
        }
    });


    if (isLoading) {
        return <Spinner />
    }

    return (


        <div className='lg:w-[1140px] mx-auto mt-20 bg-white p-6 rounded-xl'>
            <h3 className="text-1xl text-center mb-6" >Advertisement</h3 >
            {advertiseProducts.length !== '' &&
                advertiseProducts?.map(adversiteProduct => <SingleAdvertiseProduct key={adversiteProduct?._id} adversiteProduct={adversiteProduct} />)
            }
        </div >

    )
}

export default Advertise