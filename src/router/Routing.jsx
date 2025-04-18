import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer.jsx';
import ItemDetailContainer from '../components/ItemDetailContainer.jsx';
import Cart from '../components/Cart.jsx';
import CheckoutForm from '../components/CheckoutForm.jsx';

const Routing = () => {
  return (
    <BrowserRouter>

      <Routes>

        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/category/:category' element={<ItemListContainer/>} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<CheckoutForm/>} />
      </Routes>

    </BrowserRouter>
  )
}

export default Routing