import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo_23.png'

var x = 0;
function hola (x){
  console.log("wtf");
  
  if (x === 0) {
    document.getElementById("cont1").style.display = "block";
    document.getElementById("rootri").style.display = "block";
  }

  if (x === 1) {
    document.getElementById("cont1").style.display = "none";
    document.getElementById("rootri").style.display = "none";
  }
}
export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <Link to='/'>
          <img src={logo} alt='cocktail db logo' className='logo' />
        </Link>
        <h1>PHOTO GALLERY</h1>
        <ul className='nav-links'>
          <li>
            <Link to='/' onClick={()=>hola(0)}>home</Link>
          </li>
          <li>
            <Link to='/about' onClick={()=>hola(1)}>about</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
