import React, {useContext} from 'react';
import Cart from "../assets/cart.png";
import { CartContext } from '../context/cartContext.jsx';

const CartWidget = () => {

  const {cart} = useContext(CartContext);
  const totalProducts= cart.reduce((sum, prod) => sum + prod.quantityAdded, 0);
  let count = totalProducts;
  
  return (
    <div id='cart-icon-container'>
      <img src={Cart} alt="Cart shop" title='Cart shop' className='cart-icon'/>
      <span className='count-cart'>{count}</span>
    </div>

  )
}

export default CartWidget