import React from 'react';

import styles from './index.module.css';

const Input = ({typeOfInput, type}) => {
    return (
        <input className={styles[`${typeOfInput}`]} type={type} />
    )
}

export default Input;