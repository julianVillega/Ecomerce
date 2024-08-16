import { useParams } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import Container from 'react-bootstrap/Container';

import './Detail.css';
import { useProduct } from '../../hooks/useProduct';
import { formatPrice } from '../../helpers/formatPrice';
import { ItemCount } from '../ItemCount/ItemCount';

export const Detail = () => {
    const { productId } = useParams();
    const { loading, data } = useProduct(productId);
    if (loading) {
        return (
            <Container className='d-flex justify-content-center my-auto'>
                <FontAwesomeIcon icon={faSpinner} spin className='fa-5x' />
            </Container>
        );
    }
    if (data === undefined) return <h1>No se encontro el producto</h1>;
    return (
        <div className='datail-container'>
            <div className='datail-container__detail'>
                <h1 className='datail-container__title'>{data.name}</h1>
                <img className='datail-container__image' src={`${data.image}`} />
                <p className='datail-container__description'>{data.description}</p>
                <h6>
                    <span>Stock: {formatPrice(data.price)}</span>
                </h6>
                <span>{`Stock: ${data.stock}`}</span>
                <div className='datail-container__add-to-cart'>
                    <ItemCount data={data}></ItemCount>
                </div>
            </div>
        </div>
    );
};
