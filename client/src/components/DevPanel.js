import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import UIForm from './UIForm'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

function DevPanel() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.root}>
                <Grid container spacing={1}>
                    <UIForm />
                    <Operator />
                </Grid>
            </div>
        </React.Fragment>
    )
}

export default DevPanel;