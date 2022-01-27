import React from 'react'

export default function Sidebar(props) {
    const [itemArray, setItemArray] = React.useState(
        [
            "item"
        ]
    )

    function addItems() {
        console.log("abc")
        // setItemArray(prevState => {
        //     return [...prevState, `${prevState.length + 1}`]
        // })
    }

   const itemElements = itemArray.map(item => <li key={item}>{item}</li>)


    return(
        <div id="notesApp--sidebar">
            
            <button 
                type='button'
                className='sidebar--add--button'
                onClick={addItems}
            >     
            click
            </button>
            {itemElements}
            <ol className='sidebar--items--list'>
                <li>test</li>
            </ol>

        </div>
    )
}