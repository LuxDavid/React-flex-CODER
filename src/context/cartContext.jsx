import { createContext, useEffect, useState, useContext } from 'react';

export const cartContext = createContext([]);

export const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    // useEffect(() => {
    //     const amount = cart
    //         .map((product) => parseInt(product.item.price) * product.quantityAdded)
    //         .reduce((partialSum, a) => partialSum + a, 0);
    //     setTotalAmount(amount);
    // }, [cart]);

    function removeProduct(productId) {
        cart((prevState) => prevState.filter((product) => product.item.id !== productId));
    }

    function cleanCart() {
        setCart([]);
        setTotalAmount(0);
    }

    function isInCart(productId) {
        return Boolean(cart.find((product) => product.item.id === productId));
    }

    function addProduct(product, quantity) {
        const added = isInCart(product.id);
        if (added) {
            setCart((prevState) =>
                prevState.map((productAdded) =>
                    productAdded.item.id === product.id
                        ? {
                            ...productAdded,
                            quantityAdded: productAdded?.quantityAdded + quantity,
                        }
                        : productAdded
                )
            );
        } else {
            setCart((prevState) =>
                prevState.concat({ item, quantityAdded: quantity })
            );
        }
    }

    return (
        <cartContext.Provider value={{
            cart,
            totalAmount,
            cleanCart,
            removeProduct,
            isInCart,
            addProduct,
        }}>
            {children}
        </cartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(cartContext);
    return context;
  }