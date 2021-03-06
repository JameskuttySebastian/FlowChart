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
        height: 620,
    },
}));

function UIForm() {
    //Hooks
    const classes = useStyles();
    const { setOperator } = useContext(CreateOperatorContext);
    const { register, handleSubmit, errors, getValues, reset, setValue } = useForm();

    const [header, setHeader] = useState({ title: "", body: "", class: "lightgray" });
    const [inputObjList, setInputObjList] = useState([]);
    const [outputObjList, setOutputObjList] = useState([]);

    const [inputNamesList, setInputNamesList] = useState([]);
    const [outputNamesList, setOutputNamesList] = useState([]);



    useEffect(() => {
        var inputObjs = getInputObjects(inputObjList);
        var outputObjs = getInputObjects(outputObjList);
        var properties = {...header, inputObjs, outputObjs};
        var data = {
            operators: {
                operator1: {
                    top: 20,
                    left: 20,
                    properties: properties,
                },
            },
        }
        setOperator(data);

    }, [header, inputObjList, outputObjList])

    //getting input and output object list
    const getInputObjects = (iOObjList) => {
        let objList = {}
        // console.log(vars);
        for(var i=0; i<iOObjList.length; i++){
            var curObj = iOObjList[i];            
            var key = Object.keys(curObj)[0];
            objList = {...objList, [key] : { label: curObj[key] , multipleLinks: true,}} 
        }
        return objList;
    }

    const onSubmit = (values) => {
        setOperator(values);
    }

    const onSave = (values) => {
        onSubmit();
        reset();
        setValue([
            { colour: "" },
            { input: 0 },
            { output: 0 },
        ])
        setHeader({});
        setInputObjList([]);
        setOutputObjList([]);
        setInputNamesList([]);
        setOutputNamesList([]);
        setOperator({});
        // window.location.reload(false);
    }

    //Track the header change
    const handleChange = (e) => {
        var newObj = { [e.target.name]: e.target.value };
        setHeader({ ...header, ...newObj })
    }

    const getInputOutputObjList = (type, divID) => {
        let nodeObjectList = [];
        var nameCount = document.getElementById(divID).childElementCount;
        for (var i = 0; i < nameCount; i++) {
            var nodeObject = { [type + "_" + (i + 1)]: getValues(type + "_" + (i + 1)) };
            nodeObjectList.push(nodeObject);
        }
        type === "input" ? setInputObjList(nodeObjectList) : setOutputObjList(nodeObjectList);
    }


    const handleIOChange = (e) => {
        let type = e.target.id;
        type === "input" ? getInputOutputObjList(type, "inputNameList") : getInputOutputObjList(type, "outputNameList");
    }

    //Create inputs and outputs dynamically
    const handleNoOfInputOrOutputChange = async (event) => {
        event.preventDefault();
        let type = event.target.name;
        let noOfElements = parseInt(event.target.value);
        let jSX = [];
        for (var i = 0; i < noOfElements; i++) {
            jSX.push(getInputOutputElement(type, (i + 1)));
        }
        // Assign to hook based on type          
        // assigning JSX string
        type === "input" ? setInputNamesList(jSX) : setOutputNamesList(jSX);

        // assigning initial object value    
        type === "input" ? getInputOutputObjList(type, "inputNameList") : getInputOutputObjList(type, "outputNameList");

    }

    const getInputOutputElement = (type, slNo) => {
        return (
            <TextField
                key={slNo}
                id={type}
                variant="outlined"
                label={type + "_" + slNo + " Node Name"}
                type="text"
                name={type + "_" + slNo}
                placeholder={type + "_" + slNo}
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
                        // onSubmit={handleSubmit(onSubmit)}
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
                            id="body"
                            variant="outlined"
                            label="Description"
                            name="body"
                            inputRef={register}
                            onChange={handleChange}
                        />

                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel>
                                Colour Theme
                            </InputLabel>
                            <Select
                                id="class"
                                native
                                label="Colour Theme"
                                name="class"
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
                                id="input"
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
                                id="output"
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
                            id="inputNameList">
                            {inputNamesList}
                        </div>
                        <div
                            className={classes.root}
                            style={{ margin: "auto", textAlign: "left", paddingTop: 10 }}
                            id="outputNameList">
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


                        {/* <Button
                            type="button"
                            variant="contained"
                            color="default"
                            name="button"
                            style={{ marginTop: 10 }}
                            onClick={handleSubmit(onSubmit)}
                        >
                            APPLY
                        </Button> */}
                        <Button
                            type="button"
                            variant="contained"
                            color="primary"
                            name="button"
                            style={{ marginTop: 10 }}
                            onClick={handleSubmit(onSave)}
                        >
                            SAVE
                        </Button>
                    </form>

                </Paper>
            </Grid>
        </React.Fragment>
    )
}

export default UIForm;