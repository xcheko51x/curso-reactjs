// PROMESAS
import {getHeroeById} from './bases/08-imp-exp';

// const promesa = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         const heroe = getHeroeById(3);
//         resolve(heroe);
//         reject('No se encontro el heroe');
//     }, 2000);

// });

// promesa.then((heroe) => {
//     console.log(heroe);
// })
// .catch((error) => {
//     console.warn(error);
// });

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const heroe = getHeroeById(id);
            if(heroe) {
                // resolve('heroe');
                resolve(heroe);
            } else {
                // reject('No se encontro el heroe');      
                reject('No se encontro el heroe');          
            }
        }, 1500);
    
    });
};

// getHeroeByIdAsync(2)
// .then(heroe => console.log(heroe))
// .catch(error => console.warn('No se encontro el heroe'));

// getHeroeByIdAsync(6)
// .then(console.log)
// .catch(console.warn);

export {
    getHeroeById,
    getHeroeByIdAsync
}