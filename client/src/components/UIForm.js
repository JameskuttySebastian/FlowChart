//hooks
import React, { useState, useContext, useEffect } from "react";
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
    const { register, handleSubmit, errors, getValues, reset, setValue } = useForm();

    const [inputNamesList, setInputNamesList] = useState([]);
    const [outputNamesList, setOutputNamesList] = useState([]);

    //for creating the object
    let operator = {
        top: 20,
        left: 20
    }
    let headerProperties = {};

    let noOfInput = 0;
    let noOfOutput = 0;


    const onSubmit = (values, e) => {

        //first need to save the data

        setOperator(values);
        reset();
        setValue([
            { colour: "" },
            { input: 0 },
            { output: 0 },
        ])
        setInputNamesList([]);
        setOutputNamesList([]);
        //   setOperator("");
    }

    const handleChange = () => {
        headerProperties = {
            properties: {
                title: getValues("title"),
                body: getValues("description"),
                class: getValues("colour"),
            }
        }
        // operator = { ...operator, ...headerProperties }
        // console.log(JSON.stringify(operator));
    }

    const handleIOChange = () => {
        // console.log(noOfInput, noOfOutput);
        for (let i = 0; i < noOfInput; i++) {
            console.log({["input_" + (i+1)] : getValues("input_" + (i+1) )})
        }
    
        for (let j = 0; j < noOfOutput; j++) {
            console.log({["output_" + (j+1)] : getValues("output_" + (j+1) )})
        }
    }

    const handleNoOfInputOrOutputChange = async (event) => {
        event.preventDefault();
        event.target.name === "input" ? noOfInput = parseInt(event.target.value) : noOfOutput = parseInt(event.target.value);        
        console.log(noOfInput, noOfOutput);
        var noOfElements = parseInt(event.target.value);
        var jSX = [];
        for (var i = 0; i < noOfElements; i++) {
            jSX.push(getInputOutputElement(event.target.name, i + 1));
        }
        event.target.name === "input" ?  setInputNamesList(jSX) :  setOutputNamesList(jSX);      
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
                onChange={handleIOChange}
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
                            onChange={handleChange}
                        />

                        <TextField
                            id="description"
                            variant="outlined"
                            label="Description"
                            name="description"
                            inputRef={register}
                            onChange={handleChange}
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
                                onChange={handleChange}
                            >
                                <option aria-label="None" value="" />
                                <option value="lightblue">Light Blue</option>
                                <option value="lightgreen">Light Green</option>
                                <option value="lightcyan">Light Cyan</option>
                                <option value="lightcoral">Light Coral</option>
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
                                name="input"
                                onChange={handleNoOfInputOrOutputChange}
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
                                name="output"
                                onChange={handleNoOfInputOrOutputChange}
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