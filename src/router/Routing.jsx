import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer.jsx';
import ItemDetailContainer from '../components/ItemDetailContainer.jsx';
import Cart from '../components/Cart.jsx';
import CheckoutForm from '../components/CheckoutForm.jsx';

const Routing = () => {
  return (

      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/category/:category' element={<ItemListContainer/>} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<CheckoutForm/>} />
      </Routes>

  )
}

export default Routing