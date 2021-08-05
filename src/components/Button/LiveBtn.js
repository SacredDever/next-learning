
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
        width: "5%",
        height: 30,
        textAlign: "center",
        textTransform: 'none',
        background: "#34646E",
        float: "left",
        textTransform: 'none',
        color: "#199DFE",
        '&:hover': {
            background: `#34646E`,
        },
    },
});

const LiveBtn = (props) => {


    // const classes = useStyles();
    return (
        <div>
            <Button variant="contained" color="primary"  {...props} />
        </div>
    )
}

export default withStyles(styles)(LiveBtn);