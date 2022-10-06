import React from 'react'
import {Link} from 'react-router-dom'

import './navbar.css'



const Navbar = () => {

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <h1 className="head-text">Rental_Homez</h1>
        {/* <img src={images.logo} alt="logo"/> */}
      </div>
      <ul className='app__navbar-links'>
        {['Home', 'About', 'Property', 'Contact'].map((item) => (
          <li className='app__flex p-text' key={`link-${item}`}>
            <div/>
            <Link to={`/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
          
      </div>
    </nav>
  )
}

export default Navbar