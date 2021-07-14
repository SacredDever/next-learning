import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    // menuButton: {
    //     marginRight: theme.spacing(20),
    // },
    appName: {
        marginLeft: 170
    }
}));

export default function NavBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar variant="dense">

                    <Typography className={classes.appName} variant="h6" color="inherit">
                        TODO APP
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
