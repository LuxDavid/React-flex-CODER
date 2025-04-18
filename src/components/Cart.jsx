import React from 'react';
import Layout from '../components/Layout/Layout.jsx'
import EmptyCart from '../components/EmptyCart.jsx';

const Cart = () => {
    return (
        <Layout>

            <div id='container-cart'>
            <EmptyCart/>
            </div>

            {/* {carrito.length === 0 ? (<EmptyCart />)

                : (
                    <div id='container-carrito'>
                        {carrito.map((prod) => <ProductCart item={prod.item} quantity={prod.quantityAdded} />)}
                    </div>
                )}

            <div id='container-total'></div> */}

        </Layout>
    )
}

export default Cart