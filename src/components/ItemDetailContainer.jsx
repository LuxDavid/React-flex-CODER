import React, { useEffect, useState } from 'react';
import Layout from './Layout/Layout.jsx';
import { getProduct } from '../helpers/getProducts.jsx';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail.jsx';

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  const productsFile = async () => {

    const productInfo = await getProduct(id);

    setProduct(productInfo);
  }

  useEffect(() => {
    productsFile();
  }, [id])

  return (
    <Layout>
    
        <ItemDetail product={product} />

    </Layout>
  )
}

export default ItemDetailContainer