import React from 'react'
import verify from '../../assets/verification.png';
import { FaFlag } from "react-icons/fa";
import toast from 'react-hot-toast';

const SingleCar = ({ car, setSelectedCar }) => {
    const { name, YearsOfUse, img, location, originalPrice, resalePrice, postedTime, sellersName, status } = car;



    const handleReport = car => {
        fetch(`https://b612-used-products-resale-server-side-alamin-hosain.vercel.app/report/${car?._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(car)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Reported to Admin Success, Admin will review and take action')
                } else {
                    toast.error(data.message)
                }
            })
    }


    return (
        <div className="card  bg-base-100 shadow-sm">
            <div className=' flex justify-center items-center'>
                <img className='' src={img} alt="Shoes" />
            </div>
            <div className="card-body">
                <h2 className="card-title text-2xl">
                    {name}
                </h2>
                <p className='text-primary text-md font-bold uppercase'>Location: {location}</p>
                <p className=''><span className='text-md font-semibold'>Used</span>: {YearsOfUse} Years</p>

                <p className='flex flex-wrap text-md font-semibold items-center'>
                    <span>Seller:  {sellersName}</span>
                    <span className='ml-2'>{status === 'Verified' ? <span><img className='w-6' src={verify} alt="" /></span> : <span className='bg-red-600 text-white px-3 py-1'>Not Verified</span>}</span>
                </p>


                <p><span className='text-md font-semibold'>Posted:</span> On {postedTime}</p>
                <div className="card-actions flex flex-row">
                    <div className=""><span className='text-lg font-semibold'>Original Price:</span> ${originalPrice}</div>
                    <div className=""><span className='text-lg font-semibold'>Resale Price:</span> ${resalePrice}</div>
                </div>
                <div onClick={() => handleReport(car)} className='absolute top-5 left-5 bg-red-600 text-white rounded-full px-4 py-1 flex  items-center cursor-pointer hover:bg-black'>
                    <span className='mr-3'><FaFlag /></span>
                    <p>Report</p>
                </div>

                <label onClick={() => setSelectedCar(car)} htmlFor="carBookModal" className="btn btn-primary mt-4 text-white tracking-wider" >Book Now</label>
            </div>
        </div>
    )
}

export default SingleCar