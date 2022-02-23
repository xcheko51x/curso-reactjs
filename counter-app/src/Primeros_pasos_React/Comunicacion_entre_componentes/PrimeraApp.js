import React from 'react';

const PrimeraApp = ({saludo = 'Hola Mundo'}) => {

    // const saludo = "Hola Mundo";

    // const arreglo = [1, 2, 3, 4];

    // const objeto = {
    //     nombre: 'xcheko51x',
    //     edad: 33
    // }

    return (
        <>
            <h1>{saludo}</h1>
            <p>Mi primera aplicación</p>
            {/* <h1>{arreglo}</h1> */}
            {/* <pre>{ JSON.stringify(objeto, null, 3) }</pre> */}
        </>
    );
}