import React from "react";
import { PropTypes } from 'prop-types';
import "./Form.css"

import { FaPlus } from 'react-icons/fa';

export default function Form({ handleChange, handleSubmit, novaTarefa, clearInput }) {
    return (
        <form onSubmit={handleSubmit} action="#" className='form'>
        <input onChange={handleChange} /* onKeyUpCapture={pressingEnt} */ type="text" value={novaTarefa} />
        <button type="submit" className="clear" onClick={clearInput}>X</button>
        <button type='submit' className="add"> <FaPlus/></button>
    </form>
    );
}

Form.propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    clearInput: PropTypes.func.isRequired,
    novaTarefa: PropTypes.string.isRequired
}