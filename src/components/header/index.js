import React from 'react';
import bookshelf from '../../resources/bookshelf.jpg'
import styles from './index.module.css';

const Header = () => {
    return (
        <header className={styles.header} >
            <div className={styles.navBar}>
                <a className={styles.link}>Home</a>
            </div>
            <div className={styles.navBar}>
                <a className={styles.link}>Login</a>
            </div>
            <div className={styles.navBar}>
                <a className={styles.link}>Register</a>
            </div>
            <div className={styles.navBar}>
                <a className={styles.link}>Post a book</a>
            </div>
        </header>
    );
};

export default Header;