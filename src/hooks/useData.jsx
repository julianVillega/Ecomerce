import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

export const useData = (category) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        //obtengo la coleccion de firestore
        const db = getFirestore();
        const itemsCollection = collection(db, 'items');

        //recupero los productos de la categoria, o todos caso no se especifique una categoria
        getDocs(
            category ? query(itemsCollection, where('category', '==', category)) : itemsCollection
        )
            .then((snapshot) => {
                setData(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            })
            .catch((error) => {
                console.log(error);
                setData(null);
            })
            .finally(() => {
                setLoading(false);
                return { loading, data };
            });
    }, [category]);
    return { loading, data };
};
