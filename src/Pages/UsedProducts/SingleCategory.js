import React from 'react'
import { useLoaderData } from 'react-router-dom'
import UsedProducts from './UsedProducts';


const SingleCategory = () => {
    const singleCategoryProducts = useLoaderData();

    return (
        <div>
            <UsedProducts singleCategoryProducts={singleCategoryProducts} />
        </div>
    )
}

export default SingleCategory