import React from 'react'
import car3 from '../../assets/car1.jpg';

const ContactUs = () => {
    return (
        <div className='text-gray-900 bg-white mt-20 lg:w-[1140px] mx-auto rounded-lg py-10'
            style={{
                backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.90) 100%), 
                url(${car3})`, backgroundSize: 'cover', backgroundPosition: 'center'
            }}
        >
            <h3 className=" font-bold text-center mb-4 text-white">Contact Us</h3>
            <h2 className="text-3xl text-center mb-10 text-white">Contact With Us for Better Deal</h2>
            <form action="" className='flex flex-col px-6 lg:px-0 md:w-3/5 lg:w-2/5 mx-auto space-y-4'>
                <input type="email" name='email' placeholder="Email Address" className="input input-bordered w-full " />
                <input type="text" name='subject' placeholder="Subject" className="input input-bordered w-full " />
                <textarea className="textarea textarea-bordered" placeholder="Write Your Prefered Car details"></textarea>
                <input className=' btn btn-primary py-3 text-lg rounded-lg w-1/2 mx-auto cursor-pointer' type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default ContactUs