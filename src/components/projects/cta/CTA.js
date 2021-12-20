import React from 'react'
import './ctaStyle.css'

/*CTA: CALL TO ACTION*/

function CTA(props) {
    return (
    <div className='cta-div'>
        {props.children}
    </div>
    )
}

export default CTA


