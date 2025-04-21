import { createContext, useEffect, useState, useContext } from 'react';

export const CartContext = createContext([]);

export const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        const amount = cart
            .map((product) => parseInt(product.item.price) * product.quantityAdded)
            .reduce((partialSum, a) => partialSum + a, 0);
        setTotalAmount(amount);
    }, [cart]);

    function removeProduct(productId) {

        const quantityInCart = cart.find(cart => cart.item.id === productId);

        if (quantityInCart.quantityAdded > 1) {

            setCart((prevState) =>
                prevState.map((productAdded) =>
                    productAdded.item.id === productId
                        ? {
                            ...productAdded,
                            quantityAdded: productAdded?.quantityAdded -1 ,
                        }
                        : productAdded
                )
            );
        } else {
            setCart((prevState) => prevState.filter((product) => product.item.id !== productId));
        }
    }

    function cleanCart() {
        setCart([]);
        setTotalAmount(0);
    }

    function isInCart(productId) {
        return Boolean(cart.find((product) => product.item.id === productId));
    }

    function addProduct(item, quantity) {

        const added = isInCart(item.id);

        if (added) {
            setCart((prevState) =>
                prevState.map((productAdded) =>
                    productAdded.item.id === item.id
                        ? {
                            ...productAdded,
                            quantityAdded: productAdded?.quantityAdded + quantity,
                        }
                        : productAdded
                )
            );
        } else {
            setCart((prevState) => [...prevState, { item, quantityAdded: quantity }]);
        }
    }

    return (
        <CartContext.Provider value={{
            cart,
            totalAmount,
            cleanCart,
            removeProduct,
            isInCart,
            addProduct,
        }}>
            {children}
        </CartContext.Provider>
    )
}