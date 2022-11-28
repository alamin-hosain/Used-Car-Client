import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider'
import Spinner from '../utils/Spinner';

const AdminRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    const { data: adminInDb = [], isLoading } = useQuery({
        queryKey: ['admin'],
        queryFn: async () => {
            const res = await fetch(`https://b612-used-products-resale-server-side-alamin-hosain.vercel.app/alladmin?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })


    const admin = adminInDb[0]?.role;

    if (loading || isLoading) {
        return <Spinner />
    }

    if (user && admin === 'Admin') {
        return children;

    }
    return <Navigate to='/login' state={{ from: location }} replace />
}


export default AdminRoute