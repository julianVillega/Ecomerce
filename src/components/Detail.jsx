import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faSpinner } from '@fortawesome/free-solid-svg-icons'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import MOCK_DATA from "../assets/json/MOCK_DATA"

export const Detail = () => {
    const { productId } = useParams()
    const [producto, setProducto] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        new Promise((resolve) => {
            setLoading(true)
            setTimeout(() => resolve(MOCK_DATA), 1000)
        })
            .then((productos) => {
                setProducto(productos.find((prod) => prod.id === Number(productId)))
                setLoading(false)
            })
    }, [productId])

    if (loading) {
        return (
            <Container className="d-flex justify-content-center my-auto">
                <FontAwesomeIcon icon={faSpinner} spin className="fa-5x" />
            </Container>
        )
    }
    if (producto === undefined) return <h1>producto no encontrado</h1>
    return (
        <div className="datail-container">
            <div className="datail-container__detail">
                <h1 className="datail-container__title">{producto.name}</h1>
                <img className="datail-container__image" src={`${producto.image}`} />
                <p className="datail-container__description">{producto.description}</p>
                <Button variant="primary" className="datail-container__add-to-cart">Comprar <FontAwesomeIcon icon={faCartPlus} className="fa-xl" /></Button>
            </div>
        </div>
    )
} 