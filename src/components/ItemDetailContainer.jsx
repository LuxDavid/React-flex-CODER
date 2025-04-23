import React, { useEffect, useState } from 'react';
import Layout from './Layout/Layout.jsx';
// import { getProduct } from '../helpers/getProducts.jsx';
import { getItem } from '../firebase/database.js';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail.jsx';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const productFile = async () => {

    const productInfo = await getItem(id);

    setProduct(productInfo);
  }

  useEffect(() => {
    productFile();
    
  }, [id])

  return (
    <Layout>
    
        <ItemDetail product={product} />

    </Layout>
  )
}

export default ItemDetailContainer