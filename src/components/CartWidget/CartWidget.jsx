import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

import './CartWidget.css';
import { useContext } from 'react';

import { CartContext } from '../../contexts/CartContextProvider';

export default function CartWidget() {
    const {itemsCount} = useContext(CartContext)

    return (
        <div className='cart-widget'>
            <div>
                <FontAwesomeIcon icon={faCartArrowDown} className='fa-xl' />
                <div className='cart-items-count'>
                    <span>{itemsCount()}</span>
                </div>
            </div>
        </div>
    );
}
