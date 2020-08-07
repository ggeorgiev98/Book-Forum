import React from 'react';

import styles from './index.module.css';
import ContentSearch from '../content-search';
import Books from '../books';

const Content = () => {
    return (
        <div className={styles.content}>
            <ContentSearch />
            <Books />
        </div>
    );
};

export default Content;