import React from 'react'

export default function Box(props) {
    const styles = {
        backgroundColor : props.on ? "#ffcc2a" : "transparent"
    }

    return (
        <div
            style={styles}
            className="box"
            onClick={props.toggle}
        >
            
            
        </div>
    )
}