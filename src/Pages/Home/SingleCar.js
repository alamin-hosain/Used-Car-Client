import React from 'react'

const SingleCar = ({ car }) => {
    const { name, YearsOfUse, category, id, img, location, originalPrice, resalePrice, postedTime, sellersName } = car;
    console.log(car)

    return (
        <div className="card  bg-base-100 shadow-sm">
            <div className=' flex justify-center items-center'>
                <img className='' src={img} alt="Shoes" />
            </div>
            <div className="card-body">
                <h2 className="card-title text-2xl">
                    {name}
                </h2>
                <p className='text-primary text-lg font-bold uppercase'>{location}</p>
                <p className=''><span className='text-md font-semibold'>Used</span>: {YearsOfUse} Years</p>
                <p><span className='text-md font-semibold'>Seller:</span> {sellersName} <span>Verified/Not Verified</span></p>
                <p><span className='text-md font-semibold'>Posted:</span> On {postedTime}</p>
                <div className="card-actions flex flex-row">
                    <div className=""><span className='text-lg font-semibold'>Original Price:</span> ${originalPrice}</div>
                    <div className=""><span className='text-lg font-semibold'>Resale Price:</span> ${resalePrice}</div>
                </div>
                <button className='btn btn-primary mt-4'>Book Now</button>
            </div>
        </div>
    )
}

export default SingleCar