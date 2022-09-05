import React from 'react'
import './SideHeader.scss'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

function SideHeader() {
const [navLink, setNavLink] = useState(true)
  function navClickHandler(){
    setNavLink(false)
  }
  return (
    <div>

<nav className="navbar navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
  
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>


    <div className="offcanvas offcanvas-start text-bg-dark" tab-index="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Mylo</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3" >
        <li className="nav-item">
            <NavLink className={`nav-link   ${ navLink? "active" : ""}`} to="/" >Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="true" to="slider" onClick={navClickHandler}>Slider</NavLink>
          </li>
         
          <li className="nav-item">
            <NavLink className="nav-link" to="rotating-arrow" onClick={navClickHandler}>Rotating Arrow</NavLink>
          </li>
        </ul>
      </div>
    </div>


  </div>
</nav>

    </div>
  )
}

export default SideHeader