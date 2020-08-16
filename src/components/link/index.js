import React from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.css';

const LinkComponent = ({ boxType, linkType, link,content }) => {
    return (
        <div className={styles[`${boxType}-box`]}>
            <Link className={styles[`${linkType}-link`]} to={link}>{content}</Link>
        </div>
    );
};

export default LinkComponent;