import React, {  useContext, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import CreateOperatorContext from "../utils/context/CreateOperatorContext";
import * as $ from 'jquery';
import 'jquery-ui';
// import "jquery.flowchart";

// import Popper from 'popper.js';
import '../assets/js/jquery.flowchart'


const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

var data = {
    operators: {
      operator1: {
        top: 20,
        left: 20,
        properties: {
          title: 'Operator 1',
          body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibu',
          class: 'newClass',
          inputs: {
            input_1: {
              label: 'Input 1',
              multipleLinks: true,
            },
            input_2: {
              label: 'Input 2',
              multipleLinks: true,
            },
            input_3: {
              label: 'Input 3',
              multipleLinks: true,
            }
          },
          outputs: {
            output_1: {
              label: 'Output 1',
              multipleLinks: true,
            },
            output_2: {
              label: 'Output 2',
              multipleLinks: true,
            }
          }
        }
      },
  
      operator2: {
        top: 80,
        left: 300,
        properties: {
          title: 'Operator 2',
          inputs: {
            input_1: {
              label: 'Input 1',
            },
            input_2: {
              label: 'Input 2',
            },
          },
          outputs: {
            output_1: {
              label: 'Output 1',
            }
          }
        }
      },
    },
    links: {
      link_1: {
        fromOperator: 'operator1',
        fromConnector: 'output_1',
        toOperator: 'operator2',
        toConnector: 'input_1',
      },
      link_2: {
        fromOperator: 'operator1',
        fromConnector: 'output_1',
        toOperator: 'operator2',
        toConnector: 'input_2',
      },
    }
  
  };

function Operator() {
    const { operator } = useContext(CreateOperatorContext);
    const classes = useStyles();

    useEffect(() => {        
      
        var $flowchart = $('#flowchartworkspace');

        $flowchart.flowchart({
            data: data
        });
    }, [])

    return (
        <React.Fragment>
            <Grid item md={4} sm={12} xs={12}>
                <Paper className={classes.paper}>
                    <h2>View Operator</h2>
                    <div>
                        <div id="flowchartworkspace">Test</div>
                    </div>

                </Paper>
            </Grid>
        </React.Fragment>
    )
}

export default Operator;