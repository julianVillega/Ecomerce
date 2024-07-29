import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Product } from './Product';
import { useEffect, useState } from 'react';

import MOCK_DATA from "../assets/json/MOCK_DATA"
import { useParams } from 'react-router-dom';

export default function ItemListContainer (){
    const [productos, setProductos] = useState([])
    const {categoryId} = useParams()

    useEffect(()=>{
        //simulo el uso de una API con una promesa
        new Promise((resolve, reject)=>{
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
            })
    },[categoryId])


    //Construo una grilla de bootstrap con los productos.
    const prods = productos.map((producto)=><Product key={producto.id} name={producto.name} description={producto.description} image={producto.image}/>)

    return(
        <>
        <div className='div-productos'>
            {prods}
        </div>
        </>
    )
}