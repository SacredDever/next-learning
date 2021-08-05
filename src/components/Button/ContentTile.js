
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
        marginLeft: 10,
        fontSize: 11,
        textAlign: "left",
        marginTop: 5,
        background: "#424242",
        textTransform: 'none',
        color: "#15C9EA",
        '&:hover': {
            background: `#424242`,
        },
    },
});

const ContentTile = (props) => {


    // const classes = useStyles();
    return (
        <div>
            <Button variant="contained" color="primary"  {...props} />
        </div>
    )
}

export default withStyles(styles)(ContentTile);