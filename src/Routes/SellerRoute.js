import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider'
import Spinner from '../utils/Spinner';

const SellerRoute = ({ children }) => {

    const { user, loading, setLoading } = useContext(AuthContext);
    const location = useLocation();

    const { data: sellerInDb = [], isLoading } = useQuery({
        queryKey: ['seller'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/alladmin?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })


    const admin = sellerInDb[0]?.role;

    if (loading || isLoading) {
        return <Spinner />
    }

    if (user && admin === 'Seller') {
        return children;

    }
    return <Navigate to='/login' state={{ from: location }} replace />
}


export default SellerRoute