import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider'
import Spinner from '../utils/Spinner';

const BuyerRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    const { data: buyerInDb = [], isLoading } = useQuery({
        queryKey: ['buyer'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/alladmin?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })


    const admin = buyerInDb[0]?.role;

    if (loading || isLoading) {
        return <Spinner />
    }

    if (user && admin === 'Buyer') {
        return children;

    }
    return <Navigate to='/login' state={{ from: location }} replace />
}


export default BuyerRoute