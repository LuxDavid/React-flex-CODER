import React from 'react';
import Button from 'react-bootstrap/Button';


const ItemCount = () => {
  return (
    <>
      <div id="product-buttons">

        <button>-</button>
        <span id="product-count">1</span>
        <button>+</button>

      </div>

      <Button variant="outline-danger" className="addCart">Agregar al carrito</Button>
    </>
  )
}

export default ItemCount 