import { useContext, useState } from 'react';
import { CartContext } from '../../contexts/CartContextProvider';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';

import './ItemCount.css';

export const ItemCount = ({ data, isSmall = false }) => {
    const { addProduct, getProductQuantity, removeProduct } = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);

    const handleIncrese = () => {
        quantity < data.stock && setQuantity(quantity + 1);
    };

    const handleDecrese = () => {
        quantity > 1 && setQuantity(quantity - 1);
    };

    const handleAdd = () => {
        addProduct({ ...data, quantity });
    };

    const handleRemoveAll = () => {
        setQuantity(1);
        removeProduct(data);
    };

    return (
        <div className='item-count'>
            <Button
                onClick={handleDecrese}
                className='item-count__button-add'
                size={isSmall && 'sm'}
                variant='primary'
            >
                -
            </Button>
            <span className='item-count__quantity'>{quantity}</span>
            <Button
                onClick={handleIncrese}
                className='item-count__button-remove'
                size={isSmall && 'sm'}
                variant='primary'
            >
                +
            </Button>
            <Button
                onClick={handleAdd}
                className='item-count__button-cart'
                size={isSmall && 'sm'}
                variant='success'
            >
                <FontAwesomeIcon
                    icon={faCartPlus}
                    className='fa-xl datail-container__cart-icon bg-success'
                />
            </Button>
            {!!getProductQuantity(data) && (
                <Button
                    onClick={handleRemoveAll}
                    className='item-count__button-empty'
                    size={isSmall && 'sm'}
                >
                    <FontAwesomeIcon icon={faTrashCan} />
                </Button>
            )}
        </div>
    );
};
