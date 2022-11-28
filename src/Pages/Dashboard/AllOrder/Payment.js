
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useLoaderData } from 'react-router-dom'
import CheckOut from './CheckOut';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {

    const data = useLoaderData();
    const { carName, resalePrice, phone, location, img } = data;

    return (
        <div>
            <h3 className="text-3xl text-center bg-primary text-white py-4">Payment for {carName}</h3>
            <div className='ml-10 mt-10'>
                <h4 className="text-2xl font-bold mb-2">Payment Details</h4>
                <p>Complete Your Order of <span className='font-bold'>${resalePrice}</span> by providing your payment details</p>
                <div className='w-96 my-10'>
                    <Elements stripe={stripePromise}>
                        <CheckOut data={data} />
                    </Elements>
                </div>
            </div>
        </div>
    )
}

export default Payment