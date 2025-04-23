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
          <li><NavLink to="/category/smartphones" className='categorie'>Celulares</NavLink></li>
          <li><NavLink to="/category/Laptops" className='categorie'>Laptops</NavLink></li>
          <li><NavLink to="/category/tablets" className='categorie'>Tablets</NavLink></li>
          <li><NavLink to="/category/mobile-accessories" className='categorie'>Accesorios Movil</NavLink></li>
          <li><NavLink to="/cart"><CartWidget/></NavLink></li>

        </ul>

      </div>

    </div>
  )
}

export default NavBar