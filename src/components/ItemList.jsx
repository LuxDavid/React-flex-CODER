import React from 'react';
import Item from './Item.jsx';

const ItemList = ({products}) => {
  return (
    <>
    {products.map((product) => (
      <Item product={product}/>
    ))}    
    </>
  );
}

export default ItemList