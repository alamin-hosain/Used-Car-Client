import React, { useEffect, useState } from 'react'
import ProductBookModal from '../UsedProducts/ProductBookModal';
import SingleCar from './SingleCar';

const Cars = () => {
    const [selectedCar, setSelectedCar] = useState()
    const [cars, setCars] = useState([]);


    useEffect(() => {
        fetch('https://b612-used-products-resale-server-side-alamin-hosain.vercel.app/used-cars')
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
                    cars?.map((car, idx) => <SingleCar key={idx} car={car} setSelectedCar={setSelectedCar} />)
                }
            </div>
            {
                selectedCar && <ProductBookModal selectedCar={selectedCar} setSelectedCar={setSelectedCar} />
            }
        </div>
    )
}

export default Cars