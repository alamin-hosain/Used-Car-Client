import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import car2 from '../../assets/car2.jpg';

const ErrorPage = () => {
    const errors = useRouteError();

    return (
        <>

            <main className=" relative min-h-screen py-52 flex flex-col justify-center items-center bg-[#1A2238] z-50">

                <h1 className="text-9xl font-extrabold text-white tracking-widest">{errors.status}</h1>
                <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
                    {errors.statusText}
                </div>
                <button className="mt-5">
                    <Link to='/'
                        className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring"
                    >
                        <span
                            className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"
                        ></span>

                        <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
                            Go Home
                        </span>
                    </Link>
                </button>

                <div className='absolute flex justify-center -z-10 0 '>
                    <img className='w-1/2 opacity-20 border border-white shadow-lg' src={car2
                    } alt="" />
                </div>
            </main>

        </>
    )
}

export default ErrorPage