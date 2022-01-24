    import React from 'react'
    import './webDevelopmentStyle.css'
    import {  AddItem, Card, Counter, 
              RoundedImg, Todo, CTA,
              Callout, ChangeBoxes
            } 
    from '../../../index' 
    
        import { Link } from 'react-router-dom'


    function WebDevelopment() {
        return (
            <div className='webDev--container' >
    
                <div className='card-container'>
                    <div className='card-content'>
                        <Card cardColor='blue'  height={50} width={50} />
                        <Card cardColor='red'   height={50} width={50} />
                        <Card cardColor='green' height={50} width={50} />
                    </div>
                </div>

                <div className='card-container'>
                    <Link 
                        className='travel--link' 
                        to='/TravelForm'>
                            <h1 
                                className='link--header'>
                                    Travel form
                            </h1>
                            <img 
                                className='travel--container--bckr'
                                src='/images/background_images/photo-1436491865332-7a61a109cc05.jpg' 
                                alt='photo14364918653327a61a109cc05'
                            /> 
                    </Link>
                </div>

                <div 
                    id="card--container--meme--div" 
                    className='card-container'
                >
                    <Link 
                        className='meme-link' 
                        to='/MemeGenerator'
                    >
                        <h2 
                            className='meme--h2'>
                                meme generator
                        </h2>
                        <img  
                            className='meme-logo-img'
                            src="/images/unsorted/rinrrbyBT.png"
                            alt="rinrrbyBT.png" 
                        />
                    </Link>
                </div>

                <div 
                    className='card-container'
                >
                    <CTA>
                        <h1>
                            This is an important CTA
                        </h1>
                        <button>
                            Click me!
                        </button>
                    </CTA>
                    <CTA>
                        <form 
                            className='cta-form'
                        >
                            <input 
                                type="email" 
                                placeholder="Enter email address here"
                            />
                            <br />
                            <button>
                                Submit
                            </button>
                        </form>
                    </CTA>
                </div>

                <div 
                    className='card-container'
                >
                    <Callout>
                        <h2>
                            This is a {`<Callout>`} component w/ React children 
                        </h2>
                        <p>
                            Email, Image and Info 
                        </p>
                    </Callout>

                    <Callout>
                        <img 
                            src="https://picsum.photos/id/102/4320/3240" 
                            width="100%" 
                            alt='https://picsum.photos/id/102/4320/3240'/>
                        <figcaption>
                            Just look at those sparkling raspberries!
                        </figcaption>
                    </Callout>

                    <Callout>
                        <h2>
                            Give us your email. We definitely won't sell it to anyone.
                        </h2>
                        <input 
                            className='callout-email' 
                            type="email" 
                            placeholder="Enter Email"
                        />
                        <button>
                            Sign me up!
                        </button>
                    </Callout>
                </div>

                <div className='card-container'>
                    <RoundedImg 
                        className='rounded-img-container' 
                        src='./images/portfolio/characters/whistle.png' 
                        alt='roundedImg' 
                        borderRadius={80} 
                    />
                </div>

                <div 
                    id="todo--container" 
                    className='card-container'
                >
                    <Todo />
                </div>

                <div 
                    className='card-container'
                >
                    <Counter />
                </div>

                <div 
                    className='card-container'
                >
                    <Link 
                        className='airBnb-link' 
                        to='/TravelComponent'
                    >
                        <img 
                            className='airBnb-link--img' 
                            src='./images/icons/Airbnb_Logo_Bélo.svg.png' 
                            alt='airBnb-link'
                        />
                    </Link>
                </div>
                
                <div 
                    className='card-container'
                >
                    <AddItem 
                        className='addItem--container'
                    />
               </div>

               <div 
                    className='card-container'
                >
                    <ChangeBoxes />
                </div>

                <div 
                    className='card-container'
                >
                    <Link 
                        className='form--component--link' 
                        to='/Form' 
                    >
                        Form
                    </Link> 
                </div>

                <div 
                    className='card-container'
                >
                    <Link 
                        className='form--component--link' 
                        to='/ExerciseForm' 
                    >
                        test form
                    </Link> 
                </div>
                
                <div 
                    className='card-container'
                    id='card--sw--container'
                >
                    <Link 
                        className='starWarsApi--link' 
                        to='/StarWarsApi' 
                    >
                             <img 
                                className='starWarsApi--logo'
                                src='/images/unsorted/starwars-logo.png' 
                                alt='photo14364918653327a61a109cc05'
                            /> 
                             API
                    </Link> 
                </div>
                <div 
                    id="windowTracker--link--card--container"
                    className='card-container'
                >
                    <Link 
                        className='windowTracker--link' 
                        to='/Tracker' 
                    >
                       Window tracker 
                    </Link> 
                </div>
            </div>
            
        )
    }


    export default WebDevelopment
