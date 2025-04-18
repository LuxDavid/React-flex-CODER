import React from 'react';
import Layout from './Layout/Layout.jsx';

const CheckoutForm = () => {
    return (
        <Layout>
            <div className='form-container'>

                <form className='checkout'>

                    <label for="nombre" className='label__checkout'>Nombre</label>
                    <input type="text" name='name' placeholder='Ingresa tu nombre completo' className='checkout__input' />

                    <label for="email" className='label__checkout'>Email</label>
                    <input type="email" name='email' placeholder='Ingresa tu correo electronico' className='checkout__input' />

                    <label for="cellphone" className='label__checkout'>Telefono</label>
                    <input type="text" name='cellphone' placeholder='Ingresa tu numero de telefono' className='checkout__input' />

                    <input type="button" value="Limpiar Formulario" className='checkout__button checkout__button--clean' />

                    <input type="submit" value="Terminar compra" className='checkout__button' />

                </form>

            </div>
        </Layout>
    )
}

export default CheckoutForm