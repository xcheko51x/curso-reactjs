import { useState, useEffect } from "react";
import {getGifs} from '../helpers/getGifs';

export const useFetchGifs  = (categoria) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        
        getGifs(categoria)
        .then(imagenes => {
        
            setTimeout(() => {
                
                setState({
                    data: imagenes,
                    loading: false
                });

            }, 3000);

        });

    }, [categoria]);

    return state;
};