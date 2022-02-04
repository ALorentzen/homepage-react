import React from 'react'
import contactData from '../contactData'
export default function Contact() {



    return(
        <div 
            className="contact-card"
            key={contactData.id}
        >
            <img 
                src={contactData.img} 
                alt={contactData.name}
            />
            <h3>{contactData.name}</h3>
        <div className="info-group">
            <img src="./images/phone-icon.png" alt='phone-icon' />
            <p>{contactData.phone}</p>
        </div>
        <div className="info-group">
            <img src="./images/mail-icon.png" alt='mail-icon' />
            <p>{contactData.email}</p>
        </div>
    </div>
    
    )
}