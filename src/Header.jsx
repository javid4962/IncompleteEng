import React from 'react'
import { Link } from 'react-router-dom'
import ParentComponent from './components/Engineering'

function Header() {
    return (
        <div className='header-container '>
            {/* <img src={img} alt="" className='logo' /> */}
            <ul className='list'>
                <li className='list-item text-white'><Link to='/'>Engineering</Link></li>
                <li className="list-item text-white"><Link to='/pharmacy'>Pharmacy</Link></li>
            </ul>
        </div>
    )
}

export default Header
