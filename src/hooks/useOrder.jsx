import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useState } from 'react';

export const useOrder = () => {
    const [orderId, setOrderId] = useState(null);
    const [waitingOrder, setWaitingOrder] = useState(false);
    const placeOrder = (order) => {
        setWaitingOrder(true);
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
            .then((snapshot) => {
                setOrderId(snapshot.id);
            })
            .catch(() => {
                console.log('ocurrio un error al generar la orden');
            })
            .finally(() => setWaitingOrder(false));
    };
    return [orderId, waitingOrder, placeOrder];
};
