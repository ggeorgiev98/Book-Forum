import React, { useContext, useState } from 'react';
import { useHistory } from "react-router-dom";
import UserContext from '../../context';

import { SubmitButton } from '../../components/buttons/submit-button';
import Input from '../../components/input';
import Label from '../../components/label';
import Header from '../../components/header';
import Footer from '../../components/footer';


import styles from './index.module.css';
import authenticate from '../../utility/authentication';

const LoginPage = () => {

    const [logUsername, setLogUsername] = useState('');
    const [logPassword, setLogPassword] = useState('');
    const [badLogCredentials, setBadLogCredentials] = useState(false);

    const [regUsername, setRegUsername] = useState('');
    const [regPassword, setRegPassword] = useState('');
    const [reRegPassword, setReRegPassword] = useState('');
    const [badRegCredentials, setBadRegCredentials] = useState(false);

    const context = useContext(UserContext);
    const history = useHistory();

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        setBadLogCredentials(false);

        await authenticate('http://localhost:3001/api/user/login', {
            logUsername,
            logPassword
        }, (user) => {
            context.logIn(user);
            history.push('/');
        }, () => {
            setBadLogCredentials(true);
        })
    };

    const handleRegSubmit = async (e) => {
        e.preventDefault();
        setBadRegCredentials(false);

        await authenticate('http://localhost:3001/api/user/register', {

        }, )

    }



    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.registerContainer}>
                    <form className={styles.form} onSubmit={handleRegSubmit}>
                        <Label type="titleLabel" content="Sign Up" />
                        <div className={styles.inputBox}>
                            <Label type="credentialLabel" content="Your username" />
                            <Input typeOfInput="credential" minlength="8" type="text" id="regUsername" onChange={e => setRegUsername(e.target.value)} />
                        </div>
                        <div className={styles.inputBox}>
                            <Label type="credentialLabel" content="Password" />
                            <Input typeOfInput="credential" minlength="8" type='password' id="regPassword" onChange={e => setRegPassword(e.target.value)} />
                        </div>
                        <div className={styles.inputBox}>
                            <Label type="credentialLabel" content="Repeat password" />
                            <Input typeOfInput="credential" minlength="8" type='password' id="re-password" onChange={e => setReRegPassword(e.target.value)} />
                        </div>
                        <div className={styles.inputBox}>
                            <SubmitButton title="Register" typeOfButton="credential" type="submit" />
                        </div>
                    </form>
                </div>
                <div className={styles.separator}>
                </div>
                <div className={styles.loginContainer}>
                    {
                        badLogCredentials ? <Label type="invalidCredentials" content="Your credentials are invalid!" /> : null
                    }
                    <form className={styles.form} onSubmit={handleLoginSubmit}>
                        <Label type="titleLabel" content="Sign In" />
                        <div className={styles.inputBox}>
                            <Label type="credentialLabel" content="Your username" />
                            <Input typeOfInput="credential" type="text" id="logUsername" onChange={e => setLogUsername(e.target.value)} />
                        </div>
                        <div className={styles.inputBox}>
                            <Label type="credentialLabel" content="Your password" />
                            <Input typeOfInput="credential" type='password' id="logPassword" onChange={e => setLogPassword(e.target.value)} />
                        </div>
                        <div className={styles.inputBox}>
                            <SubmitButton title="Login" typeOfButton="credential" type="submit" />
                        </div>
                    </form>

                </div>

            </div>
            <Footer />
        </>
    )
}

export default LoginPage;