import React, { useContext } from 'react'
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const ProductBookModal = ({ selectedCar, setSelectedCar }) => {
    const { user } = useContext(AuthContext)
    const { name, YearsOfUse, category, _id, img, location, originalPrice, resalePrice, postedTime, sellersName } = selectedCar;

    const handleSubmit = (event) => {
        event.preventDefault();
        const phone = event.target.phone.value;
        const location = event.target.location.value;

        const booking = {
            buyerName: user.displayName,
            email: user.email,
            selectedCarId: _id,
            carName: name,
            resalePrice,
            originalPrice,
            phone,
            location
        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Item Booking Confirmed');
                    setSelectedCar('')
                }
            })

    }


    return (
        <div>
            <input type="checkbox" id="carBookModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-2xl">{name}</h3>
                    <div className='flex justify-between'>
                        <p className="text-lg my-4 font-semibold text-primary">Resale Price: ${resalePrice}</p>
                        <p className="text-lg my-4 font-semibold">Original Price: ${originalPrice}</p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <input type="text" defaultValue={user.displayName} placeholder="Type here" className="input input-bordered w-full" disabled />
                        <input type="text" defaultValue={user.email} placeholder="Type here" className="input input-bordered w-full mt-4" disabled />
                        <input type="text" name='phone' placeholder="You Phone Number" className="input input-bordered w-full mt-4" />
                        <input type="text" name='location' placeholder="Meeting Location" className="input input-bordered w-full mt-4" />
                        <input type="submit" value="Submit" className='w-full btn mt-6' />
                    </form>

                </div>
            </div>
        </div>
    )
}

export default ProductBookModal