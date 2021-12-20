import React, { Component }  from 'react'


class NewJSFeatures extends Component {
    
    //New way of setting state without using constructor and super()
    
    state = {
        count : 0,
        greeting: 'hi',
        age: 42
    }  

    increment = () => {
        this.setState(prevState => ({ count: prevState.count +1 }))
    }

    decrement = () => {
        this.setState(prevState => {
            return {
                count: prevState.count - 1
            }
        })
}

    render() {
        const { count: number, greeting , age } = this.state
        return (
            <div>
                <h1>{number}</h1>
                <button onClick={this.increment}>Inc</button>
                <button onClick={this.decrement}>Dec</button>
            </div>
        )
    }
}

export default NewJSFeatures 