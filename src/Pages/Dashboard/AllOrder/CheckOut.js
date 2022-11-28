import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useEffect, useState } from 'react'

const CheckOut = ({ data }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    const { resalePrice, email, buyerName, _id, selectedCarId, carName } = data;
    const [success, setSuccess] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const [processing, setProcessing] = useState(false);



    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ resalePrice }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [resalePrice]);



    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return;
        };

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        };

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error.message)
        } else {
            setCardError('')
        }

        setSuccess('')
        setProcessing(true)
        const { paymentIntent, error: cardConfirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: buyerName,
                        email: email,
                    },
                },
            },
        );

        if (cardConfirmError) {
            setCardError(cardConfirmError.message);
            return;
        }
        if (paymentIntent.status === 'succeeded') {
            // storing payment to the database
            const payment = {
                resalePrice,
                transactionId: paymentIntent.id,
                bookingId: _id,
                email,
                selectedCarId: selectedCarId,
                carName,

            }


            fetch('http://localhost:5000/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        setSuccess('Congrats on Your purchase ! Payment completed Successfully');
                        setTransactionId(paymentIntent.id);


                        // const itemSold = {
                        //     isSold: "Sold"
                        // }
                        // fetch(`http://localhost:5000/used-cars/${selectedCarId}`, {
                        //     method: 'PUT',
                        //     headers: {
                        //         'content-type': 'application/json'
                        //     },
                        //     body: JSON.stringify({ itemSold })
                        // })
                        //     .then(res => res.json())
                        //     .then(data => { })



                    }
                })
        }
        setProcessing(false)
    }



    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='mt-10 btn btn-ghost btn-sm bg-green-600 text-white hover:text-black' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            <p className="mt-6 text-red-600">{cardError}</p>
            {
                success && <div>
                    <p className="text-green-600">{success}</p>
                    <p>Your Transaction id: <span className='font-bold'>{transactionId}</span></p>
                </div>
            }
        </>
    )
}

export default CheckOut