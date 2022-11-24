import React from 'react'
import Advertise from './Advertise'
import Banner from './Banner'
import Cars from './Cars'
import Category from './Category'
import ContactUs from './ContactUs'

const Home = () => {
    return (
        <div>
            < Banner />
            <Category />
            <Cars />
            <Advertise />
            <ContactUs />
        </div >

    )
}

export default Home