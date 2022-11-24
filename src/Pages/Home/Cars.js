import React, { useEffect, useState } from 'react'
import SingleCar from './SingleCar';

const Cars = () => {
    const [cars, setCars] = useState([]);

    fetch('usedproducts.json')
        .then(res => res.json())
        .then(data => {

        })

    useEffect(() => {
        fetch('usedproducts.json')
            .then(res => res.json())
            .then(data => {
                setCars(data)
            })
    }, [])



    return (
        <div className='mt-20 lg:w-[1140px] mx-auto'>
            <div className="divider text-3xl font-bold text-center">LATEST USED VEHICLES</div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mt-20 mx-10 lg:mx-0 '>
                {
                    cars.map(car => <SingleCar key={car.id} car={car} />)
                }
            </div>
        </div>
    )
}

export default Cars