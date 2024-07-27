import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Product = ({name, description, image}) => {
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button variant="primary">Detalles</Button>
            </Card.Body>
        </Card>
    )
}