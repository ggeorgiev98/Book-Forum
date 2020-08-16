import React, { useRef } from 'react';
import { SubmitButton } from '../buttons/submit-button.js';
import { genreSearch, paramSearch } from '../../utility/content-searchUtil.js';
import styles from './index.module.css';
import Input from '../input/index.js';

const ContentSearch = () => {
    const genreInput = useRef(null)
    const paramInput = useRef(null)
    const textInput = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(`Genre: ${genreInput.current.value}`)
        console.log(`Param: ${paramInput.current.value}`)
        console.log(`Text: ${textInput.current.value}`)
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
                <Input type='text' typeOfInput="search" ref={textInput} /> - <SubmitButton title="Search"/>
            </div>
        </form>
    );
};


export default ContentSearch;