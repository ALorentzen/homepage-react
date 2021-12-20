import React from "react"
import PropTypes from 'prop-types'
import './cardStyle.css'

class Card extends React.Component {
    static defaultProps = {
        width: 200,
        height: 200,
    }

    static propTypes = {
        cardColor : PropTypes.oneOf(['blue', 'red', 'green']).isRequired,
        width : PropTypes.number.isRequired,
        height: PropTypes.number
    }


    render(){
        const styles = {
            backgroundColor : this.props.cardColor,
            width : this.props.width,
            height: this.props.height,
        }

        return (
                <>
                    <div style={styles}></div>
                </>
    )
}
}

export default Card
