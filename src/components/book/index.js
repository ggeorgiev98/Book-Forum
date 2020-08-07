import React from 'react';

import styles from './index.module.css';
import image from '../../resources/book.jpg';
const Book = ({title,  author, published, genre}) => {
    return (
        <div className={styles.book}>
            <p>{title}</p>
            <img className={styles.image} src={image} />
            <p>By {author}</p>
            <p>{published} - {genre}</p>
        </div>
    );
};

export default Book;