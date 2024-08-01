import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from "react-router-dom"

import "./Product.css"

export const Product = ({name, description, image, productId}) => {
    return(
        <Card>
            <div className='d-flex justify-content-center product-image-div'>                
                <Card.Img variant="top" src={image} className='product-image'/>                
            </div>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text className='product-description'>
                    {description.slice(0, 50)}
                </Card.Text>
                <Button as={NavLink} to={`/detail/${productId}`} variant="primary">Detalles</Button>
            </Card.Body>
        </Card>
    )
}