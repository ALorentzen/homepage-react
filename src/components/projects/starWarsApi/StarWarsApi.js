import React from 'react'
import './starWarsStyle.css'


export default function StarWarsApi() {
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(1)



React.useEffect(function() {
fetch(`https://swapi.dev/api/people/${count}`)
        .then(res => res.json())
        .then(data => setStarWarsData(data))
}, [count])

return (
    <div className="starWars--api--container">
        <pre>
            {
                JSON.stringify(starWarsData, null, 2)
            }
        </pre>
        <h2>
            The count is {count}
        </h2>
        <button 
            onClick={
                        () => setCount(prevCount => prevCount + 1)
                    }
        >
            Get next character
        </button>
    </div>
)
}