import { useParams } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import MOCK_DATA from "../assets/json/MOCK_DATA"
import { Product } from './Product';
import { useData } from '../hooks/useData';
import { filterByCategory } from '../helpers/filterProducts';

export default function ItemListContainer (){
    

    const {categoryId} = useParams()
    //recupero los productos con un custom hook
    const{loading, data} = useData(MOCK_DATA, filterByCategory(categoryId) ,categoryId)

    //creo los componentes para los productos
    const prods = data.map(
        (producto) =>
            <Product key={producto.id}
                productId={producto.id}
                name={producto.name}
                description={producto.description}
                image={producto.image}/>
    )
    
    //creo spinners para mostrar durante la carga de los productos
    const placeHolders = [
        <FontAwesomeIcon key={1} icon={faSpinner} spin className='fa-7x product-loading-spinner'/>,
        <FontAwesomeIcon key={2} icon={faSpinner} spin className='fa-7x product-loading-spinner'/>,
        <FontAwesomeIcon key={3} icon={faSpinner} spin className='fa-7x product-loading-spinner'/>,
    ]
    
    return(
        <>
        <div className='div-productos'>            
            {(()=>{
                if(loading) return placeHolders
                if(prods.length == 0) return <h2>No se encotraron productos</h2>
                return prods
            })()}
        </div>
        </>
    )
}