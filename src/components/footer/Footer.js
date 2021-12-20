import React from 'react'
import './footerStyle.css'

function Footer() {
    return (
        <footer>
            <div className='footer--container'>
                <div className="svg--div">
                    <img 
                        className="svg--img" 
                        src='./images/footer_svg/layered-waves-haikei2.svg'
                        alt='waves-svg'
                    />
                </div>
                
                <div className='footer--credits--container'> 
                    <div className="signature">
                        <h3 id='name'>Anders Lorentzen</h3>
                            <h4 id='year'> &#169; 2021 </h4>
                    </div>
                        
                    

                    <div className="footer--links">
                        <hr className='footer--hr'/>
                        <div className='footer--links--a--div'>
                            <a id='footer--links--logo--w3schools' href="https://www.w3schools.com/">
                                <img className='footer--links--logo' src='images/icons/W3Schools_logo.svg.png' alt='w3'/>
                            </a>
                            <a id='footer--links--logo--mdn' href="https://developer.mozilla.org/en-US/">
                                <img className='footer--links--logo' src='images/icons/MDN_Web_Docs-Logo.wine.png' alt='mdn'/>
                            </a>
                            <a id='footer--links--logo--freeCodeCamp' href="https://www.freecodecamp.org/">
                                <img className='footer--links--logo' src='images/icons/70107528.png' alt='freeCodeCamp'/>
                            </a>
                            <a id='footer--links--logo--codeCademy' href="https://www.codecademy.com/">
                                <img className='footer--links--logo' src='images/icons/5163631.png' alt='udemy'/>
                            </a>
                            <a id='footer--links--logo--cssTricks' href="https://css-tricks.com/">
                                <img className='footer--links--logo' src='images/icons/CSS-Tricks-star.png' alt='cssTricks'/>
                            </a>
                            <a id='footer--links--logo--scrimba' href="https://scrimba.com/">
                                <img className='footer--links--logo' src='images/icons/scrimbalogo.png' alt='scrimba'/>
                            </a>
                            <a id='footer--links--logo--stackOverflow' href="https://stackoverflow.com/">
                                <img  className='footer--links--logo' src='images/icons/stackOverflow.png' alt='stackOverflow'/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer 

