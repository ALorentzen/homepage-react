import React from 'react'

export default function Editor() {
    const [textData, setTextData] = React.useState(
        {
            note : "",
            id : ""            
        }

    )

    function handleChange(event) {
        const {value, name } = event.target
        setTextData(prevTextData => {
            return {
                ...prevTextData,
                [name] : name === "note" ? value : name
            }
        })
    }
    
    return(
        <div className='notesApp--editor'>
            <textarea
                className="notesApp--textbox"
                value={textData.note}
                name="note"
                placeholder='Write a note here'
                key={textData.id}
                onChange={handleChange}
            >
            </textarea>
            <button
                className="editor--save--button"
                onClick={onsubmit}
            >
                    Save note
            </button>
        </div>
    )
}