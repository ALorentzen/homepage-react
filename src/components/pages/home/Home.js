import React from 'react'
import './homeStyle.css'

export default function Home() {

    const date = new Date()
    const hours = date.getHours()
    let timeOfDay = ""
    
    if(hours < 12) {
         timeOfDay = "morning"
    } else if(hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else if(hours > 17) {
        timeOfDay = "evening"
    } else {
        timeOfDay = "night"
    }

    return (
    
            <div className='home--container'>
              
                <div className='home--container--content'>
                    <img 
                        className='home--container--img' 
                        src="images/background_images/main_image-min.jpg" 
                        alt="home--bckr--img"
                    />
                    <h4>{timeOfDay}</h4>
                    <h1 className='home--title'>Lorentzen portfolio</h1>
                </div>
            </div>
    
    )
}