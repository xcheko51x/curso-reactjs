import React, {useState}from 'react';
import { AddCategoria } from './components/AddCategoria';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    // const categorias = ['One Punch Man','Samurai X','Dragon Ball'];
    const [categorias, setcategorias] = useState(['One Punch Man']);  

    // const handleAdd = () => {
    //     // setcategorias([...categorias, 'Pokemon']);
    //     setcategorias(categ => [...categ, 'Pokemon']);
    // };

    return (
        <>
            <h2> GifExpertApp</h2>
            <AddCategoria setcategorias={setcategorias} />
            <hr />
            <ol>
                {
                    categorias.map((categoria) => {
                        return( 
                            <GifGrid
                            key={categoria} 
                            categoria={categoria} />
                        )
                        // return <li key={categoria}>{categoria}</li>;
                    })
                }
            </ol>
        </>
    );
};

export {
    GifExpertApp
}