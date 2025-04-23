import React from 'react';
import CartWidget from '../CartWidget.jsx';
import {Link, NavLink} from "react-router-dom"; 
import logo from '../../assets/logo.jpg';

const NavBar = () => {

  return (

    <div id='header'>
      
      <div id='logo'>
      <Link to="/" className='categorie'>
      <img src={logo} alt="logo-web" title='logo-web' className='header__logo'/>
      <span>VStore</span>
      </Link>
      </div>

      <div id='navContainer'>
        <ul id='menu'>
          <li><NavLink to="/category/leds" className='categorie'>Leds</NavLink></li>
          <li><NavLink to="/category/mouse" className='categorie'>Mouses</NavLink></li>
          <li><NavLink to="/category/monitor" className='categorie'>Monitores</NavLink></li>
          <li><NavLink to="/category/pc" className='categorie'>PC</NavLink></li>
          <li><NavLink to="/category/keyboard" className='categorie'>Teclados</NavLink></li>
          <li><NavLink to="/category/horn" className='categorie'>Bocinas</NavLink></li>
          <li><NavLink to="/cart"><CartWidget/></NavLink></li>

        </ul>

      </div>

    </div>
  )
}

export default NavBar