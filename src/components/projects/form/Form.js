import React from 'react'
import './formStyle.css'

export default function Form() {
   const [formData, setFormData] = React.useState(
       {
           firstName:"", 
           lastName:"",
           email:""
       }
   )
       function handleChange(event) {
        console.log(formData)
           setFormData(prevFormData => {
               return {
                   ...prevFormData,
                   [event.target.name]: event.target.value   
               }
               
           })

   }

   return (
       <form className='form--component--main--form'>
           <input
                className='form--component--input'
                type='text'
                placeholder='first name'
                name='firstName'
                onChange={handleChange}
                value={formData.firstName}

           />
           <input
                className='form--component--input'
                type='text'
                placeholder='last name'
                name='lastName'
                onChange={handleChange}
                value={formData.lastName}

           />
           <input
                className='form--component--input'
                type='text'
                placeholder='email'
                name='email'
                onChange={handleChange}
                value={formData.email}

           />
       </form>

   )
}