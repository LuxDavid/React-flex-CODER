import React, { useContext } from 'react';
import Layout from '../components/Layout/Layout.jsx'
import EmptyCart from '../components/EmptyCart.jsx';
import Table from 'react-bootstrap/Table';
import { CartContext } from '../context/cartContext.jsx';

const Cart = () => {

    const { cart: items, totalAmount, cleanCart, removeProduct } = useContext(CartContext);

    return (
        <Layout>

            <div id='container-cart'>

                {(items.length === 0 && totalAmount  <= 0) ? (<EmptyCart />)

                    : ( <>
                    <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th id='table__delete'></th>
                        </tr>
                    </thead>
                    <tbody>
                    {items.map(({item, quantityAdded}) => {
                        return(
                            <tr key={item?.id}>
                            <td>{item?.title}</td>
                            <td>${item?.price}</td>
                            <td>{quantityAdded}</td>
                            <td id='delete__icon' onClick={()=> removeProduct(item?.id)}>X</td>
                        </tr>
                        );
                    })}
                        
                    </tbody>
                </Table>
                <div id='container-total'>
                <p>TOTAL: ${totalAmount} </p>
                </div>

                    <div className='container__buttons'>
                    <button id='button__cleanCart' onClick={cleanCart}>Limpiar Carrito</button>
                    <button id='button__finish'>Terminar compra </button>
                    </div>
                    </>

                    )}

            </div>

        </Layout>
    )
}

export default Cart