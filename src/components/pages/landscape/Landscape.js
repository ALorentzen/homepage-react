import React from 'react'
import ImageCard from '../../projects/image--card--component/ImageCard'
import landscapeList from './landscape--img'

export default function Landscape() {  

      const cards = landscapeList.map(item => {
        return (
            <ImageCard
                  key={item.id}
                  id={item.id}
                  src={item.src}
                  title={item.title}
            /> 
        )    
      })

      return (
            <div className='img--cards--container'>
                  <div className='img--cards--category'>
                        <h3 className='img--cards--category--title'>Landscape</h3>
                  </div>
                  {cards}
            </div>
      )
}