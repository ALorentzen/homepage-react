import React from 'react'
import { Link } from 'react-router-dom'
import './navStyle.css'

export default function Nav() {

    const [dropShow, setDrop] = React.useState(false)

  function handleClick(e) {
    setDrop(prevState => !prevState)
  }
      
    return (
            <nav role='navigation'>
                <div className='home--logo--div'>
                        <Link className='home--logo--link' to='/'>
                            <img 
                                className='home--logo--img' 
                                src='images/icons/title_logo.png' 
                                alt= 'logo'
                            />
                        </Link>
                    </div>
                    
                <div className='nav--categories'>
             
                    <div className='webDev'>
                        <button className='nav--button'>
                            <Link className='nav--a' to='/WebDevelopment'>
                                <img 
                                    className='nav--category--icon' 
                                    src='images/icons/webDev.png' 
                                    alt='webdevIcon'
                                />
                            </Link>
                        </button>  
                    </div>

                    <div className='portfolio' >

                        <button 
                            id='nav--portfolio--button' 
                            className='nav--portfolio--button' 
                            type="button" 
                            onClick={handleClick}
                        >
                            <img 
                                className='nav--category--icon' 
                                src='images/icons/portfolio.png' 
                                alt='portfolioIcon'
                            /> 
                        </button>
                          
                            {
                                dropShow && 
                                <div 
                                    id='dropdown--div--id' 
                                    className='dropdown--div' 
                                    onClick={()=> setDrop(!dropShow)}
                                    onBlur={() => setDrop(false)}
                                >

                                    <Link className='nav--dropdown--a' to={'Anders'}>
                                        <img 
                                            className='page-icon' 
                                            src='images/icons/anders.png' 
                                            alt='andersIcon'
                                        />
                                         <h3>Anders</h3>
                                    </Link>
                        
                                    <Link className='nav--dropdown--a' to='Jerven'>
                                        <img 
                                            className='page-icon' 
                                            src='images/icons/jerven.png' 
                                            alt='jervenIcon'
                                        />
                                        <h3>Jerven</h3>
                                    </Link>
                          
                                    <Link className='nav--dropdown--a' to='Characters'>
                                        <img 
                                            className='page-icon' 
                                            src='images/icons/character.png' 
                                            alt='characterIcon'
                                        />
                                        <h3>Karakterer</h3>
                                   </Link>
                          
                                    <Link className='nav--dropdown--a' to='Caricature'>
                                        <img 
                                            className='page-icon' 
                                            src='images/icons/caricature.png' 
                                            alt='caricatureIcon'
                                        />
                                        <h3>Karikatur</h3>
                                   </Link>
                         
                                    <Link className='nav--dropdown--a' to='Landscape'>
                                        <img 
                                            className='page-icon' 
                                            src='images/icons/landscape.png' 
                                            alt='landscapeIcon'
                                        />
                                        <h3>Landskap</h3>
                                    </Link>
                         
                                    <Link className='nav--dropdown--a' to='Pixelart'>
                                        <img 
                                            className='page-icon' 
                                            src='images/icons/pixelart.png' 
                                            alt='pixelIcon'
                                        />
                                        <h3>Pixelart</h3>
                                    </Link>
                            </div> }
                    </div> 

                    <div className='about'>
                        <button className='nav--button'>
                            <Link className='nav--a' to='/About'>
                                <img 
                                    className='nav--category--icon' 
                                    src='images/icons/about.png' 
                                    alt='about_icon.png'
                                />
                            </Link>
                        </button> 
                    </div>

                </div>
            </nav>
    )
}

