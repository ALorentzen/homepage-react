import React from 'react'
import Proptypes from 'prop-types'
import './roundedImgStyle.css'

function RoundedImg(props) {
    return (
        <div className='rounded-img-container'>
            <img 
                src={props.src}
                style={{borderRadius: props.borderRadius}}
                className="round-img"
                alt='rounded'
            />
        </div>
    )
}

RoundedImg.propTypes = {
    src : Proptypes.string.isRequired,
    borderRadius : Proptypes.oneOfType([Proptypes.string, Proptypes.number])
}


RoundedImg.defaultProps = {
    width: 50,
    height: 50
}


export default RoundedImg