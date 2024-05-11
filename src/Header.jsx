import React from 'react'
import './App.css';
import './style.css';
import Logo from './logo.png';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="header">
    <img src={Logo} alt="" />
    <Link to={'/'} style={{textDecoration:"none", color:'black'}}><p>Home</p></Link>
    <Link  to={'/'}style={{textDecoration:"none", color:'black'}}><p>Categories</p></Link>
    <Link to={'/'} style={{textDecoration:"none", color:'black'}}><p>About Us</p></Link>
  </div>
  )
}

export default Header