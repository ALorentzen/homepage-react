import React from "react"

export default function ExerciseForm() {
    const [formData, setFormData] = React.useState(
        {
            username: "",
            password: "",
            confirmPassword: "",
            confirmInfo: "",
            checkedInfo: true 
        }
    )

    function handleChange(event) {
        const {name, value, type, checked } = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name] : type === "checkbox" ? checked : value
        }))
    } 

    function handleSubmit(event) {
        const sent = document.querySelector(".exer--form--button")

  
        event.preventDefault()
        if(formData.password === formData.confirmPassword) {
            console.log("Account created!")
        } else {
            console.log("Password do not match")

            return
        }

        if(formData.confirmInfo) {
            console.log("User account created")
            return sent.innerHTML = "Sent"
        } 
    }

    return(
        <div className="exer--div--form">
            <form className="exer--form" onSubmit={handleSubmit}>
                <input
                    className="exer--form--input--fields"
                    name="username"
                    value={formData.username}
                    type="text"
                    placeholder="username"
                    onChange={handleChange}
                />
                <input
                    className="exer--form--input--fields"
                    name="password"
                    value={formData.password}
                    type="password"
                    placeholder="password"
                    onChange={handleChange}
                />
                <input
                    className="exer--form--input--fields"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    type="password"
                    placeholder="confirm password"
                    onChange={handleChange}
                />
                <div className="exer--form--confirm--div">
                    <label htmlFor="readyToSubmit">Is the information above correct?</label>
                    <input
                        required
                        id="submit--user--form"
                        name="confirmInfo"
                        type="checkbox"
                        checked={formData.confirmInfo}
                        onChange={handleChange}
                    />
                </div>
                <button className="exer--form--button">Submit</button>
            </form>
        </div>

    )

}