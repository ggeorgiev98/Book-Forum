import React from 'react';

import styles from './index.module.css';

const Input = ({typeOfInput, type, onChange, minlength}) => {
    return (
        <input className={styles[`${typeOfInput}`]} 
            type={type || 'text'} 
            onChange={onChange}
            minLength={minlength || ''}
            />
    )
}

export default Input;