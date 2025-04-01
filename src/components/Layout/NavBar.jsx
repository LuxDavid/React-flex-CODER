import React from 'react';
import CartWidget from '../CartWidget.jsx';
import {Link} from "react-router-dom"; 

const NavBar = () => {
  return (

    <div id='header'>
      
      <div id='logo'>
      <Link to="/" className='categorie'><span>Logo</span></Link>
      </div>

      <div id='navContainer'>
        <ul id='menu'>
          <li><Link to="/category/smartphones" className='categorie'>Celulares</Link></li>
          <li><Link to="/category/Laptops" className='categorie'>Laptops</Link></li>
          <li><Link to="/category/tablets" className='categorie'>Tablets</Link></li>
          <li><Link to="/category/mobile-accessories" className='categorie'>Accesorios Movil</Link></li>
          <li><Link to="/"><CartWidget /></Link></li>

        </ul>

      </div>

    </div>
  )
}

export default NavBar