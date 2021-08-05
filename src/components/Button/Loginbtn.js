// Default Button
import { Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import React from 'react';
import { withStyles } from "@material-ui/core/styles";

// - Gradient colors to test
const rightColor = 'blue';
const leftColor = '#FE571A';

// - boder color
const borderColor = '#5EC0DC';

const styles = () => ({
    root: {
        // margin: 50,
        padding: 10,
        width: 180,
        fontSize: 20,
        fontWeight: "bold",
    },
});

const Loginbtn = (props) => {


    // const classes = useStyles();
    return (
        <div>
            <Button variant="contained" color="primary"  {...props} />
        </div>
    )
}

export default withStyles(styles)(Loginbtn);