import React, { useRef, useContext } from 'react';
import { useHistory } from "react-router-dom";

import styles from './index.module.css';
import { SubmitButton } from '../buttons/submit-button';
import Input from '../input';
import Label from '../label';
import UserContext from '../../context';

const LoginDialog = () => {
    const context = useContext(UserContext);
    const history = useHistory();

    const usernameInput = useRef('');
    const passwordInput = useRef('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const username= `${usernameInput.current.value}`;
        const password = `${passwordInput.current.value}`;
        console.log(username, password)
        fetch('http://localhost:3001/api/user/login', {
            username,
            password
        }, (user) => {
            context.logIn(user);
            history.push('/');
        }, (e) => {
            
        })
    };

    return (
        <div className={styles.container}>
            <div className={styles.loginContainer}>

                <Label type="invalidCredentials" content="Your credentials are invalid!" />

                <form onSubmit={handleSubmit}> 
                    <Label type="titleLabel" content="Sign In"/>
                    <div className={styles.inputBox}>
                        <Label type="credentialLabel" content="Your username" />
                        <Input typeOfInput="credential" type="text" forwardRef={usernameInput} />
                    </div>
                    <div className={styles.inputBox}>
                        <Label type="credentialLabel" content="Your password" />
                        <Input typeOfInput="credential" type='password' forwardRef={passwordInput} />
                    </div>
                    <div className={styles.inputBox}>
                        <SubmitButton className={styles.login} title="Login" typeOfButton="login" />
                    </div>
                </form>
            </div>
        </div>
    )
};

export default LoginDialog;