import React from 'react'
import AirBnbNav from './components/AirBnbNav'
import Hero from './components/Hero'
import Card from './components/Card'
import './airbnbStyle.css'

export default function AirBnb() {
    return (
        <div className='airBnb--container'>       
             <AirBnbNav />  
             <Hero />
             <Card/>   
        </div>

    )
}