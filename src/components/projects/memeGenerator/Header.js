import React from 'react'

function Header() {
    return (
        <header className='meme--generator--header'>
            <h1 className='meme--generator--header--title'>MEME GENERATOR</h1>
            <img 
                className='meme--generator--header--img'
                src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" 
                alt="problem" />
        </header>
    )
}

export default Header