import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Pruebas archivo 05-funciones.js', () => { 

    test('getUser debe retornar un objeto', () => {
        
        const userTest = {
            uid: 'ABC123',
            username: 'xcheko51x'
        }
        const user = getUser();

        expect(user).toEqual(userTest); // toEqual comprueba objetos
    });

    // getUsuarioActivo debe retornar un objeto
    test('getUsuarioActivo debe retornar un objeto', () => { 

        const nombre = 'xcheko51x';

        const userActivoTest = {
            uid: 'ABC567',
            username: nombre
        }

        const userActivo = getUsuarioActivo(nombre);

        expect(userActivo).toEqual(userActivoTest);

     });

 });