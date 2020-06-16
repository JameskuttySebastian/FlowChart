//hooks
import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";

//form controls
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import CreateOperatorContext from "../utils/context/CreateOperatorContext";

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
          margin: theme.spacing(1),
          marginTop: 20,
          display: "flex",
          width: "100%",
        },
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));



function UIForm() {
    const classes = useStyles();
    const { setOperator } = useContext(CreateOperatorContext);
    const { register, handleSubmit, errors, reset } = useForm();

    var inputCoutn = 0;
    var outputCount = 0;

    const addNode = (type) => {
        console.log(type);
    }

    const onSubmit = (data) => {
        console.log(data);
    }

    const handleColourThemeChange = (event) => {
        console.log(event.target.value);
    }

    return (
        <React.Fragment>
            <Grid item md={6} sm={12} xs={12}>
                <Paper className={classes.paper}>
                    <h2>Create Operator</h2>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className={classes.root}
                        style={{ margin: "auto", textAlign: "justify", paddingTop: 100 }}
                    >
                        <TextField
                            id="title"
                            variant="outlined"
                            label="Operator Title"
                            type="text"
                            name="title"
                            inputRef={register({ required: true, minLength: 4 })}
                        />
                        <TextField
                            id="description"
                            variant="outlined"
                            label="Description"
                            name="description"
                            inputRef={register}
                        />
                        
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel>
                                Colour
                            </InputLabel>
                            <Select
                                native
                                label="Colour Theme"
                                inputRef={register}
                                name="colour"
                                onChange={handleColourThemeChange}
                            >
                                <option aria-label="None" value="" />
                                <option value="lightblue">Light Blue</option>
                                <option value="lightgreen">Light Green</option>
                                <option value="lightcyan">Light Cyan</option>
                                <option value="lightcoral">Light Coral</option>
                                <option value="lightgrey">Light Grey</option>
                                <option value="lightsalmon">Light Salmon</option>
                             </Select>
                        </FormControl>

                    </form>


                </Paper>
            </Grid>
        </React.Fragment>
    )
}

export default UIForm;