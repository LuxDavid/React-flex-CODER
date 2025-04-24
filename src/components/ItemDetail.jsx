import React, {useState, useContext, us} from 'react';
import ItemCount from './ItemCount.jsx';
import { CartContext } from '../context/cartContext.jsx';
import { useGetItemImg } from '../firebase/database.js';

const ItemDetail = ({ product }) => {

  const [count, setCount]= useState(1);

  const {addProduct} = useContext(CartContext);

  function handleCount(operation){
    if(operation === "plus") setCount(count+1);
    if(operation === "rest" && count >=2) setCount(count-1);
  }

  const image= useGetItemImg(product.thumbnail);

  return (
    <div id='container-detail'>

      <div id="detail-product" key={product.id}>

        <img src={image} alt={product.name} />

        <h3>{product.name}</h3>

        <p>{product.description}</p>
        <p>{product.price}</p>

          <ItemCount count={count} handleCount={handleCount} addProduct={addProduct} product={product} quantity={count}/>

        <span id="available-product">Disponible</span> 

      </div>
    </div>
  )
}

export default ItemDetail