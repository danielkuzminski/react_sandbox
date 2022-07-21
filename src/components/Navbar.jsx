import React from 'react'
import './Navbar.css'
import {NavLink} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='navigation'>
     <h1 className='nav-logo'>movies list</h1>
     <div className='nav-links'>
      <NavLink exact to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/movies'>Movies</NavLink>
     </div> 
    </nav>
  )
}
