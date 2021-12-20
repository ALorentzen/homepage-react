import React from 'react'
import './cardComponent.css'

export default function ImageCard(props) {

        return (
            <>   
                    <div className='img--card--container' >
                        <a className='card--a' href={props.src}>
                            <div className='img--content--container'>
                                <img className='card--img' src={props.src} alt={props.title}/> 
                                <h2 className='card--title'>{props.title}</h2>  
                            </div>
                        </a>
                    </div>
            </>
        )
    
}
