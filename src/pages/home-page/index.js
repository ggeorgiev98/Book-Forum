import React, { Component } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Content from '../../components/content';
import ContentSearch from '../../components/content-search';
import Books from '../../components/books'
class HomePage extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <React.Fragment>
                <Header />
                <Content>
                    <ContentSearch />
                    <Books />
                </Content>
                <Footer />
            </React.Fragment>
        );
    };
};

export default HomePage;