import React, { Component } from 'react';
import './InfoSection.css';

import imgSrc from "../../images/pp1.png";
import { Avatar } from '@material-ui/core';

class InfoSection extends Component {
    constructor(props){
        super(props);
        this.state = {
            userName: null,
            name: null
        }
    }

    componentDidMount(){
        this.getData();
    }

    getData = () => {
        fetch('http://localhost:8080/users/' + JSON.parse(localStorage.getItem("users")).uid)
        // fetch('http://localhost:8080/users/FttWx3XyDJeashHSLbOk6mHURKg1')
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            this.setState({
                userName: data.userName,
                name: data.name
            })
        })
    }
    render() {
        return (
            <div>
                <div className="info__container">
                    <Avatar src={imgSrc} className="info__image" />
                    <div className="info__content">
                        <div className="info__username">{this.state.userName}</div>
                        <div className="info__description">{this.state.name}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default InfoSection;