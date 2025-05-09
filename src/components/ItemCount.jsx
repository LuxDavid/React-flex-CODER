import React from 'react';
import Button from 'react-bootstrap/Button';

const ItemCount = ({count, handleCount, addProduct, product, quantity, stock}) => {

  return (
    <>
      <div id="product-buttons">

        <button onClick={()=> handleCount("rest")}>-</button>
        <span id="product-count">{count}</span>
        <button onClick={()=> handleCount("plus")}>+</button>

      </div>

      <Button variant="outline-danger" className="addCart" disabled={stock === 0} onClick={()=> addProduct(product,quantity)}>Agregar al carrito</Button>
    </>
  )
}

export default ItemCount 