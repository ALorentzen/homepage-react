import React from 'react'


export default function TravelCard(travelData) {
    return(
        <div className='travelCard--component'>
            <img className='travelCard--image' href={travelData.imageUrl} alt={travelData.imageUrl}/>
            <h6 className='travelCard--country'>{travelData.location}</h6>
            <h3 className='travelCard--location'>{travelData.googleMapsUrl}</h3>
            <h6 className='travelCard--period'>{travelData.startDate}{travelData.endDate}</h6>
            <h6 className='travelCard--description'>{travelData.description}</h6>
        </div>
    )
}
