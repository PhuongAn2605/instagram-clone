import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import inst_image from '../../images/inst-image.svg';
import inst_logo from '../../images/logoinsta.png';
import fb from '../../images/fb.png';
import appstore from '../../images/app.png';
import playstore from '../../images/play.png';


import './login-page.css';
import SignUp from '../sign-up/SignUp';
import SignIn from '../sign-in/SignIn';

class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLogin: true
        }
    }

    changeLogin = () => {
        if(this.state.isLogin){
            this.setState({ isLogin: false });
        }else{
            this.setState({ isLogin: true });
        }
    }

    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={6}>
                        <div className="loginpage__main">
                            <div>
                                <img src={inst_image} width="454px"></img>
                            </div>
                            <div>
                            <div className="loginpage_rightcomponent">
                                <img className="loginpage__logo" src={inst_logo}></img>
                                <div className="loginpage__signin">
                                    {
                                        this.state.isLogin ? <SignIn /> : <SignUp />
                                    }

                                    <div className="login__ordiv">
                                        <div className="login__dividor"></div>
                                        <div className="login__or">OR</div>
                                        <div className="login__dividor"></div>
                                    </div>

                                    <div className="login__fb"><img src={fb} width="15px" style={{ "marginRight": "5px" }}></img>Log in with Facebook</div>
                                    <div className="login_forgt">Forgot password</div>
                                </div>
                            </div>
                                    
                            <div className="loginpage__signupoption">
                                {
                                this.state.isLogin ? <div className="loginpage__signup">Don't have an account? 
                                <span onClick={this.changeLogin} style={{ "fontWeight": "bold", "color": "#0395F6" }}>Sign up</span></div>
                                : <div className="loginpage__signin">Have an account? 
                                <span onClick={this.changeLogin} style={{ "fontWeight": "bold", "color": "#0395F6" }}>Sign in</span></div>
                                }
                            </div>


                            <div className="loginpage__downloadedSection">
                                <div>Get the app .</div>
                                <div className="loginpage__option">
                                    <img className="loginpage_dwimg" src={appstore} width="136px"></img>
                                    <img className="loginpage_dwimg" src={playstore} width="136px"></img>
                                </div>
                            </div>
                        </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}></Grid>

                </Grid>
            </div>
        );
    }
}

export default LoginPage;