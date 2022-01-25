import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import ExerciseForm from "./components/projects/form/ExerciseForm"
import { 
        Nav, Home, WebDevelopment,
        Portfolio, About, Anders, 
        Characters, Caricature, Jerven,
        Landscape, Pixelart, Footer,
        TravelForm, MemeGenerator, 
        AirBnb, TravelComponent, 
        ChangeBoxes, Form, StarWarsApi, Tracker, Notes
        }    
from './index'

export default function App() {
    
    return (
        <Router >
            <div className='app'>
                <Nav />
                    <div id='main' 
                         className='main' 
                    >
                        <Routes>
                            <Route path='/' exact element={<Home/>} />
                            <Route path='/WebDevelopment' element={<WebDevelopment />} />  
                                <Link path='/TravelForm' element={<TravelForm />} />
                                <Link path='/AirBnb' element={ <AirBnb /> } />
                                <Link path='/MemeGenerator' element={<MemeGenerator />} />
                                <Link path='/TravelComponent' element={<TravelComponent />}/>
                                <Link path='/ChangeBoxes' element={<ChangeBoxes /> }/>
                                <Link path='/Form' element={<Form />}/>
                                <Link path='/ExerciseForm' element={<ExerciseForm /> }/>
                                <Link path='/Notes' element={<Notes />}/>
                                <Link path='/StarWarsApi' element={<StarWarsApi /> }/>
                                <Link path='/Tracker' element={<Tracker /> }/>
                            <Route path='/Portfolio' element={<Portfolio />} />
                                <Route path='/Anders' element={<Anders />}  />
                                <Route path='/Caricature' element={<Caricature />} />
                                <Route path='/Characters' element={<Characters />} />
                                <Route path='/Jerven' element={<Jerven />} />
                                <Route path='/Landscape' element={<Landscape />} />
                                <Route path='/Pixelart' element={<Pixelart />} />
                            <Route path='/About' element={<About />} />
                        </Routes>
                    </div>
                <Footer />
            </div>
        </Router>
    )
}


