import React from 'react'
import './windowTrackerStyle.css'

export default function WindowTracker() {

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    const [windowHeight, setWindowHeight] = React.useState(window.innerHeight)
    
    React.useEffect(() => {
        function watchWidth() {
            setWindowWidth(window.innerWidth)
        }
        function watchHeight() {
            setWindowHeight(window.innerHeight)
        }

        window.addEventListener("resize", watchWidth)
        window.addEventListener("resize", watchHeight)
        return () => {
 
            window.removeEventListener("resize", watchWidth)

            return () => {

                window.removeEventListener("resize", watchHeight)
            }
        }


   
    }, []) 



   return (
       <h1>
           Window width: {windowWidth} 
           <br/> 
           Window height: {windowHeight}
        </h1>
   )
}