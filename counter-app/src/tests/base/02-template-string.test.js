import '@testing-library/jest-dom';
import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en 02-template-string.js', () => {

    test('getSaludo debe regresar Hola xcheko51x', () => { 

        const nombre = 'xcheko51x';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre);

     });

     // getSaludo debe retornar Hola Sergio si no hay argumento nombre 
     test('getSaludo debe regresar Hola Sergio si no hay argumento nombre', () => { 

        const saludo = getSaludo();

        expect(saludo).toBe('Hola Sergio');

     });

});