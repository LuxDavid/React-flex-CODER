import React from 'react';
import ItemCount from './ItemCount.jsx';

const ItemDetail = ({ product }) => {

  return (
    <div id='container-detail'>

      <div id="detail-product" key={product.id}>

        <img src={product.thumbnail} alt={product.title} />

        <h3>{product.title}</h3>

        <p>{product.description}</p>
        <p>{product.price}</p>

          <ItemCount/>

        <span id="available-product">Disponible</span> 

      </div>
    </div>
  )
}

export default ItemDetail