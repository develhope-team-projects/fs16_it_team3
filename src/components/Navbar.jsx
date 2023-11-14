import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <ul className='nav-menu'>
           
            <li><Link to="/mens">Uomo</Link></li>
            <li><Link to="/womens">Donna</Link></li>
            <li><Link to="/scarpe">Scarpe</Link></li>
        </ul>
    </div>
  )
}

export default Navbar