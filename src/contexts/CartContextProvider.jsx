import { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [showCartPreview, setShowCartPreview] = useState(false);

    function addProduct(product) {
        //si el producto ya esta en el carrito, incremento su cantidad.
        if (products.some((prod) => prod.id === product.id)) {
            setProducts(
                products.map((p) => {
                    if (p.id === product.id) {
                        if (p.quantity + product.quantity < p.stock) {
                            return { ...p, quantity: p.quantity + product.quantity };
                        } else {
                            return { ...p, quantity: p.stock };
                        }
                    }
                    return p;
                })
            );
        }
        //si el producto no esta en el carrito, lo agrego.
        else {
            setProducts([...products, product]);
        }
    }

    function removeProduct(product) {
        setProducts(products.filter((prod) => prod.id != product.id));
    }

    function itemsCount() {
        return products.reduce((acumulated, current) => {
            return acumulated + current.quantity;
        }, 0);
    }

    function getProductQuantity(product) {
        return products.find((p) => p.id === product.id)?.quantity || 0;
    }

    function getFinalPrice(){
        return products.reduce((acc, current) => acc + current.quantity * current.price, 0)
    }

    function clearCart(){
        setProducts([])
    }
    return (
        <CartContext.Provider
            value={{
                products,
                addProduct,
                itemsCount,
                showCartPreview,
                setShowCartPreview,
                getProductQuantity,
                removeProduct,
                getFinalPrice,
                clearCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
