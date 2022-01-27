import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

import App from './App'


export { default as Card } from './components/projects/card/Card'
export { default as RoundedImg } from './components/projects/roundedImg/RoundedImg'
export { default as Todo } from './components/projects/todo/Todo'
export { default as Counter } from './components/projects/counter/Counter'
export { default as MemeGenerator } from './components/projects/memeGenerator/MemeGenerator'
export { default as TravelForm } from './components/projects/travelform/TravelForm'
export { default as CTA} from './components/projects/cta/CTA' 
export { default as Callout } from './components/projects/callout/Callout'
export { default as TravelComponent } from './components/projects/traveljournal/TravelComponent'
export { default as AddItem } from './components/projects/AddItem/AddItem'
export { default as AirBnb } from './components/projects/airBnB/AirBnb'
export { default as ImageCard } from './components/projects/image--card--component/ImageCard'
export { default as ChangeBoxes } from './components/projects/changeBoxes/ChangeBoxes'
export { default as Form } from './components/projects/form/Form'
export { default as StarWarsApi } from './components/projects/starWarsApi/StarWarsApi'
export { default as Tracker } from './components/projects/windowTracker/Tracker'
export { default as Notes } from './components/projects/notes/Notes'
export { default as NotesApp } from './components/projects/notesApp/NotesApp'
export { default as Nav} from './components/nav/Nav'
export { default as Footer} from './components/footer/Footer'

export { default as Home} from './components/pages/home/Home'
export { default as WebDevelopment } from './components/pages/webDevelopment/WebDevelopment'
export { default as About } from './components/pages/about/About'
export { default as Portfolio } from './components/pages/portfolio/Portfolio'
    export { default as Anders } from './components/pages/anders/Anders'
    export { default as Caricature } from './components/pages/caricature/Caricature'
    export { default as Characters } from './components/pages/characters/Characters'
    export { default as Jerven } from './components/pages/jerven/Jerven'
    export { default as Landscape } from './components/pages/landscape/Landscape.js'
    export { default as Pixelart } from './components/pages/pixelart/Pixelart'




ReactDOM.render(<App /> , document.getElementById('root'))
