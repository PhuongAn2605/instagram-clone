import React, { Component } from 'react';
import MainContent from '../main-content/MainContent';
import NavBar from '../navbar/NavBar';

class HomePage extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <MainContent />
            </div>
        );
    }
}

export default HomePage;