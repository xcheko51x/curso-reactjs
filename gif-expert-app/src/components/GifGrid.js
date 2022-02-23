import React from 'react';
// import React, {useState, useEffect} from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({categoria}) => {
    

    const {data, loading} = useFetchGifs(categoria);

    // const api_key = 'NPxw6sbQccNiGFgG8siR83uRxaIJ2yXH';
    // const url = 'https://api.giphy.com/v1/gifs/search?';
    // const limite = '10';

    // const [imagenes, setImagenes] = useState([]);

    // USE EFFECT SOLO SE INVOCA UNA VEZ AL INICIO Y CUANDO CAMBIA LA CATEGORIA
    // useEffect(() => {
    // //   getGifs();
    //     getGifs(categoria)
    //     .then(imagenes => {
    //         setImagenes(imagenes);
    //     });
    // }, [categoria]);
    
    
    // const getGifs = async() => {

    //     const respuesta = await fetch(`${url}q=${categoria}&limit=${limite}&api_key=${api_key}`);
    //     const {data} = await respuesta.json();

    //     const gifs = data.map(img => {
    //         return {
    //             id: img.id,
    //             titulo: img.title,
    //             url: img.images.downsized_medium.url
    //         };
    //     });

    //     // console.log(gifs);
    //     setImagenes(gifs);
    // };
    
    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{categoria}</h3>

            {loading && <p className='animate__animated animate__flash'>Cargando . . .</p>}

            <div className='card-grid'>
            {
                data.map(img => (
                    <GifGridItem 
                        key={img.id}
                        {...img}
                    />
                ))
            }
            </div>

            {/* <div className='card-grid'>
                {
                    imagenes.map(img => (
                        <GifGridItem 
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div> */}
        </>
    )
}
