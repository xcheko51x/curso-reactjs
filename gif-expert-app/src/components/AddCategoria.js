import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategoria = ({setcategorias}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if(inputValue.trim().length > 0){
            setcategorias(categ => [inputValue,...categ]);
            setInputValue('');
        }

        
    };

  return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text"
            value={inputValue}
            onChange={handleInputChange}
        />
    </form>
  )
}

AddCategoria.propTypes = {
    setcategorias: PropTypes.func.isRequired
}

export {
    AddCategoria
}