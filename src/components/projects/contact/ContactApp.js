import React from "react";  
import Contact from './components/Contact'
import contactData from "./contactData";
import './contactStyle.css'
export default function ContactApp(props) {
    return (
        <div className='contactApp--container'>
            <Contact 
                key={contactData.id=1}
                name="Mr.Whiskers"
                phone="(212) 555-1234"
                email="mrWizzk@fur.co.uk"
                img="./images/mr-whiskerson.png"  
            />
        </div>
    )
}