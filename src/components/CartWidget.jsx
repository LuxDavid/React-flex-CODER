import React from 'react';
import Cart from "../assets/cart.png";

const CartWidget = ({productsCart}) => {
  return (
    <div id='cart-icon-container'>
      <img src={Cart} alt="Cart shop" title='Cart shop' className='cart-icon'/>
      <span className='count-cart'>{productsCart.length}</span>
    </div>

  )
}

export default CartWidget