import React from 'react';
import Link from '../link';
import navigationUtility from '../../utility/navigationUtil.js';

import styles from './index.module.css';

const Header = () => {
    const linksContent = navigationUtility();
    return (
        <nav className={styles.navigation} >
            {
                linksContent.map((x, index) => {
                    return (
                        <Link boxType='nav' linkType='nav' href={x.link} content={x.content} key={index}/>
                    );
                })
            }    
        </nav>
    );
};

export default Header;