import React, { useState , useContext} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import UIForm from '../components/UIForm'
import Operator from '../components/Operator'

import CreateOperatorContext from "../utils/context/CreateOperatorContext";

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
    const [operator, setOperator] = useState({});
    return (
        <CreateOperatorContext.Provider
        value={{
            operator,
            setOperator,
        }}>

            <div className={classes.root}>
                <Grid container spacing={1}>
                    <UIForm />
                    <Operator />
                </Grid>
            </div>

        </CreateOperatorContext.Provider>
    )
}

export default DevPanel;