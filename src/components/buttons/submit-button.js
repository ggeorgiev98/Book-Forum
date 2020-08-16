import React from 'react';

import styles from './index.module.css';

const SubmitButton = ({title, type}) => {
    return (
        <input className={styles.submit} type="submit" value={title} className={styles[`${type}`]}/>
    )
};

export { SubmitButton };