import React from 'react'
import ImageCard from '../../projects/image--card--component/ImageCard'
import andersList from './anders--img'


export default function Anders(){
         window.andersList = []

         var preloadedData = andersList.map((id) => {
               const img = new Image()
               img.src = andersList.title
               return img
         })
         window.andersList.preloadedPictures = preloadedData

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
                        <h3 onLoad={()=> window.load='eager'} className='img--cards--category--title'>Anders</h3>
                  </div>
                  {cards.sort(ImageCard.title)}
            </div>
          )
    }
    
    
    