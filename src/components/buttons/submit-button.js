import React from 'react';

import styles from './index.module.css';

const SubmitButton = ({ title, typeOfButton }) => {
    return (
        <button className={styles[`${typeOfButton}`]}>{title}</button>
    )
};

export { SubmitButton };