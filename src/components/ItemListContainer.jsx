import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ItemListContainer ({greeting}){
    return(
        <>
        <Container className='hero-container'>
            <Row className='align-items-center'>
                <Col className='text-center'>
                    <h1>{greeting}</h1>
                </Col>
            </Row>
        </Container>
        </>
    )
}