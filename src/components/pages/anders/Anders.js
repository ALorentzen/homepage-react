import React from 'react'
import ImageCard from '../../projects/image--card--component/ImageCard'
import andersList from './anders--img'


export default function Anders(){

      const cards = andersList.map(item => {
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
                        <h3 className='img--cards--category--title'>Anders</h3>
                  </div>
                  {cards}
            </div>
          )
    }
    
    
    