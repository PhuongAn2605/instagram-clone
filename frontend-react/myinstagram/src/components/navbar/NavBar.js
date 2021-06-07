import React, { Component } from 'react';
import './NavBar.css';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';


import insta_logo from '../../images/logoinsta.png';
import home from '../../images/home.svg';
import message from '../../images/message.svg';
import find from '../../images/find.svg';
import react from '../../images/love.svg';
import pp from '../../images/pp1.png';


class NavBar extends Component {
    render() {
        return (
            <div>
                <div className="navbar__barContent">
                    <Grid container>
                        <Grid item xs={2}></Grid>
                        <Grid item xs={2}>
                            <img className="navbar__logo" src={insta_logo} width="105px"></img>
                        </Grid>
                        <Grid item xs={4}>
                            <input className="navbar__searchBar" type="text" placeholder="Search"></input>
                        </Grid>
                        <Grid item xs={3} style={{ "display": "flex"}}>
                            <img className="navbar__img" src={ home } width="25px"></img>
                            <img className="navbar__img" src={ message } width="25px"></img>
                            <img className="navbar__img" src={ find } width="25px"></img>
                            <img className="navbar__img" src={ react } width="25px"></img>
                            <Avatar className="navbar__img" src={pp} style={{ "maxWidth": "25px", "maxHeight": "25px"}}></Avatar>
                        </Grid>
                        <Grid item xs={1}>

                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default NavBar;