import React from 'react';

import styles from './index.module.css';

const SubmitButton = () => {
    return (
        <input className={styles.submit} type="submit" value="Search" />
    )
};

export { SubmitButton };