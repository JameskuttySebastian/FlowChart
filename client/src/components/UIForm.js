//hooks
import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";

//form controls and styling
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';

//context Hook
import CreateOperatorContext from "../utils/context/CreateOperatorContext";

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
            marginTop: 5,
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
    //Hooks
    const classes = useStyles();
    const { setOperator } = useContext(CreateOperatorContext);
    const { register, handleSubmit, errors, reset } = useForm();
    const [inputNamesList, setInputNamesList] = useState([]);
    const [outputNamesList, setOutputNamesList] = useState([]);


    const onSubmit = (data) => {
        setOperator(data);
        // console.log(data);
    }

    const handleNoOfInputChange = (event) => {
        event.preventDefault();
        let noOfInput = parseInt(event.target.value);
        var inputJSX = [];
        for (var i = 0; i < noOfInput; i++) {
            inputJSX.push(getInputOutputElement("input", i + 1));
        }
        console.log(inputJSX);
        setInputNamesList(inputJSX);
    }

    const handleNoOfOutputChange = (event) => {
        event.preventDefault();
        let noOfOutput = parseInt(event.target.value);
        var outputJSX = [];
        for (var i = 0; i < noOfOutput; i++) {
            outputJSX.push(getInputOutputElement("output", i + 1));
        }
        console.log(outputJSX);
        setOutputNamesList(outputJSX);
    }

    const getInputOutputElement = (type, slNo) => {
        return (
            <TextField
                key={slNo}
                id={type + "_" + slNo}
                variant="outlined"
                label={type + "_" + slNo + " Node Name"}
                type="text"
                name={type + "_" + slNo}
                defaultValue={type + "_" + slNo}
                inputRef={register({ required: true, minLength: 2, maxLength: 12 })}
            />
        )
    }

    return (
        <React.Fragment>
            <Grid item md={8} sm={12} xs={12}>
                <Paper className={classes.paper}>
                    <h2>Create Operator</h2>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className={classes.root}
                        style={{ margin: "auto", textAlign: "justify", paddingTop: 10 }}
                    >
                        <TextField
                            id="title"
                            variant="outlined"
                            label="Operator Title"
                            type="text"
                            name="title"
                            inputRef={register({ required: true, minLength: 2, maxLength: 12 })}
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
                                Colour Theme
                            </InputLabel>
                            <Select
                                native
                                label="Colour Theme"
                                name="colour"
                                inputRef={register({ required: true })}
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

                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel>
                                No of Inputs
                            </InputLabel>
                            <Select
                                native
                                label="Number of Inputs"
                                inputRef={register}
                                name="inputs"
                                onChange={handleNoOfInputChange}
                            >
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </Select>
                        </FormControl>

                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel>
                                No of Outputs
                            </InputLabel>
                            <Select
                                native
                                label="Number of Outputs"
                                inputRef={register}
                                name="outputs"
                                onChange={handleNoOfOutputChange}
                            >
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </Select>
                        </FormControl>

                        <div
                            className={classes.root}
                            style={{ margin: "auto", textAlign: "left", paddingTop: 10 }}
                            id="inputNamesList">
                            {inputNamesList}
                        </div>
                        <div
                            className={classes.root}
                            style={{ margin: "auto", textAlign: "left", paddingTop: 10 }}
                            id="outputNamesList">
                            {outputNamesList}
                        </div>

                        {errors.title && (
                            <h6 style={{ color: "red" }}>
                                Title value must be between 2 and 12 characters!...
                            </h6>
                        )}
                        {(errors.input_1 || errors.input_2 || errors.input_3 || errors.input_4 || errors.input_5 || errors.input_6) && (
                            <h6 style={{ color: "red" }}>
                                Input value must be between 2 and 12 characters!...
                            </h6>
                        )}
                        {(errors.output_1 || errors.output_2 || errors.output_3 || errors.output_4 || errors.output_5 || errors.output_6) && (
                            <h6 style={{ color: "red" }}>
                                Output value must be between 2 and 12 characters!...
                            </h6>
                        )}
                       

                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            name="submit"
                            style={{ marginTop: 50 }}
                        >
                            SUBMIT
                        </Button>
                    </form>
                </Paper>
            </Grid>
        </React.Fragment>
    )
}

export default UIForm;