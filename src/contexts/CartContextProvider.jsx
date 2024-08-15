import { useState, createContext, useEffect } from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    function addProduct(product) {
        console.log("invocando el contexto")
        //si el producto ya esta en el carrito, incremento su cantidad.
        if (products.some((prod) => prod.id === product.id)) {
            setProducts(
                products.map((p) => {
                    if (p.id === product.id) {
                        if(p.quantity + product.quantity < p.stock){
                            return { ...p, quantity: p.quantity + product.quantity };
                        }
                        else{
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

    function itemsCount(){
        return products.reduce((acumulated, current)=>{ return acumulated + current.quantity},0)
    }

    useEffect(()=>console.log(itemsCount()),[products])
    return <CartContext.Provider value={{ products, addProduct, itemsCount }}>{children}</CartContext.Provider>;
};
