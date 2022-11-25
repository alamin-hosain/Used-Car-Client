import React from 'react'
import nissan from '../../assets/carlogo/nissan.ico';
import honda from '../../assets/carlogo/honda.ico';
import toyota from '../../assets/carlogo/toyota.ico';
import { Link } from 'react-router-dom';

const Category = () => {
    const categories = [

        {
            id: 1,
            name: 'Honda Grace',
            img: honda,
        },
        {
            id: 2,
            name: 'Nissan',
            img: nissan,
        },
        {
            id: 3,
            name: 'Toyota Vehicles',
            img: toyota,
        },

    ]
    return (
        <div className='lg:w-[1140px] mx-auto mt-20'>
            <div className='grid  grid-cols-1 lg:grid-cols-3 md:grid-cols-2  justify-center items-center gap-5 mx-10 lg:mx-0'>
                {
                    categories.map((category, idx) =>

                        <Link to={`/category/${idx + 1}`} className='flex flex-col items-center justify-center bg-white shadow-sm p-12 hover:bg-primary cursor-pointer hover:text-white rounded-lg' key={idx}>
                            <div className=''>
                                <img className='w-20' src={category.img} alt="" />
                            </div>
                            <h3 className='text-xl font-semibold  mt-4 uppercase'>{category.name}</h3>
                        </Link>)
                }
            </div>
        </div>
    )
}

export default Category