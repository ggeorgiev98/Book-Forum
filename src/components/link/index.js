import React from 'react';

import styles from './index.module.css';

const Link = ({ boxType, linkType, link,content }) => {
    
    return (
        <div className={styles[`${boxType}-box`]}>
            <a className={styles[`${linkType}-link`]} href={link}>{content}</a>
        </div>
    );
};

export default Link;