import React, { Component } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Content from '../../components/content';

class HomePage extends Component {
    constructor(props) {
        super(props);

    };

    render() {
        return (
            <React.Fragment>
                <Header />
                <Content />
                <Footer />
            </React.Fragment>
        );
    };
};

export default HomePage;