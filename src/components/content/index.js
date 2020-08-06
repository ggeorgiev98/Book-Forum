import React from 'react';

import styles from './index.module.css';
import ContentSearch from '../content-search';

const Content = () => {
    return (
        <div className={styles.content}>
            <ContentSearch />
        </div>
    );
};

export default Content;