import React from 'react';

import styles from './index.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.quote}>"A room without books is like a body without a soul."<br/>Cicero</p>
        </footer>
    );
};

export default Footer;