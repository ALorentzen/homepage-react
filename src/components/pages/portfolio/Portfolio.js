import React from 'react'
import { Link } from 'react-router-dom'

export default function Portfolio() {
    return (
        <div className='Portfolio-container'>
            <div className='Portfolio-content'>
                <ul>
                    <Link to='/Anders'/>
                        <li>Anders</li>
                    <Link/>
                    <Link to='/Jerven'/>
                        <li>Jerven</li>
                    <Link/>
                    <Link to='/Characters'/>
                        <li></li>
                    <Link/>
                    <Link to='/Caricature'/>
                        <li>Karikatur</li>
                    <Link/>
                    <Link to='/Landscape'/>
                        <li>Landskap</li>
                    <Link/>
                    <Link to='/PixelArt'/>
                        <li>Pixel art</li>
                    <Link/>
                </ul>
            </div>
        </div>
    )
}


