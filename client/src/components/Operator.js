import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

function Operator() {
    const classes = useStyles();
    return (
        <React.Fragment>
                    <Grid item md={6} sm={12} xs={12}>
                        <Paper className={classes.paper}>

                        </Paper>
                    </Grid>
        </React.Fragment>
    )
}

export default Operator;