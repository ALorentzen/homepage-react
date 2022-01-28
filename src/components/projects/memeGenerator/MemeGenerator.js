import React from 'react'
import './memeGeneratorStyle.css'

export default function Meme() {


    const [meme, setMeme] = React.useState(
    {
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    }
    )
    const [allMemes, setAllMemes] = React.useState([])
    
    // React.useEffect(() => {
    //     fetch(`https://api.imgflip.com/get_memes`)
    //     .then(res => res.json())
    //     .then(data => setAllMemes(data.data.memes))
    // }, [])

        React.useEffect(() => {
            async function getMemes() {
                const res = await fetch("https://api.imgflip.com/get_memes")
                const data = await res.json()
                setAllMemes(data.data.memes)
            }
            getMemes()
        },[])
    
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
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
        <main id='meme--main--container'>
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
                    <img 
                        src={meme.randomImage} 
                        className="meme--image" 
                        alt={meme.name}
                    />
                    <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>
            </div>
        </main>
    )
}