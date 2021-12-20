import React from 'react'
import './travelFormStyle.css'

function FormComponent(props) {
    return (
        <div className='travel--form--container'>
            <form>
                <input 
                    name='firstName' 
                    value={props.data.firstName} 
                    type='input' 
                    placeholder='first name' 
                    onChange={props.handleChange}
                    required
                /> *
                <br/>
                
                <input 
                    name='lastName'
                    value={props.data.lastName} 
                    type='input' 
                    placeholder='last name' 
                    onChange={props.handleChange}
                    required
                /> *
                <br/>

                <input
                    name='age'
                    value={props.data.age} 
                    type='number' 
                    min={0}
                    max={123}
                    maxLength={3}
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    required
                    

                    placeholder='age' 
                    onChange={props.handleChange}
                /> *
                <br/>  
                <hr/> 

                <label>
                    gender  
                        <br/>      
                            <input
                                name='gender' 
                                type='radio' 
                                value="male"
                                checked={props.data.gender === "male"}
                                onChange={props.handleChange}
                            /> male
                        <br/>
                
                    <input
                        name='gender' 
                        type='radio' 
                        value="female"
                        checked={props.data.gender === "female"}
                        onChange={props.handleChange}
                    /> female
                </label>
                <br/>
                <hr/>

                <label> Destination  <br/> 
                    <select
                        name='destination'
                        className='destination' 
                        value={props.data.destination} 
                        onChange={props.handleChange}
                        required
                    > 
                          
                        <option value='' disabled>-- Please choose a destination  --</option>
                        <option value='Bergen (BRG)  - Bergen lufthavn, Flesland'>Bergen</option>
                        <option value='Oslo (OSL)  - Oslo lufthavn, Gardermoen'>Oslo</option>
                        <option value='Stavanger (STA)  - Stavanger lufthavn, Sola'>Stavanger</option>
                        <option value='Trondheim (TRD)  - Trondheim lufthavn, Værnes '>Trondheim</option>
                    </select> 
                </label>
                <br/>
                <hr/>
                
                <label>Dietary restrictions: 
                    <br/>
                   
                <label>
                <input 
                        type="checkbox"
                        name="isDairyFree"
                        onChange={props.handleChange}
                        checked={props.data.isDairyFree}
                    /> Dairy free
                </label>
                <br/>

                <label>
                <input 
                        type="checkbox"
                        name="isGlutenFree"
                        onChange={props.handleChange}
                        checked={props.data.isGlutenFree}
                    /> Gluten free
                </label>
                <br/>

                <label>
                    <input 
                        type="checkbox"
                        name="isKosher"
                        onChange={props.handleChange}
                        checked={props.data.isKosher}
                    /> Kosher
                </label>
                <br/>

                <label>
                    <input 
                        type="checkbox"
                        name="isLactoseFree"
                        onChange={props.handleChange}
                        checked={props.data.isLactoseFree}
                    /> Lactose free
                </label>
                <br/>

                <label>
                    <input 
                        type="checkbox"
                        name="isNutFree"
                        onChange={props.handleChange}
                        checked={props.data.isNutFree}
                    /> Nut free
                </label>
                <br/>

                <label>
                    <input 
                        type="checkbox"
                        name="isSeaFoodFree"
                        onChange={props.handleChange}
                        checked={props.data.isSeaFoodFree}
                    /> Seafood free
                </label>
                <br/>

                <input script={props.data.sortItems}
                        type="checkbox"
                        name="isVegan" 
                        onChange={props.handleChange}  
                        checked={props.data.isVegan}
                    /> Vegan
                </label>
                <br/>
  
                <br/>
                <hr/>          
                <br/>
                
                <button type='submit'>submit</button>
            </form>
            

            <div className='info'>
                <h2 className='bold'>Traveller information: </h2>
                <hr/>
                <br/>
                <p>name: {props.data.firstName} {props.data.lastName}</p>
                <br/>
                <p>age: {props.data.age}</p>
                <br/>
                <p>gender: {props.data.gender}</p>
                <br/>
                <hr/>
                <p className='bold'>destination:</p>
                <br/>
                 <p>{props.data.destination}</p>
                <br/>
                <hr/>
                <p className='bold'>dietary restrictions: </p>
                <br/>
                    <p>
                        {!props.data.isVegan ? "" : "Vegan"} 
                    </p>
                    <br/>

                    <p>
                        {!props.data.isKosher  ? "" : "Kosher"}
                    </p>
                    <br/>

                    <p>
                        {!props.data.isLactoseFree  ? "" : "Lactose free"}
                    </p>
                    <br/>

                    <p>
                        {!props.data.isNutFree  ? "" : "Nut free"}
                    </p>
                    <br/>

                    <p>
                        {!props.data.isSeaFoodFree  ? "" : "Seafood free"}
                    </p>
                    <br/>

                    <p>
                        {!props.data.isDairyFree  ? "" : "Dairy free"}
                    </p>
                    <br/>

                    <p>
                        {!props.data.isGlutenFree  ? "" : "Gluten free"}
                    </p>
                    <br/>
            </div>
        </div>
  
    )
}


export default FormComponent