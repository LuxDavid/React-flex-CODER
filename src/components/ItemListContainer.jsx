import React, { useEffect, useState } from 'react'
import Layout from './Layout/Layout.jsx';
import ItemList from './ItemList.jsx';
import { useParams } from 'react-router-dom';
import { getItems } from '../firebase/database.js';
import { useNavigate } from 'react-router-dom';

const ItemListContainer = () => {

  const {category} = useParams();

  const [products, setProducts] = useState([]);

   const navigate = useNavigate();

  const productsFiles = async () => {

       const productN = await getItems(category);
        setProducts(productN);
        if(productN.length === 0){
          navigate('/');
        }

  }

  useEffect(() => {
    productsFiles();
  }, [category])

  return (
    <Layout>

      <div id='container-products'>
        <ItemList products={products} />
      </div>

    </Layout>
  )
}

export default ItemListContainer