import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContextProvider';
import { formatPrice } from '../../helpers/formatPrice';
import './CartPreview.css';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSadCry } from '@fortawesome/free-solid-svg-icons';
import { ItemCount } from '../ItemCount/ItemCount';

export const CartPreview = () => {
    const { products, showCartPreview, setShowCartPreview } = useContext(CartContext);

    return (
        <>
            {showCartPreview && <div className='cart-preview__overlay'></div>}
            <div className='cart-preview'>
                <div className='cart-preview__header'>
                    <h2>Carrtio:</h2>
                    <Button
                        onClick={() => {
                            setShowCartPreview(false);
                        }}
                    >
                        X
                    </Button>
                </div>
                <div className='cart-preview__contents'>
                    {products.length === 0 && (
                        <h2>
                            Estoy vacio <FontAwesomeIcon className='fa-2xl' icon={faFaceSadCry} />
                        </h2>
                    )}
                    {products.map((producto) => {
                        return (
                            <div className='cart-preview__product-div' key={producto.id}>
                                <img
                                    className='cart-preview__product-image'
                                    src={`${producto.image}`}
                                />
                                <h3 className='cart-preview__product-name'>{producto.name}</h3>
                                <span className='cart-preview__product-total'>{`${
                                    producto.quantity
                                } x ${formatPrice(producto.price)} = ${formatPrice(
                                    producto.price * producto.quantity
                                )}`}</span>
                                <div className='cart-preview__item_count'>
                                    <ItemCount data={producto} isSmall={true}></ItemCount>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className='cart-preview__purchase-div'>
                    <Button>Finalizar Compra</Button>
                </div>
            </div>
        </>
    );
};
