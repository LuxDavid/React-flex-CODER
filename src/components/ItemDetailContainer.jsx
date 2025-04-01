import React,{ useEffect, useState }  from 'react';
import Layout from './Layout/Layout';
import { getProduct } from '../helpers/getProducts';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const {id} = useParams();

  const [product, setProduct] = useState({});

  const productsFile = async () => {

    const productInfo = await getProduct(id);

    console.log(productInfo);
    

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