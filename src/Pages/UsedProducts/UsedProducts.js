import React from 'react'
import { Link } from 'react-router-dom';
import car from '../../assets/car2.jpg';
import Cars from '../Home/Cars';

const UsedProducts = () => {
    return (
        <>
            <div>
                <div className='flex lg:w-[1140px] mx-auto'>
                    <div className='w-1/4 flex justify-center items-center bg-[#f4f5f7]'>
                        <ul className=' space-y-3'>
                            <h3 className='text-xl font-bold text-primary mb-3'>Choose Category</h3>
                            <Link className='text-lg font-medium'>Hi how are you </Link>
                            <li>Hi how are you </li>
                            <li>Hi how are you </li>
                            <li>Hi how are you </li>
                            <li>Hi how are you </li>
                            <li>Hi how are you </li>
                            <li>Hi how are you </li>
                            <li>Hi how are you </li>
                        </ul>
                    </div>
                    <div className='w-3/4'>
                        <img src={car} alt="" />
                    </div>
                </div>

                <div className='bg-[#f4f5f7]'>
                    <Cars />
                </div>
            </div>
        </>
    )
}

export default UsedProducts