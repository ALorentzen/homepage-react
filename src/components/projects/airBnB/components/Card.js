import React from 'react'

const starImg = require("../images/star.png").default
const testLogo = require("../images/PIG_Nicolas Cage_01_courtesyNEON.jpg").default

export default function Card(props){
    
    
    
    return(
        <div className='card--container'>
            <img 
                className='cage--img' 
                src={testLogo} 
                alt='test'    
            />
        
            <div className='card--stats'>
                <img 
                    className='star--logo' 
                    src={starImg} 
                    alt='star.png'
                />
                <span>5.0</span>
                <span className='grey'>(6) • </span>
                <span className='grey'>USA</span>
            </div>
            <p><span>How I act</span></p>
            <p><span className='bold'>price: $11.55</span></p>

        </div>
    )
}