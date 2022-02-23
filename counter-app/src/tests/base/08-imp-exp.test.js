import '@testing-library/jest-dom';
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de Heroes', () => {

    test('Debe retornar un heroe por ID', () => {

        const id = '2';
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(heroe => heroe.id === id);

        expect(heroe).toEqual(heroeData);
    });

    test('Debe retornar undefined si heroe no existe', () => {

        const id = '10';
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);
    });

    test('Debe retornar un arreglo con los heroes de DC', () => {

        const owner = 'DC';
        const heroesOwner = getHeroesByOwner(owner);
        const heroesData = heroes.filter(heroe => heroe.owner === owner);

        console.log(heroesData);
        expect(heroesOwner).toEqual(heroesData);

    });

    test('Debe retornar un arreglo con los heroes de Marvel y el length del arreglo', () => {

        const owner = 'Marvel';
        const heroesOwner = getHeroesByOwner(owner);
        const heroesData = heroes.filter(heroe => heroe.owner === owner);

        console.log(heroesData);
        expect(heroesOwner.length).toBe(2);

    });

    

});