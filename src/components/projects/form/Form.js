import React from 'react'
import './formStyle.css'

export default function Form() {
   const [formData, setFormData] = React.useState(
       {
           firstName:"", 
           lastName:"",
           email:"",
           comment:"",
           isCorrect: true,
           employment: "",
           education: ""
       }
   )

       function handleChange(event) {
           const {name, value, type, checked} = event.target
           setFormData(prevFormData => {
               return {
                   ...prevFormData,
                   [name]: type === "checkbox" ? checked : value   
               }  
           })
   }
        function handleSubmit(event) {
            event.preventDefault()
            console.log(formData)

        }

   return (
       <div>
           <h1 className='form--info'>
               DISCLAIMER: <br/> This is for testing only, no information will be sent.
                as a precaution, don't use your real information.
            </h1>
            <form
                onSubmit={handleSubmit} 
                className='form--component--main--form'>
                <input
                    className='form--component--input'
                    type='text'
                    placeholder='first name'
                    onChange={handleChange}
                    name='firstName'
                    value={formData.firstName}
                />
                <input
                    className='form--component--input'
                    type='text'
                    placeholder='last name'
                    onChange={handleChange}
                    name='lastName'
                    value={formData.lastName}
                />
                <input
                    className='form--component--input'
                    type='text'
                    placeholder='email'
                    onChange={handleChange}
                    name='email'
                    value={formData.email}
                />
                <textarea
                    className='form--component--textfield'
                    type='text'
                    placeholder='comment'
                    onChange={handleChange}
                    name='comment'
                    value={formData.comment}
                />

                <fieldset className='form--fieldset'>
                    <legend>Current employment status</legend>

                    <input
                            type='radio'
                            id='unemployed'
                            name='employment'
                            value='unemployed'
                            checked={formData.employment === 'unemployed'}
                            onChange={handleChange}
                    />
                    <label className='form--component--label' htmlFor='unemployed'>unemployed</label>
                    <br/>

                    <input
                            type='radio'
                            id='part-time'
                            name='employment'
                            value='part-time'
                            checked={formData.employment === 'part-time'}
                            onChange={handleChange}
                    />
                    <label className='form--component--label' htmlFor='part-time'>part-time</label>
                    <br/>

                    <input
                            type='radio'
                            id='full-time'
                            name='employment'
                            value='full-time'
                            checked={formData.employment === 'full-time'}
                            onChange={handleChange}
                    />
                    <label className='form--component--label' htmlFor='full-time'>full-time</label>
                    <br/>
                </fieldset>
                <br/>

                <fieldset className='education--fieldset'>
                <legend>Education</legend>
                    <select
                        id='education-lv'
                        value={formData.education}
                        onChange={handleChange}
                        name='education'
                    >
                        <option value="" defaultChecked>--choose--</option>
                        <option value='non-grad'>non-grad</option>
                        <option value='graduate'>graduate</option>
                        <option value='bachelor'>bachelor</option>
                        <option value='master'>master</option>
                    </select>
                </fieldset>
                <br/>
                
                <div className='form--checkbox--div' >
                    <input 
                        type='checkbox'
                        id='isCorrect'
                        name='isCorrect'
                        required
                        checked={formData.isFriendly}
                        onChange={handleChange}
                    />
                    <label className='form--checkbox--isCorrect--label'
                        htmlFor='isCorrect'>
                            <h4 className='form--header--isCorrect'> Is the information above correct? </h4>                 
                    </label>
                </div>
                <br/>
                <button className='form--submit--button'>submit</button>
            </form>
        </div>
   )

}