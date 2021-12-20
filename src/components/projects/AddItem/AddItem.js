import React from 'react'
import './addItemStyle.css'

export default function AddItem() {
    const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])


function addItem() {
    setThingsArray(prevThingsArray => {
        return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]
})
} 

const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)

return (
    <div className='addItem--container'>
        <button className='addButton' onClick={addItem}>Add Item</button>
        {thingsElements}
    </div>
)
}

