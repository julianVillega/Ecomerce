import { useEffect, useState } from 'react';

export const useData = (dataSource, categoryId) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(() => {
        //simulo el uso de una API con una promesa
        new Promise((resolve) => {
            setLoading(true)
            setTimeout(() => resolve(dataSource), 1000);
        })
        .then((response) => {
                //filtro los resultados por categoria
                if (categoryId === undefined) setData(response)
                else setData(response.filter(prod => prod.category == categoryId))
        })
        .finally(() => setLoading(false));
    
    }, [categoryId])

    return { loading, data }
}