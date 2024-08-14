import { useEffect, useState } from 'react';
import { getDoc, getFirestore, doc } from 'firebase/firestore';

export const useProduct = (productId) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        //obtengo la coleccion de firestore
        const db = getFirestore();
        const docRef = doc(db, 'items', productId);

        //recupero los productos de la categoria, o todos caso no se especifique una categoria
        getDoc(docRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    setData({ id: snapshot.id, ...snapshot.data() });
                } else {
                    setData(undefined);
                }
            })
            .catch((error) => {
                console.log(error);
                setData(null);
            })
            .finally(() => {
                setLoading(false);
                return { loading, data };
            });
    }, [productId]);
    return { loading, data };
};
