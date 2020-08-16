import React, { Component } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import LoginDialog from '../../components/login-dialog';
import Content from '../../components/content';

class LoginPage extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <React.Fragment>
                <Header />
                <Content >
                    <LoginDialog />
                </Content>
                <Footer />
            </React.Fragment>
        );
    };
};

export default LoginPage;