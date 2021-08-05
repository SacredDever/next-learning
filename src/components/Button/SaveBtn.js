
// Default Button
import { Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import React from 'react';
import { withStyles } from "@material-ui/core/styles";



const styles = () => ({
    root: {
        // margin: 50,
        padding: 10,
        width: 180,
        // fontSize: 20,
        // fontWeight: "bold",
        marginBottom: 15,
        marginLeft: 10,
        fontSize: 11,
        width: "10%",
        height: 30,
        textAlign: "center",
        textTransform: 'none',
        background: "#4BCB9F",
        float: "right",
        textTransform: 'none',
        color: "#fff",
        '&:hover': {
            background: `#4BCB9F`,
        },
    },
});

const SaveBtn = (props) => {


    // const classes = useStyles();
    return (
        <div>
            <Button variant="contained" color="primary"  {...props} />
        </div>
    )
}

export default withStyles(styles)(SaveBtn);