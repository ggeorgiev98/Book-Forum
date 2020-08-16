import React, { useRef } from 'react';

import styles from './index.module.css';
import { SubmitButton } from '../buttons/submit-button';
import Input from '../input';
import Label from '../label';


const LoginDialog = () => {

    const usernameInput = useRef(null);
    const passwordInput = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(`Username: ${usernameInput.current.value}`)
        console.log(`Password: ${passwordInput.current.value}`)
    };

    return (
        <div className={styles.container}>
            <div className={styles.loginContainer}>

                <form onSubmit={handleSubmit}> 
                    <Label type="titleLabel" content="Sign In"/>
                    <div className={styles.inputBox}>
                        <Label type="credentialLabel" content="Your username" />
                        <Input typeOfInput="credential" type="text" ref={usernameInput} />
                    </div>
                    <div className={styles.inputBox}>
                        <Label type="credentialLabel" content="Your password" />
                        <Input typeOfInput="credential" type='password' ref={passwordInput} />
                    </div>
                    <div className={styles.inputBox}>
                        <SubmitButton className={styles.login} title="Login" type="login" />
                    </div>
                </form>
            </div>
        </div>
    )
};

export default LoginDialog;