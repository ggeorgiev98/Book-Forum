import React, { Component} from 'react';

import styles from './index.module.css';

class ContentSearch extends Component{
    constructor(props) {
        super(props);
        this.state = {
            genre: '',
            author: '',
            seacrhField: ''
        };
    };

    render() {

        return (
            <form className={styles.container}>
                <div className={styles.box}>
                    <label htmlFor='genre'>Choose a genre: </label>
                    <select id='genre' className={styles.select}>
                        <option label="" />
                        <option label='Fantasy'/>
                        <option label='Fantastic'/>
                        <option label='Novel'/>
                        <option label='Drama'/>
                        <option label='Criminal'/>
                        <option label='History'/>
                        <option label='Historical novel'/>
                    </select>
                </div>
                <div className={styles.box}>
                    <label htmlFor='param'>Search by: </label>
                    <select id='param' className={styles.select}>
                        <option label='Title'/>
                        <option label='Author'/>
                        <option label='Year of publishing'/>
                    </select>
                </div>
                <div className={styles.box}>
                    <input className={styles.input} type='text' value="Search..." /> - <input type="button" value="Search"/>
                </div>
            </form>
        );
    };
};

export default ContentSearch;