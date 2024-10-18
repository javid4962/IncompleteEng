import React from 'react'
import img from './img/KLU.jpg'

function Header() {
    return (
        <div className='header-container'>
            <img src={img} alt="" className='logo' />
            <ul className='list'>
                <li className='list-item'>Home</li>
                <li className='list-item'>Home</li>
                <li className='list-item'>Home</li>
                <li className='list-item'>Home</li>
                <li className='list-item'>Home</li>
            </ul>
        </div>
    )
}

export default Header
