import React, {useContext, useEffect} from 'react';
import Layout from './Layout/Layout.jsx';
import { CartContext } from '../context/cartContext.jsx';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = () => {

    const { cart: items, totalAmount} = useContext(CartContext);
    const navigate= useNavigate();

    const validateCart= () => {

        (items.length === 0 && totalAmount  === 0) && navigate('/');
    }

    useEffect(()=>{
        validateCart()
    }, []);

    const finishSale = (e) => {
        e.preventDefault();

        let data = e.target;

        let userData = {
            name: data.name.value.trim(),
            email: data.email.value.trim(),
            cellphone: data.cellphone.value.trim().replace(/\s+/g, '')
        }

        let nameCheckout= (!/\d/.test(userData.name) && userData.name.length >= 3 );
        let emailCheckout= (/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(userData.email));
        let cellphoneCheckout = (/^[0-9]+$/.test(userData.cellphone) && (userData.cellphone.length >= 10 && userData.cellphone.length <= 15));

        if( nameCheckout && emailCheckout && cellphoneCheckout){
            console.log(true);
        }else{
            console.log(false);
        }
    }

    return (
        <Layout>
            <div className='form-container'>

                <form className='checkout' onSubmit={finishSale}>

                    <label for="nombre" className='label__checkout'>Nombre</label>
                    <input type="text" name='name' placeholder='Ingresa tu nombre completo' className='checkout__input' />

                    <label for="email" className='label__checkout'>Email</label>
                    <input type="email" name='email' placeholder='Ingresa tu correo electronico' className='checkout__input' />

                    <label for="cellphone" className='label__checkout'>Telefono</label>
                    <input type="text" name='cellphone' placeholder='Ingresa tu numero de telefono' className='checkout__input' />

                    <input type="submit" value="Terminar compra" className='checkout__button'/>
                </form>

            </div>
        </Layout>
    )
}

export default CheckoutForm