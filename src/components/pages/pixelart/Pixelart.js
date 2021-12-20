import React from 'react'
import ImageCard from '../../projects/image--card--component/ImageCard'
import pixelartList from './pixelart--img'

export default function Pixelart() {  

      const cards = pixelartList.map(item => {
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
                        <h3 className='img--cards--category--title'>Pixel art</h3>
                  </div>
              {cards}
            </div>
      )
}
