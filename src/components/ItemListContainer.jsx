import React, { useEffect, useState } from 'react'
import Layout from './Layout/Layout.jsx';
import { getProducts, getCategories } from '../helpers/getProducts.jsx';
import ItemList from './ItemList.jsx';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

  const {category} = useParams();

  const [products, setProducts] = useState([]);

  const productsFiles = async () => {

    const productN = await getProducts(category);

    setProducts(productN);
  }

  useEffect(() => {
    productsFiles();
    getCategories();
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