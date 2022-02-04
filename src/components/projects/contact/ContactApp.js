import React from "react";  
import Contact from './components/Contact'
import "./contactData.js"
import './contactStyle.css'

export default function ContactApp() {
    return (
        <div className='contactApp--container'>
            <div className="contactApp--content">         
                <Contact 
                    id={1}
                    name="Arnold"
                    phone="(212) 555-1234"
                    email="arnoldLovesFood@dawwg.com"
                    img={require('./images/derpy-dog-portraits-by-kevin-sarasom-24-1.jpg').default}  
                />
                <Contact 
                    key={2}
                    name= 'Bob'
                    email='bigbigBob@dawwg.com'
                    phone= '(215) 123-3344'
                    img= {require('./images/dog-portraits-alexander-khokhlov-1.jpg').default}
                />
                <Contact
                    key={3}
                    name='Dave'
                    email= 'legendDave@dawwg.com'
                    phone='(217) 345-6675'
                    img={require('./images/dog-portraits-alexander-khokhlov-9.jpg').default}
                />
                <Contact
                    key={4}
                    name='Spencer'
                    email='suSpencer10@dawwg.com'
                    phone='(217) 345-6675'
                    img={require('./images/dog-portraits-alexander-khokhlov-5.jpg').default}
                />
            </div>
        </div>
    )
}