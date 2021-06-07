import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import './StatusBar.css';

import statusImg from '../../images/pp1.png';
import uploadImage from '../../images/statusadd.png';

class StatusBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            statusList: []
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        let data = [
            {
                "username": "anphuong@26",
                "imageURL": "../../images/pp1.png"
            },
            {
                "username": "testing",
                "imageURL": "../../images/pp2.png"
            },
            {
                "username": "anphuong@26",
                "imageURL": "../../images/pp1.png"
            },
            {
                "username": "testing",
                "imageURL": "../../images/pp2.png"
            },
            {
                "username": "testing",
                "imageURL": "../../images/pp2.png"
            },
            {
                "username": "anphuong@26",
                "imageURL": "../../images/pp1.png"
            },
            {
                "username": "testing",
                "imageURL": "../../images/pp2.png"
            },
            {
                "username": "anphuong@26",
                "imageURL": "../../images/pp1.png"
            },
            {
                "username": "testing",
                "imageURL": "../../images/pp2.png"
            }
        ];
        // this.setState({
        //     statusList: data
        // })
        // for(let i=0; i<data.length; i++){
            this.setState({
                // statusList: [...this.state.statusList, data]
                statusList: data
            })
        // }
        // console.log(this.state.statusList);
    }

    render() {
        return (
            <div>
                <div className="statusbar__container">
                    <img src={uploadImage} className="status__upload" width="55px" height="55px" />
                    {
                        
                        this.state.statusList.map(item => (
                            // console.log(this.state.statusList);
                            <div className="status">
                                <Avatar className="statusbar__status" src={statusImg} />
                                <div className="statusbar__text">{item.username}</div>
                            </div>
                        ))
                    }

                </div>
            </div>
        );
    }
}

export default StatusBar;