import React, { Component } from 'react';
import './MainContent.css';
import Grid from '@material-ui/core/Grid';
import StatusBar from '../status-bar/StatusBar';
import MainPage from '../main-page/MainPage';
import InfoSection from '../info-section/InfoSection';
import Suggestions from '../suggestions/Suggestions';

class MainContent extends Component {
    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={6} className="maincontent__container">
                        <div>
                            <StatusBar />
                            <MainPage />
                        </div>
                    </Grid>
                    <Grid item xs={2}>
                        <InfoSection />
                        <Suggestions />
                    </Grid>
                    <Grid item xs={2}></Grid>

                </Grid>
            </div>
        );
    }
}

export default MainContent;