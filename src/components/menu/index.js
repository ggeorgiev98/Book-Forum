import React from 'react';
import menuUtility from '../../utility/menuUtility.js'
import styles from './index.module.css';
import LinkComponent from '../link/index.js';

const Menu = () => {
    const menuContent = menuUtility();
    return (
        <div className={styles.menu}>
            {
                menuContent.map((x, index) => {
                    return (
                        <LinkComponent boxType='menu' linkType='menu' href={x.link} content={x.content} key={index}/>
                    );
                })
            }
        </div>
    );
};

export default Menu;