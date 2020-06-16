import React, { useState, useContext } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import CreateOperatorContext from "../utils/context/CreateOperatorContext";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

function Operator() {
    const { operator } = useContext(CreateOperatorContext);
    const classes = useStyles();
    return (
        <React.Fragment>
                    <Grid item md={6} sm={12} xs={12}>
                        <Paper className={classes.paper}>

                            <p>{JSON.stringify(operator)}</p> 
                            {console.log(operator)     }                    
                            
                        </Paper>
                    </Grid>
        </React.Fragment>
    )
}

export default Operator;