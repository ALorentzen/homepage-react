import React from 'react'

export default function Contact(props) {

    return(
        <div 
            className="contact--card"
            key={props.id}
        >
            <div className='contact--img--div'>
                <img 
                    className='dog--img'
                    src={props.img} 
                    alt={props.name}
               />
            </div>

            <h3>{props.name}</h3>
            <div className="info-group">
                <img src={require('../images/phone-icon.png').default} alt='phone-icon' />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src={require("../images/mail-icon.png").default} alt='mail-icon' />
                <p>{props.email}</p>
            </div>
    </div>
    
    )
}