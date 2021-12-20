import React from 'react'

export default function Hero() {
    const date = new Date()
    return ( 
        <section className='airBnb--hero--container'>
            <img className='airBnb--hero-img' src='./images/main_image-min.jpg' alt='imgy'/>
            <h1 className='airBnb--hero--text'>Online experiences</h1>
            <p className='airBnb--hero--para'>Join unique interactive activities led by one-of-a-kind hosts—all 
                without leaving home.
            </p>
            <h2>It's currently about {new Date().getHours() } o'clock</h2>
            <h2>is this the date? {date}</h2>
        </section>
    )
}