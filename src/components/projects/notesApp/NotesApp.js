import React from 'react'
import Sidebar from './components/Sidebar'
import Editor from './components/Editor'

import './NotesAppStyle.css'

export default function NotesApp() {

return(
    <div id="notesApp--container">

           <Sidebar/>
            <Editor/>

    </div>
    )
}