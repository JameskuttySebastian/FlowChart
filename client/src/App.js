import'bootstrap/dist/css/bootstrap.min.css';
// import $ from'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from "react";
import { Container } from "@material-ui/core";
import AppBar from './components/AppBar';
import DevPanel from './components/DevPanel';
import { makeStyles } from '@material-ui/core/styles';





const useStyles = makeStyles((theme) => ({
    divitem: {
        paddingTop: 10,
    }
}));

function App() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Container>
                <AppBar />
                <div className={classes.divitem}>
                    <DevPanel/>
                </div>
            </Container>
        </React.Fragment>
    )
}

export default App;