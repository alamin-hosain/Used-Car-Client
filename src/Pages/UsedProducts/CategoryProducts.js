import React from 'react'
import { Link } from 'react-router-dom'
import car from '../../assets/car2.jpg';

const CategoryProducts = ({ uniqueCategories }) => {
    return (
        <div className='flex lg:w-[1140px] mx-auto'>
            <div className='w-1/4 flex justify-center items-center bg-[#f4f5f7]'>
                <ul className=' space-y-3'>
                    <h3 className='text-xl font-bold text-primary mb-3'>Choose Category</h3>
                    {
                        uniqueCategories.map((category, idx) =>
                            <div key={idx}>
                                <Link to={`/category/${idx + 1}`} className='text-lg font-medium'>{category} </Link>
                            </div>
                        )
                    }
                </ul>
            </div>
            <div className='w-3/4'>
                <img src={car} alt="" />
            </div>
        </div>
    )
}

export default CategoryProducts