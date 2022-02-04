import React from 'react'

export default function Hero() {
    return(
        <section className='hero--container'>
            <img
                className='hero--image' 
                src='images/unsorted/photo-grid.png' 
                alt='airBnb_colage_img'
            />
            <h2>Online experience</h2>
            <p>
                Join unique interactive activities led by one-of-a-kind hosts
                all without leaving home.
            </p>
        </section>
    )
}