import React from 'react'
import AirbnbNav from './AirbnbNav'
import Hero from './Hero'
import './airBnbStyle.css'

export default function AirBnb() {
    return(
        <div className='airBnb--container'>
            <AirbnbNav />
            <Hero />
        </div>
    )
}