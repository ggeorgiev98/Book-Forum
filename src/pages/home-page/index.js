import React, { Component } from 'react';
import Header from '../../components/header';
import Menu from '../../components/menu';
import Footer from '../../components/footer';
import Content from '../../components/content';

class HomePage extends Component {
    constructor(props) {
        super(props);

    };

    render() {
        return (
            <div>
                <Header />
                <Menu />
                <Content />
                <Footer />
            </div>
        );
    };
};

export default HomePage;