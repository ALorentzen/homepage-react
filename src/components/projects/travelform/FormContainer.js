import React, {Component} from 'react'
import FormComponent from './FormComponent'


class Form extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            age: '' ,
            gender: '',
            destination: '', 
            dietaryRestriction : {   
                isDairyFree: false,
                isGlutenFree: false, 
                isKosher: false,
                isLactoseFree: false,
                isNutFree: false,
                isSeaFoodFree: false,
                isVegan: false,
        }
            
        }
        this.handleChange = this.handleChange.bind(this)
     
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === 'checkbox' ?
        
        this.setState({
            [name] : checked
        })
        :
        
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
        <FormComponent 
            handleChange={this.handleChange}
            sortItems={this.sortItems}
            data={this.state}
        />
        )
    }
}
       
    
    export default Form
    
    