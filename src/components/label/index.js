import React from 'react';

import styles from './index.module.css';

const Label = ({type, content}) => {
    return (
        <label className={styles[`${type}`]}>{content}</label>
    );
};

export default Label;