import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../contexts/CartContextProvider';
import { formatPrice } from '../../helpers/formatPrice';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';
import { useOrder } from '../../hooks/useOrder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import './Checkout.css';

export const Checkout = () => {
    //consumo el contexto del carrito
    const { setShowCartPreview, products, getFinalPrice, itemsCount, clearCart } =
        useContext(CartContext);

    // uso un custom hook para interecatuar con firebase
    const [orderId, waitingOrder, placeOrder] = useOrder();

    //creo un estado para los datos del formulario
    const [formValues, setFormValues] = useState({
        name: '',
        sureName: '',
        phoneNumber: '',
        email: '',
        emailCopy: '',
    });

    //estados para verificar que los email coincidan y el formulario este completo
    const [areEmailsDifferent, setAreEmailsDifferent] = useState(false);
    const [isFormComplete, setIsFormComplete] = useState(false);

    //oculto el carrito cuando se carga el componente.
    useEffect(() => {
        setShowCartPreview(false);
    }, []);

    //valido el formulario y los emails cuando cambia algun campo del formulario
    useEffect(() => {
        setIsFormComplete(Object.values(formValues).every((value) => value !== ''));
        setAreEmailsDifferent(formValues.email != formValues.emailCopy);
    }, [formValues]);

    function handleChange(e) {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        e.stopPropagation();
        if (formValues.email === formValues.emailCopy && isFormComplete) {
            placeOrder({ ...formValues, ...products });
            clearCart();
        }
    }

    //si el carrito esta vacio y no estamos esperando el id de la orden
    if (products.length === 0 && orderId === null && !waitingOrder)
        return (
            <div className='empty-cart'>
                <h1>Tu carrito esta vacio, agrega productos y volve mas tarde</h1>
                <Button as={NavLink} to={'/'}>
                    Ver Productos
                </Button>
            </div>
        );

    //si estamos esperando el id del orden o ya lo tenemos
    if (orderId != null || waitingOrder) {
        return (
            <div className='order-div'>
                <h1>Gracias por tu compra</h1>
                <h2>
                    {'Tu numero de pedido es: '}
                    {orderId || <FontAwesomeIcon icon={faSpinner} spin className='fa-sm' />}
                </h2>
                <Button as={NavLink} to={'/'}>
                    Ver Productos
                </Button>
            </div>
        );
    }
    return (
        <div className='main'>
            <h1 className='main__title'>Tu Compra</h1>
            <div className='products-list'>
                {products.map((p) => {
                    return (
                        <div key={p.id} className='products-list_product'>
                            <h2>{p.name}</h2>
                            <img className='products-list_product-image' src={p.image} />
                            <h3 className='products__product-quantity'>{`Cantidad: ${p.quantity}`}</h3>
                            <h3 className='products__product-price'>{`Precio Unitario: ${formatPrice(
                                p.price
                            )}`}</h3>
                            <h3 className='products__product-subtotal'>{`Subtotal: ${formatPrice(
                                p.quantity * p.price
                            )}`}</h3>
                        </div>
                    );
                })}
            </div>
            <div className='resume'>
                <h2>Resumen:</h2>
                <h3>{`Cantidad de articulos: ${itemsCount()}`}</h3>
                <h3>{`Total: ${formatPrice(getFinalPrice())}`}</h3>
            </div>
            <Form onSubmit={handleSubmit} className='form'>
                <h2>Completa tus datos:</h2>
                <Form.Group className='mb-3' controlId='name'>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        onChange={handleChange}
                        type='text'
                        name='name'
                        required
                        placeholder='Ej: José'
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='sureName'>
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                        onChange={handleChange}
                        type='text'
                        name='sureName'
                        required
                        placeholder='Ej: Andres Fernzandez'
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='phoneNumber'>
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control
                        onChange={handleChange}
                        type='number'
                        name='phoneNumber'
                        required
                        placeholder='+54 123456789'
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        onChange={handleChange}
                        name='email'
                        type='email'
                        placeholder='JoseAndres@Email.com'
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='emailCopy'>
                    <Form.Label>Copia Email</Form.Label>
                    <Form.Control
                        isInvalid={areEmailsDifferent}
                        onChange={handleChange}
                        type='email'
                        name='emailCopy'
                        placeholder='JoseAndres@Email.com'
                    />
                    <Form.Control.Feedback type='invalid'>
                        Los emails deben ser iguales
                    </Form.Control.Feedback>
                </Form.Group>
                <Button
                    disabled={!isFormComplete || areEmailsDifferent}
                    variant='primary'
                    type='submit'
                >
                    Finalizar Pedido
                </Button>
            </Form>
        </div>
    );
};
