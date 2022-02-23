import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import CounterApp from '../CounterApp';

describe('Pruebas en el <CounterApp />', () => {

    let wrapper = shallow(<CounterApp />);

    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    });

    test('Debe mostrar <CounterApp /> correctamente (usando match con snapshot y el valor por defecto)', () => {
        
        expect(wrapper).toMatchSnapshot();

    });

    test('Debe mostrar el valor por defecto de 100, usando el wrapper.find, tomando el elemento html donde se muestra el valor del contador', () => {
        
        const wrapper = shallow(<CounterApp value={100} />);

        const counterText = wrapper.find('h2').text().trim();
        
        expect(counterText).toBe('100');

    });

    test('Debe incrementar el contador +1', () => {

        wrapper.find('button').at(0).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('11');
     });

     test ('Debe resetear el contador', () => {
        const wrapper = shallow(<CounterApp value={105} />);
        
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('105');
     });

     test('Debe decrementar el contador -1', () => {

        wrapper.find('button').at(2).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('9');
     });

});