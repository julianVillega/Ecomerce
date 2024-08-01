import { useEffect, useState } from 'react';

export const useData = (dataSource, filterFunction, ...dependencies) => {
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
                if (filterFunction === undefined) setData(response)                
                else setData(filterFunction(response))
        })
        .finally(() => setLoading(false));
    
    }, [...dependencies])

    return { loading, data }
}