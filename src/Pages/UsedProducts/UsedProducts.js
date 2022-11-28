import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import car from '../../assets/car2.jpg';
import Cars from '../Home/Cars';
import ProductBookModal from './ProductBookModal';
import SingleUsedCar from './SingleUsedCar';
import './useproducts.css';

const UsedProducts = ({ singleCategoryProducts }) => {
    const [usedCars, setUsedCars] = useState([]);
    const [selectedCar, setSelectedCar] = useState()
    useEffect(() => {
        fetch('https://b612-used-products-resale-server-side-alamin-hosain.vercel.app/used-cars')
            .then(res => res.json())
            .then(data => {
                setUsedCars(data)
            })
    }, [])



    const categories = usedCars.map(car => car.category);
    const uniqueCategories = categories.filter((category, index) => categories.indexOf(category) === index)

    return (
        <>
            <div className='bg-[#f4f5f7] pb-20'>
                <div className='flex lg:w-[1140px] mx-auto'>
                    <div className='w-1/4 flex justify-center items-center bg-primary text-white'>
                        <ul className=' space-y-3'>
                            <h3 className='text-xl font-bold mb-3'>Choose Category</h3>
                            {
                                uniqueCategories?.map((category, idx) =>
                                    <div key={idx}>
                                        <NavLink to={`/category/${idx + 1}`} className='text-lg font-medium '>{category} </NavLink>
                                    </div>
                                )
                            }
                        </ul>
                    </div>
                    <div className='w-3/4'>
                        <img src={car} alt="" />
                    </div>
                </div>

                {
                    singleCategoryProducts ?
                        <div className='bg-[#f4f5f7]'>
                            <div className=' lg:w-[1140px] mx-auto'>
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mt-20 mx-10 lg:mx-0 '>
                                    {
                                        singleCategoryProducts?.map((singleCar, idx) => <SingleUsedCar key={idx} car={singleCar} setSelectedCar={setSelectedCar} />)
                                    }
                                </div>
                            </div>

                        </div>

                        :
                        <div>
                            <Cars />
                        </div>


                }
                {
                    selectedCar && <ProductBookModal selectedCar={selectedCar} setSelectedCar={setSelectedCar} />
                }



            </div>
        </>
    )
}

export default UsedProducts