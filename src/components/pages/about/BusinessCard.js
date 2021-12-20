import React from 'react'

export default function BusinessCard() {
    return(
        <div className='business--card--container'>
            <div className='card--content'>
                <div className='business--card--img--container'>
                    <img className='business--card--img' src='/images/about_image/about_me_img.jpg' alt='main-img'/>
                    <h2 className='business--card--name'>Anders Lorentzen</h2>
                    <h4 className='business--card--description'>Illustrator, aspiring web developer</h4>
                </div>

                <div className='button--div'>
        
                           
                <div className='business--card--footer' >
                    
                    <a id='footer--logo--img--email'className='footer--logo-link' href='mailto:anderslorentzen@hotmail.com'>
                        <img alt='email' src='/images/icons/email.png'/>
                    </a>
                    <a id='footer--logo--img--discord'className='footer--logo-link' href='https://discord.com/channels/@th0kk'>
                        <img alt='discord-logo' src='/images/icons/discord-logo-0.png'/>
                    </a>
                    <a id='footer--logo--img--instagram'className='footer--logo-link' href='https://www.instagram.com/metaforentzen/'>
                        <img alt='instagram-logo' src='/images/icons/instagram_icon_logo.png'/>
                    </a>
                    <a id='footer--logo--img--linkedIn'className='footer--logo-link' href='https://www.linkedin.com/in/anders-lorentzen-5b3a2a2b/'>
                        <img alt='linkedIn-logo' src='./images/icons/linkedIn.png'/>
                    </a>
                </div>
          
                </div>
                <div className='business--card--textDiv'>
                    <h3>About</h3>
                        <p>I am an aspiring web developer/designer and illustrator trying
                        to sharpen my skills in the field of web development and design </p>
                        <br/>
                    <h3>Interests</h3>
                        <p>I've been drawing my whole life, mostly characters and caricature. I'm a huge music enthusiast and a bit of a boardgame geek. 
                            I'm also fond of going on hikes in the wild, with the posibility of camping. </p>
                </div>
            </div>
       
        </div>
    )
}