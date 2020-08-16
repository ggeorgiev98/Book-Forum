import React from 'react';
import LinkComponent from '../link';
import navigationUtility from '../../utility/navigationUtil'
import styles from './index.module.css';

const Header = () => {
    const type = 'nav';
    const linksContent = navigationUtility();



    return (
        <nav className={styles.navigation} >
            {
                linksContent.map((x) => {
                    return (
                        <LinkComponent
                            boxType='nav'
                            linkType='nav'
                            link={x.link}
                            content={x.content}
                            key={x.content}
                        />
                    );
                })
            }
        </nav>
    );
};

export default Header;



