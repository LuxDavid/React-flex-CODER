import React from 'react';
import Button from 'react-bootstrap/Button';

const ItemDetail = ({ product }) => {

  return (
    <div id='container-detail'>

      <div id="detail-product" key={product.id}>

        <img src={product.thumbnail} alt={product.title} />

        <h3>{product.title}</h3>

        <p>{product.description}</p>
        <p>{product.price}</p>

        <div id="product-buttons">

          <button>-</button>
          <span id="product-count">1</span>
          <button>+</button>

        </div>

        <Button variant="outline-danger" className="addCart">Agregar al carrito</Button>

        <span id="available-product">Disponible</span>

      </div>
    </div>
  )
}

export default ItemDetail