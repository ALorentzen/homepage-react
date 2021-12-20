import React, {useState, useEffect} from "react"
import randomcolor from "randomcolor"

function Effect() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState("")
    
    function increment() {
        setCount(prevCount => prevCount + 1)
    }
    
    function decrement() {
        setCount(prevCount => prevCount - 1)
    }
    
    useEffect(() => {
        setColor(randomcolor())
    //     setInterval(()=> {
    //         console.log("interval");
    //     }, 1000)
    // 
    }  , [count])
    
    return (
        <div className='random--color--div'>
            <h1 style={{color: color}}>{count}</h1>
            <div className='random--color--div--buttons'>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
        </div>
    )
}

export default Effect
