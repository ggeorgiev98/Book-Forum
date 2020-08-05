import React, { Component } from 'react';
import Header from '../../components/header';
import Menu from '../../components/menu';

class HomePage extends Component {
    constructor(props) {
        super(props);

    };

    render() {
        return (
            <div>
                <Header />
                <Menu />

            </div>
        );
    };
};

export default HomePage;