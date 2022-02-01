import React from 'react'
export default function AddItem() {
    const [thingsArray, setThingsArray] = React.useState(["Thing 1"])


function addItem() {
    setThingsArray(prevThingsArray => {
     
        if(prevThingsArray.length >= 20) {
            console.log("Limit reached")
            return 
        } else {
            return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]

        }
})

} 

const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)

return (
    <div >
        <button className='addButton' onClick={addItem}>Add Item</button>
        {thingsElements}
    </div>
)
}
