import verify from '../../assets/verification.png';


const SingleUsedCar = ({ car, setSelectedCar }) => {

    const { name, YearsOfUse, category, id, img, location, originalPrice, resalePrice, postedTime, sellersName, status } = car;

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
                <p className='flex text-md font-semibold items-center'>
                    <span>Seller:  {sellersName}</span>
                    <span className='ml-3'>{status === 'Verified' ? <span><img className='w-6' src={verify} alt="" /></span> : <span className='bg-red-600 text-white px-3 py-1'>Not Verified</span>}</span>
                </p>

                <p><span className='text-md font-semibold'>Posted:</span> On {postedTime}</p>
                <div className="card-actions flex flex-row">
                    <div className=""><span className='text-lg font-semibold'>Original Price:</span> ${originalPrice}</div>
                    <div className=""><span className='text-lg font-semibold'>Resale Price:</span> ${resalePrice}</div>
                </div>
                <label onClick={() => setSelectedCar(car)} htmlFor="carBookModal" className="btn btn-primary mt-4 text-white tracking-wider" >Book Now</label>
            </div>

        </div>
    )
}

export default SingleUsedCar