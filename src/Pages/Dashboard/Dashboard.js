import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthProvider';

const Dashboard = () => {

    const { user: loggedUser } = useContext(AuthContext);

    const { data: user = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`https://b612-used-products-resale-server-side-alamin-hosain.vercel.app/users?email=${loggedUser?.email}`);
            const data = await res.json();
            return data;
        }
    })

    const role = user[0]?.role;

    return (
        <div className='flex flex-col'>
            <h3 className="text-4xl bg-primary text-white w-full text-center py-3">Welcome to Your Dashboard</h3>
            {
                role === 'Seller' &&
                <div className='p-10 space-y-4'>
                    <h2 className='text-xl'>Hi {loggedUser?.displayName} ! How are you Today.</h2>
                    <h3 className='text-md'>This is your Dashboard !</h3>
                    <p>Here You can Sell all of your added Products and Also You can add a new product </p>
                    <p className='text-xl bg-secondary max-w-lg text-white py-4 px-1'>For Advertising a Product. Got to My Product and Click to Advertise</p>
                </div>
            }

            {
                role === 'Buyer' &&
                <div className='p-10 space-y-4'>
                    <h2 className='text-xl'>Hi {loggedUser?.displayName} ! How are you Today.</h2>
                    <h3 className='text-md'>This is your Dashboard !</h3>
                    <p>Here You can See all of your Orders </p>
                </div>
            }
            {
                role === 'Admin' &&
                <div className='p-10 space-y-4'>
                    <h2 className='text-xl'>Hi {loggedUser?.displayName} ! How are you Today.</h2>
                    <h3 className='text-md'>This is your Dashboard !</h3>
                    <p>Manage All the Buyers and Users from Side Menubar </p>
                </div>
            }
        </div>
    )
}

export default Dashboard