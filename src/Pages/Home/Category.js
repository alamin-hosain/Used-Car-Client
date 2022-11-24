import React from 'react'
import nissan from '../../assets/carlogo/nissan.ico';
import honda from '../../assets/carlogo/honda.ico';
import toyota from '../../assets/carlogo/toyota.ico';

const Category = () => {
    const categories = [
        {
            id: 1,
            name: 'Toyota Vehicles',
            img: toyota,
        },
        {
            id: 2,
            name: 'Honda Grace',
            img: honda,
        },
        {
            id: 3,
            name: 'Nissan',
            img: nissan,
        },

    ]
    return (
        <div className='lg:w-[1140px] mx-auto mt-20'>
            <div className='grid  grid-cols-1 lg:grid-cols-3 md:grid-cols-2  justify-center items-center gap-5 mx-10 lg:mx-0'>
                {
                    categories.map((category, idx) =>

                        <div className='flex flex-col items-center justify-center bg-white shadow-sm p-12 hover:bg-primary cursor-pointer hover:text-white' key={idx}>
                            <div className=''>
                                <img className='w-20' src={category.img} alt="" />
                            </div>
                            <h3 className='text-xl font-semibold  mt-4 uppercase'>{category.name}</h3>
                        </div>)
                }
            </div>
        </div>
    )
}

export default Category