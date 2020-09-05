import React, { useRef, useState } from 'react';
import { SubmitButton } from '../buttons/submit-button.js';
import { genreSearch, paramSearch } from '../../utility/content-searchUtil.js';
import Input from '../input/index.js';

import styles from './index.module.css';

const ContentSearch = () => {
    const genreInput = useRef();
    const paramInput = useRef();
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(`Genre: ${genreInput.current.value}`)
        console.log(`Param: ${paramInput.current.value}`)
        console.log(text);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.container}>
            <div className={styles.box}>
                <label htmlFor='genre'>Choose a genre: </label>
                <select ref={genreInput} className={styles.select}>
                    {
                        genreSearch.map((x, index) => {
                            return (
                                <option value={x.value} label={x.label} key={index} />
                            )
                        })
                    }
                </select>
            </div>
            <div className={styles.box}>
                <label htmlFor='param'>Search by: </label>
                <select ref={paramInput} className={styles.select}>
                    {
                        paramSearch.map((x, index) => {
                            return (
                                <option value={x.value} label={x.label} key={index} />
                            )
                        })
                    }
                </select>
            </div>
            <div className={styles.box}>
                <Input key='input' type='text' typeOfInput="search" value={text} onChange={e => setText(e.target.value)} /> - <SubmitButton title="Search" typeOfButton="search" />
            </div>
        </form>
    );
};


export default ContentSearch;