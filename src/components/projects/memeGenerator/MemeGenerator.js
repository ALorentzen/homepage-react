import React, {Component} from 'react'
import Header from './Header'
import './memeGeneratorStyle.css'

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText : "",
            botText : "",
            randImg : "http://i.imgflip.com/1bij.jpg",
            allMemeImgs : [] 
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    componentDidMount() {
        fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data
            console.log(memes[0])
            this.setState({allMemeImgs : memes })
        }) 
    }

    handleChange(event) {
     const {name, value} = event.target
     this.setState({ [name] : value })
    }

    handleSubmit(event) {
        event.preventDefault()

        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randNum].url
        this.setState({ randImg: randMemeImg})
    }

    render() {
        return(
            <div className='meme--container'>
                <Header />
                <form className='meme-form' onSubmit={this.handleSubmit}>
                
                    <input
                        name='topText'
                        value={this.state.topText}
                        type='text'
                        placeholder='Top text'
                        onChange={this.handleChange}
                    />
                                 
                    <input
                        name='botText'
                        value={this.state.botText}
                        type='text'
                        placeholder='Bottom text'
                        onChange={this.handleChange}
                    />
               
                <button>Get new image</button>
                </form>
                <div className='meme'>
                    <img src={this.state.randImg} alt=''/>
                    <h2 className='top'>{this.state.topText}</h2>
                    <h2 className='bottom'>{this.state.botText}</h2>
                </div>
            </div>
  
        )
    }

}

export default MemeGenerator