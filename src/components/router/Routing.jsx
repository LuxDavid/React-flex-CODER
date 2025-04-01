import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Category from '../../views/Category.jsx';
import Item from '../../views/Item.jsx';
import ItemListContainer from '../ItemListContainer.jsx';

const Routing = () => {
  return (
    <BrowserRouter>

      <Routes>

        <Route path='/' element={<ItemListContainer message="Esta es mi primera entrega"/>} />
        <Route path='/category/:category' element={<Category />} />
        <Route path='/item/:id' element={<Item />} />
      </Routes>

    </BrowserRouter>
  )
}

export default Routing