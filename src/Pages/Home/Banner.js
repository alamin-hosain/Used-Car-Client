import React from 'react';
import car1 from '../../assets/car1.jpg';
import car2 from '../../assets/car2.jpg';
import car3 from '../../assets/car3.jpg';

const Banner = () => {
    return (
        <div style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.40)),
        url(${car3})`, backgroundSize: 'cover', backgroundPosition: 'center'
        }} className='py-40 text-white px-10 md:px-0'>
            <div className="hero">
                <div className="hero-content text-center">
                    <div className="max-w-full">
                        <h1 className="text-5xl font-bold">FIND THE RIGHT CAR FOR YOU.</h1>
                        <p className="py-6 tracking-wider text-lg max-w-4xl">

                            We have more than a thousands of used cars for you to choose.</p>
                        <button className="btn btn-primary text-xl tracking-wider font-normal text-white">See All Cars</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner