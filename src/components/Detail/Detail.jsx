import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faSpinner } from '@fortawesome/free-solid-svg-icons'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import MOCK_DATA from "../assets/json/MOCK_DATA"
import { useData } from "../hooks/useData";

import {findById} from"../helpers/filterProducts";

export const Detail = () => {
    const { productId } = useParams()


    const {loading, data} = useData(MOCK_DATA,findById(Number(productId)),productId)
    if (loading) {
        return (
            <Container className="d-flex justify-content-center my-auto">
                <FontAwesomeIcon icon={faSpinner} spin className="fa-5x" />
            </Container>
        )
    }
    if (data === undefined) return <h1>data no encontrado</h1>
    return (
        <div className="datail-container">
            <div className="datail-container__detail">
                <h1 className="datail-container__title">{data.name}</h1>
                <img className="datail-container__image" src={`${data.image}`} />
                <p className="datail-container__description">{data.description}</p>
                <Button variant="primary" className="datail-container__add-to-cart">Comprar <FontAwesomeIcon icon={faCartPlus} className="fa-xl" /></Button>
            </div>
        </div>
    )
} 