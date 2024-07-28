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
        new Promise((resolve, reject)=>{
            setTimeout(() => resolve(MOCK_DATA), 1000);
        })
        .then(
            (response) => {
                if(categoryId === undefined){
                    setProductos(response)
                }
                else{
                    setProductos(response.filter(prod => prod.category == categoryId))
                }
            })
    },[categoryId])

    const rows = []
    for(let i = 0; i< productos.length; i = i + 3){
        let terna = productos.slice(i, i + 3);
        terna = terna.map((producto) => {             
            return(
            <Col xs={3} key={producto.id}>
                <Product name={producto.name} description={producto.description} image={producto.image}/>
            </Col>)
        })
        if(terna.length < 3){
            let numberOfDummyCols = 3 - terna.length;
            terna = [...terna, ...Array(numberOfDummyCols).fill(null).map((_, index)=><Col xs={3} key={`dummy-${index}`}></Col>)]
        }
        rows.push(
            <Row key={i} className='my-5 justify-content-evenly'>{terna}</Row>
        )
    }

    return(
        <>
        <Container  className='gy-5'>
            {rows}
        </Container>
        </>
    )
}