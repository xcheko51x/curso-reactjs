import '@testing-library/jest-dom';
import { retornaArreglo } from '../../base/07-deses-arr';

describe('Pruebas en archivo 07-deses-arr.js', () => {

    test('Debe retornar un string y un numero', () => {

        const [letras, numeros] = retornaArreglo(); // ['ABC, 123];

        expect(letras).toBe('ABC');
        expect(numeros).toBe(123);

    });

});