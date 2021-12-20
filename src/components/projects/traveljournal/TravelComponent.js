import React from 'react'
import TravelCard from './TravelCard'
import travelData from './travelData'
import './travelJournalStyle.css'

export default function TravelComponent() {    

    const travelCard = travelData.map(item => {
        
        return (
            <TravelCard 
                key={item.id}
                title={item.title}
                location={item.location}
                googleMapsUrl={item.googleMapsUrl}
                startDate={item.startDate}
                endDate={item.endDate}
                description={item.description}
                imageUrl={item.imageUrl} 
            />
        )
    })

    return(
            <>
              {travelCard}
            </>
    )
}