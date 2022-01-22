import React from 'react'
import './memeGeneratorStyle.css'
import memesData from "./memesData.js"

export default function Meme() {
    
    const [meme, setMeme] = React.useState(
    {
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    }
    )
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    
    
    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }
    
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    
    return (
        <main>
            <div className='meme--form--grid'>
                <div className="meme--form">
                    <input 
                        id="top-text"
                        type="text"
                        placeholder="Top text"
                        className="meme--form--input"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                    <input
                        id="bottom-text" 
                        type="text"
                        placeholder="Bottom text"
                        className="meme--form--input"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                    <button 
                        className="meme--form--button"
                        onClick={getMemeImage}
                    >
                        new image
                    </button>
                </div>
                <div className="meme">
                    <img src={meme.randomImage} className="meme--image" alt={meme.name}/>
                    <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>
            </div>
        </main>
    )
}