import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import MOCK_DATA from "../assets/json/MOCK_DATA"
import { Product } from './Product';

export default function ItemListContainer (){
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()

    useEffect(()=>{
        //simulo el uso de una API con una promesa
        new Promise((resolve, reject)=>{
            setLoading(true)
            setTimeout(() => resolve(MOCK_DATA), 1000);
        })
        .then(
            (response) => {
                //filtro los resultados por categoria
                if(categoryId === undefined){
                    setProductos(response)
                }
                else{
                    setProductos(response.filter(prod => prod.category == categoryId))
                }
            }).finally(() => setLoading(false));
    },[categoryId])


    //creo los componentes para los productos
    const prods = productos.map((producto)=><Product key={producto.id} productId={producto.id} name={producto.name} description={producto.description} image={producto.image}/>)
    
    //creo spinners para mostrar durante la carga de los productos
    const placeHolders = new Array(
        <FontAwesomeIcon key={1} icon={faSpinner} spin className='fa-7x product-loading-spinner'/>,
        <FontAwesomeIcon key={2} icon={faSpinner} spin className='fa-7x product-loading-spinner'/>,
        <FontAwesomeIcon key={3} icon={faSpinner} spin className='fa-7x product-loading-spinner'/>,
    )


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