import { Avatar } from '@material-ui/core';
import React, { Component } from 'react';
import './Suggestions.css';

import imgSrc from '../../images/pp1.png';

class Suggestions extends Component {
    render() {
        return (
            <div className="suggestions__container">
                <div className="suggestions__header">Suggestions For You</div>
                <div className="suggestions_body">
                    <div className="suggestions__friends">
                        <Avatar src={imgSrc} className="suggestions__image" />
                        <div className="suggestions__username">Friend 1</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Suggestions;