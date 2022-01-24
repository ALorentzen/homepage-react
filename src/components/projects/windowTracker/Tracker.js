import React from 'react'
import WindowTracker from './WindowTracker'
import './windowTrackerStyle.css'

export default function Tracker() {
    
    const [show, setShow] = React.useState(true)

    function toggle() {
        if(true) {
            setShow(prevShow => !prevShow)
        }
    }
    
    
    return(
        <div className='windowTracker--container'>
            <button onClick={toggle}>
                Toggle tracker
            </button>
            {show && <WindowTracker/>}
        </div>
    )
}