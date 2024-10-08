import { useParams } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { Product } from '../Product/Product';
import { useData } from '../../hooks/useData';
import './ItemListContainer.css';

export default function ItemListContainer() {
    const { categoryId } = useParams();
    //recupero los productos con un custom hook
    const { loading, data } = useData(categoryId);

    //creo los componentes para los productos
    const prods = data.map((producto) => (
        <Product
            key={producto.id}
            productId={producto.id}
            name={producto.name}
            description={producto.description}
            image={producto.image}
            price={producto.price}
        />
    ));

    //creo spinners para mostrar durante la carga de los productos
    const placeHolders = [
        <FontAwesomeIcon key={1} icon={faSpinner} spin className='fa-7x product-loading-spinner' />,
        <FontAwesomeIcon key={2} icon={faSpinner} spin className='fa-7x product-loading-spinner' />,
        <FontAwesomeIcon key={3} icon={faSpinner} spin className='fa-7x product-loading-spinner' />,
    ];

    return (
        <>
            <div className='div-productos'>
                {(() => {
                    if (loading) return placeHolders;
                    if (prods.length == 0) return <h2>No se encotraron productos</h2>;
                    return prods;
                })()}
            </div>
        </>
    );
}
