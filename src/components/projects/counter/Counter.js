import React from 'react'
import Effect from './Effect'
import './counterStyle.css'


class Counter extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0 
        }
        this.counterFunc = this.counterFunc.bind(this)
        this.incrementFunc = this.incrementFunc.bind(this)
        this.resetFunc = this.resetFunc.bind(this)
    }

    counterFunc() {
        this.setState(preState => {
            return {
                count: preState.count + 1
            }
        })
    }

    incrementFunc() {
        this.setState(preState => {
            return {
            count: preState.count - 1
            }
        }) 
    }

    resetFunc() {
        this.setState(preState => {
            return {
                count: preState.count - preState.count
            }
        })
    }

  
    render() {
        return (
            <div className='counter-container'>
   
                        <h3 className='h3-title-div'>
                            Add/Sub function
                            <hr/>
                        </h3>

                        <div className="counter-display"><h3>{this.state.count}</h3>
                        </div>
                        
                        <div className='counter--button--div' >
                            <button className='counter-button' onClick={this.counterFunc}>Add</button>
                            <button className='counter-button' onClick={this.incrementFunc}>Sub</button>
                            <button className='counter-button' onClick={this.resetFunc}>Reset</button>
                        </div>
                            <Effect />
                </div>
        )
    }
}


export default Counter