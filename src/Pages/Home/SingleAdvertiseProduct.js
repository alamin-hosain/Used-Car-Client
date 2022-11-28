import React from 'react'

const SingleAdvertiseProduct = ({ adversiteProduct }) => {
    const { name, description, postedTime, resalePrice, phone, originalPrice, location } = adversiteProduct;
    return (
        <div className='flex items-center flex-col lg:flex-row '>
            <div className='w-full lg:w-1/3'>
                <img className='w-full' src="https://vroom.com.bd/wp-content/uploads/2022/10/image173937_b-798x466-1.jpg" alt="" />
            </div>

            <div className='space-y-4 ml-20 mb-8 lg:mb-0 w-full'>
                <h3 className="text-3xl mt-6 lg:mt-0">{name}</h3>
                <p className='w-4/5'>{description}</p>
                <ul className='flex flex-wrap lg:flex-nowrap space-y-2 lg:space-y-0 items-center w-4/5 lg:w-full'>
                    <li className='text-lg bg-secondary px-4 text-white rounded-lg mr-2'>Posted: {postedTime}</li>
                    <li className='text-lg bg-secondary px-4 text-white rounded-lg mr-2'>{location}</li>
                    <li className='text-lg bg-secondary px-4 text-white rounded-lg mr-2'>{phone}</li>
                </ul>

            </div>
            <div className='flex justify-between items-center lg:flex-col lg:w-1/3 space-y-4 w-full px-10 lg:px-0'>
                <div>
                    <p className='text-md'>Original Price: ${originalPrice}</p>
                    <p className='text-2xl font-bold'>New Price: ${resalePrice}</p>
                </div>
                <button className='btn btn-primary text-white lg:w-full'>Book Now</button>
            </div>
        </div>
    )
}

export default SingleAdvertiseProduct